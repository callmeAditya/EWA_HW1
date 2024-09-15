import { cartTypes } from "../types/cartTypes"

export const addItem = (payload)=>{
    return dispatch=>{
        dispatch({type:cartTypes.ADD_ITEM_IN_CART,payload},)
    }
};
export const removeItem = (item)=>{
    return dispatch=>{
        dispatch({type:cartTypes.REMOVE_ITEM_IN_CART,payload:item})
    }
};

export const addorder = (item)=>{
    return dispatch=>{
        dispatch({type:cartTypes.ADD_ORDER_IN_CART,payload:item})
    }
}
export const placeorder = (item)=>{
    return dispatch=>{
        dispatch({type:cartTypes.PLACED_ORDER_IN_CART,payload:item})
    }
}
export const cancelorder = (item)=>{
    return dispatch=>{
        dispatch({type:cartTypes.CANCEL_ORDER,payload:item})
    }
}


export const emptycart = (item)=>{
    return dispatch=>{
        dispatch({type:cartTypes.EMPTY_STATE_CART,payload:item})
    }
}

export const cartActions = {
    addItem,
    addorder,
    removeItem,
    placeorder,
    emptycart,
    cancelorder
};