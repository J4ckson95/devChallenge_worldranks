import React from "react";
import search from "../../assets/Search.svg"
const Home: React.FC = () =>{
    return(
        <div>
            <div>
                <h3>Found 234 countries</h3>
                <div>
                    <input></input>
                    <img src={search}></img>
                </div>
            </div>
            <aside>
                
            </aside>
        </div>
    )
}
export default Home