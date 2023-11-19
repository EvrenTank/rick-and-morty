import {createSlice} from '@reduxjs/toolkit';

const initialState:any ={
    favoriteId:[]
}; //karakter id'lerini iceren bir array olacak.

const slice = createSlice(
  {
    name:"favorite rick and morty characters",
    initialState : initialState,
    reducers:{
        read: (state,action) => {
            //console.log("state.departureDate",state.departureDate)
            //console.log("state.returnDate",state.returnDate)
            //console.log("state.from",state.from)
            //console.log("state.to",state.to)
            return state;
        },
        addFavorites: (state,action)=>{
            console.log("action.payload.id",action.payload.id);
            if(state.favoriteId.includes(action.payload.id)){
                state.favoriteId.splice(state.favoriteId.indexOf(action.payload.id),1);
            }
            else{
            state.favoriteId.push(action.payload.id);
        }
        }
    }}
);

export default slice.reducer
export const {read,addFavorites} = slice.actions
export {initialState}