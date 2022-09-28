import Button from './Button.png'
import ButtonTwo from './ButtonTwo.png'
import About from './About.js'

export default function MyInfo() {
  return <div className="afterImage"> <h1 className="infoHead--one">Daniel Cross</h1> <p className="infoTwo">Fullstack Developer</p> <p className="website">dancross.website</p> <img className="LinkedButton" src={Button} alt='Email' /> <img className="OtherButton" src={ButtonTwo} alt='Linkedin' /> <About /> </div>
}