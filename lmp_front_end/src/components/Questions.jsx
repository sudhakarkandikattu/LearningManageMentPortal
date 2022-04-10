import '../App.css';
import React from 'react';
import styled from 'styled-components';
import getHost from '../utils/host';
import { useEffect,useState } from 'react';
import { axiosInstance } from '../utils/axios';
import Question from "./Question";

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
const Li = styled.div`
    list-style-type: none;
    `
function Questions(test) {
    const { REACT_APP_BASE_URL } = getHost();
    const [questions, setquestions] = useState([])
    let [answers, setanswers] = useState('');
    let [options,setOptions] = useState([]);
    let [currentQuestionCount, setcurrentQuestionCount] = useState(0);
    useEffect(() => {
        (async () => {
            try {
                const response = await axiosInstance.get(test.match.url);
                if (response.data) {
                    setquestions(response.data)
                    console.log(response.data)
                }
            } catch (err) {
                console.error(err);
            }
        })();
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault()
         console.log('hi')
         console.log(e.target[2])
      }
    return (
        <div>
            <form  onSubmit={handleSubmit}>
            {
                Object.keys(questions).map(question_id=>{
                    return (
                        <>
                            <div>
                                {questions[question_id].question}
                            </div>
                            <Question options = {questions[question_id].options} question_id={question_id} />
                            
                        </>
                    );
                })
            }
            <input type='submit' value='submit'/>
            </form>
        </div>
    );
}

export default Questions;
