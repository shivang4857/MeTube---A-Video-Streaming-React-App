import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name : "app",
    initialState: {
        isMenuOpen : true,
        videos :[],
        category : "All"
    },
     reducers: {   // just keep in mind that here s in redcuser is very important
        toogleMenu : (state)  => {
            state.isMenuOpen = !state.isMenuOpen ;
        },

        setHomeVideo : (state,action) => {
            state.videos = action.payload

        },

        setCategory : (state,action) => {
            state.category = action.payload
        },

        closeMenu : (state) => {
            state.isMenuOpen = false;
        },

     }

    ,
})

export const { toogleMenu,closeMenu,setHomeVideo, setCategory} =appSlice.actions;  // this is an special way to export the reducer action  we have made
export default  appSlice.reducer;