import Twitter from './TwitterIcon.png'
import Facebook from './FacebookIcon.png'
import Instagram from './InstagramIcon.png'
import Github from './GitHubIcon.png'

export default function MySocials() {
  return <div className="Socials">
    <img className="SocialOne" src={Twitter} alt="Twitter" />
    <img className="SocialTwo" src={Facebook} alt="Facebook" />
    <img className="SocialThree" src={Instagram} alt="Instagram" />
    <img className="SocialFour" src={Github} alt="Github" />
  </div>
}