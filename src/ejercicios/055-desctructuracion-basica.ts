interface Reproductores {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detallitos;
}
interface Detallitos {
    autor: string;
    anio: number;
}
const reproductory: Reproductores={
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Shereen',
        anio: 2015
    }
}

/* const {volumen } = reproductory;
console.log('El volumen actual de: ', ); */

const dbzz: string[] = ['Goku', 'Vegeta', 'Trucnks'];
const [p11,p2,p33] = dbzz;
console.log('Personaje 1: ', p11);
