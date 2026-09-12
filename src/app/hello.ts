
export class HelloWorld extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `Welcome home!`;
  }
}

customElements.define('hello-world', HelloWorld);