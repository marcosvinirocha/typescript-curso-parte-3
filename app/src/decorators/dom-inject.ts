export function domInject(seletor: string) {
  return function (target: any, propertyKey: string) {
    console.log('modificando Prototype');

    const getter = function () {
      const elemento = document.querySelector(seletor);
      console.log(
        `buscando elemento do dom com o seletor ${seletor} para injetar em ${propertyKey}`
      );

      return elemento;
    };
    Object.defineProperty(target, propertyKey, {
      get: getter,
    });
  };
}
