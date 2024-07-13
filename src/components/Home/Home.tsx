import React from "react";
import search from "../../assets/Search.svg"
import ContainerData from "../ContainerData/ContainerData";
const Home: React.FC = () =>{
    return(
        <main>
            <div>
                <h3>Found 234 countries</h3>
                <div>
                    <input></input>
                    <img src={search}></img>
                </div>
            </div>
            <div>
                <div>
                    <h4>Sort by</h4>
                    <select>
                        <option value="population">Population</option>
                        <option>PENDIENTE</option>
                    </select>
                </div>
                <div>
                    <h4>Region</h4>
                    <div>
                        <button>Americas</button>
                        <button>Antartic</button>
                        <button>Africa</button>
                        <button>Asia</button>
                        <button>Europa</button>
                        <button>Oceania</button>
                    </div>
                </div>
                <div>
                    <h4>Status</h4>
                    <div>
                        <label><input type="checkbox"></input>Member of the United Nations</label>
                        <label><input type="checkbox"></input>Independent</label>
                    </div>
                </div>
            </div>
            <ContainerData></ContainerData>
        </main>
    )
}
export default Home