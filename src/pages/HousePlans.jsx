import '../css/houseplans.css';
import HousePlan from "../components/HousePlan";

const HousePlans = () => {
    return (
        <>
            <div id="house-plans" className="columns">
                <HousePlan />
                <HousePlan />
                <HousePlan />
            </div>
        </>
    );
};

export default HousePlans;