import Nav from "./Navbar";
import { useState } from "react";
import "./tailwind.css";

export const Hero = ({ mission, tagline, footerT, action, Himg }) => {
  return (
    <div className={`hero-container relative ${Himg} `}>
      <div className="content-center">
          <h1 className="title-heading text-center">Mission:</h1>
          <h1 className="title-heading text-center">{mission}</h1>
          <h3 className="title-tagline text-center">{tagline}</h3>
        </div>
        <div className="content-footer flex justify-around w-full items-center">
          <p className="footer-title">{footerT}</p>

          <div className="hero-action-buttons flex">
            <a
              href="#donate"
              className="focus:outline-none text-white focus:ring-4 focus:ring-green-300 font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2 hero-donate "
            >
              <span className="fa-solid fa-heart"></span> &nbsp;{action}
            </a>
          </div>
        </div>
        <div className="overlay">
        <Nav color="tarnsparent" />
        </div>
    </div>
  );
};

export const HungerSection = ({ header, subheading, info, sectionimg }) => {
  return (
    <div className="section-container flex justify-between items-center">
      <div className="section-info">
        <h1 className="section-heading">{header}</h1>
        <h3 className="section-subheading">{subheading}</h3>
        <div className="container-info">{info}</div>
      </div>
      <div className="section-img">
        <img src={sectionimg} alt={sectionimg} />
      </div>
    </div>
  );
};

