# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# super-robot

# Exercise before starting developing my first react project

```
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
```
