interface Props {
  plugins: ((value: string[]) => string)[];
  value: string;
}

export function Transformer({ plugins, children }: Props) {
  plugins ??= [];
  const tree = Array.isArray(children) ? children : [children];
  const ntree = plugins.reduce((tree, fn) => fn(tree), tree);
  return ntree;
}
