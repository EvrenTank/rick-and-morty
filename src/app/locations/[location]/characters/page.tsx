"use client";
import List from "../../list";
import Navbar from "../../../navbar/navbar";
import CharactersContainer from "../../../characters/charactersContainer";
const Page =({params}:{
    params : {
        location:string,
    }
})=> {
    console.log("location:", decodeURIComponent(params.location));
    

    return (
        <div>
            <Navbar/>
            <CharactersContainer location={params.location}/>
        </div>
    );
}
export default Page;