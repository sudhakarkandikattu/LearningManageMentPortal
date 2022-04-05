import React from 'react';
import getHost from './utils/host';
import { useEffect } from 'react';
import { axiosInstance } from './utils/axios';
import Helmet from 'react-helmet';
import './App.css';
// import ErrorBoundary from './ErrorBoundary';
import Layout from './components/Layout';
import ErrorBoundary from './ErrorBoundary';

function Main() {
  const { REACT_APP_BASE_URL } = getHost();
  useEffect(() => {
    (async () => {
      try {
        const response = await axiosInstance.get('/courses/');
        if (response.data) {
        }
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <>
      <Helmet></Helmet>
      <ErrorBoundary>
        <Layout />
      </ErrorBoundary>
    </>
  );
}

export default Main;
