import React from "react"
import styled from 'styled-components';
import AppRouter from "../Approuter";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 5%;
  margin-top: 2%;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100vh;
  min-height: 100vh;
`;

function Layout() {
    return (
        <Body>
            <Header />
            <AppRouter />
            <Footer />
        </Body>
    )
}

export default Layout