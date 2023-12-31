import User from '../models/User.js';
import jwt from 'jsonwebtoken';
// leave the line below this in comment
// import bcrypt from 'bcryptjs';

// user registration
export const register = async (req, res) => {
    try {

        /* hashing password (drawback: cannot see password in db => leave this snippet in comment)
            const salt = bcrypt.genSaltSync(10)
            const hash = bcrypt.hashSync(req.body.password, salt);
            
            const newUser = new User({
                username: req.body.username,
                email: req.body.email,
                password: hash,
                photo: req.body.photo
            });
        */
        
            const newUser = new User({
                        username: req.body.username,
                        fullName: '',
                        email: req.body.email,
                        password: req.body.password,
                        phoneNumber: '',
                        address: '',
                        dateOfBirth: '',
                        photo: req.body.photo,
                        role: 'user'
                    });

        await newUser.save();

        res.status(200).json({
            success: true,
            message: "Created successfully!"
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to create! Try again!" + err.message
        });
    }
};

// user login
export const login = async (req, res) => {

    const email = req.body.email;

    try {
        
        const user = await User.findOne({email});

        // if user doesn't exist
        if(!user)
        {
            return res.status(404)
            .json({
                success: false,
                message: 'User not found'
            });
        }

        /* leave this snippet in comment:
        const checkCorrectPassword = bcrypt.compare(req.body.password, user.password)
        // if the password is incorrect
        if(!checkCorrectPassword) {
            return res.status(401)
            .json({
                success: false,
                message: 'Incorrect email or password'
            }); 
        }
        */

        // if the password is incorrect
        if(req.body.password !== user.password)
        {
            return res.status(401)
            .json({
                success: false,
                message: 'Incorrect email or password'
            });
        }

        const {password, role, ...rest} = user._doc;

        // create jwt token
        const token = jwt.sign
        (
            {
                id: user._id,
                role: user.role
            },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn: "15d"
            }
        );

        // set token in the browser cookies and send the response to the client
        res.cookie('accessToken', token, {
            httpOnly: true,
            expires: token.expiresIn
        }).status(200).json({
            // token,
            success: true,
            token,
            message: "successfully logged in",
            data: {...rest},
            role
        });

    } catch (err) {
        res.status(500)
            .json({
                success: false,
                message: 'Login failed!'
            });
    }
};