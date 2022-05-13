export function escape(target, key, descriptor) {
    const method = descriptor.value;
    descriptor.value = function (...args) {
        let template = method.apply(this, args);
        if (typeof String) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        return template;
    };
    return descriptor;
}
