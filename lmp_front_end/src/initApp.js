import LocalStorageServices from './utils/localStorageServices';
import router from './utils/router';

export default async function initApp(store, config) {
	const { getState, dispatch } = store;
	
	let loginRedirection = false;

	const accessToken = LocalStorageServices.getAccessToken();
	
	if (!accessToken) loginRedirection = true;

    const { pathname, search } = window.location;

	const URL = pathname.concat(search);

	if (loginRedirection) {
        let response = {
            redirectURL: 'login'
        }
		router(dispatch, response);
		return;
	// eslint-disable-next-line no-else-return
	} else {
        return;
    }

}
