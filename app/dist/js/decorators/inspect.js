export function inspect(target, propertyKey, descriptor) {
    const method = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`------Metódo${propertyKey} executado`);
        console.log(`-----Parâmetros: ${JSON.stringify(args)}`);
        const retorno = method.apply(this, args);
        console.log(`-----Valor de retorno: ${JSON.stringify(retorno)}`);
        return retorno;
    };
    return descriptor;
}
