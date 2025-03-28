class Component extends HTMLElement {
    static get observedAttributes(){
        return ["destino","duracion","costo","descripcion","actividades","disponibilidad","calificacion","alojamiento","guia"]
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
            this[name]=newValue
        }
    }

    render(){
        this.shadowRoot.innerHTML=`
        
            <link rel="stylesheet" href="/src/components/card/card.css">

            <div class="container">
                <img src="https://picsum.photos/200/300" alt="">

                <div class="textSection">
                    <p>${this.destino}</p>
                    <p>${this.duracion}</p>
                    <p>${this.costo}</p>
                    <p>${this.descripcion}</p>
                    <p>${this.actividades}</p>
                    <p>${this.disponibilidad}</p>
                    <p>${this.calificacion}</p>
                    <p>${this.alojamiento}</p>
                    <p>${this.guia}</p>
                </div>
            </div>
        
        `
    }
}
customElements.define("card-component", Component)
export default Component