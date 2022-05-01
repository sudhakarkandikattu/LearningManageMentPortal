import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled, { css } from 'styled-components'
import { useUserContext } from "../context/userContext";
import { MenuIcon } from "../public/svg/MenuIcon";
import { UserProfile } from "../public/svg/UserProfile";
// import firebase from 'firebase';
// import { firebase } from '@firebase/app';
import { axiosGetInstance } from "../utils/axios";
import DropDownMenu from "./DropDownMenu";
import ProfileMenu from "./ProfileMenu";
import Sidebar from "./Sidebar";

// import { app } from "../firebase"


const HeaderStyles = styled.nav`
    grid-area: ed-grid-header / ed-grid-header / ed-grid-header / ed-grid-header;
    z-index: 12;
    height: 4rem;
    --tw-bg-opacity: 1;
    background-color: rgba(255,255,255,var(--tw-bg-opacity));
    border-color: rgba(210,210,214,var(--tw-border-opacity));
    border-style: solid;
    border-width: 0;
    box-shadow: 0 4px 2px -2px rgb(0 0 0 / 20%);
    width: 100%;
    display: flex;
    position: sticky;
    top: 0;
    > div.loginButton {
        margin-left: auto;
        margin-right: 25px;
    }
`

const MenuIconStyles = styled.div`
    align-self: end;
    margin: 0 2%;
`

const MenuIconBtn = styled.button`
    background-color: transparent;
    color: rgba(0,0,0,.5);
    outline: 2px solid transparent;
    outline-offset: 2px;
`

const MenuItems = styled.div`
    display: flex;
    padding-left: 1.5rem;
    align-items: center;
    > a{
        text-decoration: none;
    }
`
const MenuItemStyles = css`
    position: relative;
    padding-top: 3px;
    > button{
        color: rgba(0,0,0,.87);
        background-color: transparent;
        font-weight: 700;
        line-height: 1.5rem;
        padding: 0.75rem;
        border-radius: 0.125rem;
    }
    &:hover {
        background-color: rgba(193,193,198,.2);
    }
`

const MenuItem = styled.div`
    ${MenuItemStyles}
    &:hover div{
        visibility: visible;
        opacity: 1;
    }
`

const LoginButton = styled.div`
    ${MenuItemStyles}
    display: flex;
    margin-left: auto;
    padding-right: 1.5rem;
    align-items: center;
    justify-content: center;
`

const Logo = styled.img`
    max-height: 85%;
    float: none;
    margin-bottom: 0;
    align-self: center;
`

const UserProfileStyles = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: 40px;
    position: relative;
    > svg {
        --tw-bg-opacity: 1;
        background-color: rgba(193,193,198,var(--tw-bg-opacity));
        border-radius: 9999px;
        cursor: pointer;
    }
`


function Header() {
    const [sideBarPresent, setSideBarPresent] = useState(false)
    const [isProfileMenu, setIsProfileMenu] = useState(false)
    const { user, signInWithGithub, signInWithGoogle } = useUserContext()

    useEffect(() => {
        console.log('signInWithGithub', user);
    }, [user, signInWithGithub])

    useEffect(() => {
        const getUser = () => {
            // fetch("http://localhost:30001/auth/login/success", {
            //     method: "GET",
            //     credentials: "include",
            //     headers: {
            //         Accept: "application/json",
            //         "Content-Type": "application/json",
            //     }
            // }).then(response => {
            //     if (response.status === 200) return response.json()
            //     throw new Error("Authentication has been failed")
            // }).then(responseObj => {
            //     setUser(responseObj.user)
            // }).catch(err => {
            //     console.log(err)
            // })
            axiosGetInstance.get("/auth/login/success").then(response => {
                if (response.status === 200) return response.json()
                throw new Error("Authentication has been failed")
            }).then(responseObj => {
                console.log('responseObj', responseObj);
                // setUser(responseObj.user)
            }).catch(err => {
                console.log(err)
            })
        }
        getUser();
    }, [])

    console.log('user', user);

    return (
        <>
            <Sidebar sideBarPresent={sideBarPresent} />
            <HeaderStyles>
                <MenuIconStyles onClick={() => { setSideBarPresent(!sideBarPresent) }}>
                    <MenuIconBtn aria-label="open sidebar">
                        <div>
                            <MenuIcon />
                        </div>
                    </MenuIconBtn>
                </MenuIconStyles>
                <a href="https://www.sureify.com/" style={{ display: 'flex' }}>
                    <Logo src="https://sureify.com/wp-content/uploads/2021/06/sureify-logo.png" alt="Sureify" id="logo" data-height-percentage="85" data-actual-width="277" data-actual-height="110" />
                </a>
                <MenuItems>
                    <Link to="/courses">
                        <MenuItem>
                            <button>Courses</button>
                            {/* <DropDownMenu /> */}
                        </MenuItem>
                    </Link>
                    <MenuItem>
                        <button>KT Sessions</button>
                        {/* <DropDownMenu /> */}
                    </MenuItem>
                    {/* <MenuItem>
                        <button>Temporary</button>
                        <DropDownMenu />
                    </MenuItem> */}
                </MenuItems>
                {!user &&
                    <MenuItems className="loginButton">
                        {/* onClick={authLogin} */}
                        <LoginButton >
                            <MenuItem>
                                <button >Login</button>
                                <DropDownMenu signInWithGithub={signInWithGithub} signInWithGoogle={signInWithGoogle} login />
                            </MenuItem>
                        </LoginButton>
                    </MenuItems>
                }

                {/* <LoginButton onClick={authLogout}>
                    <button >Logout</button>
                </LoginButton> */}
                {user?.user &&
                    <UserProfileStyles onClick={() => { setIsProfileMenu(!isProfileMenu) }}>
                        {/* <UserProfile /> */}
                        <ProfileMenu isProfileMenu={isProfileMenu} user={user} />
                    </UserProfileStyles>
                }
            </HeaderStyles>
        </>
    )
}

export default Header;