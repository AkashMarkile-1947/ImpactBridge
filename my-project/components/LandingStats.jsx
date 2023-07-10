const LandingStat = () => {
  return (
    <div className="section-2">
      <h1 className="text-center">Giving you can trust</h1>
      <div className="section-container flex justify-betweeen items-center">
        <div className="stat-info flex-col">
          <div
            className="flex justify-start"
            style={{ width: "fit-content", fontSize: "2rem" }}
          >
            <h2 style={{ color: "#c2410c" }}>
              <span className="fa-solid fa-shield"></span> &nbsp; Norton
            </h2>
            <h2 style={{ color: "black" }}> Assured</h2>
          </div>
          <p
            className="share-text"
            style={{ width: "60ch", letterSpacing: "0.5px" }}
          >
            We ensure that critical checks are done on all nonprofits and their
            projects to assure your donation does what it is supposed to -
            change lives.
          </p>
        </div>
        <div className="stats">
          <div className="flex justify-between items-center" style={{justifyContent: 'space-between', minWidth: 'clamp(500px, 40vw, 600px)', margin: '2rem auto'}}>
            <div className="stat flex items-center justify-center">
              <img
                src="/money-raised-icon.svg"
                alt="money-raised"
                style={{ width: "50px" }}
                className="mr-2"

              />
              <div>
                <h3 className="stat-h">50Lakhs</h3>
                <p>raised for nonprofits</p>
              </div>
            </div>
            <div className="stat flex items-center justify-center">
              <img
                src="/donors-icon.svg"
                alt="money-raised"
                style={{ width: "50px" }}
                className="mr-2"
              />
              <div>
                <h3 className="stat-h">20k</h3>
                <p>donors have contributed to causes</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="stat flex items-center justify-center">
              <img
                src="/lives-impacted-icon.svg"
                alt="money-raised"
                style={{ width: "50px" }}
                className="mr-2"
              />
              <div>
                <h3 className="stat-h">70k</h3>
                <p>lives impacted</p>
              </div>
            </div>
            <div className="stat flex items-center justify-center">
              <img
                src="/trusted-icon.svg"
                alt="money-raised"
                style={{ width: "50px" }}
                className="mr-2"
              />
              <div>
                <h3 className="stat-h">Trusted</h3>
                <p>by 150+ corporates and brands</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingStat;
