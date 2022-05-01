import React from "react"
import styled from "styled-components"
import { useUserContext } from "../context/userContext"
import { UserProfile } from "../public/svg/UserProfile"

const UserProfileContainer = styled.div`
    display: flex;
    padding: 1rem;
    border-bottom: 2px solid rgba(229,229,229,1);
    transition-duration: 0.2s;
    margin-bottom: 0.5rem;
    > svg {
        --tw-bg-opacity: 1;
        border-radius: 9999px;
        fill: rgb(255, 255, 255);
        background-color: rgba(193,193,198,var(--tw-bg-opacity));
    }
    &:hover {
        --tw-bg-opacity: 1;
        background-color: rgba(245,245,245,var(--tw-bg-opacity));
    }
`

const UserProfileStyles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 1rem;
`

const ProfileMenuWrapper = styled.div`
    --tw-bg-opacity: 1;
    display: ${({ isProfileMenu }) => isProfileMenu ? 'block' : 'none'};
    width: 288px;
    background-color: rgba(255,255,255,var(--tw-bg-opacity));
    position: absolute;
    left: -15rem;
    top: 4.2rem;
    box-shadow: 4px 4px 2px 0 rgb(0 0 0 / 20%);
`

const ProfileOptions = styled.div`
    font-weight: 400;
    font-size: .875rem;
    line-height: 1.25rem;
    padding: 0.875rem 1rem;
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    > svg {
        margin-right: 1.5rem;
    }
    &:hover{
        background-color: rgba(193,193,198,.2);
    }
`
const ProfileOptionText = styled.div`
    display: flex;
`
const SwitchContainer = styled.div`
    position: relative;
    display: inline-block;
    text-align: left;
    opacity: 1;
    direction: ltr;
    border-radius: 10px;
    transition: opacity 0.25s ease 0s;
    touch-action: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    user-select: none;
    > input {
        border: 0px;
        clip: rect(0px, 0px, 0px, 0px);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0px;
        position: absolute;
        width: 1px;
    }
`
const SwitchStyles = styled.div`
    height: 20px;
    width: 44px;
    margin: 0px;
    position: relative;
    background: rgb(76, 76, 92);
    border-radius: 10px;
    cursor: pointer;
    transition: background 0.25s ease 0s;
`

const SwitchDot = styled.div`
    height: 20px;
    width: 27px;
    position: relative;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.25s ease 0s;
`

const providerObj = (provider, user) => {
    if (provider === 'github' || provider === 'google') {
        return {
            userName: user?.user?.displayName || user?.user?.email,
            avatar: user?.user?.photoURL
        }
    }
}

function ProfileMenu({ isProfileMenu, user }) {
    const providers = ['github', 'google'];
    const provider = providers.filter(eachProvider => user.providerId.includes(eachProvider))[0]
    const userData = providerObj(provider, user)
    const { logoutUser } = useUserContext()
    return (
        <>
            {userData?.avatar ? <img src={userData?.avatar} alt="displayPhoto" style={{ width: "30px", height: "30px", cursor: "pointer" }} /> : <UserProfile />}
            <ProfileMenuWrapper isProfileMenu={isProfileMenu}>
                <div>
                    <div title="View">
                        <UserProfileContainer>
                            {/* <UserProfile width={65} height={65} /> */}
                            {userData?.avatar ? <img src={userData?.avatar} alt="profilePhoto" style={{ width: "65px", height: "65px" }} /> : <UserProfile width={65} height={65} />}
                            <UserProfileStyles>
                                <h6>{userData.userName}</h6>
                                <p>View Profile</p>
                            </UserProfileStyles>
                        </UserProfileContainer>
                    </div>
                    <ProfileOptions role="button" title="Edit" tabindex="0">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" class="mr-6 dark:text-dark-contrastText fill-current"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M19.4 13a7.8 7.8 0 000-2l2.1-1.6c.2-.2.3-.5.2-.7l-2-3.4A.5.5 0 0019 5l-2.4 1-1.7-1-.4-2.6c0-.2-.3-.4-.5-.4h-4c-.3 0-.5.2-.5.4l-.4 2.7c-.6.2-1.1.6-1.7 1L5 5h-.1c-.2 0-.4 0-.5.2l-2 3.4c0 .3 0 .5.2.7l2 1.6a8 8 0 000 2l-2 1.6c-.2.2-.3.5-.2.7l2 3.4a.5.5 0 00.7.3l2.4-1 1.7 1 .4 2.6c0 .2.3.4.5.4h4c.3 0 .5-.2.5-.4l.4-2.7c.6-.2 1.1-.6 1.7-1l2.5 1h.1c.2 0 .4 0 .5-.2l2-3.4c0-.2 0-.5-.2-.7l-2-1.6zm-2-1.7a5.3 5.3 0 010 1.4V14l.8.7 1 .8-.6 1.2-1.3-.5-1-.4-1 .7-1.2.7-1 .4-.2 1.1-.2 1.4h-1.4l-.2-1.4-.1-1-1.1-.5-1.2-.7-1-.7-1 .4-1.3.5-.7-1.2 1.1-.8.9-.7-.1-1.2a8 8 0 010-1.4V10l-.8-.7-1-.8.6-1.2 1.3.5 1 .4 1-.7L9.8 7l1-.4.2-1.1.2-1.4h1.4l.2 1.4.1 1 1.1.5 1.2.7 1 .7 1-.4 1.3-.5.7 1.2-1.1.8-.9.7.1 1.2zM12 8a4 4 0 100 8 4 4 0 000-8zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path></svg>
                        <h6 class="inline dark:text-dark-contrastText">Account Settings</h6>
                    </ProfileOptions>
                    <ProfileOptions role="button" tabindex="0">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" fill="current" class="w-8 h-8 mr-6 text-black dark:text-dark-contrastText fill-current"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zm-2 5.79V18h-3.52L12 20.48 9.52 18H6v-3.52L3.52 12 6 9.52V6h3.52L12 3.52 14.48 6H18v3.52L20.48 12 18 14.48zM12.29 7c-.74 0-1.45.17-2.08.46 1.72.79 2.92 2.53 2.92 4.54s-1.2 3.75-2.92 4.54c.63.29 1.34.46 2.08.46 2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path></svg>
                        <h6>Dark mode</h6>
                    </ProfileOptions>
                    <ProfileOptions role="button" title="Logout" tabindex="0" onClick={logoutUser}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" class="mr-6 dark:text-dark-contrastText fill-current"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M10 15.6l1.5 1.4 5-5-5-5-1.4 1.4 2.6 2.6H3v2h9.7L10 15.6zM19 3H5a2 2 0 00-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.9 2 2 2h14a2 2 0 002-2V5a2 2 0 00-2-2z"></path></svg>
                        <h6 class="inline dark:text-dark-contrastText">Logout</h6>
                    </ProfileOptions>
                </div>
            </ProfileMenuWrapper>
        </>
    )
}

export default ProfileMenu