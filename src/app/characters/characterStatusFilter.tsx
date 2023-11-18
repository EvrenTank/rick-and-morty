import styles from "../../../styles/characters/CharacterStatusFilter.module.scss";

// a div component that will be used as filter options (dead,alive or unknown)
const CharacterStatusFilter = ({status,filter,setFilter,setPage}:any) => {
    return (
        <div className={styles.containerDiv} onClick={()=>{
            filter == "null" ? setFilter(status) : status == filter ? setFilter("null"):setFilter(status);
            console.log("filter==",filter);
            setPage(1);
        }} 
        style={{
            ...(filter == status ? {backgroundColor:"rgb(150,150,150)",color:"white"}:{backgroundColor:"white"})
        }}
        >
            <div className={styles.circle} style={{
                    ...(status == "Alive" && { backgroundColor:"yellowgreen"}),
                    ...(status == "Dead" && { backgroundColor:"red"}),
                    ...(status == "unknown" && { backgroundColor:"gray"}),
            }} ></div>
            <span className={styles.status}>{status}</span>
        </div>
    )
}
export default CharacterStatusFilter;