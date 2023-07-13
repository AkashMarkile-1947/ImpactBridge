import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Nav from "./Navbar";
import "./tailwind.css";
import "./ngoform.css";

import { useNavigate } from "react-router-dom";

/* const NGOFrom1 = () => {
  return (
    <>
    <div style={{overflowX: "hidden"}}>
      <div
        className="flex items-center justify-center h-screen text-black auth-temp ngo-form"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "calc(100vh - 68px)",
          maxHeight: "100%", // adjust as needed
        }}
      >
        <div className="flex flex-col items-center justify-center w-full max-w-screen-lg px-8 bg-[]">
          <div className="w-full md:flex md:flex-row md:items-center md:justify-between">
            <div className="md:inline md:w-[45%] w-full mb-10 md:mb-0">
              <div
                style={{ maxWidth: "450px", margin: "0 auto" }}
                className="hide"
              >
                <h1 className="text-2xl mb-2">Lorem ipsum dolor sit.</h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Provident tenetur perspiciatis expedita magnam maiores
                  recusandae odio minima saepe impedit ut?
                </p>
              </div>
            </div>
            <div className="auth-component">
              <div
                className="w-full overflow-hidden"
                style={{
                  maxWidth: "none",
                  backdropFilter: "blur(5px)",
                  margin: "0 auto",
                }}
              >
                <RegistrationForm1 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
 */

const NGOFrom1 = () => {
  const navigate = useNavigate();

  // Rest of the code...

  return (
    <>
      <Nav /> {/* Load the Nav component here */}
      <div className="signup-page">
        <div className="picture"></div>
        <div className="signup-form">
          <RegistrationForm1 />
        </div>
      </div>
    </>
  );
};

const RegistrationForm1 = () => {
  const navigate = useNavigate();

  const initialValues = {
    organizationName: "",
    organizationType: "",
    contactPersonName: "",
    contactNGOEmail: "",
    contactPersonPhone: 0,
    organizationWebsite: "",
    missionStatement: "",
    activitiesDescription: "",
    geographicFocus: "",
    targetBeneficiaryGroups: "",
    registrationNumber: "",
    socialMediaLinks: "",
    password:"",
    confirmPassword:"",

  };

  const validationSchema = Yup.object({
    organizationName: Yup.string().required("Required"),
    organizationType: Yup.string().required("Required"),
    contactNGOEmail: Yup.string()
      .email("Invalid email address")
      .required("Required"),
    contactPersonPhone: Yup.number().required("Number is required"),
    contactPersonName: Yup.string().required(""),
    organizationWebsite: Yup.string().url("Invalid URL").required("Required"),
    missionStatement: Yup.string().required("Required"),
    activitiesDescription: Yup.string().required("Required"),
    geographicFocus: Yup.string().required("Required"),
    targetBeneficiaryGroups: Yup.string().required("Required"),
    registrationNumber: Yup.number().required("Required"),
    socialMediaLinks: Yup.string().url("Invalid URL").required("Required"),
    password: Yup.string()
      .required("Required")
      .min(8, "Password must be at least 8 characters")
      .max(20, "Password cannot exceed 20 characters"),
    confirmPassword: Yup.string()
      .required("Required")
      .oneOf([Yup.ref("password")], "Passwords must match"),
  });

  const handleSubmit = async (values) => {
    try {
      const response = await fetch("http://localhost:8080/api/NGOAccCreation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data); // Log the response data
        const ngoData = sessionStorage.setItem("ngo-data", JSON.stringify(values));
        alert("Success");
        navigate('../', {replace: true});
      } else {
        alert("Error");
      }
    } catch (error) {
      console.log(error);
      alert("Error");
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form
        className="mx-auto p-4 rounded-lg border ngo-registration"

      >
        <div className="flex" style={{ margin: "0 auto" }}>
          <label className="font-bold" style={{ fontSize: "36px" }}>
            NGO Registration
          </label>
        </div>
        <div className="flex justify-between items-center">
          <div className="w-1/2">
            <Textfield
              label="Organization Name:"
              name="organizationName"
              type="text"
            />
            <Textfield
              label="Organization Type:"
              name="organizationType"
              type="text"
            />
            <Textfield
              label="Mission Statement:"
              name="missionStatement"
              type="text"
            />
            <Textfield
              label="Contact Person Name:"
              name="contactPersonName"
              type="text"
            />
            
            <Textfield
              label="Contact Person Phone:"
              name="contactPersonPhone"
              type="tel"
            />
            <Textfield
              label="Organization Website:"
              name="organizationWebsite"
              type="url"
            />
            <Textfield
              label="Enter Password:"
              name="password"
              type="password"
            />
          </div>

          <div className="w-1/2">
            <Textfield
              label="Contact NGO Email:"
              name="contactNGOEmail"
              type="email"
            />
            <Textfield
              label="Activities Description:"
              name="activitiesDescription"
              type="text"
            />
            <Textfield
              label="Geographic Focus:"
              name="geographicFocus"
              type="text"
            />
            <Textfield
              label="Target Beneficiary Groups:"
              name="targetBeneficiaryGroups"
              type="text"
            />
            <Textfield
              label="Registration/License Number:"
              name="registrationNumber"
              type="text"
            />
            <Textfield
              label="Social Media Links:"
              name="socialMediaLinks"
              type="text"
            />
            <Textfield
              label="Confirm Password:"
              name="confirmPassword"
              type="password"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </div>
      </Form>
    </Formik>
  );
};

const Textfield = ({ label, name, type }) => {
  return (
    <div className="mb-2 user-box">
      
      <Field
        type={type}
        name={name}
/*         className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md ngo-input shadow-md"
 */      className="input-field"
 />
 <label className="block font-bold">{label}</label>
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-sm error"
      />
    </div>
  );
};

export default NGOFrom1;
