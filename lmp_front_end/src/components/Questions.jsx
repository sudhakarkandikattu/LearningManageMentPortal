import '../App.css';
import React from 'react';
import styled from 'styled-components';
import getHost from '../utils/host';
import { useEffect, useState } from 'react';
import { axiosInstance } from '../utils/axios';
import Question from "./Question";
import SingleSelect from './SingleSelect';
import { Link, withRouter } from 'react-router-dom';
import { setResultOnSubmit } from '../redux/actions/questions';
import { connect } from 'react-redux';

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

// const Quiz_Set = [
//     {
//         queno: "que_1",
//         que: "1) How many sides are equal in a scalene triangle?",
//         options: [{ "que_options": "3", "selected": false }, { "que_options": "2", "selected": false }, { "que_options": "0", "selected": false }],
//     },
//     {
//         queno: "que_2",
//         que: "2) The angles of a triangle are 90°,35° and 55°.What type of triangle is this?",
//         options: [{ que_options: "Right Angled", selected: false }, { que_options: "Obtuse Angled", selected: false }, { que_options: "Acute Angled", selected: false }],
//     },
//     {
//         queno: "que_3",
//         que: "3) The perimeter of an equilateral triangle is 24cm.Length of each side(in cm) is?",
//         options: [{ que_options: "9", selected: false }, { que_options: "6", selected: false }, { que_options: "8", selected: false }],
//     },
//     {
//         queno: "que_4",
//         que: "4) The sum of angles of a triangle is?",
//         options: [{ que_options: "90", selected: false }, { que_options: "150", selected: false }, { que_options: "180", selected: false }],
//     },
//     {
//         queno: "que_5",
//         que: "5) A triangle has angles 60°,60° and 60°.State the type of triangle?",
//         options: [{ que_options: "Isosceles", selected: false }, { que_options: "Equilateral", selected: false }, { que_options: "Scalene", selected: false }],
//     },
//     {
//         queno: "que_6",
//         que: "6) What is a third angle for a triangle where angle1 = 57° and angle2 = 92° ?",
//         options: [{ que_options: "45", selected: false }, { que_options: "60", selected: false }, { que_options: "31", selected: false }],
//     },
//     {
//         queno: "que_7",
//         que: "7) Pythagoras theorem is applicable to which type of triangles?",
//         options: [{ que_options: "Right", selected: false }, { que_options: "Acute", selected: false }, { que_options: "Obtuse", selected: false }],
//     },
//     {
//         queno: "que_8",
//         que: "8) The triangle which has 2 sides congruent?",
//         options: [{ que_options: "Equilateral", selected: false }, { que_options: "Isosceles", selected: false }, { que_options: "Scalene", selected: false }],
//     }
// ]

function Questions({
    test,
    handleResultSubmit,
}) {
    const { REACT_APP_BASE_URL } = getHost();
    const [questions, setquestions] = useState([])
    const [quizAry, setQuizAry] = useState([]);
    const [result, setResult] = useState([]);
    


    useEffect(() => {
        (async () => {
            try {
                const response = await axiosInstance.get('/questions');
                if (response.data) {
                    setQuizAry(response.data)
                    console.log(response.data)
                }
            } catch (err) {
                console.error(err);
            }
        })();
    }, []);

    // useEffect(() => {
    //     (async () => {
    //         try {
    //             const response = await axiosInstance.get('/questions');
    //             if (response.data) {
    //                 setquestions(response.data)
    //                 console.log(response.data)
    //             }
    //         } catch (err) {
    //             console.error(err);
    //         }
    //     })();
    // }, []);
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('quizAry', quizAry);
        axiosInstance.post("/submitAnswers", quizAry)
            .then((response) => {
                // console.log('response', response)
                setResult(response.data);
                handleResultSubmit(response.data)
            })
    }
    const type = "singleselect"
    const onInputChange = (e) => {
        const updatedQuizAry = quizAry.map((item,index) => {
            console.log(`quizAry item ${index}`, item);
            console.log('eventObj', e.target);
            
            if ((item.qid) !== parseInt(e.target.name)) return item;
            return {
                ...item,
                options: item.options.map(opt => {
                    console.log('options goutham', opt);
                    let checked = opt.que_options === e.target.value;
                    if (type === "multiselect" && opt.selected) checked = !checked;
                    return {
                        ...opt,
                        selected: checked
                    }
                })
            }
        });
        setQuizAry(updatedQuizAry)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {
                    quizAry.map(ques => {
                        return (
                            <>
                                <div>
                                    {ques.question}
                                </div>
                                {ques.options.map((ans, index_ans) => {
                                    index_ans = index_ans + 1
                                    return (
                                        <SingleSelect
                                            index_ans={index_ans}
                                            questionObj={ques}
                                            answer={ans}
                                            handleChange={onInputChange}
                                        />
                                    )
                                })}
                            </>
                        )
                    })
                }
                {/* <input type='submit' value='submit' /> */}
                <Link
            to={{
                pathname : `/result`,
                result
            }}>
                <input type='submit' value='submit'/>
            </Link>

            </form>
        </div>
    );
}

const mapStateToProps = (state, props) => {
    console.log('stateObj', state);
    return{
        logError: 'log'
    }
}

const mapDispatchToProps = (dispatch, props)=>{
    return {
    handleResultSubmit: (response) => {
        dispatch(setResultOnSubmit(response));
      }
    }
  }
export default (Questions);
