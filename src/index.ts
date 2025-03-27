type Components = Record<string, () => Promise<unknown>>;

const components: Components = import.meta.glob('@/components/*.vue', {
  eager: false,
  import: 'default'
})

export default Object.fromEntries(
  Object.entries(components).map(([path, component]) => {
    const componentName = path.split('/').pop()?.replace('.vue', '');
    return [componentName, component];
  })
);
