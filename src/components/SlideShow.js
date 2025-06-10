import "../css/slideshow.css";
import {useState} from "react";

const SlideShow = () => {

    const importAll = (resource) => {
        return resource.keys().map(resource);
    };

    const images = importAll(
        require.context("../images/slideshow", false, /\.(png|jpe?g|svg$|webp)/)
    );

    return (
        <section id="slideshow">
            <img src={images[0]} />
            <p><a className="arrow right" href="#">&gt;</a></p>
            <p><a className="arrow left" href="#">&lt;</a></p>
        </section>
    );
}

export default SlideShow;