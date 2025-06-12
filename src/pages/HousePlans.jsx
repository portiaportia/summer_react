import '../css/houseplans.css';
import HousePlan from "../components/HousePlan";
import {useState, useEffect} from "react";
import axios from "axios";
import AddHousePlan from '../components/AddHousePlan';

const HousePlans = () => {
    const [houses, setHouses] = useState([]);

    //after teh page loads do our async retrieval of the houses
    useEffect(()=>{
        const loadHouses = async() => {
            const response = await axios.get("http://localhost:3001/api/houses");
            setHouses(response.data);
        };

        loadHouses();
    },[]);

    const updateHousePlans = (housePlan) => {
        setHouses((houses)=>[...houses, housePlan]);
    };


    return (
        <>
            <AddHousePlan updateHousePlans={updateHousePlans} />
            <div id="house-plans" className="columns">
                {houses.map((house)=>(
                    <HousePlan 
                        key={house._id}
                        _id={house._id}
                        name={house.name}
                        size={house.size}
                        bedrooms={house.bedrooms}
                        bathrooms = {house.bathrooms}
                        main_image = {house.main_image}/>
                ))}
            </div>
        </>
    );
};

export default HousePlans;