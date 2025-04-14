import './Hero.css'
import arrow_btn from '../../assets/arrow_btn.png'
import play_icon from '../../assets/play_icon.png'
import plause_icon from '../../assets/pause_icon.png'

const Hero = ({heroData,setheroCount,heroCount, setplayStatus,playStatus}) => {
  return (
    <div className='hero'>
        <div className="hero-text">
            <p>{heroData.text1}</p>
            <p>{heroData.text2}</p>
        </div>
        <div className="hero-explore">
            <p>Explore the features</p>
            <img src={arrow_btn} alt="" />
        </div>
         <div className="hero-dot-play">
            <ul className="hero-dots">
                <li onClick={()=>setheroCount(0)} className={heroCount===0 ? "hero-dot orange": "hero-dot"}></li>
                <li onClick={()=>setheroCount(1)} className={heroCount===1 ? "hero-dot orange": "hero-dot"}></li>
                <li onClick={()=>setheroCount(2)} className={heroCount===2 ? "hero-dot orange": "hero-dot"}></li>
            </ul>
            <div className="hero-play">
                <img onClick={()=> setplayStatus(!playStatus)} src={playStatus?plause_icon:play_icon} alt="" />
                <p>See the video</p>
            </div>
         </div>
    </div>
  )
}

export default Hero