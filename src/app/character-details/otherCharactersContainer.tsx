import styles from '../../../styles/character-details/OtherCharactersContainer.module.scss';
import OtherCharactersComponent from './otherCharactersComponent';
const OtherCharactersContainer = ({characters}:any) => {
    return (
        <div className={styles.containerDiv}>
            {
                characters?.slice(0,2).map((character:any,index:number)=>{
                    return (
                        <OtherCharactersComponent key={index} character={character}/>
                    )
                })
            }
        </div>
    )
}

export default OtherCharactersContainer;