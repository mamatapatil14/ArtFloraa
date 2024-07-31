const { createSlice } = require("@reduxjs/toolkit")


const initialState = {
    CartItems: [],
    ItemCount: 0,
    CartTotalAmt: 0,
    Onecarttotal: 0

}


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        clearCart: (state) => {
            state.CartItems = []
        },

        addItem: (state, action) => {
            const newItem = { ...action.payload, qty: 1, subtotal:0}
            state.CartItems = [...state.CartItems, newItem]
            state.ItemCount = state.CartItems.length
        },

        increqty: (state, { payload }) => {

            const crtitem = state.CartItems.find((item) => item._id === payload.iid)
            crtitem.qty += 1
            crtitem.subtotal = crtitem.ArtworkPrice * crtitem.qty
            

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

export const { calculateTotal, addItem, clearCart, increqty, decreqty, calculateonecart } = cartSlice.actions
export default cartSlice.reducer