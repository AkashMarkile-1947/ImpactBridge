import { Formik, Form, Field, ErrorMessage, replace } from "formik";
import {Link } from 'react-router-dom';
import AuthTemp from "./AuthTemp";
import { useNavigate } from "react-router-dom";
// import SecurityQuestionForm from './Question';
import * as Yup from "yup";
const AdminSignUpForm = () => {
  return <AuthTemp component={SignUp} />;
};

export default AdminSignUpForm;

const SignUp = () => {
    const navigate = useNavigate();
    const initialValues = {
        firstname: '',
        lastname: '',
        dateofbirth: '',
        email: '',
        contact: '',
        password: '',
        confirmPassword: '', // add new field for confirm password
      };
    
      const validationSchema = Yup.object({
        firstname: Yup.string().required('Required'),
        lastname: Yup.string().required('Required'),
        dateofbirth: Yup.date().required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        contact: Yup.string()
          .required('Required')
          .matches(/^[0-9]+$/, 'Must be a number')
          .min(10, 'Must be exactly 10 digits')
          .max(10, 'Must be exactly 10 digits'),
        password: Yup.string()
          .required('Required')
          .min(8, 'Password must be at least 8 characters')
          .max(20, 'Password cannot exceed 20 characters'),
        confirmPassword: Yup.string()
          .required('Required')
          .oneOf([Yup.ref('password'), null], 'Passwords must match'), // add new validation rule for confirm password
      });
    

  const handleSubmit = async(values, { setSubmitting }) => {
    const {firstname, lastname, dateofbirth, contact, password, email} = values;
    console.log(values);
    const result = await fetch('http://localhost:8080/api/signup', {
      method: 'POST',
      headers: { 
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          email,
          password,
          firstname,
          lastname,
          dateofbirth,
          contact,
          isAdmin: true
        })//
    }).then(res => res.json());

    if(result.status === 'ok') {
      alert(result.msg);
      navigate("../admin-login", {replace: true});
    } else {
      alert(result.error);
    }
    setSubmitting(false);
  };

  return (
    <>
      <div className="flex flex-col items-center signup-msg min-w-[45%] max-w-[50%] m-auto hidden md:block">
        <h2 className="text-lg font-medium text-gray-900 section-heading">
        Create your account
        </h2>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="mt-8">
            <div className="flex justify-between items-center">
              <div className="w-[45%]">
                <label
                  htmlFor="firstname"
                  className="block text-sm font-medium text-gray-700"
                >
                  Firstname
                </label>
                <Field
                  type="text"
                  name="firstname"
                  id="firstname"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
                <ErrorMessage
                  name="firstname"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className="w-[45%]">
                <label
                  htmlFor="lastname"
                  className="block text-sm font-medium text-gray-700"
                >
                  Lastname
                </label>
                <Field
                  type="text"
                  name="lastname"
                  id="lastname"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
                <ErrorMessage
                  name="lastname"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="dateofbirth"
                className="block text-sm font-medium text-gray-700"
              >
                Date of Birth
              </label>
              <Field
                type="date"
                name="dateofbirth"
                id="dateofbirth"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              />
              <ErrorMessage
                name="dateofbirth"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <Field
                type="email"
                name="email"
                id="email"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div>
              <label
                htmlFor="contact"
                className="block text-sm font-medium text-gray-700"
              >
                Contact No:
              </label>
              <Field
                type="number"
                name="contact"
                id="contact"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              />
              <ErrorMessage
                name="contact"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <Field
                type="password"
                name="password"
                id="password"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <Field
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div className="mt-6">
                <button
                    type="submit"
                    disabled={isSubmitting}
/*                     className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
 */                    className="focus:outline-none text-white focus:ring-4 focus:ring-green-300 font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2 hero-donate w-full"
                >
                    Sign Up
                </button>
            </div>
          </Form>
        )}
      </Formik>
      <div className="flex justify-end">
            <p className="text-sm my-4 form-links">Already Have an Account<Link to="/login" className="form-links">&nbsp;Login</Link></p>
      </div>
    </>
  );
};
