export function logarTempoDeExecucao(emSegundos = false) {
    return function (target, propertyKey, descriptor) {
        const method = descriptor.value;
        descriptor.value = function (...args) {
            let divisor = 1;
            let unidade = 'milisegundos';
            if (emSegundos) {
                divisor = 1000;
                unidade = 'segundos';
            }
            const t1 = performance.now();
            const result = method.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertyKey} executado em ${(t2 - t1) / divisor} ${unidade}`);
            result;
        };
        return descriptor;
    };
}
