import Image from 'next/image';
import styles from '../../../styles/navbar/Navbar.module.scss';
const Navbar =() =>{
    return(
        <div className={styles.navbar}>
            <Image className={styles.icon} src='/navbarIcon.png' alt='icon' width={300} height={120} ></Image>
        </div>
    )
}

export default Navbar;