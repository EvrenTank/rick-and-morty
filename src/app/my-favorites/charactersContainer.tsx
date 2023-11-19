'use client';
import {useState,useEffect} from "react";
import axios from "axios";
import styles from "../../../styles/characters/CharactersContainer.module.scss";
import CharacterComponent from "./characterComponent";
import Pagination from '@mui/material/Pagination';
import CharacterContainerMobile from "./charactersContainerMobile";
import Link from "next/link";
import {useSelector } from "react-redux";
const CharactersContainer = () => {

    const [translation, setTranslation] = useState(0); 
    const [characternumber,setCharacternumber] = useState(1);
    const favorites = useSelector((state:any)=>state.favoritesReducer);

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

                // Use Promise.all to wait for all requests to complete
                await Promise.all(
                    favorites.favoriteId.map(async (id:number) => {
                        const characterResponse = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
                            characterList.push(characterResponse.data);
                        
                    })
                );
    
                setCharacters(characterList);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
    
        fetchData();
    }, []);
    return (
<div className={styles.mainDiv}>
    <div className={styles.filterDiv}>

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
    )
}
export default CharactersContainer;