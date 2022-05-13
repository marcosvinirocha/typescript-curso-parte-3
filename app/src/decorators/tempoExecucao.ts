export function logarTempoDeExecucao(emSegundos: boolean = false): Function {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const method = descriptor.value;
    descriptor.value = function (...args: any[]) {
      let divisor = 1;
      let unidade = 'milisegundos';

      if (emSegundos) {
        divisor = 1000;
        unidade = 'segundos';
      }
      const t1 = performance.now();
      //chamar o método original
      const result = method.apply(this, args);
      const t2 = performance.now();
      console.log(
        `${propertyKey} executado em ${(t2 - t1) / divisor} ${unidade}`
      );
      result;
    };
    return descriptor;
  };
}
