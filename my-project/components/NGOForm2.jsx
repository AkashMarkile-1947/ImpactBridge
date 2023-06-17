import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const DocumentForm = () => {
  const handleSubmit = (values) => {
    // Validation logic goes here
    // If validation fails, setErrorMessage with appropriate message
    // If validation passes, submit the form data to the backend
    console.log(values);
  };

  const initialValues = {
    name: "",
    email: "",
    registrationCertFile: null,
    constitutionFile: null,
    financialStatementsFile: null,
    taxExemptionFile: null,
    boardOfDirectorsFile: null,
    projectReportsFile: null,
  };

  const validateForm = (values) => {
    const errors = {};

    // Add your validation logic here
    // Add validation for other fields here

    return errors;
  };

  return (
    <div className="max-w-lg mx-auto rounded-xl shadow-md p-6" style={{ overflowY: "scroll" }}>
      <Formik
        initialValues={initialValues}
        validate={validateForm}
        onSubmit={handleSubmit}
      >
        <Form className="">
        <div className="flex justify-center">
          <label className="font-bold" style={{fontSize:"36px"}}>Documents Verification</label><br />
          </div>
         
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="registrationCertFile">Registration Certificate</label>
          <Field
            id="registrationCertFile"
            name="registrationCertFile"
            type="file"
            accept=".pdf,.doc,.docx"
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            required
          />
          <ErrorMessage
            name="registrationCertFile"
            component="div"
            className="text-sm text-red-500"
          />

          {/* Add fields for other file inputs here */}
          {/* Constitution or Bylaws */}
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="constitutionFile">Constitution or Bylaws</label>
          <Field
            id="constitutionFile"
            name="constitutionFile"
            type="file"
            accept=".pdf,.doc,.docx"
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            required
          />
          <ErrorMessage
            name="constitutionFile"
            component="div"
            className="text-sm text-red-500"
          />

          {/* Financial Statements */}
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="financialStatementsFile">Financial Statements</label>
          <Field
            id="financialStatementsFile"
            name="financialStatementsFile"
            type="file"
            accept=".pdf,.xlsx,.csv"
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            required
          />
          <ErrorMessage
            name="financialStatementsFile"
            component="div"
            className="text-sm text-red-500"
          />

          {/* Tax Exemption Certificate */}
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="taxExemptionFile">Tax Exemption Certificate</label>
          <Field
            id="taxExemptionFile"
            name="taxExemptionFile"
            type="file"
            accept=".pdf,.jpg,.png"
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            required
          />
          <ErrorMessage
            name="taxExemptionFile"
            component="div"
            className="text-sm text-red-500"
          />

          {/* Board of Directors or Trustees Information */}
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="boardOfDirectorsFile">
            Board of Directors or Trustees Information
          </label>
          <Field
            id="boardOfDirectorsFile"
            name="boardOfDirectorsFile"
            type="file"
            accept=".pdf,.doc,.docx"
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            required
          />
          <ErrorMessage
            name="boardOfDirectorsFile"
            component="div"
            className="text-sm text-red-500"
          />

          {/* Project Reports or Impact Assessments */}
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="projectReportsFile">
            Project Reports or Impact Assessments
          </label>
          <Field
            id="projectReportsFile"
            name="projectReportsFile"
            type="file"
            accept=".pdf,.doc,.docx"
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            required
          />
          <ErrorMessage
            name="projectReportsFile"
            component="div"
            className="text-sm text-red-500"
          />

          <div className="flex justify-center">
            <button
              type="submit"
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            style={{backgroundColor:"blue",borderRadius:"10px"}}>
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default DocumentForm;
