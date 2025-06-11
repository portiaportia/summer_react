import '../css/houseplans.css';
import HousePlan from "../components/HousePlan";
import {useState, useEffect} from "react";
import axios from "axios";

const HousePlans = () => {
    const [houses, setHouses] = useState([]);

    //after teh page loads do our async retrieval of the houses
    useEffect(()=>{
        const loadHouses = async() => {
            const response = await axios.get("https://portiaportia.github.io/json/house-plans.json");
        };

        loadHouses();
    },[]);

    return (
        <>
            <div id="house-plans" className="columns">
                {houses.map((house)=>(
                    <HousePlan 
                        kye="1"/>
                ))}
            </div>
        </>
    );
};

export default HousePlans;