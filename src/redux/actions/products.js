import { productTypes } from "../types/productTypes"

export const addProduct = (item)=>{
    
    return dispatch=>{
        dispatch({type: productTypes.ADD_PRODUCT,payload:item})
    }
}
export const removeProduct = (item)=>{
    return dispatch=>{
        dispatch({type: productTypes.DELETE_PRODUCT,payload:item})
    }
}

export const productsActions = {
    addProduct,
    removeProduct
};