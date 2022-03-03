import { ReactEventHandler } from 'react';

export interface InputProps {
  type: string;
  name: string;
  placeholder: string;
  defaultValue: string;
  handleChange: ReactEventHandler;
}
