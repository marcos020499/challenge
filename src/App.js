import React, { lazy, Suspense } from 'react';
import Header from './components/Header/Header'
import ContentFirstSection from './components/Content/firstSection/ContentFirstSection'
import ContentSecontSection from './components/Content/secondSection/ContentSecontSection'
import Footer from './components/Footer/Footer'
const ContentSecondSection = lazy(()=>import('./components/Content/secondSection/ContentSecontSection'))
const App = () => {
  return (
    <div>
      <Header/>
      <Suspense fallback={<h1>Still Loading…</h1>}>
        <ContentSecondSection/>
        <ContentSecondSection/>
        </Suspense>
      <Footer/>
    </div>
  );
}

export default App;
