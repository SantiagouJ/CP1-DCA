import * as components from "./src/containerApp.js"

class AppContainer extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({mode: "open"})
    }

    connectedCallback(){
        this.render()
    }

    render(){
        this.shadowRoot.innerHTML=`

            <card-component
            destino="hola"></card-component>
        `
    }
}
customElements.define("app-container", AppContainer)
export default AppContainer