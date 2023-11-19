'use client';
import styles from "../../../styles/character-details/CharacterDetailsComponent.module.scss";
import axios from "axios";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState,useEffect } from "react";
import {useDispatch,useSelector } from 'react-redux';
import {addFavorites } from '../../../reduxStore/slice.ts';


const CharacterDetailsComponent = ({character}:any) => {
    
    const favorites = useSelector((state:any)=>state.favoritesReducer);
    console.log("favorites", favorites);
    const dispatch = useDispatch();

    return (
        <div className={styles.containerDiv}>
            <div className={styles.imageDiv} style={{
                backgroundImage: `url(${character.image})`,
                backgroundSize: "cover",
                backgroundPositionX: 'center',
            }}>
                <FavoriteIcon className={styles.heartIcon}
                sx={{
                    color: favorites.favoriteId.includes(character.id) ? 'red':'white'
                }}
                onClick={
                    ()=>{
                    dispatch(addFavorites({id:character.id}));
                }

                } />               
            </div>
            <div className={styles.detailsDiv}>
                <h2 className={styles.nameTitle} title={character.name} >{character.name}</h2>
                <div className={styles.statusDiv}>
                    <span className={styles.statusSpan} style={{
                        ...(character.status == "Alive" && { backgroundColor:"yellowgreen"}),
                        ...(character.status == "Dead" && { backgroundColor:"red"}),
                        ...(character.status == "unknown" && { backgroundColor:"gray"}),
                    }} ></span>
                    <span>{character.status}</span>-
                    <span>{character.species}</span>
                </div>
                <div className={styles.dimensionDiv}>
                    <span>{character.location?.name}</span>
                </div>
                <div className={styles.speciesandGenderDiv}>
                    <small >{character.species} | {character.gender}</small>
                </div>
            </div>
        </div>
    )
}
export default CharacterDetailsComponent;