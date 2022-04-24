/* eslint no-unused-vars : "off" */
import get from 'lodash/get';

export const setResultOnSubmit = (payload) => ({
  type: "SET_TEST_RESULTS",
  payload,
});

export const getResultOnSubmits = (response, params = {}) => {
  return (dispatch) => {
    const currentStatus = get(
      response,
      'data.response.other_params.current_status',
      ''
    ).toUpperCase();
    if (params.isNetworkResponse !== false)
    //   router(dispatch, null, false, response);
    dispatch({
      type: `GET_${currentStatus}_SUCCESS`,
      payload: get(response, 'data.response', null),
      params,
    });
  };
};
