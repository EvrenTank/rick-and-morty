'use client';
import styles from "../../../styles/characters/CharacterComponent.module.scss";
import axios from "axios";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState,useEffect } from "react";
import NavigateNext from "@mui/icons-material/NavigateNext";
import Link from "next/link";

const CharacterComponent = ({index,character}:any) => {


    return (
        <div key={index} className={styles.containerDiv}>
            <div className={styles.imageDiv} style={{
                backgroundImage: `url(${character.image})`,
                backgroundSize: "cover",
                backgroundPositionX: 'center',
            }}>
                <FavoriteIcon className={styles.heartIcon}/>               
            </div>
            <div className={styles.detailsDiv}>
                <h2 className={styles.nameTitle}>{character.name}</h2>
                <div className={styles.statusDiv}>
                    <span className={styles.statusSpan} style={{
                        ...(character.status == "Alive" && { backgroundColor:"yellowgreen"}),
                        ...(character.status == "Dead" && { backgroundColor:"red"}),
                        ...(character.status == "unknown" && { backgroundColor:"gray"}),
                    }} ></span>
                    <span>{character.status}</span>-
                    <span>{character.species}</span>
                </div>
                <div className={styles.navigateIconDiv}>
                    <Link href={``}><NavigateNext className={styles.navigateIcon}/></Link>
                </div>
                
                


            </div>
        </div>
    )
}
export default CharacterComponent;