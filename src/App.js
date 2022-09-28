import './App.css';
import MainImage from './components/Image.js'
import MyInfo from './components/MyInfo.js'
import MySocials from './components/SocialIcons.js'
function App() {
  return (
    <div className="topApp">
      <MainImage />
      <MyInfo />
      <MySocials />
    </div >
  );
}

export default App;
