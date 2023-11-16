import styles from "../../../styles/locations/ListElement.module.scss";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Link from 'next/link';
const ListElement = ({name,type,dimension,residents}:{
    name:string,
    type:string,
    dimension:string,
    residents: string[]
}) => {
    return (
        <div className={styles.containerDiv}>
            <div className={styles.leftDiv}>
                <div><h4>Name:</h4></div>
                <div><h4>Type:</h4></div>
                <div><h4>Dimension:</h4></div>
                <div><h4>Resident count:</h4></div>
            </div>
            <div className={styles.middleDiv}>
                <div><p>{name}</p></div>
                <div><p>{type}</p></div>
                <div><p>{dimension}:</p></div>
                <div><p>{residents.length}</p></div>
            </div>
            <div className={styles.rightDiv}>
                <Link href='/'><NavigateNextIcon className={styles.navigateIcon}/></Link>
            </div>
        </div>
    )
}
export default ListElement;