import React,{useState, useEffect} from "react";
import search from "../../assets/Search.svg"
import { Country } from "../../vite-env";
const Home: React.FC = () =>{
    const [data,setData] = useState<Country[]>([])
    const [searchTerm,setSearchTerm] = useState("")
    const [sortBy,setSortBy] = useState("")
    useEffect(()=>{
        const getData = async()=>{
            fetch("https://restcountries.com/v3.1/all")
                .then((res)=> res.json())
                .then((res)=> setData(res))
        }
        getData()
    },[])
    useEffect(()=>{

    },[searchTerm])
    return(
        <main>
            <h3>{data && `Found ${data.length} Countrys`}</h3>
            <div>
                <input type="text" placeholder="Search by Name, Region, Subregion" value={searchTerm} onChange={(e)=>{setSearchTerm(e.target.value)}}></input>
                <img src={search}></img>
            </div>
            <div>
                <div>
                    <div>
                        <h4>Sort by</h4>
                        <select onChange={(e)=> setSortBy(e.target.value)}>
                            <option value="alfabetico">A-Z</option>
                            <option value="population">Population</option>
                            <option value="area">Área</option>
                        </select>
                    </div>
                    <div>
                        <h4>Status</h4>
                        <div>
                            <label><input type="checkbox"></input>Member of the United Nations</label>
                            <label><input type="checkbox"></input>Independent</label>
                        </div>
                    </div>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Flag</th>
                            <th>Name</th>
                            <th>Population</th>
                            <th>Area(km<span>s</span>)</th>
                            <th>Region</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </main>
    )
}
export default Home