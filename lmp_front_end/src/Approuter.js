import React, { Suspense, lazy } from 'react';
import { Routes, Route, Switch } from 'react-router-dom';
import Course from './components/Course';
import Content from './components/Content';
import ScrollToTop from './ScrollToTop';
// import Pagefrom './Pages/PageNotFound';
// const PageNotFound = lazy(() => retry(() => import('./Pages/PageNotFound')));
// const Content = lazy(() => retry(() => import('./components/Content')));

const AppRouter = () => {
  return (
    <>
      <ScrollToTop>
        <Switch>
          <Route exact path={['/']} component={Content} />
          <Route path={['/courses']} component={Content} />
          <Route path={['/course/:courseId']} component={Course} />
        </Switch>
      </ScrollToTop>
    </>
  );
};

export default AppRouter;
