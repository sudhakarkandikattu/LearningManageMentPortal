import '../App.css';
import React from 'react';
import { useEffect,useState } from 'react';
import { axiosInstance } from '../utils/axios';
import { connect } from 'react-redux';
function Result({options,question_id}) {
    const [result, setResult] = useState([])
    useEffect(() => {
        (async () => {
            try {
                const response = await axiosInstance.get('/submitAnswers');
                if (response.data) {
                    setResult(response.data)
                }
            } catch (err) {
                console.error(err);
            }
        })();
    }, []);
    return (
        <div>
            <h3>you scored {result.right_answers} out of {result.total_questions}</h3>
        </div>
    );
}

const mapStateToProps = (state, props) => {
    console.log('Resuolts stateObj', state);
}

export default connect(mapStateToProps, null)(Result);