import { addObserver, appState } from "../store/index"; 
import '../components/product-list/productList'; 

class Dashboard extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        // Suscribir el componente a los cambios en el estado global
        addObserver(this);
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if (!this.shadowRoot) return;

        this.shadowRoot.innerHTML = `
           
            <div class="dashboard">
                <h1>product list</h1>
                <product-list></product-list> 
            </div>
        `;
    }
}

customElements.define('app-dashboard', Dashboard);
export default Dashboard;