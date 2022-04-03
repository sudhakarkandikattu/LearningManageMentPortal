import '../App.css';
import Card from '../Card';
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
                console.log('response', response);
                if (response.data) {
                }
            } catch (err) {
                console.error(err);
            }
        })();
    }, []);

    return (
        <Card />
    );
}

export default Course;
