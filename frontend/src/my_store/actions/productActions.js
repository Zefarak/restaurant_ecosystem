import {GET_PRODUCTS, GET_CATEGORIES, GET_PRODUCT_CLASS} from "../actionTypes";
import axiosInstance from "../../api/helpers";
import {CATEGORIES_ENDPOINT, PRODUCT_CLASS_ENDPOINT} from "../../api/endpoints";


export function getCategories() {
    return function (dispatch) {
        return axiosInstance.get(CATEGORIES_ENDPOINT)
            .then(
                respData=>{
                    dispatch({
                        type:GET_CATEGORIES,
                        payload: respData.data
                    })
                }
            )
    }

}


export function getProductClass() {
    return function (dispatch) {
        return axiosInstance.get(PRODUCT_CLASS_ENDPOINT)
            .then(
                respData=>{
                    dispatch({
                        type: GET_PRODUCT_CLASS,
                        payload: respData.data
                    })
                }
            )
    }

}