import { calculaISVs, Productos } from "./006-desestructuracion-funcion";

const carritoCompras: Productos[]  = [
    {
        desc: 'Telefono 1',
        precio: 100
    },
    {
        desc: 'Telefono 2',
        precio: 150
    }
];
const [total, isvv] = calculaISVs(carritoCompras);
console.log('Total',total);
console.log('ISV',isvv);
