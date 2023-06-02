import * as ActionTypes from "../actionTypes";

export const addItemToCart = (item)=>({
    type: ActionTypes.ADD_ITEM,
    payload: {item} //{item:item}
})

export const emptyTheCart = () => ({
    type: ActionTypes.EMPTY_CART
});

export const removeItem = (id) => ({
    type: ActionTypes.REMOVE_ITEM,
    payload: { id }//id: 4
});

export const updateItem = (id, qty) => ({
    type: ActionTypes.UPDATE_ITEM,
    payload: {
        id, //id : 5
        qty: parseInt(qty) // update the quantity
    }
});