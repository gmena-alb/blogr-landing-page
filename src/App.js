import Header from './components/Header';
import Section from './components/Section';
import Banner from './components/Banner';
import Footer from './components/Footer';

import section1Content from './articlesFirstSection';
import section2Content from './articlesSecondSection';

function App() {
  return (
    <>
      <Header />
      <Section
        sectionContent={section1Content}
        title={'Designed for the future'}
        section={'section-1'}
      />
      <Banner />
      <Section sectionContent={section2Content} section={'section-2'} />
      <Footer />
    </>
  );
}

export default App;
