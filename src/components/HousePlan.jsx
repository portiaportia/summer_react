const HousePlan = (props) => {
    return (
        <div className="house-plan columns">
            <div className="house-image">
                <img src={"http://portiaportia.github.io/json/images/house-plans/" + props.main_image} />
            </div>
            <div className="house-description">
                <h1>{props.name}</h1>
                <p>Size: {props.size}</p>
                <p>Bedrooms: {props.bedrooms}</p>
                <p>Bathrooms: {props.bathrooms}</p>
            </div>
        </div>
    );
}

export default HousePlan;