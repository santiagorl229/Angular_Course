function queTipoSoyBebe<T>(argumento: T ){
    return argumento;
}
let soyStringcito = queTipoSoyBebe('Hola Mundo');
let soyStringcitos = queTipoSoyBebe(112);
let soyExplicitos = queTipoSoyBebe<number>(112);   
