import {useState} from "react";

const Card = ({title}) => {
    return (
        <div className="card">
            <h2>{title} </h2>
            <button onClick={()=> setHasLiked(true)}>like</button>
        </div>
    );
};

const App = () => {
    const [hasLiked, setHasLiked] = useState(false)

    return (
        <div className="card-container">

            <Card title="Infinity" rating={9.5} isCool={true} actors={[{name:'Downey JR, Scarlet, Chris Evans'}]}/>
            <Card title="Endgame" rating={8.7} isCool={false} actors={[{name:'Downey JR, Scarlet, Chris Evans, mark ruffalo'}]}/>
            <Card title="Deadpool" rating={9.8} isCool={true} actors={[{name:'ryan reynolds, dave bautista'}]}/>
        </div>
    );
};

export default App;
