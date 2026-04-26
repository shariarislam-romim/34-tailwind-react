
import { Suspense } from 'react'
import './App.css'
// import DaisyNav from './component/DaisyNav'
import Navbar from './component/Navbar/Navbar'
import Pricing from './PricingOption/Pricing'
import Chart from './component/ResultChart/Chart'
import axios from 'axios'
import MarksChart from './component/MarksChart/MarksChart'

const pricingPromise = fetch('pricingData.json').then(res => res.json());
const marksPromise = axios.get('MarksData.json');
function App() {

  return (
    <>
    <header>
      <Navbar></Navbar>
      {/* <DaisyNav></DaisyNav> */}
    </header>
    <main>
      <Suspense fallback={<span className='loading loading-spinner loading-lg'></span>}>
        <Pricing pricingPromise={pricingPromise}></Pricing>
      </Suspense>
      <Suspense fallback={<span className='loading loading-spinner loading-lg'></span>}>
        <MarksChart marksPromise={marksPromise}></MarksChart>
      </Suspense>
      <Chart></Chart>
    </main>


     
    </>
  )
}

export default App
