const initialState = {
    isLoading: true,
    submitAnswers: {},
    routeChange: false,
    questions: {},
};

export default function questions(state = initialState, action) {
	let routeChange = false
	switch (action.type) {
        case 'SET_TEST_RESULTS':
            return{
                ...state,
                submitAnswers: action.payload
            }
		case "GET_NEW_QUESTION_START":

			return {
				...state,
				isLoading: true,
				reload:action.params.reload,
				actionMessage: action.params.actionMessage,
				loadingSection: action.params.sectionIndex,
				isReflexive: action.params.isReflexive,
				validate: action.params.validate,
				isListAddAction: action.params.isListAddAction,
				breadcrumbNavigation: action.params.breadcrumbNavigation,
				maskedQArray: action.params.maskedQArray,
			}
		default:
			return state;
	}
}

