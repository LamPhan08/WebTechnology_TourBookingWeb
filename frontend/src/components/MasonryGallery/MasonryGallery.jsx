import React from 'react'
import { useState } from "react";

import galleryImages from "./galleryImages";
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import './masonryGallery.css'

const MasonryGallery = () => {
    const [viewImage, setViewImage] = useState(false)

    const [file, setFile] = useState()

    const handleViewImage = (item) => {
        setFile(item)
        setViewImage(!viewImage)
    }

  return (
    <div>
            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 770: 3, 990: 4 }}>
                <Masonry gutter="1rem">
                    {
                        galleryImages.map((item, index) => (
                            <img className="masonry__img"
                                src={item}
                                key={index}
                                alt=""
                                onClick={() => handleViewImage(item)} />
                        ))
                    }
                </Masonry>
            </ResponsiveMasonry>

            {viewImage && <div className='popupImage'>
                <span onClick={handleViewImage}>&times;</span>

                <img src={file} alt="" />
            </div>}
        </div>
  )
}

export default MasonryGallery
