import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData: {},
    userProfileData: {},
    isRegistered: false,
    isLogedin: false,
    CartItems: [],
    ItemCount: 0,
    CartTotalAmt: 0,


}

const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logout: (state) => {
            state.userData = {}
            state.isLogedin = false
        },
        register: (state, action) => {
            state.userData = action.payload
            state.isRegistered = true

        },
        login: (state, action) => {
            state.userData = action.payload
            state.isLogedin = true
        },
        addUserProfile: (state, action) => {
            state.userProfileData = action.payload
        },
        clearCart: (state) => {
            state.CartItems = []
        },

        addItem: (state, action) => {
            const newItem = { ...action.payload, qty: 1 ,subtotal:action.payload.ArtworkPrice }
            state.CartItems = [...state.CartItems, newItem]
            state.ItemCount = state.CartItems.length
            
        },
        clearone:(sate,{payload})=> {
            
        },

        increqty: (state, { payload }) => {

            const crtitem = state.CartItems.find((item) => item._id === payload.iid)
            crtitem.qty += 1
            crtitem.subtotal = crtitem.ArtworkPrice * crtitem.qty
            // state.CartItems=[],
            // state.ItemCount=0,
            // state.CartTotalAmt
           
            

        },


        decreqty: (state, { payload }) => {
            const crtitem = state.CartItems.find((item) => item._id === payload.iid)
            if (crtitem.qty > 1)
                crtitem.qty -= 1
            crtitem.subtotal = crtitem.ArtworkPrice * crtitem.qty


        },



        calculateTotal: (state) => {
            let totalQty = 0
            let totalamt = 0
            state.CartItems.forEach((item) => {
                totalQty += item.qty
                totalamt += item.qty * item.ArtworkPrice
            })
            state.CartTotalAmt = totalamt
        }


    }
})

export const { login, addUserProfile, logout, register, calculateTotal, addItem, clearCart, increqty, decreqty } = UserSlice.actions
export default UserSlice.reducer