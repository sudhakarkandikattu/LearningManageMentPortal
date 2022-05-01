import React from "react"
import { People } from "../public/svg/People"
import styled from "styled-components"
import { Developers } from "../public/svg/Developers"
import { Teams } from "../public/svg/Teams"
import { Individuals } from "../public/svg/Individuals"
import { Onboarding } from '../public/svg/Onboarding';
import { Assesments } from '../public/svg/Assesments';
import { Tests } from "../public/svg/Tests"
import { PersonalisedPaths } from '../public/svg/PersonalisedPaths';
import { Projects } from "../public/svg/Projects"
import { GitHub } from '../public/svg/github';
import { Google } from "../public/svg/google"

const DropDownStyles = styled.div`
    --tw-shadow: 0 10px 15px -3px rgba(0,0,0,0.1),0 4px 6px -2px rgba(0,0,0,0.05);
    --tw-bg-opacity: 1;
    box-shadow: var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);
    background-color: rgba(255,255,255,var(--tw-bg-opacity));
    border-radius: 0.25rem;
    display: flex;
    position: absolute;
    top: 3.4rem;
    width: 16rem;
    ${({ login }) => login && `right: 0`};
`

const DropDownItem = styled.div`
    --tw-bg-opacity: 1;
    display: flex;
    padding: 0.75rem 1rem;
    cursor: pointer;
    /* border: 2px solid; */
    &:hover{
        background-color: rgba(245,245,245,var(--tw-bg-opacity));
    }
    &:hover .dropDownIcon > svg{
        color: rgba(85,83,255,var(--tw-text-opacity));
    }
    
`

const ItemContainer = styled.div`
    padding: 0.5rem 0;
`

const DropDownText = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    text-align: left;
    letter-spacing: 0.025em;
`
const DDTextTitle = styled.span`
    --tw-text-opacity: 1;
    letter-spacing: 0.5px;
    color: rgba(32,32,51,var(--tw-text-opacity));
    line-height: 1.5rem;
    font-weight: 700;
    font-size: 1rem;
    margin-bottom: 0.25rem;
`

const DDTextDesc = styled.span`
    --tw-text-opacity: 1;
    letter-spacing: 0.5px;
    color: rgba(127,127,139,var(--tw-text-opacity));
    line-height: 1.25rem;
    font-weight: 600;
    font-size: .75rem;
`

const DDIcon = styled.div`
    --tw-text-opacity: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgba(76,76,92,var(--tw-text-opacity));
`

const DropDownWrapper = styled.div`
    /* display: none; */
    visibility: hidden;
    opacity: 0;
`

function DropDownMenu({ signInWithGithub, signInWithGoogle, login }) {
    return (
        <DropDownWrapper>
            <DropDownStyles login={login}>
                <div>
                    <ItemContainer id="itemContainer">
                        <DropDownItem className="dropDownGroup" onClick={signInWithGithub}>
                            <DDIcon className="dropDownIcon">
                                <GitHub />
                            </DDIcon>
                            <DropDownText>
                                <DDTextTitle>
                                    GitHub
                                </DDTextTitle>
                                <DDTextDesc>
                                    Login with GitHub
                                </DDTextDesc>
                            </DropDownText>
                        </DropDownItem>
                    </ItemContainer>
                    <ItemContainer id="itemContainer">
                        <DropDownItem className="dropDownGroup" onClick={signInWithGoogle}>
                            <DDIcon className="dropDownIcon">
                                <Google />
                            </DDIcon>
                            <DropDownText>
                                <DDTextTitle>
                                    Google
                                </DDTextTitle>
                                <DDTextDesc>
                                    Login with Google
                                </DDTextDesc>
                            </DropDownText>
                        </DropDownItem>
                    </ItemContainer>
                    {/* <ItemContainer id="itemContainer">
                        <DropDownItem className="dropDownGroup">
                            <DDIcon className="dropDownIcon">
                                <People />
                            </DDIcon>
                            <DropDownText>
                                <DDTextTitle>
                                    Development Teams
                                </DDTextTitle>
                                <DDTextDesc>
                                    Onboard, Upskill, Retain
                                </DDTextDesc>
                            </DropDownText>
                        </DropDownItem>
                    </ItemContainer>
                    <ItemContainer id="itemContainer">
                        <DropDownItem className="dropDownGroup">
                            <DDIcon className="dropDownIcon">
                                <Developers />
                            </DDIcon>
                            <DropDownText>
                                <DDTextTitle>
                                    Developers
                                </DDTextTitle>
                                <DDTextDesc>
                                    Learn new technologies
                                </DDTextDesc>
                            </DropDownText>
                        </DropDownItem>
                    </ItemContainer>
                    <ItemContainer id="itemContainer">
                        <DropDownItem className="dropDownGroup">
                            <DDIcon className="dropDownIcon">
                                <Teams />
                            </DDIcon>
                            <DropDownText>
                                <DDTextTitle>
                                    Learning for Teams
                                </DDTextTitle>
                                <DDTextDesc>
                                    Supercharge your team
                                </DDTextDesc>
                            </DropDownText>
                        </DropDownItem>
                    </ItemContainer>
                    <ItemContainer id="itemContainer">
                        <DropDownItem className="dropDownGroup">
                            <DDIcon className="dropDownIcon">
                                <Individuals />
                            </DDIcon>
                            <DropDownText>
                                <DDTextTitle>
                                    Learning for Individuals
                                </DDTextTitle>
                                <DDTextDesc>
                                    Courses at your pace
                                </DDTextDesc>
                            </DropDownText>
                        </DropDownItem>
                    </ItemContainer>
                    <ItemContainer id="itemContainer">
                        <DropDownItem className="dropDownGroup">
                            <DDIcon className="dropDownIcon">
                                <Onboarding />
                            </DDIcon>
                            <DropDownText>
                                <DDTextTitle>
                                    Onboarding
                                </DDTextTitle>
                                <DDTextDesc>
                                    Onboard new hires faster
                                </DDTextDesc>
                            </DropDownText>
                        </DropDownItem>
                    </ItemContainer>
                    <ItemContainer id="itemContainer">
                        <DropDownItem className="dropDownGroup">
                            <DDIcon className="dropDownIcon">
                                <Tests />
                            </DDIcon>
                            <DropDownText>
                                <DDTextTitle>
                                    Assesments
                                </DDTextTitle>
                                <DDTextDesc>
                                    Measure your SkillScore
                                </DDTextDesc>
                            </DropDownText>
                        </DropDownItem>
                    </ItemContainer> */}
                    {/* <ItemContainer id="itemContainer">
                        <DropDownItem className="dropDownGroup">
                            <DDIcon className="dropDownIcon">
                                <PersonalisedPaths />
                            </DDIcon>
                            <DropDownText>
                                <DDTextTitle>
                                    Personalised Learning Paths
                                </DDTextTitle>
                                <DDTextDesc>
                                    Personalised Plans for your goals
                                </DDTextDesc>
                            </DropDownText>
                        </DropDownItem>
                    </ItemContainer> */}
                    {/* <ItemContainer id="itemContainer">
                        <DropDownItem className="dropDownGroup">
                            <DDIcon className="dropDownIcon">
                                <Projects />
                            </DDIcon>
                            <DropDownText>
                                <DDTextTitle>
                                    Projects
                                </DDTextTitle>
                                <DDTextDesc>
                                    Glance at the projects
                                </DDTextDesc>
                            </DropDownText>
                        </DropDownItem>
                    </ItemContainer> */}
                </div>
            </DropDownStyles>
        </DropDownWrapper>
    )
}

export default DropDownMenu