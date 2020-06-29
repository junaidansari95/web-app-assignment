export const addToCart = (data) => dispatch => {
  console.log(" ADD TO CART Action called")
    dispatch({type: "ADD TO CART", payload: data})
  }
export const removeFromCart = (data) => dispatch => {
  console.log(" REMOVE FROM CART Action called")
    dispatch({type: "REMOVE FROM CART", payload: data})
  }