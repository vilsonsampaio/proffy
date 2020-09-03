import { SignInBodyProps, SignUpBodyProps, ForgotPasswordBodyProps, ResetPasswordBodyProps } from './endpoints.d';


export const API_URL = 'http://localhost:3333';

export const SIGN_IN = (body: SignInBodyProps) => {
  return (
    {
      path: '/sign_in',
      config: {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      }
    }
  );
};

export const SIGN_UP = (body: SignUpBodyProps) => {
  return (
    {
      path: '/sign_up',
      body: body,
    }
  );
};

export const FORGOT_PASSWORD = (body: ForgotPasswordBodyProps) => {
  return (
    {
      path: '/forgot_password',
      body: body,
    }
  );
};

export const RESET_PASSWORD = (body: ResetPasswordBodyProps) => {
  return (
    {
      path: '/reset_password',
      body: body,
    }
  );
};

export const LIST_USER = (token: string) => {
  return (
    {
      path: '/users',
      config: {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        },
      }
    }
  );
};

export const CHECK_TOKEN = (token: string) => {
  return (
    {
      path: '/check_token',
      config: {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      },
    }
  );
};

