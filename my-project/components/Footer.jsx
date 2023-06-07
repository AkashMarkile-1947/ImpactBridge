import './tailwind.css'


const Footer = () => {
    return (
      <footer className="bg-gray-950 text-white p-6footer " style={{background: '#26272b', minHeight: '300px'}}>
      <div className="mx-auto" style={{maxWidth: '1280px'}}>
     <div className="footer-container">
        <div style={{maxWidth: "300px", marginBlock: '3rem'}}>
          <h1 className="section-heading text-left md:text-center self-start">ImpactBridge</h1>
          <p className=" text-left md:text-center self-start">Crossing the bridge to a better tomorrow.</p>
        </div>
        <div style={{maxWidth: "300px"}}>
          <p className="footer-h mb-4">Missions</p>
          <p className="subtext">No child Hungry</p>
          <p className="subtext">Empower Young Minds</p>
          <p className="subtext">Embrace Abilities, Inspire Change</p>
          <p className="subtext">Caring for Our Seniors</p>
          <p className="subtext">Hope and Healing Together</p>
        </div>
        <div style={{maxWidth: "300px"}}>
          <p className="footer-h mb-4">Quick Links</p>
          <p className="subtext">About Us</p>
          <p className="subtext">Contact Us</p>
          <p className="subtext">Contribute</p>
          <p className="subtext">NGO policy</p>
          <p className="subtext">privacy policy</p>
        </div>
      </div>
    <hr className="w-full" />
    <div className="flex-col md:flex md:justify-between md:flex-row justify-start items-center">
    <div>
        <p className="share-text">Copyright © 2023</p>
    </div>
    <div className="flex justify-around items-center">
      <p className="share-text">Made with &nbsp;<i className="fa-solid fa-heart"></i> In Pune</p>
    </div>
    </div>
    </div>
  </footer>
  
    );
  };
  
  export default Footer;