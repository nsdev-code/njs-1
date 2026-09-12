
export class HelloWorld extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `Welcome home! Howdy!`;
  }
}

customElements.define('hello-world', HelloWorld);