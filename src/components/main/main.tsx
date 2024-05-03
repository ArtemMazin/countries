import * as React from 'react';

interface IMain {
  children: React.ReactNode;
}

export function Main({ children }: IMain) {
  return <main className="container">{children}</main>;
}
