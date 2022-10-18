import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home';
import Navigation from './Components/Navigation';
import Bollywood from './Components/Bollywood';
import Technology from './Components/Technology';
import Tourism from './Components/Tourism';
import Fitness from './Components/Fitness';
import Food from './Components/Food';
import Page404 from './Components/Page404';
import Data from './Components/Data';
import FullData from './Components/FullData';

function App() {
  return (
    <>
    <div className='main'>
      <p>The</p>
    </div>
    <h1 className='siren'>Siren</h1>
    <Data>
    <Navigation />
    <Routes>
      <Route path='/' exact element = {<Home />} />
      <Route path='/Category/Bollywood' element = {<Bollywood />} />
      <Route path='/Category/Technology' element = {<Technology />} />
      <Route path='/Category/Tourism' element = {<Tourism />} />
      <Route path='/Category/Fitness' element = {<Fitness />} />
      <Route path='/Category/Food' element = {< Food />} />
      <Route path='/*' element  = { <Page404 />} />
      <Route path='/Bollywood/:id' element = {<FullData/>} />
      <Route path='/Technology/:id' element = {<FullData/>} />
      <Route path='/Tourism/:id' element = {<FullData/>} />
      <Route path='/Fitness/:id' element = {<FullData/>} />
      <Route path='/Food/:id' element = {<FullData/>} />
    </Routes>
    </Data>
    </>
  );
}

export default App;
