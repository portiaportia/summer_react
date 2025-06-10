import "../css/tree.css";
import {useState} from "react"


const Tree = (props) => {
    //variable is pruned it is initially set to false
    //You can only change this state variable by calling pruneTree
    const [pruned, pruneTree] = useState(false);

    const doTreeJob = () => {
        console.log("treeing")
        pruneTree(true);
    }

    return (
        <section className="tree">
            <h1>{props.name}</h1>
            {pruned?
                <p>Pruned</p>
            :
                <p>Not Pruned</p>    
            }
            <p>{props.description}</p>
            <img src={props.image} />
            <p className="prune-button-container"><button className={pruned?"disabled": ""} onClick={doTreeJob}>Prue Tree</button></p>
        </section>
    );
}

export default Tree;