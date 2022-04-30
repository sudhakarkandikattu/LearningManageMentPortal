import '../App.css';
import React from 'react';
import styled from 'styled-components';
import getHost from '../utils/host';
import { useEffect,useState } from 'react';
import { axiosInstance } from '../utils/axios';
import { Link } from 'react-router-dom';

const AppD = styled.div`
  display: flex;
`;
const Button = styled.div`
background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
`;
function Course(test) {
    const { REACT_APP_BASE_URL } = getHost();
    const [referenceLinks, setreferenceLinks] = useState([])
    useEffect(() => {
        (async () => {
            try {
                const response = await axiosInstance.get(test.match.url);
                if (response.data) {
                    setreferenceLinks(response.data)
                }
            } catch (err) {
                console.error(err);
            }
        })();
    }, []);

    return (
        <div>
            {referenceLinks.map((link, index) => {
               return (
                <li>{link.reference_link}</li>
               ) 
            })}
            <Link to = {'/questions'}><Button>Take Test</Button></Link>
        </div>
    );
}

export default Course;
