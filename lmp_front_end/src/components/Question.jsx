import '../App.css';
import React from 'react';
import styled from 'styled-components';
import getHost from '../utils/host';
import { useEffect,useState } from 'react';
import { axiosInstance } from '../utils/axios';


const Li = styled.div`
    list-style-type: none;
    `
    
function Question({options,question_id}) {

    return (
        <div>
            {
                options && Object.keys(options).map(option=>{
                    return (
                        <>
                            <input type='checkbox' id={`${question_id}_${option}`} name = {`${question_id}_${option}`} value={options[option]} />
                            {options[option]}
                        </>
                    )
                })
            }
        </div>
    );
}

export default Question;
