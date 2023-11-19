"use client";
import Navbar from "../../../../navbar/navbar";
import ContainerDiv from "@/app/character-details/containerDiv";
const Page =({params}:{
    params : {
        location:string,
        id:string
    }
})=> {
    console.log("location:", decodeURIComponent(params.location));
    

    return (
        <div>
            <Navbar/>
            <ContainerDiv location={params.location} id={params.id} />
        </div>
    );
}
export default Page;