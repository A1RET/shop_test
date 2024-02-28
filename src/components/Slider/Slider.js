import { useState, useEffect } from "react";

import './slider.scss'

const Slider = ({activeColorId, getImages, setActiveColor}) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentImage, setCurrentImage] = useState(null);
    const [images, setImages] = useState([]);

    useEffect(() => {
        setImages(getImages());
    }, [getImages])

    useEffect(() => {
        if (images.length > 0) {
            let index = currentSlide;
            if (activeColorId && (!currentImage || activeColorId !== currentImage.colorId)){
                index = images.findIndex(image => image.colorId === activeColorId && image.isMain);
            }

            setCurrentSlide(Math.max(0, index));
        }
    }, [activeColorId])

    useEffect(() => {
        setCurrentImage(images[currentSlide]);
    }, [currentSlide, images])

    useEffect(() => {
        if (currentImage) {
            const imageColorId = currentImage.colorId;
            setActiveColor(imageColorId);
        }        
    }, [currentImage])

    const changeSlide = (i) => {
        let nextSlide = currentSlide + i;

        if (nextSlide > images.length - 1 || nextSlide < 0) {
            return;
        }

        setCurrentSlide(nextSlide);
    }

    return (
        <div className={`slider ${images.length > 0 ? '' : 'loading'}`}>
            {
                currentImage && 
                <div className="image-container">
                    {currentSlide > 0 && 
                        <span
                            className="arrow prev"
                            onClick={() => changeSlide(-1)}
                        >
                            &larr;
                        </span>
                    }
                    <img src={currentImage['url']} alt={currentImage['desc']} />
                    {currentSlide < images.length - 1 &&
                        <span
                            className="arrow next"
                            onClick={() => changeSlide(1)}
                        >
                            &rarr;
                        </span>
                    }
                </div>
            }
        </div>
    )
}

export default Slider