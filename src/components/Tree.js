import "../css/tree.css";


const Tree = (props) => {
    return (
        <section className="tree">
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <img src={props.image} />
            <p className="prune-button-container"><button>Prue Tree</button></p>
        </section>
    );
}

export default Tree;