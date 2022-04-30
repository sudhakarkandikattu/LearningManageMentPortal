import React, { Suspense, lazy } from 'react';
import { Routes, Route, Switch } from 'react-router-dom';
import Course from './components/Course';
import Content from './components/Content';
import Questions from './components/Questions';
import ScrollToTop from './ScrollToTop';
// import Pagefrom './Pages/PageNotFound';
// const PageNotFound = lazy(() => retry(() => import('./Pages/PageNotFound')));
// const Content = lazy(() => retry(() => import('./components/Content')));
import Result from './components/Result';
import Login from './components/Login';

const AppRouter = () => {
  return (
    <>
      <ScrollToTop>
        <Switch>
          <Route exact path={['/']} component={Content} />
          <Route path={['/courses']} component={Content} />
          <Route path={['/course/:courseId']} component={Course} />
          <Route path={['/questions']} component={Questions} />
          <Route path={['/result']} component={Result} />
        </Switch>
      </ScrollToTop>
    </>
  );
};

export default AppRouter;
