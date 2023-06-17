import {useEffect} from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from 'axios';
import * as Yup from "yup";

const RegistrationForm1 = () => {
  const initialValues = {
    organizationName: "",
    organizationType: "",
    contactPersonName: "",
    contactNGOEmail: "",
    contactPersonPhone: "",
    organizationWebsite: "",
    missionStatement: "",
    activitiesDescription: "",
    geographicFocus: "",
    targetBeneficiaryGroups: "",
    registrationNumber: "",
    socialMediaLinks: "",
    referralSource: "",
  };

  const validationSchema = Yup.object({
    organizationName: Yup.string().required("Required"),
    organizationType: Yup.string().required("Required"),
    contactPersonName: Yup.string().required("Required"),
    contactNGOEmail: Yup.string().email("Invalid email address").required("Required"),
    contactPersonPhone: Yup.string().required("Required"),
    organizationWebsite: Yup.string().url("Invalid URL").required("Required"),
    missionStatement: Yup.string().required("Required"),
    activitiesDescription: Yup.string().required("Required"),
    geographicFocus: Yup.string().required("Required"),
    targetBeneficiaryGroups: Yup.string().required("Required"),
    registrationNumber: Yup.string().required("Required"),
    socialMediaLinks: Yup.string().required("Required"),
    referralSource: Yup.string().required("Required"),
  });


  const handleSubmit = async(values) => {
    // Handle form submission logic here
      
        const response = await axios.post("http://localhost:8080/api/NGOAccCreation", values);
        response.then(res => res.json());
        alert(response);
        if (!response) {
          alert("Error");
        }
        if(response.status) {
          alert('success')
        }
      }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="max-w-xl mt-10 mx-auto p-4 bg-cyan-300 rounded-lg shadow-lg">
        <div className="flex justify-center">
          <label className="font-bold" style={{ fontSize: "36px" }}>
            NGO Registration
          </label>
        </div>
        <div className="flex">
          <div className="w-1/2 pr-4">
            <Textfield label="Organization Name:" name="organizationName" type="text" />
            <Textfield label="Organization Type:" name="organizationType" type="text" />
            <Textfield label="Contact Person Name:" name="contactPersonName" type="text" />
            <Textfield label="Contact NGO Email:" name="contactNGOEmail" type="email" />
            <Textfield label="Contact Person Phone:" name="contactPersonPhone" type="tel" />
            <Textfield label="Organization Website:" name="organizationWebsite" type="url" />
            
           
          </div>

          <div className="w-1/2 pl-4">
          <Textfield label="Mission Statement:" name="missionStatement" type="text" />
          <Textfield label="Activities Description:" name="activitiesDescription" type="text" />
            <Textfield label="Geographic Focus:" name="geographicFocus" type="text" />
            <Textfield label="Target Beneficiary Groups:" name="targetBeneficiaryGroups" type="text" />
            <Textfield label="Registration/License Number:" name="registrationNumber" type="text" />
            <Textfield label="Social Media Links:" name="socialMediaLinks" type="text" />
            <Textfield label="How did you hear about our platform?" name="referralSource" type="text" />
         
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 mt-3 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={handleSubmit}
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
      <div className="mb-2">
        <label className="block font-bold">{label}</label>
        <Field
          type={type}
          name={name}
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
        />
        <ErrorMessage
          name={name}
          component="div"
          className="text-red-500 text-sm"
        />
      </div>
    );
  };


  export default RegistrationForm1;
