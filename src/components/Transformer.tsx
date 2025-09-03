import {Fragment} from 'react';

interface Props {
  plugins: ((value: string[]) => string)[];
  value: string;
}

export function Transformer({ plugins, value }: Props) {
  plugins ??= [];
  const tree = Array.isArray(value) ? value : [value];
  return plugins
  .reduce((tree, fn) => fn(tree), tree)
  // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
    .map((children, key) => <Fragment key={key}>{children}</Fragment>);
  
}
