import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MonthlyMission = () => {
  const [missionStat, setMissionStat] = useState([]);

  useEffect(() => {
    onLoad();
  }, []);

  console.log(missionStat && missionStat[0]);

  const Missions = [
    "No child Hungry",
    "Educate a child",
    "Support Exceptional",
  ];

  const onLoad = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/monthlyMission", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Mission: Missions }),
      });

      const data = await response.json();

      if (data.status === "ok") {
        //alert("Success");
        //console.log(data.data);
        setMissionStat(data.data); // Set the mission counts in the state
      } else {
        //alert("Failure");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failure");
    }
  };

  return (
    <>
      {missionStat ? (
        <>
          <h1 className="text-4xl text-center section-heading">
            Monthly Giving Missions
          </h1>
          <div className="missions flex flex-col md:flex-row justify-content items-center p-y-4">
            <MissionCard supporters={missionStat[0]?.count} path="No-child-Hungry" />
            <MissionCard
              Mission="Empower Young Minds"
              action="Educate Child"
              img="childEdu-1.jpeg"
              supporters={missionStat[1]?.count}
              path="Educate-Child"
            />
            <MissionCard
              Mission="Equality in Disability"
              action="Lend a Hand"
              img="ability-1.jpg"
              supporters={missionStat[2]?.count}
              path="Support-Exceptional"
            />
          </div>
        </>
      ) : (
        <>
          <h1 className="text-4xl text-center section-heading">
            Monthly Giving Missions
          </h1>
          <div className="missions flex flex-col md:flex-row justify-content items-center p-y-4">
            <MissionCard path="No-child-Hungry" supporters={missionStat[0]?.count}/>
            <MissionCard
              Mission="Empower Young Minds"
              action="Educate Child"
              img="childEdu-1.jpeg"
              path="Educate-Child"
              supporters={missionStat[1]?.count}
            />
            <MissionCard
              Mission="Equality in Disability"
              action="Lend a Hand"
              img="ability-1.jpg"
              supporters={missionStat[2]?.count}
              path="Support-Exceptional"
            />
          </div>
        </>
      )}
    </>
  );
};

const MissionCard = ({ Mission, supporters, action, img, path }) => {
  const navigate = useNavigate();
  return (
    <div className="mission-card border rounded-lg">
      <img src={img ? `/${img}` : "/child-hunger.png"} alt="child-hunger.png" />
      <div className="mission-stats p-4 pb-2">
        <h2 className="card-name share-text">
          Mission: {Mission ? Mission : "No Child Hungry"}
        </h2>
        <p className="subtext">
          {supporters ? supporters : 0} Monthly Donations
        </p>
        <button
          type="button"
          className="focus:outline-none text-white focus:ring-4 focus:ring-green-300 w-full font-medium rounded-md  text-sm px-5 py-2.5"
          onClick={() => navigate(`../${path}`, {replace: true})}
          style={{
            backgroundColor: "#c2410c",
            marginBlock: "1rem",
            fontSize: "1.1rem",
          }}
        >
          <i className="fa-solid fa-heart"></i>&nbsp;{" "}
          {action ? action : "Feed a Child"}
        </button>
      </div>
    </div>
  );
};

export default MonthlyMission;
