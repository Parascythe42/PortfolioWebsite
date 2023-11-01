class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <footer>
            <p>&copy; Matthew Fox 2023</p>
        </footer>
        `;
    }
}


customElements.define('footer-component', Footer)