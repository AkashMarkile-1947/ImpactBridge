import { useState, useEffect } from "react";
import "./userdashboard.css";

const API_REQUESTED_NGO_URL = "http://localhost:8080/api/RequestedNGO";
const API_APPROVE_REQ_NGO_URL = "http://localhost:8080/api/approveReqNGO";
const API_REJECT_REQ_NGO_URL = "http://localhost:8080/api/rejectReqNGO";

const RequestedNGO = ({ fetchNgoData }) => {
  const [requestedNGO, setRequestedNGO] = useState([]);
  const [selectedObject, setSelectedObject] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    getRequestedNGO();
  }, []);

  const handleObjectClick = (object) => {
    console.log("hello");
    setSelectedObject(object);
    setIsDialogOpen(true);
  };

  const getRequestedNGO = async () => {
    try {
      const response = await fetch(API_REQUESTED_NGO_URL);
      const data = await response.json();

      if (data.status === "ok") {
        setRequestedNGO(data.data);
      } else {
        console.log(data.data);
      }
    } catch (error) {
      console.error("Failed to fetch requested NGOs:", error);
    }
  };

  const approveNGO = async (organizationName) => {
    try {
      const response = await fetch(API_APPROVE_REQ_NGO_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ organizationName }),
      });

      const data = await response.json();

      if (data.status === "ok") {
        getRequestedNGO();
        fetchNgoData();
      } else {
        console.log(data.data);
      }
    } catch (error) {
      console.error("Failed to approve NGO:", error);
    }
  };

  const rejectNGO = async (organizationName) => {
    try {
      const response = await fetch(API_REJECT_REQ_NGO_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ organizationName }),
      });

      const data = await response.json();

      if (data.status === "ok") {
        getRequestedNGO();
      } else {
        console.log(data.data);
      }
    } catch (error) {
      console.error("Failed to reject NGO:", error);
    }
  };

  return (
    <div
      className="manage-ngo"
      style={{ width: "60%", alignItems: "flex-start", margin: "1rem auto" }}
    >
      <h2
        className="section-heading p-2"
        style={{ fontSize: "1.2rem", lineHeight: "1.5rem" }}
      >
        Requested NGOs
      </h2>
      {requestedNGO ? (
        <>
          {requestedNGO.map((item, id) => {
            return (
              <div
                className="ngo-field flex justify-between items-center w-full p-2"
                key={id}
                onClick={() => handleObjectClick(item)}
                style={{
                  border: "none",
                  borderBottom: "1px solid #c2410c",
                  width: "90%",
                  margin: "0 auto",
                }}
              >
                <p>{item.organizationName}</p>
                <div>
                  <button
                    className="welcome-donate-button mr-2"
                    onClick={() => approveNGO(item.organizationName)}
                  >
                    Approve
                  </button>
                  <button
                    className="welcome-donate-button mx-2"
                    onClick={() => rejectNGO(item.organizationName)}
                  >
                    Reject
                  </button>
                </div>
              </div>
            );
          })}
          <ObjectDialog
            object={selectedObject}
            isOpen={isDialogOpen}
            onClose={() => setIsDialogOpen(false)}
          />
        </>
      ) : (
        <div
          className="manage-ngo"
          style={{ width: "60%", margin: "1rem auto", minHeight: "200px" }}
        >
          <h2>no new requested NGO</h2>
        </div>
      )}
    </div>
  );
};

const ObjectDialog = ({ object, isOpen, onClose }) => {
  if (!isOpen || !object) {
    return null;
  }

  return (
    <div className={`modal ${isOpen ? "show-modal" : ""} `}>
        <span className="close" onClick={onClose}>
          &times;
        </span>
      <div className="modal-content double-bordered-div">
        
        <h2>{object.organizationName}</h2>
        <p>{object.organizationWebsite}</p>
        <p>{object.contactNGOEmail}</p>
        <p>{object.missionStatement}</p>
        <p>{object.missionStatement}</p>
        <p>{object.targetBeneficiaryGroups}</p>
        <p>{object.activitiesDescription}</p>
      </div>
    </div>
  );
};

export default RequestedNGO;
