import { InputHTMLAttributes } from "react";

export type InputVariants = 'sessions' | 'default';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  variant?: InputVariants;
  name: string;
  label: string;
};