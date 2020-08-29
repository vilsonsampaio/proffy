import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';

import SignIn from '../pages/Sessions/SignIn';
import SignUp from '../pages/Sessions/SignUp';
import ForgotPassword from '../pages/Sessions/ForgotPassword';
import ResetPassword from '../pages/Sessions/ResetPassword';


import Landing from '../pages/Landing';
import TeacherList from '../pages/TeacherList';
import TeacherForm from '../pages/TeacherForm';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/sessions/sign-in" component={SignIn} />
      <Route path="/sessions/sign-up" component={SignUp} />
      <Route path="/sessions/forgot-password" component={ForgotPassword} />
      <Route path="/sessions/reset-password" component={ResetPassword} />
      <PrivateRoute />

      <PrivateRoute path="/" exact component={Landing} />
      <PrivateRoute path="/study" component={TeacherList} />
      <PrivateRoute path="/give-classes" component={TeacherForm} />
    </BrowserRouter>
  );
}

export default Routes;