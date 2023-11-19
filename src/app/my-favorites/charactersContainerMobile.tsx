'use client';
import styles from "../../../styles/characters/CharactersContainerMobile.module.scss";
import CharacterComponent from "./characterComponent";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {useState} from "react";

const CharacterContainerMobile = ({characters,translation,setTranslation,characternumber,setCharacternumber}:any) => {
    
    const leftClick = () => {
        if(translation != 0){
            setTranslation((translation:any) => translation+300);
            setCharacternumber((characternumber:any) => characternumber-1);
        }
    }

    const rightClick = () => {
        if(translation != (characters.length-1)*-300){
            setTranslation((translation:any) => translation-300);
            setCharacternumber((characternumber:any) => characternumber+1);
        }
    }
    
    return (
        <div className={styles.containerDiv} >
            <div className={styles.sliderDiv}>
                <NavigateBeforeIcon className={styles.beforeIcon} onClick={leftClick}
                style={{
                    visibility : characternumber == 1 ? 'hidden' : 'visible',
                }}
                />
                <div className={styles.componentDiv} style={{
                    transform: `translateX(${translation}px)`,
                    transitionDuration:'1s',
                }} >
                  {
                    characters.map((character:any,index:number) => {
                        return (
                            <CharacterComponent key={index} character={character} index={index}/>
                        )
                    })
                  }
                </div>
                <NavigateNextIcon className={styles.nextIcon} onClick={rightClick}
                                style={{
                                    visibility : characternumber == characters.length ? 'hidden' : 'visible',
                                }}/>
            </div>

        </div>
    )
}
export default CharacterContainerMobile;