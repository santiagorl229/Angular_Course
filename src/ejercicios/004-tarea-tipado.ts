interface SuperHeroesito{
    nombre: string;
    edad: number;
    direccion: DireccionPapu,
    mostrarDireccion: () => string;
}
interface DireccionPapu{
    calle: string;
    pais: string;
    ciudad: string;    
}
const superHereo: SuperHeroesito = {
    nombre: "Spiderman",
    edad: 30,
    direccion: {
        calle: 'Main St',
        pais: 'USA',
        ciudad: 'NY'
    },
    mostrarDireccion(){
        return this.nombre + ','+ this.direccion.ciudad + ', ' + this.direccion.pais;
    }
}
const direcciones = superHereo.mostrarDireccion();
console.log(direccion);