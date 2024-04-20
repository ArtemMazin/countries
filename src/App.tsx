import * as React from 'react';
import { Header } from './components/header/header';

export interface IAppProps {}

export default function App(props: IAppProps) {
  return (
    <>
      <Header />
    </>
  );
}
