import React, { createContext, useState } from "react";
const UserDataContext = createContext();

const UserData = (props) => {
  const [user, setUser] = useState({});

  return (
    <UserDataContext.Provider
      value={{
        user,
        setUser,
      }}
      displayName="user data Context"
    >
      {props.children}
    </UserDataContext.Provider>
  );
};

export { UserDataContext, UserData };
