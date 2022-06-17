// Creamos la interfaz IPersona para poder tipar en el futuro nuestro objeto
export interface IPersona {
    nombre: string,
    edad: number,
    imagen: IPhoto,
    cascos: boolean,
    gafas: boolean,
    motivacion: number,
    felicidad: number,
    descripcion?: string
}

// generamos nuestra interfaz IPhoto que podremos reutilizar que va a ser un objeto que tenga las propiedades de las fotos
export interface IPhoto {
    src: string,
    alt: string
}