'use client'
import {useState,useEffect} from "react";
import axios from "axios";
import styles from "../../../styles/characters/CharactersContainer.module.scss";
import CharacterComponent from "./characterComponent";
import Pagination from '@mui/material/Pagination';
import CharacterStatusFilter from "./characterStatusFilter";
import CharacterContainerMobile from "./charactersContainerMobile";
import Link from "next/link";
import store from "../../../reduxStore/store";
import { Provider } from "react-redux";
const CharactersContainer = ({location}:any) => {
    const [filter,setFilter] = useState("null");
    const [translation, setTranslation] = useState(0); 
    const [characternumber,setCharacternumber] = useState(1);

    const [characterDetails,setCharacterDetails] = useState({
        image:"",
        name:"",
        status:"",
        species:"",
    });
    const [characters,setCharacters] = useState([]);
    const [page,setPage] = useState(1);
    const handleChange = (event:React.ChangeEvent<unknown>|null,newPage:number) => {
        setPage(newPage);
        console.log("page"+page);
    }
    useEffect(() => {
        const fetchData = async () => {
            const characterList: any = [];
    
            try {
                const response = await axios.get("https://rickandmortyapi.com/api/location");
    
                const filteredCharactersUrl = response.data.results
                    .filter((loc: any) => loc.name === decodeURIComponent(location))[0]
                    .residents;
    
                // Use Promise.all to wait for all requests to complete
                await Promise.all(
                    filteredCharactersUrl.map(async (characterurl: any) => {
                        const characterResponse = await axios.get(characterurl);
                        
                        if (filter !== "null") {
                            if (filter === characterResponse.data.status) {
                                characterList.push(characterResponse.data);
                            }
                        } else {
                            characterList.push(characterResponse.data);
                        }
                    })
                );
    
                setCharacters(characterList);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
    
        fetchData();
    }, [filter]);
    return (
        <Provider store={store}>
<div className={styles.mainDiv}>
    <div className={styles.filterDiv}>
        <div className={styles.titlesDiv}>
            <h2>Filter by status</h2>
            <Link href="/my-favorites"><h2 className={styles.favorite}>My Favorites</h2></Link>
        </div>
        <div className={styles.filterOptions}>
            <CharacterStatusFilter status={"Alive"} filter={filter} setFilter={setFilter} setPage={setPage} setTranslation={setTranslation} setCharacternumber={setCharacternumber} />
            <CharacterStatusFilter status={"Dead"} filter={filter} setFilter={setFilter} setPage={setPage} setTranslation={setTranslation} setCharacternumber={setCharacternumber}/>
            <CharacterStatusFilter status={"unknown"} filter={filter} setFilter={setFilter} setPage={setPage} setTranslation={setTranslation} setCharacternumber={setCharacternumber}/>

        </div>
    </div>
    <div className={styles.charactersContainerDiv}>
        {
            characters.slice(page*6-6,page*6).map((character:any,index:number)=>{
                return (
                    <CharacterComponent key={index} index={index} character={character}></CharacterComponent>
                )
            })
        }
    </div>
    <CharacterContainerMobile characters={characters} translation={translation} setTranslation={setTranslation} characternumber={characternumber} setCharacternumber={setCharacternumber} />
    <div className={styles.paginationDiv}>
    <Pagination count={Math.ceil(characters.length/6)} page={page} onChange={handleChange} color="primary"/>
    </div>
        </div>
        </Provider>
    )
}
export default CharactersContainer;