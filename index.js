import * as components from "./src/containerApp.js"

class AppContainer extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({mode: "open"})
        this.component
    }

    connectedCallback(){
        this.render()
    }

    getData(){
      return [
            {
              "id": 1,
              "destino": "París, Francia",
              "duracion": 2,
              "costo": 2500,
              "descripcion": "Explora la ciudad del amor con visitas a la Torre Eiffel y el Louvre.",
              "actividades": ["Tour guiado", "Cena en barco por el Sena", "Museos"],
              "reservado": false,
              "imagen": "paris.jpg",
              "calificacion": 4.8,
              "alojamiento": "Hotel 5 estrellas",
              "guia_incluido": true
            },
            {
              "id": 2,
              "destino": "Machu Picchu, Perú",
              "duracion": 1,
              "costo": 1800,
              "descripcion": "Una experiencia inolvidable en una de las maravillas del mundo.",
              "actividades": ["Trekking", "Tour arqueológico", "Fotografía"],
              "reservado": false,
              "imagen": "machu_picchu.jpg",
              "calificacion": 4.9,
              "alojamiento": "Hostal turístico",
              "guia_incluido": true
            },
            {
              "id": 3,
              "destino": "Nueva York, EE.UU.",
              "duracion": 2,
              "costo": 3000,
              "descripcion": "Descubre la ciudad que nunca duerme con espectáculos y compras.",
              "actividades": ["Broadway", "Empire State", "Central Park"],
              "reservado": true,
              "imagen": "nyc.jpg",
              "calificacion": 4.7,
              "alojamiento": "Hotel 4 estrellas",
              "guia_incluido": false
            },
            {
              "id": 4,
              "destino": "Santorini, Grecia",
              "duracion": 1,
              "costo": 2200,
              "descripcion": "Playas espectaculares y vistas impresionantes del mar Egeo.",
              "actividades": ["Buceo", "Paseo en velero", "Gastronomía local"],
              "reservado": false,
              "imagen": "santorini.jpg",
              "calificacion": 4.8,
              "alojamiento": "Cabaña privada",
              "guia_incluido": false
            },
            {
              "id": 5,
              "destino": "Tokio, Japón",
              "duracion": 3,
              "costo": 4000,
              "descripcion": "Tecnología, cultura y tradiciones en una sola ciudad.",
              "actividades": ["Anime Tour", "Templos antiguos", "Gastronomía"],
              "reservado": true,
              "imagen": "tokio.jpg",
              "calificacion": 4.9,
              "alojamiento": "Hotel cápsula",
              "guia_incluido": true
            },
            {
              "id": 6,
              "destino": "Roma, Italia",
              "duracion": 2,
              "costo": 2800,
              "descripcion": "Historia y arte en cada esquina de la ciudad eterna.",
              "actividades": ["Coliseo Romano", "Vaticano", "Fontana di Trevi"],
              "reservado": false,
              "imagen": "roma.jpg",
              "calificacion": 4.8,
              "alojamiento": "Hotel boutique",
              "guia_incluido": true
            },
            {
              "id": 7,
              "destino": "Bali, Indonesia",
              "duracion": 2,
              "costo": 2000,
              "descripcion": "Paraíso tropical con playas y templos exóticos.",
              "actividades": ["Surf", "Yoga", "Exploración de templos"],
              "reservado": false,
              "imagen": "bali.jpg",
              "calificacion": 4.7,
              "alojamiento": "Resort frente al mar",
              "guia_incluido": false
            },
            {
              "id": 8,
              "destino": "Londres, Reino Unido",
              "duracion": 2,
              "costo": 2600,
              "descripcion": "Explora la historia británica y la modernidad en una sola ciudad.",
              "actividades": ["Big Ben", "London Eye", "Museo Británico"],
              "reservado": false,
              "imagen": "londres.jpg",
              "calificacion": 4.6,
              "alojamiento": "Hotel 3 estrellas",
              "guia_incluido": true
            },
            {
              "id": 9,
              "destino": "Dubai, Emiratos Árabes Unidos",
              "duracion": 1,
              "costo": 5000,
              "descripcion": "Lujo y arquitectura futurista en el desierto.",
              "actividades": ["Burj Khalifa", "Safari en el desierto", "Compras en Dubai Mall"],
              "reservado": true,
              "imagen": "dubai.jpg",
              "calificacion": 4.9,
              "alojamiento": "Hotel 7 estrellas",
              "guia_incluido": false
            },
            {
              "id": 10,
              "destino": "Sídney, Australia",
              "duracion": 3,
              "costo": 3500,
              "descripcion": "Explora la ópera, las playas y la cultura australiana.",
              "actividades": ["Ópera de Sídney", "Playa Bondi", "Zoológico Taronga"],
              "reservado": false,
              "imagen": "sidney.jpg",
              "calificacion": 4.7,
              "alojamiento": "Hotel 5 estrellas",
              "guia_incluido": true
            },
            {
              "id": 11,
              "destino": "Barcelona, España",
              "duracion": 2,
              "costo": 2700,
              "descripcion": "Arte, arquitectura y gastronomía en una ciudad vibrante.",
              "actividades": ["Sagrada Familia", "Barrio Gótico", "Playas del Mediterráneo"],
              "reservado": false,
              "imagen": "barcelona.jpg",
              "calificacion": 4.8,
              "alojamiento": "Apartamento turístico",
              "guia_incluido": true
            },
            {
              "id": 12,
              "destino": "Ámsterdam, Países Bajos",
              "duracion": 1,
              "costo": 2300,
              "descripcion": "Canales, bicicletas y arte en la ciudad más liberal de Europa.",
              "actividades": ["Museo Van Gogh", "Paseo en barco", "Casa de Ana Frank"],
              "reservado": false,
              "imagen": "amsterdam.jpg",
              "calificacion": 4.6,
              "alojamiento": "Hotel boutique",
              "guia_incluido": false
            },
            {
              "id": 13,
              "destino": "Río de Janeiro, Brasil",
              "duracion": 2,
              "costo": 2500,
              "descripcion": "Playas, samba y el Cristo Redentor en un destino lleno de alegría.",
              "actividades": ["Cristo Redentor", "Copacabana", "Carnaval"],
              "reservado": false,
              "imagen": "rio.jpg",
              "calificacion": 4.7,
              "alojamiento": "Resort",
              "guia_incluido": true
            }
           ]
           
    }



    render(){

    console.log(this.getData())

        

        this.shadowRoot.innerHTML=`

                <card-component
                destino="París, Francia"
                duracion="20"></card-component>
                <card-component
                destino="París, Francia"
                duracion="20"></card-component>
                <card-component
                destino="París, Francia"
                duracion="20"></card-component>
                <card-component
                destino="París, Francia"
                duracion="20"></card-component>
        `
    }
}
customElements.define("app-container", AppContainer)
export default AppContainer