class Component extends HTMLElement {
    static get observedAttributes(){
        return ["destino","duracion","costo","descripcion","actividades","disponibilidad","img","calificacion","alojamiento","guia"]
    }

    constructor(){
        super()
        this.attachShadow({mode: "open"})
    }

    connectedCallback(){
        console.log("Componente cargado")
        this.render()
    }

    attributeChangedCallback(name, oldValue, newValue){
        if(oldValue !== newValue){
            return[name]
        }
    }

    render(){
        this.shadowRoot.innerHTML=`
            <link rel="stylesheet" href="/src/components/card/card.css">


            <p>${this.destino}</p>
        
        `
    }
}
customElements.define("card-component", Component)
export default Component