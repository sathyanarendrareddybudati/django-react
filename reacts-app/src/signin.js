import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const LoginForm = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().required('Required'),
  });

  const onSubmit = async (values) => {
    try {
        const response = await axios.post('http://127.0.0.1:8000/login/', values);
        const { token, msg } = response.data;
        console.log('Response:', response); // Log the entire response object
        console.log('Token:', token);
        console.log('Registration Message:', msg);
      // Send a POST request to your login API endpoint.
      // Handle successful login or display an error message.
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>User Login</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div>
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </div>

          <button type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;