export function domInject(seletor) {
    return function (target, propertyKey) {
        console.log('modificando Prototype');
        const getter = function () {
            const elemento = document.querySelector(seletor);
            console.log(`buscando elemento do dom com o seletor ${seletor} para injetar em ${propertyKey}`);
            return elemento;
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
        });
    };
}
