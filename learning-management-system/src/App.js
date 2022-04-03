import logo from './logo.svg';
// import beginner from './beginner.svg';
import expert from './public/svg/expert.svg';
// import rArrow from './public/svg/rArrow.svg';

import './App.css';
import Card from './Card';
import styled from 'styled-components';
import getHost from './utils/host';
import { useEffect } from 'react';
import { axiosInstance } from './utils/axios';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

const AppD = styled.div`
  display: flex;
`;

function App() {
  const { REACT_APP_BASE_URL } = getHost();
  console.log('REACT_APP_BASE_URL', REACT_APP_BASE_URL);

  useEffect(() => {
    (async () => {
      try {
        const response = await axiosInstance.get('/courses');
        console.log('response', response);
        if (response.data) {
        }
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <>
      {/* <Header /> */}
      <Sidebar />
      <AppD>
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={expert} className="course" alt="beginner" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
        {/* <img src={rArrow} className="course" alt="beginner" /> */}
        <Card />
        <Card />
        <Card />
        <Card />
      </AppD>
      <Footer />
    </>
  );
}

export default App;
