import * as React from 'react';
import { Header } from './components/header/header';
import { Main } from './components/main/main';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/home-page/home';
import NotFound from './pages/not-found/not-found';

export default function App() {
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Main>
    </>
  );
}
