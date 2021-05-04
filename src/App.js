import React, { lazy, Suspense } from 'react';
import Header from './components/Header/Header'
import ContentFirstSection from './components/Content/firstSection/ContentFirstSection'
const Footer = lazy(()=> import ('./components/Footer/Footer'))
const ContentSecondSection = lazy(()=>import('./components/Content/secondSection/ContentSecontSection'))
const App = () => {
  return (
    <div>
      <Header/>
        <ContentFirstSection/>
        <Suspense fallback={<h1>Still Loading…</h1>}>
          <ContentSecondSection/>
          <Footer/>
        </Suspense>
    </div>
  );
}

export default App;
