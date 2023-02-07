import { useEffect, useState } from "react";
import ListingCard from "../ListingCard";


export default function Listing() {
    const [wines, setWines] = useState();
    const [type, setType] = useState('whites');
    
    useEffect( () => { 
        fetch(`https://api.sampleapis.com/wines/${type}`)
            .then( res => res.json() )
            .then( setWines )
            .catch(alert)
    } , [type])

    //console.log({wines}) prints out entire object

    return(
        <>
        <div id="topheader">
                <header>
                    <h2>Le Chateau</h2>
                </header>

                <nav>
                    <button onClick={ () => setType('whites') }>White</button>
                    <button onClick={ () => setType('reds') }>Reds</button>
                </nav>
        </div>

        <div>
            {!wines
            ? <h2>Welcome to the site, choose above.</h2>
            : <section>
                {wines.map( wine => (
                    <ListingCard key={wine.id} wine={wine}/>
                ))}
            </section> }
        </div>
        </>
    )
}