export const HungerSection2 = ({
  Simg,
  header,
  subheading,
  info,
  Hs1,
  s1,
  if1,
  Hs2,
  s2,
  if2,
  Hs3,
  s3,
  if3,
}) => {
  return (
    <div className="section-2">
      <div className="section-container flex justify-between items-center pt-4">
        <div className="section-img">
          <img src={Simg} alt="hunger-2.png" className="s-img" />
        </div>
        <div className="section-info">
          <h1 className="section-heading">{header}</h1>
          <h3 className="section-subheading">{subheading}</h3>
          <div className="container-info">
            <p>{info}</p>
            <div className="icon-bar flex m-2">
              <div className="section-icon">
                <span className={Hs1}></span>
              </div>
              <div className="section-info">
                <h3 className="bar-heading">{s1}</h3>
                <h4 className="bar-text">{if1}</h4>
              </div>
            </div>
            <div className="icon-bar flex">
              <div className="section-icon">
                <span className={Hs2}></span>
              </div>
              <div className="section-info">
                <h3 className="bar-heading">{s2}</h3>
                <h4 className="bar-text">{if2}</h4>
              </div>
            </div>
            <div className="icon-bar flex">
              <div className="section-icon">
                <span className={Hs3}></span>
              </div>
              <div className="section-info">
                <h3 className="bar-heading">{s3}</h3>
                <h4 className="bar-text">{if3}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SupportedNgoBanner = () => {
  return (
    <div className="section-2">
      <div className="section-container flex justify-between items-center">
        <div className="section-info assured">
          <div
            className="flex justify-start"
            style={{ width: "fit-content", margin: "0 auto" }}
          >
            <h1>
              <span className="fa-solid fa-shield"></span> &nbsp; Norton
            </h1>
            <h1 style={{ color: "black" }}> Assured</h1>
          </div>
          <p className="section-subtitle text-center">
            Our promise that your giving is doing what it
          </p>
          <p className="section-subtitle text-center">
            supposed to-changing lives.
          </p>
        </div>
        <div className="NGOs section-img">
          <h1 className="ngo-heading mx-auto text-center">Our Supported NGO</h1>
          <div className="ngo-icons flex justify-center items-center mx-auto">
            <img src="/ngo1.png" alt="ngo" className="ngo-icon" />
            <img src="/ngo2.png" alt="ngo" className="ngo-icon" />
            <img src="/ngo3.png" alt="ngo" className="ngo-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const ShareBanner = () => {
  return (
    <div className="section-2" style={{ background: "#f5f5f5" }}>
      <div className="section-container flex justify-between items-center">
        <div className="section-img mx-auto">
          <img src="/share-illustartion.png" alt="share-illustartion.png" />
        </div>
        <div className="section-info assured text-center mx-auto">
          <h3 className="section-share-h">
            Share this mission with your network
          </h3>
          <p className="share-text">
            Every share will be a step towards helping a life in need. By
            reaching out to
          </p>
          <p className="share-text">
            your family and friends you can make a larger impact.
          </p>
          <div className="share-btns flex mx-auto justify-center items-center m-2 share-text">
            <button
              className="focus:outline-none text-white focus:ring-4 focus:ring-green-300 font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2 share-fb share-btn"
              style={{
                fontSize: "1.2rem",
                fontWeight: "500",
                marginRight: "10px",
              }}
            >
              <i className="fa-brands fa-facebook"></i> &nbsp;&nbsp;Share on
              Facebook
            </button>
            <button
              className="focus:outline-none text-white focus:ring-4 focus:ring-green-300 font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2 share-wa share-btn"
              style={{ fontSize: "1.2rem", fontWeight: "500" }}
            >
              <i className="fa-brands fa-whatsapp"></i> &nbsp;&nbsp;Share on
              Whatsapp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const DonateComponent = ({ action, img }) => {
  const [toggleMode, setToogglMode] = useState(true);
  const [oneTAmmount, setOneTAmmount] = useState(500);
  const [children, setChildren] = useState(1);

  const handleInput = (e) => {
    setOneTAmmount((prev) => e.target.value);
    console.log(oneTAmmount);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="section-container flex justify-between items-center"
      id="donate"
    >
      <div className="section-img">
        <img src={img} alt="/Child-Hunger-cover-transformed.jpeg" />
      </div>
      <div className="section-info">
        <h1 className="donate-heading text-center" style={{ fontSize: "2rem" }}>
          Empathy in Action: Join the Movement, Donate Today!
        </h1>
        <div className="flex justify-center items-center text-xl d-btn-container">
          <button
            className={`one-time d-btns ${!toggleMode ? "btn-active" : ""}`}
            onClick={() => setToogglMode((prev) => false)}
          >
            One Time
          </button>
          <button
            className={`monthly d-btns ${toggleMode ? "btn-active" : ""}`}
            onClick={() => setToogglMode((prev) => true)}
          >
            Monthly
          </button>
        </div>
        {toggleMode && (
          <div>
            <form
              method="post"
              className="mission-donation flex flex-col justify-center mx-auto"
              onSubmit={handleSubmit}
            >
              <div className="footer-action flex justify-center items-center monthly-ammount">
                <button
                  className="fa-solid fa-minus"
                  onClick={() =>
                    setChildren((prev) => {
                      return prev !== 1 ? prev - 1 : prev;
                    })
                  }
                ></button>
                <div className="children-helping">{children} Children</div>
                <button
                  className="fa-solid fa-plus"
                  onClick={() => setChildren(children + 1)}
                ></button>
              </div>
              <p className="donation-ammount text-center">
                {children * 1000} per month
              </p>
              <button
                type="submit"
                className="focus:outline-none text-white focus:ring-4 focus:ring-green-300 font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2 "
                style={{ backgroundColor: "#c2410c" }}
              >
                <span className="fa-solid fa-heart"></span> &nbsp;{action}
              </button>
              <p className="share-text text-center">
                Thanks, for your helping hand INR {children * 1000}
              </p>
              <p className="share-text text-center">
                {children * 1000} will be deducted from your account, cancel
                anytime
              </p>
            </form>
          </div>
        )}
        {!toggleMode && (
          <div>
            <form
              method="post"
              className="mission-donation flex flex-col justify-center mx-auto"
              onSubmit={handleSubmit}
            >
              <input
                type="number"
                min="500"
                required
                value={oneTAmmount}
                onChange={handleInput}
                name="OneTAmmount"
                className="rounded-lg"
              />
              <button
                type="submit"
                className="focus:outline-none text-white focus:ring-4 focus:ring-green-300 font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2 "
                style={{ backgroundColor: "#c2410c" }}
              >
                <span className="fa-solid fa-heart"></span> &nbsp;{action}
              </button>
              <p className="share-text text-center">
                Thanks, for your helping hand INR {oneTAmmount}
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
