import Abstract from "./Abstract.js";

export default class extends Abstract {
    constructor() {
        super();
        this.setTitle("About-me");
    }

    async getHtml() {
        return `
            <h1>Vinicius Cardoso</h1>
            <p>
                Software Engineer
            </p>
            <p>
                <a href="/" data-link>Home</a>
            </p>
        `;
    }
}