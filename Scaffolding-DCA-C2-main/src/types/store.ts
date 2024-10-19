// Define el tipo Task basado en la estructura de una tarea en AppState
export type Products = {
	uid:number | undefined;
    image: string | undefined;
    description: string | undefined;
    category: string | undefined;
    price: number | undefined;
    rating: number | undefined;
};

// AppState ahora usará este tipo Task en lugar de repetir la definición
export type AppState = {
    screen: string;
    products: Array<Products>;
};

export type Observer = { render: () => void } & HTMLElement;

export enum Actions {
    REMOVE = 'REMOVE',
    GET_PRODUCTS = 'GET_PRODUCTS',
	EDIT_PRODUCT= 'EDIT_PRODUCT'
}
