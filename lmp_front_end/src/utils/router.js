import { push } from 'connected-react-router';

export default function router(dispatch, response) {
    const redirectURL = response.redirectURL
	dispatch(push(`/${redirectURL}`));
}
