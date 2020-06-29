const initialState = {
    cart: []
};
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD TO CART':
            initialState.cart.push(action.payload)
            return {
                ...state, cart: initialState.cart
            }
        case "REMOVE FROM CART":
            let removeItem = action.payload
            const index = initialState.cart.indexOf(removeItem);
            initialState.cart.splice(index, 1);
            return {
                    ...state, cart: initialState.cart
                }
        default:
        return state;
    }
}
export { cartReducer };