
let Habilidades: string[] = ['Bash','Counter','Healing'];
//Habilidades.push('Santiago');

interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}

const personajes: Personaje = {
    nombre: 'Strider',
    hp: 100,
    habilidades: ['Bash', 'Counter', 'Healing']
}
personajes.puebloNatal = 'Pueblo Paleta';

console.table(personajes);