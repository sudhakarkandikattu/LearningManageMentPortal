import logo from './logo.svg';
// import beginner from './beginner.svg';
import expert from './public/svg/expert.svg';
// import rArrow from './public/svg/rArrow.svg';

import './App.css';
import Card from './Card';
import styled from 'styled-components';
import getHost from './utils/host';
import { useEffect, useState } from 'react';
import { axiosInstance } from './utils/axios';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DropDownMenu from './components/DropDownMenu';
import ProfileMenu from './components/ProfileMenu';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 5%;
  margin-top: 2%;
`;

const LayoutContainerStyles = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100vh;
  min-height: 100vh;
`;

function App() {
  const { REACT_APP_BASE_URL } = getHost();

  return (
    <LayoutContainerStyles>
      <Header />
      <Wrapper>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        {/* <DropDownMenu /> */}
      </Wrapper>

      <Footer />
    </LayoutContainerStyles>
  );
}

export default App;
