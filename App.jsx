import Background from "./Components/Background/Background";
import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";


const App = () => {
  let heroData = [
    {text1:"Dive into", text2:"what you love"},
    {text1:"Indulge", text2:"your passions"},
    {text1:"Give in to", text2:"your passions"},
  ]
  const [heroCount, setheroCount] = useState(0);
  const [playStatus, setplayStatus] = useState(false);


  useEffect(() => {
    setInterval(() => {
      setheroCount((count) => {return count===2?0:count+1})
    },3000);
  }, [])
  
  return (
    <div>
      <Background playStatus = {playStatus} heroCount={heroCount}/>
      <Navbar/>
      <Hero 
        setplayStatus={setplayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setheroCount={setheroCount}
        playStatus={playStatus}
      />
    </div>
  )
}

export default App