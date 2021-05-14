import * as types from "../constants/ActionTypes";

var initialState = [
    {
        id: 1,
        name: "Iphone",
        price: 400,
        status: true
    },
    {
        id: 2,
        name: "Iphone 1",
        price: 4001,
        status: true
    },
    {
        id: 3,
        name: "Iphone 3",
        price: 4003,
        status: true
    }
];
const products = (state = initialState,action) =>{
    switch(action.type){
        case types.FETCH_API:
            state = action.products;
            return [...state]
        default:return [...state]
    }
}
export default products