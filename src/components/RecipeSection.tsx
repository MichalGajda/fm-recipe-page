import type { ReactNode } from 'react';

type Props = {
  header: string;
  children: ReactNode;
};

export default function RecipeSection({ header, children }: Props) {
  return (
    <section className='recipe__section'>
      <h2>{header}</h2>
      {children}
    </section>
  );
}
