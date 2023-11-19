import { Provider } from 'react-redux';
import store from '../../../reduxStore/store';
import styles from '../../../styles/character-details/ContainerDiv.module.scss';
import CharacterDetailsComponent from './characterDetailsComponent';
import OtherCharactersContainer from './otherCharactersContainer';
import axios from 'axios';
import {useEffect, useState} from "react";

const ContainerDiv = ({location,id}:any) => {

    const [character,setCharacter] = useState({status:"",id:0});
    const [othercharacters,setOtherCharacters] = useState(); // 2 tane karakter yanda gosterilecek.

    useEffect(() => {
        const fetchData = async () => {
            const characterList: any = [];
            var responseDataStatus = "";
            try {

                const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
                setCharacter(response.data);
                responseDataStatus = response.data.status;
            } catch (error) {
                console.error("Error fetching data:", error);
            }

            try {

                const response = await axios.get(`https://rickandmortyapi.com/api/location`);
                
                const filteredCharactersUrl = response.data.results
                    .filter((loc: any) => loc.name === decodeURIComponent(location))[0].residents;
    
                // Use Promise.all to wait for all requests to complete
                await Promise.all(
                    filteredCharactersUrl.map(async (characterurl: any) => {
                        const characterResponse = await axios.get(characterurl);
                        console.log("characterResponse",characterResponse);
                            if (responseDataStatus == characterResponse.data.status) {
                                characterList.push(characterResponse.data);
                            }     
                    })
                );
                console.log("characterlist",characterList);
                setOtherCharacters(characterList);
            } catch (error) {
                console.error("Error fetching data:", error);
            }

        };
    
        fetchData();
    }, []);


    return (
        <Provider store={store} > 
        <div className={styles.containerDiv}>
            <CharacterDetailsComponent  character={character}/>
            <OtherCharactersContainer characters={othercharacters} />
        </div>
        </Provider>

    )
}

export default ContainerDiv;