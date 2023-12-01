import React, {useContext} from 'react';
import { IconContext } from 'react-icons/lib';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import logo from '../../assets/images/logo.png'
import './sidebar.css';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate()
    const {dispatch} = useContext(AuthContext);

    const logout = () => {
        dispatch({type: 'LOGOUT'});
        navigate('/');
    };

    return (
        <div className='sidebar'>
            <IconContext.Provider value={{ color: '#000' }}>
                {/* <Nav>
                    <NavIcon to='#'>
                        <FaIcons.FaBars onClick={showSidebar} />
                    </NavIcon>
                </Nav> */}
                <nav className='sidebar_nav'>
                    <div className='sidebar_wrap'>
                        {/* <NavIcon to='#'>
                            <AiIcons.AiOutlineClose onClick={showSidebar} />
                        </NavIcon> */}

                        <div className="logoDashboard">
                            <img src={logo} alt="" />
                        </div>

                        <div className='display'>
                            Main Menu
                        </div>
                        
                        {SidebarData.map((item, index) => {
                            return <SubMenu item={item} key={index}/>
                        })}

                        <button className='logout_dashboard' onClick={logout}>
                            Logout
                        </button>
                    </div>
                </nav>
            </IconContext.Provider>

        </div>
    )
}

export default Sidebar
