'use client';
import Navbar from "../navbar/navbar";
import CharactersContainer from "./charactersContainer";
import { Provider } from "react-redux";
import store from "../../../reduxStore/store";

const Page =() => {
    return (
        <Provider store={store} >
        <Navbar></Navbar>
        <CharactersContainer/>
        </Provider>
    );
}

export default Page;