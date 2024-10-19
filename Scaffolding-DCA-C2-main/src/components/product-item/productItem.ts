import { remove } from "../../store/actions";
import { appState, dispatch } from "../../store/index";
import { Actions } from '../../types/store';

export enum Attribute {
    'uid' = 'uid',
    'image' = 'image',
    'description' = 'description',
    'category' = 'category',
    'price' = 'price',
    'rating' = 'rating',
}

class Product extends HTMLElement {
    uid?: number;
    image?: string;
    description?: string;
    category?: string;
    price?: number;
    rating?: number;


    static get observedAttributes() {
        return Object.keys(Attribute);
    }

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(propName: Attribute, oldValue: string | undefined, newValue: string | undefined) {
        if (propName === Attribute.price || propName === Attribute.rating ||  propName === Attribute.uid) {
            this[propName] = newValue ? Number(newValue) : undefined;
        } else {
            this[propName] = newValue;
        }
        this.render();
    }

    render() {
        if (!this.shadowRoot) return;
    
        this.shadowRoot.innerHTML = `

            <div class="product-card">
                <img src="${this.image}" alt="Product Image">
                <h2>${this.description}</h2>
                <p>Category: ${this.category}</p>
                <p>Price: $${this.price}</p>
                <p>Rating: ${this.rating}</p>
                <button class="delete-btn">Delete</button>
            </div>
        `;
          // Botón para eliminar tarea
          const deleteBtn = this.shadowRoot.querySelector('.delete-btn');
          deleteBtn?.addEventListener('click', () => {
              dispatch(remove(Number(this.uid))); 
          });
    
    }
    
    
}


customElements.define('product-item', Product);
export default Product;