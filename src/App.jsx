import Nav from './assets/Nav'
import {Route, Routes } from 'react-router-dom'
import Car from './assets/Car';
import Bike from './assets/Bike';
import Products from './assets/Products';
import Count from './assets/Count';
import TextUtils from "./assets/TextUtils";
import Data from './assets/Data';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Data/>} />
        <Route path='/car' element={<Car />} />
        <Route path="/textutils" element={<TextUtils />} />
        <Route path='/bike' element={<Bike />} />
        <Route path='/product' element={<Products />} />
        <Route path='/count' element={<Count />} />
      </Routes>
    </>
  )
}

export default App