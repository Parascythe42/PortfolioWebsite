// Code template and implementation from freeCodeCamp.
// https://www.freecodecamp.org/news/reusable-html-components-how-to-reuse-a-header-and-footer-on-a-website/

class Email extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <a href="mailto:matthewfox2000@gmail.com">matthewfox2000@gmail.com</a>
        `;
    }
}

customElements.define('email-link', Email);