import { SelectHTMLAttributes } from 'react';

interface OptionProps {
  value: string;
  label: string;
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  defaultText?: string;
  name: string;
  label: string;
  options: Array<OptionProps>;
}
