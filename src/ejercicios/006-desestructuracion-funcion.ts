
export interface Productos {
    desc: string;
    precio: number;
}
const telefonos: Productos ={
    desc: 'Nokia A1',
    precio: 150
}
const tableta: Productos = {
    desc: 'AIpad Air',
    precio: 150
}
export function calculaISVs(productoss: Productos[]): [number, number]{
    let total = 0;
    productoss.forEach(({precio})=>{
        total += precio;
    })
    return [total,total * 0.15];
}
const articuloss = [telefonos, tableta];

const[total,isvv]  = calculaISVs(articuloss);
