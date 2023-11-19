import styles from '../../../styles/character-details/OtherCharactersComponent.module.scss';
import Link from 'next/link';

const OtherCharactersComponent = ({character}:any) => {
    return (
        <Link href={`/locations/${character.location.name}/characters/${character.id}`} ><div className={styles.componentDiv}>
            <div className={styles.imageDiv} 
                style={{
                    backgroundImage: `url(${character.image})`,
                    backgroundSize: "cover",
                    backgroundPositionX: 'center',
                }}
             ></div>
            <div className={styles.informationsDiv}>
                <h3 className={styles.nameTitle} title={character.name} >{character.name}</h3>
                <h3>{character.location.name}</h3>
                <span>{character.species} | {character.gender}</span>
            </div>
        </div></Link>
    )
}

export default OtherCharactersComponent;