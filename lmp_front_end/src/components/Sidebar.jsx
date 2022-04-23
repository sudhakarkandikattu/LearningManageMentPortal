import React, { useState } from "react"
import { Learning } from "../public/svg/Learning"
import { Explore } from "../public/svg/Explore"
import { Assesments } from "../public/svg/Assesments"
import styled from "styled-components"
import { Cross } from "../public/svg/Cross"

const SideBarStyles = styled.nav`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 99;
  background:white;
  width: ${({ sideBar, sideBarPresent }) => (sideBarPresent ^ sideBar) ? '6%' : '0'};
  box-shadow: 2px 0 4px rgba(0,0,0,0.5);
  transition: width .35s;
  height: 100%;
  overflow:auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  > a:first-child{
      margin-top: 40px;
  }
`
const SideBarItem = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.75rem 0.25rem;
    width: 100%;
    line-height: 1.5;
    text-decoration: none;
    color: rgba(0,0,0);
    > * + *{
        padding-top: 10px;
    }
    > svg {
        --tw-text-opacity: 1;
        color: rgba(0,0,0,var(--tw-text-opacity));
    }
    &:hover{
        background-color: rgba(193,193,198,.2);
    }
    transition: color .2s;
`
const CrossStyle = styled.div`
    text-align: right;
    cursor: pointer;
`
function Sidebar({ sideBarPresent }) {
    const [sideBar, setSideBar] = useState(sideBarPresent);
    return (
        <SideBarStyles sideBar={sideBar} sideBarPresent={sideBarPresent}>
            <CrossStyle onClick={() => setSideBar(!sideBar)}>
                <Cross />
            </CrossStyle>
            <SideBarItem href="/learn" class="flex flex-col items-center w-full cursor-pointer py-3 px-1 hover:bg-gray-buttonHover text-black hover:text-black dark:text-dark-contrastText focus:text-black" title="My Learning">
                <Learning />
                <span class="text-xs font-semibold tracking-wide dark:text-dark-contrastText">My Learning</span>
            </SideBarItem>
            <SideBarItem href="/explore" class="flex flex-col items-center w-full cursor-pointer py-3 px-1 bg-gray-A700 dark:bg-gray-A400 hover:bg-gray-A900 dark:hover:bg-alphas-primary3 hover:text-white focus:text-white text-white" title="Explore">
                <Explore />
                <span class="text-xs font-semibold tracking-wide dark:text-dark-contrastText">Explore</span>
            </SideBarItem>
            <SideBarItem href="/assessments" class="flex flex-col items-center w-full cursor-pointer py-3 px-1 hover:bg-gray-buttonHover text-black hover:text-black dark:text-dark-contrastText focus:text-black" title="Assessments">
                <Assesments />
                <span class="text-xs font-semibold tracking-wide dark:text-dark-contrastText">Assessments</span>
            </SideBarItem>
        </SideBarStyles>
    )
}

export default Sidebar