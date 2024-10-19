import { appState, dispatch } from "../../store/index";
import { Products } from "../../types/store";
import Product, { Attribute } from "../product-item/productItem";

class TaskList extends HTMLElement {
    products: Products[] = [];

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
        this.products = appState.products

        const taskListContainer = this.shadowRoot?.querySelector('.product-list');

        this.products.forEach(product => {
          
            if (product.uid && product.image && product.description && product.category && product.price && product.rating) {
                const Product = this.ownerDocument.createElement('product-item') as Product;
                Product.setAttribute(Attribute.uid, product.uid.toString());
                Product.setAttribute(Attribute.image, product.image);
                Product.setAttribute(Attribute.description, product.description);
                Product.setAttribute(Attribute.category, product.category);
                Product.setAttribute(Attribute.price, product.price .toString() );
                Product.setAttribute(Attribute.rating, product.rating .toString());



                taskListContainer?.appendChild(Product);
            } else {
                console.error('Product is missing required attributes:', product);
            }
        });
                
    }


    render() {
        if (!this.shadowRoot) return;

        this.shadowRoot.innerHTML = `
            <h2>Tasks</h2>
            <div class="product-list">
            </div>
        `;
        
    }
}

customElements.define('product-list', TaskList);
export default TaskList