export function inspect(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const method = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`------Metódo${propertyKey} executado`);
    console.log(`-----Parâmetros: ${JSON.stringify(args)}`);
    const retorno = method.apply(this, args);
    console.log(`-----Valor de retorno: ${JSON.stringify(retorno)}`);
    return retorno;
  };
  return descriptor;
}
