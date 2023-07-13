import React, { useEffect, useState } from "react";
import Nav from "./Navbar";
import "./userdashboard.css";
import { useNavigate } from "react-router-dom";
import RequestedNGO from "./RequestedNGO";

const AdminDashboard = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  const loginData = JSON.parse(sessionStorage.getItem("login-data"));
  if (loginData) {
    if (!loginData.isAdmin) {
      setTimeout(() => navigate("../", {replace: true}), 5000);
      return (
        <div className="page-not-found">
          <h1>404</h1>
          <h2>You Don't have access to this page</h2>
        </div>
      );
    }
  } else {
    setTimeout(() => navigate("../", {replace: true}), 5000);
    return (
      <div className="page-not-found">
        <h1>404</h1>
        <h2>You Don't have access to this page</h2>
      </div>
    );
  }
  let name = `${loginData.firstname} ${loginData.lastname}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/AdminDashboard");

        const data = await response.json();

        if (response.status === 200 && data.status === "ok") {
          setUserData(data.data);
        } else {
          console.log(
            "Error: Response status is not 200 or data status is not 'ok'"
          );
        }
      } catch (err) {
        console.log("Error:", err.message);
      }
    };

    fetchData();
  }, []);

  function processObjects(objects) {
    let mission = "";
    let ammount = 0;
    let transactions = 0;
    if (objects) {
      transactions = objects.length;
    }
    if (objects) {
      objects.forEach((obj) => {
        mission = obj.Mission;
        ammount += parseInt(obj.ammount);
      });
    }

    const result = {
      mission: mission,
      ammount: ammount,
      transactions: transactions,
    };

    return result;
  }

  const periodPayments = (period) => {
    if (userData) {
      const periodPayment = userData.filter(
        (item) => item.modeOfTransaction === period
      );
      return periodPayment;
    }
    return [];
  };
  let date = new Date().toISOString().split("T")[0].split("-");
  date = `${date[2]}-${date[1]}-${date[0]}`;

  let MonthlyPayments = processObjects(periodPayments("Monthly Payment"));
  let OneTimePayments = processObjects(periodPayments("One Time Payment"));
  let TotalPayments = processObjects(userData);

 // console.log(userData, TotalPayments);

  return (
    <>
      <div className="grid-container">
        <div className="navbar">
          <Nav color="wadw" toggle="aaw" />
        </div>
        <div className="sidebar">
          <Sidebar name={name} />
        </div>
        <div className="main-content">
          <div className="user-welcome">
            <div className="welcome-header">
              <h1 className="welcome-name">Welcome, {name}</h1>
              <span className="welcome-date">{date}</span>
            </div>
            <div className="welcome-header">
              <blockquote className="welcome-quote">
                Your support can change lives. Together, let's make a positive
                impact and uplift those in need.
              </blockquote>

              <button
                onClick={() => navigate("../", { replace: true })}
                className="welcome-donate-button"
              >
                Donate Now &rarr;
              </button>
            </div>
          </div>
          <div
            className="flex  w-[90%] m-2 user-container card-container"
            style={{ justifyContent: "space-around" }}
          >
            <Dcard
              cardTitle="Total Donations"
              d={userData ? userData.length : 0}
              ammount={TotalPayments.ammount}
            />
            <Dcard
              cardTitle="Monthly Donations"
              d={MonthlyPayments.transactions}
              ammount={MonthlyPayments.ammount}
            />
            <Dcard
              cardTitle="One Time Donations"
              d={OneTimePayments.transactions}
              ammount={OneTimePayments.ammount}
            />
          </div>
          <NgoAction />
          <Component userData={userData} />
        </div>
      </div>
    </>
  );
};

const Dcard = ({ cardTitle, d, ammount }) => {
  return (
    <div className="d-card">
      <p>{cardTitle}</p>
      <h2 className="d-card-title">{d}</h2>
      <p>ammount: {ammount} &#8377;</p>
    </div>
  );
};

const Component = ({ userData }) => {
  const [activeDiv, setActiveDiv] = useState("div1");

  const handleClick = (divId) => {
    setActiveDiv(divId);
  };

  return (
    <div className="user-container">
      <h1
        className="section-heading p-2"
        style={{ fontSize: "32px", lineHeight: "48px" }}
      >
        Donation Summary
      </h1>
      <div className="component">
        <div className="buttons-container">
          <h2 className="summary-h">Missions</h2>
          <button
            className="mission-button"
            onClick={() => handleClick("div1")}
          >
            No child Hungry
          </button>
          <button
            className="mission-button"
            onClick={() => handleClick("div2")}
          >
            Empower Young Minds
          </button>
          <button
            className="mission-button"
            onClick={() => handleClick("div3")}
          >
            Embrace Abilities, Inspire Change
          </button>
          <button
            className="mission-button"
            onClick={() => handleClick("div4")}
          >
            Caring for Our Seniors
          </button>
          <button
            className="mission-button"
            onClick={() => handleClick("div5")}
          >
            Hope and Healing Together
          </button>
        </div>
        <div className="div-container">
          <MissionStat
            div="div1"
            mission="No child Hungry"
            activeDiv={activeDiv}
            userData={userData}
          />
          <MissionStat
            div="div2"
            mission="Educate a child"
            activeDiv={activeDiv}
            userData={userData}
          />
          <MissionStat
            div="div3"
            mission="Support Exceptional"
            activeDiv={activeDiv}
            userData={userData}
          />
          <MissionStat
            div="div4"
            mission="Senior-Care"
            activeDiv={activeDiv}
            userData={userData}
          />
          <MissionStat
            div="div5"
            mission="Heal Together"
            activeDiv={activeDiv}
            userData={userData}
          />
        </div>
      </div>
    </div>
  );
};

const MissionStat = ({ div, mission, activeDiv, userData }) => {
  if (!userData) {
    return (
      <div className="transaction-container">
        <p>No transactions yet</p>
      </div>
    );
  }
  const missionArr = userData.filter((item) => item.Mission === mission);
  return (
    <div
      className={`transaction-container ${activeDiv === div ? "active" : ""}`}
    >
      <h2 className="transaction-heading summary-h">Past Transactions</h2>
      {userData &&
        missionArr.map((item) => (
          <div className="transaction-item" key={item.timestamp}>
            <p className="transaction-stat">userID: {item.userId}</p>
            <p className="transaction-stat">Mode: {item.modeOfTransaction}</p>
            <p className="transaction-stat">Amount: {item.ammount} &#8377;</p>
            <p className="transaction-stat">
              Date: {item.timestamp.split("T")[0]}
            </p>
            <p className="transaction-stat">NGO: {item.NGOName}</p>
          </div>
        ))}
    </div>
  );
};

const Sidebar = ({ name }) => {
  const navigate = useNavigate();
  const logout = () => {
    const loginData = sessionStorage.setItem("login-data", null);
    navigate("../", { replace: true });
  };
  return (
    <div className="flex flex-col justify-center items-center h-full relative">
      <div className="flex flex-col justify-center items-center">
        <img
          src="/avatar.png"
          alt="avatar"
          style={{ width: "100px", height: "100px" }}
        />
        <h2 className="d-card-title">{name}</h2>
      </div>
      <button
        onClick={() => navigate("../", { replace: true })}
        className="text-center p-2 logout"
        style={{ borderRadius: "8px", marginBlock: "5px", fontWeight: "500" }}
      >
        Donate Now &rarr;
      </button>
      <button
        onClick={logout}
        className="text-center p-2 logout dashboard-a-btn"
        style={{ borderRadius: "8px", marginBlock: "5px", fontWeight: "500" }}
      >
        Logout &rarr;
      </button>
    </div>
  );
};

const NgoAction = () => {
  const [ngoData, setNGOData] = useState(null);

  useEffect(() => {
      fetchNgoData();
  }, []);

  const fetchNgoData = async () => {
      try {
          const response = await fetch("http://localhost:8080/api/manageNGOlist").then(res => res.json());
          if (response.status === "ok") {
              setNGOData(response.data);
              console.log("updated", response.data);          
          } else {
              console.log(response);
              alert(response.data);
          }
      } catch (error) {
          alert("Failed to fetch NGO data: " + error);
      }
  };

  return (
    <div className="user-container flex justify-between items-start w-full">
        <ManageNGO  fetchNgoData={fetchNgoData} ngoData={ngoData}/>
        <RequestedNGO fetchNgoData={fetchNgoData} />
    </div>
  )
}

const ManageNGO = ({fetchNgoData, ngoData}) => {
    const removeNGO = async (ngo) => {
      console.log("hello");
      try {
          const response = await fetch("http://localhost:8080/api/removeNGO", {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({ngo})
          }).then(res => res.json());

          if (response.status === "ok") {
              alert("Success");
              fetchNgoData(); // Fetch updated NGO data
          } else {
              alert("Failed");
              console.log(response.data);
          }
      } catch (error) {
          alert("Failed: " + error);
      }
  };
  const blockNGO = async(organizationName) => {
    try {
    const response  = await fetch("http://localhost:8080/api/blockNGO", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({organizationName})
    }).then(res =>  res.json());
    if (response.status === "ok") {
      alert("Success");
      fetchNgoData(); // Fetch updated NGO data
    } else {
      alert("Failed");
      console.log(response.data);
    }
    } catch (error) {
      alert("Failed: " + error);
    }
  }

  return (
      <>
          {ngoData ? (
              <div className="manage-ngo" style={{margin: "1rem auto"}}>
                  <h2 className="section-heading p-2" style={{ fontSize: "1.2rem", lineHeight: "1.5rem" }}>
                      Manage NGOs
                  </h2>
                  {ngoData.map((item, id) => (
                      <div
                          className="ngo-field flex justify-between items-center w-full p-2"
                          key={id}
                          style={{ border: "none", borderBottom: "1px solid #c2410c", width: "90%", margin: "0 auto"}}
                      >
                          <p>{item.organizationName}</p>
                          <div className="flex justify-between" style={{width: "100px", marginRight: "20px"}}>
                              { !item.isBlocked ?
                                <button className="welcome-donate-button mr-2 block" onClick={() =>  blockNGO(item.organizationName)} >Block</button>
                                :
                                <button className="welcome-donate-button mr-2 unblock " onClick={() =>  blockNGO(item.organizationName)}>Unblock</button>
                              }
                              <button className="welcome-donate-button mx-2 secondary" onClick={() => removeNGO(item)}>
                                  Remove
                              </button>
                          </div>
                      </div>
                  ))}
              </div>
          ) : (
              <div className="manage-div" style={{margin: "1rem auto", minHeight: "200px"}}>
                  <h2 className="section-heading p-2" style={{ fontSize: "1.2rem", lineHeight: "1.5rem" }}>
                      Manage NGOs
                  </h2>
                  <div className="flex justify-center items-center w-full">
                      <h2>No NGO's currently available</h2>
                  </div>
              </div>
          )}
      </>
  );
};


/* const RequestedNGO = ({fetchNgoData}) => {
  const [requestedNGO, setRequestedNGO] = useState(null);
  const [selectedObject, setSelectedObject] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    getRequestedNGO();
  }, [])

  const handleObjectClick = (object) => {
    setSelectedObject(object);
    setIsDialogOpen(true);
  };

  const getRequestedNGO = async() => {
    try {
    const response  = await fetch('http://localhost:8080/api/RequestedNGO').then(res => res.json());
   
    if (response.status === "ok") {
      setRequestedNGO(response.data);
      console.log(requestedNGO);
    } else {
      console.log(response.data)
    }
  } catch (error) {
    alert("failed", error)
  }
  }

  const approveNGO = async(organizationName) =>  {
    try {
    const response = await fetch("http://localhost:8080/api/approveReqNGO", {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({organizationName})
      }).then(res => res.json());

      if (response.status == "ok") {
        alert("success");
        getRequestedNGO();
        fetchNgoData();
      }  else {
        alert("Failed");
        console.log(response.data);
      }
    } catch (error) {
      alert("failed", error)
    }

  }

  const rejectNGO = async (organizationName) => {
    try {
      const response = await fetch("http://localhost:8080/api/rejectReqNGO", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({organizationName})
        }).then(res => res.json());
  
        if (response.status == "ok") {
          alert("success");
          getRequestedNGO();
        }  else {
          alert("Failed");
          console.log(response.data);
        }
      } catch (error) {
        alert("failed", error)
      }
  }

  //console.log(requestedNGO);
  return (
    <div className="manage-ngo" style={{width: "60%", alignItems: "flex-start", margin: "1rem auto"}}> 
    <h2
      className="section-heading p-2"
      style={{ fontSize: "1.2rem", lineHeight: "1.5rem" }}>Requested NGOs</h2>
    {
      requestedNGO ? 
        <>
        {
        requestedNGO.map((item, id) => {
          return (
            <div className="ngo-field flex justify-between items-center w-full p-2" key={id} onClick={() => handleObjectClick(item)} style={{ border: "none", borderBottom: "1px solid #c2410c", width: "90%", margin: "0 auto"}}>
                      <p>{item.organizationName}</p>
                      <div>
                      <button className="welcome-donate-button mr-2" onClick={() => approveNGO(item.organizationName)}>Approve</button>
                      <button className="welcome-donate-button mx-2" onClick={() => rejectNGO(item.organizationName)}>Reject</button>
                      </div>
                    </div>
          )
        })
      }
        <ObjectDialog
        object={selectedObject}
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
      </>
       : <div className="manage-ngo" style={{width: "60%", margin: "1rem auto", minHeight: "200px"}}>
        <h2>no new requested NGO</h2>
       </div>
    }
    </div>
  )
}

const ObjectDialog = ({ object, isOpen, onClose }) => {
  if (!isOpen || !object) {
    return null;
  }

  return (
    <div>
            <button className="text-right" onClick={onClose}>Close</button>

      <div>
        <h3>{object.organizationName}</h3>
        <p>{object.contactNGOEmail}</p>
        <p>{object.missionStatement}</p>
        <p>{object.missionStatement}</p>
        <p>{object.activitiesDescription}</p>
      </div>
    </div>
  );
};

 */
export default AdminDashboard;
