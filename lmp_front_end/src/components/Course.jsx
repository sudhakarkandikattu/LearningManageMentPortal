import '../App.css';
import React from 'react';
import styled from 'styled-components';
import getHost from '../utils/host';
import { useEffect } from 'react';
import { axiosInstance } from '../utils/axios';

const AppD = styled.div`
  display: flex;
`;

function Course() {
    const { REACT_APP_BASE_URL } = getHost();
    useEffect(() => {
        (async () => {
            try {
                const response = await axiosInstance.get('/courses');
                if (response.data) {
                }
            } catch (err) {
                console.error(err);
            }
        })();
    }, []);

    return (
        <>Hi There!</>
    );
}

export default Course;
