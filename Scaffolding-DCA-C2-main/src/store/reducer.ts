import { Actions } from '../types/store';

export const reducer = (currentAction: any, currentState: any) => {
	const { action, payload } = currentAction;

	switch (action) {
		case Actions.REMOVE:
            const filteredProducts = currentState.products.filter((item: any) => item.uid !== payload); 
            return {
                ...currentState,
                cart: filteredProducts,
            };
		
		 case Actions.GET_PRODUCTS:
            return {
                ...currentState,
                products: payload,
            };

		default:
			return currentState;
	}
};
