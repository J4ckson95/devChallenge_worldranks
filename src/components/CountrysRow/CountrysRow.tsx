import React from "react";
import { DataProps } from "../../vite-env";
const CountrysRow: React.FC<DataProps> = ({data}) =>{
    return(
        <tr>
            <td>{data.flag}</td>
            <td>{data.name.official}</td>
            <td>{data.population}</td>
            <td>{data.area}</td>
            <td>{data.region}</td>
        </tr>
    )
}
export default CountrysRow