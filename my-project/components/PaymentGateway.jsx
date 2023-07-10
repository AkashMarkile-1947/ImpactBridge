import React, { useEffect, useState } from "react";
import Nav from "./Navbar";
import "./tailwind.css";


const PaymentGateway = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cardPassword, setCardPassword] = useState("");
  const [cvv, setCvv] = useState("");
  const [loginData, setLoginData] = useState(null);
  const [gatewayData, setGatewayData] = useState(null);
  const [cardHolder, setCardHolder] = useState("");
  const call = new Date();
  let date = call.getDate();
  let month = call.getMonth() + 1;
  let year = call.getFullYear();

  date = String(date).padStart(2, "0");
  month = String(month).padStart(2, "0");
  year = String(year).slice(-2);

  const currentDate = `${date}-${month}-${year}`;

  useEffect(() => {
    try {
      const logindata = sessionStorage.getItem("login-data");
      const gatewaydata = sessionStorage.getItem("gateway-data");

      if (logindata && gatewaydata) {
        const parsedLoginData = JSON.parse(logindata);
        const parsedGatewayData = JSON.parse(gatewaydata);

        setLoginData(parsedLoginData);
        setGatewayData(parsedGatewayData);
      }
    } catch (error) {
      console.log('Error parsing session storage:', error);
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Access the stored input field values
    console.log("Card Number:", cardNumber);
    console.log("Expiry Date:", expiryDate);
    console.log("Card Password:", cardPassword);
    console.log("CVV: ", cvv);
    console.log("card Holder: ", cardHolder);
    const response = await fetch('http://localhost:8080/api/transaction', {
      method: 'POST',
      headers: { 
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          cardNumber,
          expiryDate,
          cardPassword,
          cvv,
          cardHolder,
          modeOfTransaction: gatewayData.mode,
          Mission: gatewayData.mission,
          ammount: gatewayData.amount,
          userEmail: loginData.email
      })
    }).then(res => res.json())

      if (response.status === "ok") {
        console.log(response.data);
        alert(response.data);
      } else {
        alert(response.data);
      }
    // Implement logic to send form values to the backend
    // ...
  };

  if (!loginData || !gatewayData) {
    return (
      <div className="page-not-found">
        <h1>404</h1>
        <h2>Page not Found</h2>
      </div>
    );
  }

  return (
    <>
    <Nav />
    <div className="g-container">
      <div className="gateway-container flex justify-between items-center">
        <div className="gateway-input">
          <div className="gateway-header flex justify-between my-2 px-4  items-center w-full">
            <img src="/logo.png" alt="logo" className="gateway-logo" />
            <h2 className="gateway-date">{currentDate}</h2>
          </div>
          <div className="gateway-form px-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="card-no"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white g-lbl"
                >
                  Card No:
                </label>
                <input
                  type="number"
                  name="cardno"
                  id="card-no"
                  className="border text-gray-900 text-sm rounded-lg block w-full p-2.5 g-i"
                  pattern="[0-9]*"
                  inputMode="numeric"
                  maxLength={16}
                  value={cardNumber}
                  onChange={(e) => {
                    const input = e.target.value.replace(/\D/g, "").slice(0, 16);
                    setCardNumber(input);
                  }}
                  placeholder="Enter card number"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="card-holder"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white g-lbl"
                >
                  Card Holder Name:
                </label>
                <input
                  type="text"
                  name="cardholder"
                  id="cardholder"
                  className="border text-gray-900 text-sm rounded-lg block w-full p-2.5 g-i"
                  pattern="^[A-Za-z]+ [A-Za-z]+$"
                  maxLength={50}
                  value={cardHolder}
                  onChange={(e) => setCardHolder(e.target.value)}
                  placeholder="Enter Holder Name"
                  required
                />
              </div>
              <div className="card-details">
              <DetailsDiv
                  name="cvv"
                  value={cvv}
                  pattern="^\d{4}$"
                  onChange={(e) => setCvv(e.target.value)}
                />
                <DetailsDiv
                  label1="Expiry Date"
                  label2="Enter Exp date of Card"
                  type="month"
                  name="expdate"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                />
                <DetailsDiv
                  label1="Password"
                  label2="Enter your Dynamic Password"
                  type="password"
                  maxLength="12"
                  pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                  name="cardpassword"
                  placeholder="use at least one of uppercase special and number"
                  value={cardPassword}
                  onChange={(e) => setCardPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                style={{ backgroundColor: "#c2410c" }}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white g-i"
              >
                Pay Now
              </button>
            </form>
          </div>
        </div>
        <div className="gateway-output relative">
          <div className="recipt-container">
            <div className="flex flex-col justify-between p-4 align-center credit-card border">
            <div className="icon-header flex justify-between items-center w-full">
                <img src="/card-chip.png" className="card-header-icon" alt="card" />
                <img src="/contactless.png" className="card-header-icon" alt="contactless" />
            </div>
            <div>
            <h2 className="donor-name card-text">{`${loginData.firstname} ${loginData.lastname}`}</h2>
            <p className="card-no card-text"><span className="hidden-no">{cardNumber ? cardNumber.slice(0, cardNumber.length - 5) : "123456789789"}</span>{cardNumber ? cardNumber.slice(cardNumber.length - 5, cardNumber.length) : "1234"}</p>
            <div className="icon-footer flex justify-between items-center w-full">
                <h2 className="expiry-date card-text">
                  {expiryDate ? `${expiryDate.split('-')[1]}/${expiryDate.split('-')[0]}` : "m/year"}
                </h2>
                <img src="/cc-visa.svg" className="card-header-icon" alt="visa-icon" style={{rotate: "0deg"}} />
            </div>
            </div>
            </div>
            <div className="checkout-details">
              <h2 className="card-text text-center">Donor Name: <span style={{fontWeight: "600"}}>{`${loginData.firstname} ${loginData.lastname}`}</span></h2>
              <h2 className="card-text text-center">Mission: <span style={{fontWeight: "600"}}>{gatewayData.mission}</span></h2>
              <h2 className="card-text text-center" style={{marginBottom: "0"}}>Mode: <span style={{fontWeight: "600"}}>{gatewayData.mode}</span></h2>
              <hr className="checkout-hr" style={{width: "90%", margin: "0 auto"}}/>
            </div>
            <div className="ammount-c" style={{width: "90%", margin: "0 auto", color: "#1f2b53"}}>
                <p className="text-center">You have to Pay</p>
                <h1 className="d-ammount text-center" style={{position: "relative", bottom: "20px", fontWeight: "600"}} >{gatewayData.amount}&nbsp; <i className="fa-solid fa-indian-rupee-sign"></i></h1>
              </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

const DetailsDiv = ({
  pattern,
  type,
  name,
  placeholder,
  maxLength,
  label1,
  label2,
  value,
  onChange,
}) => {
  return (
    <div className="flex justify-between item-center details-div p-2">
      <div>
        <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-center">
          {label1 ? label1 : "CVV"}
        </p>
        <sub className="text-center">
          {label2 ? label2 : "Enter 3 or 4 digit number on the card"}
        </sub>
      </div>
      <input
        type={type ? type : "number"}
        name={name ? name : "cvv"}
        id={name ? name : "cvv"}
        className="border text-gray-900 text-sm rounded-lg  block w-full p-2.5 g-i"
        pattern={pattern ? pattern : "^[0-9]{3,4}$"}
        maxLength={maxLength ? maxLength : "4"}
        required
        placeholder={placeholder ? placeholder : "CVV"}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default PaymentGateway;
