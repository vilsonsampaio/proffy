import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import CustomRoute from './CustomRoute';

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
      <CustomRoute exact path="/sessions/sign-in" component={SignIn} />
      <CustomRoute exact path="/sessions/sign-up" component={SignUp} />
      <CustomRoute exact path="/sessions/forgot-password" component={ForgotPassword} />
      <CustomRoute exact path="/sessions/reset-password" component={ResetPassword} />

      <CustomRoute isPrivate exact path="/" component={Landing} />
      <CustomRoute isPrivate exact path="/study" component={TeacherList} />
      <CustomRoute isPrivate exact path="/give-classes" component={TeacherForm} />
    </BrowserRouter>
  );
}

export default Routes;