import {useEffect, useState} from "react";

const Card = ({title}) => {
    const [count, setCount] = useState(0)
    const [hasLiked, setHasLiked] = useState(false)

    useEffect(()=>{
        console.log(`${title} has been liked: ${hasLiked}`)
    }, [hasLiked]);



    return (
        <div className="card" onClick={()=>setCount(count+1)}>
            <h2>{title}<br/>{count || null} </h2>
            <button onClick={()=> setHasLiked(!hasLiked)}>
                {hasLiked ? '❤️' : '🤍'}
            </button>
        </div>
    );
};

const App = () => {

    return (
        <div className="card-container">

            <Card title="Infinity" rating={9.5} isCool={true} actors={[{name:'Downey JR, Scarlet, Chris Evans'}]}/>
            <Card title="Endgame" rating={8.7} isCool={false} actors={[{name:'Downey JR, Scarlet, Chris Evans, mark ruffalo'}]}/>
            <Card title="Deadpool" rating={9.8} isCool={true} actors={[{name:'ryan reynolds, dave bautista'}]}/>
        </div>
    );
};

export default App;
