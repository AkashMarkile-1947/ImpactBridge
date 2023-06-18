
import Nav from '../components/Navbar';
import './App.css'
import Slider from '../components/Slider';
import MissionInfo from '../components/Mission';
import MonthlyMission from '../components/MonthlyMission';
import Footer from '../components/Footer';
import LandingStat from '../components/LandingStats';

function App() {
  return (
    <>
      <Nav />
      <Slider />
      <MissionInfo />
      <MonthlyMission />
      <LandingStat />
      <Footer />
    </>
  )
}

export default App
