import Abstract from "./Abstract.js";

export default class extends Abstract {
    constructor() {
        super();
        this.setTitle("Posts");
    }

    async getHtml() {
        return `
            <h1>Posts</h1>
            <p>
                Javascript is the best!!!
            </p>
            <p>
                <a href="/" data-link>Home</a>
            </p>
        `;
    }
}