'use client';
import { useState,useEffect } from "react";
import axios from "axios";
import ListElement from "./listElement";
import styles from "../../../styles/locations/List.module.scss";


const List = () => {

    const [locations, setLocations] = useState([]);
    useEffect(()=>{
        axios.get("https://rickandmortyapi.com/api/location")
        .then((response)=>{
            console.log("data:",response.data);
            setLocations(response.data.results);
            console.log("locations:",locations);

        })
    },[]);

    return (
        <div className={styles.listContainerDiv} >
            {
                locations.map((location:any,index:number)=>{
                    return (
                        <ListElement key={index} name={location.name} type={location.type}
                        dimension={location.dimension} residents={location.residents}  />
                    )
                })
           }
        </div>
    )
}
export default List;