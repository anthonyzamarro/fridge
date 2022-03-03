import { ReactEventHandler } from 'react';

export interface InputProps {
  type: string;
  name: string;
  placeholder: string;
  defaultValue: string;
  onChange: ReactEventHandler;
}
