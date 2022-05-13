export function escape(
  target: any,
  key: string,
  descriptor: PropertyDescriptor
) {
  const method = descriptor.value;
  descriptor.value = function (...args: any[]) {
    let template = method.apply(this, args);
    if (typeof String) {
      //   console.log(`@escape em ação na classe: ${this.constructor.name}`);

      template = template.replace(/<script>[\s\S]*?<\/script>/, '');
    }
    return template;
  };
  return descriptor;
}
