import './App.css';
import Header from './components/header-component/header';
import Hero from './components/hero-component/hero';
import Showcase from './components/showcase-component/showcase';
import Slider from './components/slider-component/slider';
import WeDo from './components/what-we-do-component/WeDo';
import sliderData from './components/SliderData/sliderData';
import ShowcaseTwo from './components/showcase-two-component/showcaseTwo';
import Statistics from './components/statistics-component/statistics';
import Contacts from './components/contacts-component/contacts';
import Footer from './components/footer-component/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Showcase />
      <WeDo />
      <Slider slides={sliderData}/>
      <ShowcaseTwo />
      <Statistics />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
