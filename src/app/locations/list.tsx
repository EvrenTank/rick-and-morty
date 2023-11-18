'use client';
import { useState,useEffect } from "react";
import axios from "axios";
import ListElement from "./listElement";
import Pagination from '@mui/material/Pagination';
import styles from "../../../styles/locations/List.module.scss";


const List = () => {

    const [locations, setLocations] = useState([]);
    const [page, setPage] = useState(1);

    const handleChange = (event:React.ChangeEvent<unknown>|null,newPage:number) => {
        setPage(newPage);
        console.log("page"+page)
    }

    useEffect(()=>{
        axios.get("https://rickandmortyapi.com/api/location")
        .then((response)=>{
            console.log("data:",response.data);
            setLocations(response.data.results);
            console.log("locations:",locations);

        })
    },[]);

    return (
        <div className={styles.mainDiv}>
        <div className={styles.listContainerDiv} >
            {
                locations.slice(page*6-6,page*6).map((location:any,index:number)=>{
                    return (
                        <ListElement key={index} name={location.name} type={location.type}
                        dimension={location.dimension} residents={location.residents}  />
                    )
                })
           }
           
        </div>
        <div className={styles.paginationDiv} >
        <Pagination count={Math.ceil(locations.length/6)} page={page} onChange={handleChange} color="primary"/>
        </div>
        </div>
    )
}
export default List;