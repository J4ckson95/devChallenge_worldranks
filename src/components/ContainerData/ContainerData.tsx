import React,{useState, useEffect} from "react";
import { Country } from "../../vite-env";
import Data from "../Data/Data";
const ContainerData: React.FC = () =>{
    const [data, setData] = useState<Country[]>([])
    useEffect(()=>{
        const getData = async() =>{
            fetch("https://restcountries.com/v3.1/all")
                .then((res)=> res.json())
                .then((res)=> setData(res))
        }
        getData()
    },[])
    return(
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
            <tbody>
                {data && data.map((element,index)=> <Data key={index} data={element}></Data>)}
            </tbody>
        </table>
    )
}
export default ContainerData