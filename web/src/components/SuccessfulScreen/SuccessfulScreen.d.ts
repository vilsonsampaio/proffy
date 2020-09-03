import { HTMLAttributes } from 'react';

export interface SuccessfulScreenProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  buttonText: string;
  href: string;
}