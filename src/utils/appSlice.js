import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name : "app",
    initialState: {
        isMenuOpen : true,
    },
     reducers: {   // just keep in mind that here s in redcuser is very important
        toogleMenu : (state)  => {
            state.isMenuOpen = !state.isMenuOpen ;
        },

        closeMenu : (state) => {
            state.isMenuOpen = false;
        },

     }

    ,
})

export const { toogleMenu,closeMenu} =appSlice.actions;  // this is an special way to export the reducer action  we have made
export default  appSlice.reducer;