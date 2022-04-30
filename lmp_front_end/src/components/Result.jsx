import '../App.css';
import React from 'react';
import { useEffect,useState } from 'react';
import { axiosInstance } from '../utils/axios';
import { connect } from 'react-redux';
import withRouter from '../ScrollToTop';
function Result({options, question_id, results = []}) {
    // const [result, setResult] = useState(results)
    console.log('results', results);
    useEffect(() => {
        // (async () => {
        //     try {
        //         const response = await axiosInstance.get('/submitAnswers');
        //         if (response.data) {
        //             setResult(response.data)
        //         }
        //     } catch (err) {
        //         console.error(err);
        //     }
        // })();
    }, []);
    return (
        <div>
            <h3>you scored {results.right_answers} out of {results.total_questions}</h3>
        </div>
    );
}

const mapStateToProps = (state, props) => {
    console.log('Resuolts stateObj', state);
    console.log('state?.questions?.submitAnswers', state?.questions?.submitAnswers);
    let results = []
    if(state?.questions?.submitAnswers){
        results = state?.questions?.submitAnswers
    }
    return{
        results
    }
}

export default (connect(mapStateToProps, null)(Result));
