/* eslint-disable no-console */
import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

function ScrollToTop({ location, children }) {
    const { pathname } = location;
    useEffect(() => {
        console.log('Scrolling to top');
        window.scrollTo(0, 0);
    }, [pathname]);

    return children;
}

export default withRouter(ScrollToTop);
