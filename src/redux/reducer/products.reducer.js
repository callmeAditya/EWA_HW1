import { productTypes } from "../types/productTypes";
// import userData from '../../data/users.json'
import products from '../../data/products.json';
let initialState = { 
    products: [...products]
}

export function productsReducer(state = initialState, action) {
    
    /// obj
    const arr = state?.products?.find(item=>item?.header === action?.payload?.header);
    const exclude = state?.products?.filter(item=> item?.header !==action?.payload?.header);
    arr?.data?.push(action?.payload);
    console.log(arr, [...exclude, arr]);
    

    switch (action.type) {
        case productTypes.ADD_PRODUCT:
            return{
                ...state,
                products: [...exclude,arr]
            }
        case productTypes.DELETE_PRODUCT:
            let filtered = arr?.data?.filter(item=>item?.id !== action?.payload?.id);
            arr.data = filtered;
            console.log([...exclude,arr]);
            // console.log(filtered,action?.payload);
            
            
            return{
                ...state,
                products: [...exclude, arr]
            }
        // case productTypes.UPDATE_PRODUCT:
        //     let obj = include[0]?.data?.find(d=>d?.id === action?.payload.id);
        //     obj={...obj, ...action?.payload};
        //     let tmp = include[0]?.data?.filter(d=>d?.id !== action?.payload.id);
        //     tmp.push(obj);
        //     return{
        //         ...state,
        //         products: [...exclude, ...tmp]
        //     }
        // case productTypes.ADD_LIGHTING:{
        //     return{
        //         ...state,
        //         lightings: [...state?.lightings.data,action.payload]
        //     }
        // }  
        // case productTypes.UPDATE_LIGHTING:{
        //     let arr = state?.lightings.filter(item=> item?.id !== action?.payload?.id);
        //     return{
        //         ...state,
        //         lightings: [...arr,action.payload]
        //     }
        // }   case productTypes.DELETE_LIGHTING:{
        //     return{
        //         ...state,
        //         lightings: state?.lightings.filter(item=>item?.id !== action?.payload?.id)
        //     }
        // }    

        default:
            return state
    }
   

    // case userTypes.GET_REQUEST:
    // case userTypes.GET_ALL_REQUEST:
    // case userTypes.ADD_USER_REQUEST:
    // case userTypes.GET_USER_SCOPE_REQUEST:
    // case userTypes.UPDATE_USER_REQUEST :
    // case userTypes.UPDATE_USER_SCOPES_REQUEST:
    // case userTypes.UPDATE_USER_ROLES_REQUEST:
    // case userTypes.DELETE_REQUEST:
    // case userTypes.GET_SELF_PROFILE_REQUEST:
    // case userTypes.CHANGE_SELF_PASSWORD_REQUEST:
    // case userTypes.CHANGE_USERID_PASSWORD_REQUEST:
    // case userTypes.CHANGE_STATUS_REQUEST:
    // case userTypes.GET_USER_LOGS_REQUEST:
    //     return {
    //         ...state,
    //         loading: true
    //     };
    // case userTypes.ADD_USER_SUCCESS:
    //     // console.log('add user received', action)
    //     return {
    //         ...state,
    //         list: !_.isEmpty(action?.payload) ? [...state.list, action?.payload] : [...state?.list] ,
    //         userAdded:action?.payload,
    //         userDetails: action?.payload,
    //     };
    // case userTypes.GET_USER_SCOPE_SUCCESS:
    //     return {
    //         ...state,
    //         userScope:action?.payload
    //     };
    // case userTypes.GET_SELF_PROFILE_SUCCESS:
    //     return {
    //         ...state,
    //         userSelfProfile:action?.payload
    //     };
    // case userTypes.UPDATE_USER_SUCCESS:
    //     // console.log('action received', action.payload);
    //     return {
    //         ...state,
    //         list: state.list.map(item=>item.id !== action.payload.id ? action.payload : item),
    //         // userDetails:action?.payload
    //     };
    // case userTypes.GET_ALL_SUCCESS:
    //     return {
    //         ...state,
    //         list: action.payload,
    //         loading: false
    //     };

    // case userTypes.CHANGE_STATUS_SUCCESS:
    //     return {
    //         ...state,
    //         userStatus: action.payload,
    //         loading: false
    //     };
    // case userTypes.CHANGE_SELF_PASSWORD_SUCCESS:
    //     return {
    //         ...state,
    //         changeSelfPassword: action.payload,
    //         loading: false
    //     };
    // case userTypes.CHANGE_USERID_PASSWORD_SUCCESS:
    //     return {
    //         ...state,
    //         changeUserIDPassword: action.payload,
    //         loading: false
    //     };

    // case userTypes.GET_SUCCESS:
    //     return {
    //         ...state,
    //         // list: state?.list && Array.isArray(state?.list) ? state?.list?.map(item=>item.id === action.payload.id ? action.payload : item) : [],
    //         userDetails: action?.payload,
    //         loading: false
    //     };
    // case userTypes.UPDATE_USER_SCOPES_SUCCESS:
    //     return {
    //         ...state,
    //         list: state?.list && Array.isArray(state?.list) ? state?.list?.map(item=>item.id === action?.payload?.userId ? {...item, scopes: action?.payload?.scopes} : item) : [],
    //         loading: false
    //     };
    // case userTypes.UPDATE_USER_ROLES_SUCCESS:
    //     return {
    //         ...state,
    //         list: state?.list && Array.isArray(state?.list) ? state?.list?.map(item=>item.userId === action?.payload?.userId ? {...item, roles: action?.payload?.roles} : item) : [],
    //         loading: false
    //     };
    // case userTypes.GET_USER_LOGS_SUCCESS:
    //     return {
    //         ...state,
    //         userLogs: action.payload
    //     }
    // case userTypes.DELETE_SUCCESS:
    //     return {
    //         ...state,
    //         deletedUser: action?.payload,
    //         // list: state?.list && Array.isArray(state?.list) ? state?.list?.filter(item => item.id !== action.payload.id) : [],
    //         loading: false
    //     };
    // case userTypes.USER_EMPTY_ERRORS:
    //     return {
    //         ...state,
    //         error: null,
    //         loading: false
    //     };
    // case userTypes.GET_FAILURE:
    // case userTypes.GET_ALL_FAILURE:
    // case userTypes.GET_USER_SCOPE_FAILURE:
    // case userTypes.ADD_USER_FAILURE:
    // case userTypes.UPDATE_USER_SCOPES_FAILURE:
    // case userTypes.UPDATE_USER_ROLES_FAILURE:
    // case userTypes.DELETE_FAILURE:
    // case userTypes.GET_SELF_PROFILE_FAILURE:
    // case userTypes.CHANGE_SELF_PASSWORD_FAILURE:
    // case userTypes.CHANGE_USERID_PASSWORD_FAILURE:
    // case userTypes.CHANGE_STATUS_FAILURE:
    // case userTypes.GET_USER_LOGS_FAILURE:
    //     return {
    //         ...state,
    //         error: action?.payload,
    //         loading: false
    //     };
   
}
