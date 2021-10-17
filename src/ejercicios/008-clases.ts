class PersonaNatural{
    constructor(
        public nombre: string,
        public direccion: string
    ){
    }
}
class Heroes extends PersonaNatural {
    constructor(
        public alterEgo: string,
        public edad: number,
        public NombreReal: string   
        ){
    super(NombreReal, 'New York');
    }

}
const ironmancito = new Heroes('Bebe', 45, 'Tony');


/* ironmancito.edad; */
console.log(ironmancito);