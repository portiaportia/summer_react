const HousePlan = (props) => {
    return (
        <div className="house-plan columns">
            <div className="house-image">
                <img src={"http://localhost:3001/images/" + props.main_image} />
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