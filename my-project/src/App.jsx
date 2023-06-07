
import Nav from '../components/Navbar';
import LoginForm from '../components/Login'
import './App.css'
import SignUpForm from '../components/Signup';
import RegistrationForm1 from '../components/NgoForm';
import DocumentForm from '../components/NGOForm2';
import Slider from '../components/Slider';
import MissionInfo from '../components/Mission';
import MonthlyMission from '../components/MonthlyMission';
import Footer from '../components/Footer';
import ChildHunger from '../components/ChildHunger';

function App() {
  return (
    <>
      <Nav />
      <Slider />
      <MissionInfo />
      <MonthlyMission />
      <Footer />
    </>
  )
}

export default App
