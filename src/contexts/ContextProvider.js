import React, { createContext, useContext, useState } from 'react';
import UserProfile from './../components/UserProfile';
import { notifications } from '@syncfusion/ej2';

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  UserProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {

  const [activeMenu, setActiveMenu] = useState(true);


  return <StateContext.Provider.Provider value={{activeMenu}}>{children}</StateContext.Provider.Provider>;
};
