import React from "react";
import styled from 'styled-components'

const HeaderStyles = styled.nav`
    grid-area: ed-grid-header / ed-grid-header / ed-grid-header / ed-grid-header;
    z-index: 12;
    height: 4rem;
    --tw-bg-opacity: 1;
    background-color: rgba(255,255,255,var(--tw-bg-opacity));
    border-style: solid;
    border-bottom-width: 1px;
    width: 100%;
    display: flex;
    position: sticky;
    top: 0;
    --sidebar: 0;
`

function Header() {
    return (
        <HeaderStyles class="sticky top-0 h-14 sm:h-16 flex w-full dark:bg-dark-90 border-0 border-b border-solid dark:border-gray-A700 dark:border-solid bg-white border-gray-300" style="grid-area: ed-grid-header / ed-grid-header / ed-grid-header / ed-grid-header; z-index: 12;">
            <span class="logged-in"><button class="icon-default m-1.5 sm:m-2 mr-0" aria-label="open sidebar"><div class="flex dark:text-dark-contrastText"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" font-size="large" class="fill-current"><path d="M0 0h24v24H0z" fill="none"></path><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg></div></button>
            </span>
            <button aria-label="sidebar-btn" class="flex lg:hidden logged-out my-2 items-center icon-default justify-center cursor-pointer fill-current dark:text-dark-contrastText"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>
            </button>
            <div>
                <div>
                    <button>Courses</button>
                </div>
                <div>
                    <button>KT Sessions</button>
                </div>
                <div>
                    <button>Temporary</button>
                </div>
            </div>
        </HeaderStyles>
    )
}

export default Header;