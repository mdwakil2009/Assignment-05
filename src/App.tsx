import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import { Suspense } from "react"
import Technologies from "./components/Technologies/Technologies"
import type { TechnologiType } from "./types/Technologi"
import Footer from "./components/Technologies/Footer"


const TechnologiesPromise = async(): Promise<TechnologiType[]> =>{
  const res = await fetch("/data.json")
  const data = await res.json()
  return data
}


function App() {

  return (
    <>
     <Navbar></Navbar>
     <Banner></Banner>
     <Suspense fallback={<p>Looding</p>}>
      <Technologies TechnologiesPromise={TechnologiesPromise()} ></Technologies>
     </Suspense>
     <Footer></Footer>

    
      
     </>
  )
}

export default App
