import './App.scss'

import InfoCard from './Component/InfoCard'

import cf from './assets/cf.png'
import cc from './assets/cc.png'
import github from './assets/github.png'
import linkedin from './assets/linkedin.png'
import mail from './assets/mail.png'
// import insta from './assets/insta.png'

import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [cflink, setCflink] = useState("https://codeforces.com/profile/SubhajeetLahiri")
  const [desc, setDesc] = useState("")
  const [fetched, setFetched] = useState(false)

  const fetchDetails = async ()=>{
    const res = await axios.get("https://codeforces.com/api/user.info?handles=SubhajeetLahiri;HelioSpookk");
    var rating1 = 0;
    var rating2 = 0;
    try {
      rating1 = res.data.result[0].rating;
      rating2 = res.data.result[1].rating;
      console.log(rating1, rating2);
      if(rating2 > rating1){
        setCflink("https://codeforces.com/profile/HelioSpookk")
        setDesc(`Rating : ${rating2}`)
      }else{
        setDesc(`Rating : ${rating1}`)
      }
    } catch (error) {
    }
    
    setFetched(true);
  }
  useEffect(()=>{
    if(fetched) return;
    fetchDetails();
  }, [cflink])


  return <div className="App">
    <div className="links d-flex flex-column justify-content-center align-items-center">
      <span className="letter">L</span>
      <span className="letter">I</span>
      <span className="letter">N</span>
      <span className="letter">K</span>
      <span className="letter">S</span>
    </div>
    <div className="row">
      <div className="col-2">
      </div>
      <div className="col-10 d-flex flex-row flex-wrap">
        <InfoCard image={cf} title="CodeForces" fetched={fetched} link={cflink} desc={desc}/>
        <InfoCard image={github} title="GitHub" link = "https://github.com/Heliospook" fetched={true} desc={"Active Developer"}/>
        <InfoCard image={cc} title="CodeChef" link="https://www.codechef.com/users/heliospook" fetched={true}  desc={"Rated 5 star"}/>
        <InfoCard image={linkedin} title="LinkedIn" link={"https://www.linkedin.com/in/subhajeet-lahiri-2a7917223/"} fetched={true} desc={"Complete profile"}/>
        {/* <InfoCard image={mail} title="Mail" link={"mailto:subhajeetlahiri@gmail.com"}/> */}
      </div>
    </div>
    <div className="mail d-flex flex-column">
      <img src={mail} alt="mail" className='mailimg' onClick={()=>{
        window.open("mailto:subhajeetlahiri@gmail.com", '_blank', 'noreferrer');
      }}/>
      {/* <div className="mailtext text-center">Mail</div> */}
    </div>
  </div>
}

export default App
