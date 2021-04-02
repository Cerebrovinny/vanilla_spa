import Abstract from "./Abstract.js";

export default class extends Abstract {
    constructor() {
        super();
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
            <h1>Welcome back, Dom</h1>
            <p>
                Lorem Ipsum
            </p>
            <p>
                <a href="/posts" data-link>View posts</a>
            </p>
        `;
    }
}