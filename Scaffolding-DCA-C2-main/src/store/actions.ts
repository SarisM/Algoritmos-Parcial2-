
import { Actions } from './../types/store';
import { getProducts } from '../services/getProducts';
import { Products } from '../types/store';


export const remove = (payload: any) => {
	return {
		action: Actions.REMOVE,
		payload,
	};
};

export const getProductsState = async () => {
    const data = await getProducts()
    return {
        action: Actions.GET_PRODUCTS,
        payload: data,
    };
};


export const editProduct = async () => {
    const data = await getProducts()
    return {
        action: Actions.EDIT_PRODUCT,
        payload: data,
    };
};