import React from 'react';
import styled, { withTheme } from 'styled-components';
// import { Beginner } from '../public/svg/Beginner';
import defaultCourse from './public/images/development.jpg'
import { RArrow } from './public/svg/RArrow';
import { Beginner } from './public/svg/Beginner';
import { Link } from 'react-router-dom';



const CardStyles = styled.div`
    --tw-translate-x: 0;
    --tw-translate-y: 0;
    --tw-rotate: 0;
    --tw-skew-x: 0;
    --tw-skew-y: 0;
    --tw-scale-x: 1;
    --tw-scale-y: 1;
    width: 310px;
    margin: 0.75rem;
    display: flex;
    flex: 0 1 auto;
    flex-shrink: 0;
    border-radius: 0.25rem;
    overflow: hidden;
    cursor: pointer;
    transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    transition-duration: .5s;
    transition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    &:hover{
        --tw-translate-y: -0.375rem;
        --tw-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
        box-shadow: var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);
    }
`
const CardContainer = styled.div`
    padding: 0.5rem;
`

const CardFooter = styled.div`
    display: flex;
    align-items: center;
    margin-top: 8%;
    justify-content: space-between;
    > a{
        text-decoration: none;
    }
`

const CardCategory = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0.5rem;
`

const CardTitle = styled.p`
    font-size: 1.25rem;
    line-height: 1.75rem;
    margin: 0.25rem;
`

const CardTag = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.5rem;
`

const PreviewBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(0, 0, 0, .87);
    background-color: transparent;
    font-weight: 700;
    margin: 0 0.5rem 0.5rem auto;
    border: 1px solid rgba(0, 0, 0, .23);
    padding: 10px;
    white-space: nowrap;
    letter-spacing: 0.025em;
    line-height: 1.5;
    transition-duration: 0.2s;
    cursor: pointer;
    &:hover {
        background-color: rgba(0,0,0,.04);
        --tw-border-opacity: 1;
        border-color: rgba(32,32,51,var(--tw-border-opacity));
    }
`


function Card({cardTitle, courseId}) {
    return (
        <CardStyles>
            <a target="_self">
                <div>
                    <img src={defaultCourse} alt="alt" />
                    <CardContainer>
                        <CardTag>
                            <span>Sureify</span>
                        </CardTag>
                        <CardTitle>{cardTitle}</CardTitle>
                        <CardFooter>
                            <CardCategory>
                                <span>
                                    <Beginner />
                                </span>
                                <p>
                                    Beginner
                                </p>
                            </CardCategory>
                            <Link to={`/course/${courseId}`}>
                                <PreviewBtn>
                                    Preview
                                    <RArrow />
                                </PreviewBtn>
                            </Link>
                        </CardFooter>
                    </CardContainer>
                </div>
            </a>
        </CardStyles>
    );
}

export default Card;