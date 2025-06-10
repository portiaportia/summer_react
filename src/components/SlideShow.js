import "../css/slideshow.css";
import {useState} from "react";

const SlideShow = () => {
    const[imageIndex, setImageIndex] = useState(0);

    const importAll = (resource) => {
        return resource.keys().map(resource);
    };

    const images = importAll(
        require.context("../images/slideshow", false, /\.(png|jpe?g|svg$|webp)/)
    );

    const showNextImage = (e) => {
        e.preventDefault();
        
        //reached the end of the array of images
        /*if(imageIndex == images.length -1) {
            setImageIndex(0);
        } else {
            setImageIndex(imageIndex + 1);
        }*/

        setImageIndex(imageIndex == images.length -1 ? 0 : imageIndex + 1);
    }

    const showPrevImage = (e) => {
        e.preventDefault();
        setImageIndex(imageIndex == 0 ? images.length - 1 : imageIndex - 1);
    }

    return (
        <section id="slideshow">
            <img src={images[imageIndex]} />
            <p><a className="arrow right" href="#" onClick = {showNextImage}>&gt;</a></p>
            <p><a className="arrow left" href="#" onClick={showPrevImage}>&lt;</a></p>
        </section>
    );
}

export default SlideShow;