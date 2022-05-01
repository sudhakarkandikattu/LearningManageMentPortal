import React, { useEffect, useState } from "react"
import styled from 'styled-components';
import Card from "../Card";
import { axiosInstance } from '../utils/axios';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 5%;
  margin-top: 2%;
`;


function Content() {

  const [cardData, setCardData] = useState([])
  useEffect(() => {
    (async () => {
      try {
        const response = await axiosInstance.get('/courses');
        console.log('response', response);
        if (response.data) {
          setCardData(response.data)
        }
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);
  return (
    <Wrapper>
      {cardData.map((data, index) => {
        return (
          <Card key={index} cardTitle={data.title} courseId={data.id} />
        )
      })}
    </Wrapper>
  )
}

export default Content