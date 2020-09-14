export interface UserProps {
  id: number;
  name: string;
  surname: string;
  email: string;
  whatsapp: string | null;
  avatar: string;
  bio: string | null;
}

export interface ScheduleProps {
  week_day: number;
  from: string;
  to: string;
}

export interface ClassProps {
  subject: string;
  cost: number; 
}

export interface SignInProps {
  user: UserProps;
  token: string;
  error?: string;
}

export interface SignInBodyProps {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface SignUpProps {
  error?: string;
}

export interface SignUpBodyProps {
  name: string;
  surname: string;
  email: string;
  password: string;
}

export interface ForgotPasswordBodyProps {
  email: string;
}

export interface ResetPasswordBodyProps {
	id: string;
	token: string;
	password: string;
}

export interface ListUserScheduleProps extends ScheduleProps {
  id: number;
  class_id: number;
}

export interface ListUserProps extends UserProps, ClassProps {
  class_id: number | null;
  schedule: ListUserScheduleProps[] | [];
  error?: string;
}

export interface CheckTeacherProps {
  have_classes: boolean;
  error?: string;
}

export interface CheckTokenProps {
  ok: boolean;
  error?: string;
}