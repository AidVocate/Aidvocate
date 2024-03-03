import { useContext, useState, createContext } from "react";
import { Dispatch, SetStateAction  } from "react";
import { Children } from "../interfaces/Node"

interface StateContextProps {
  userToken: string | null,
  setUserToken: Dispatch<SetStateAction<null>> | Dispatch<SetStateAction<string>>,
}

const StateContext = createContext<StateContextProps>({
  userToken: null,
  setUserToken: () => { },
})

export const ContextProvider = ({ children }: Children) => {
  //Shared information between components
  const [userToken, setUserToken] = useState('temptoken');
  return (
    <StateContext.Provider
      value={{
        userToken,
        setUserToken,
      }}
    >
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext)