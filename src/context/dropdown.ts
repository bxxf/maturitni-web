import { Context, createContext } from 'react';
const DropdownContext = createContext({}) as Context<{
  opened?: boolean;
  setOpened?: React.Dispatch<any>;
}>;
export default DropdownContext;
