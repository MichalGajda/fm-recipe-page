import type { ReactNode } from 'react';
import type { ListType } from '../types';

type Props = {
  children: ReactNode;
  listType: ListType;
};

export default function RecipeList({ children, listType }: Props) {
  const ListElement = listType === 'ordered' ? 'ol' : 'ul';

  return <ListElement>{children}</ListElement>;
}
