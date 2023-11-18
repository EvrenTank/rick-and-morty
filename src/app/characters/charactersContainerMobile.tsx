'use client';
import styles from "../../../styles/characters/CharactersContainerMobile.module.scss";
import CharacterComponent from "./characterComponent";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {useState} from "react";

const CharacterContainerMobile = ({characters}:any) => {
    const [translation, setTranslation] = useState(0); 
    const leftClick = () => {
        if(translation != 0){
            setTranslation(translation => translation+300);
        }
    }

    const rightClick = () => {
        if(translation != (characters.length-1)*-300){
            setTranslation(translation => translation-300);
        }
    }
    
    return (
        <div className={styles.containerDiv} >
            <div className={styles.sliderDiv}>
                <NavigateBeforeIcon className={styles.beforeIcon} onClick={leftClick}/>
                <div className={styles.componentDiv} style={{
                    transform: `translateX(${translation}px)`,
                    transitionDuration:'1s',
                }} >
                  {
                    characters.map((character:any,index:number) => {
                        return (
                            <CharacterComponent character={character} index={index}/>
                        )
                    })
                  }
                </div>
                <NavigateNextIcon className={styles.nextIcon} onClick={rightClick}/>
            </div>

        </div>
    )
}
export default CharacterContainerMobile;