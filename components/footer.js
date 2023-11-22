// Code template and implementation from freeCodeCamp.
// https://www.freecodecamp.org/news/reusable-html-components-how-to-reuse-a-header-and-footer-on-a-website/

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