import { Navigate } from "react-router-dom";
import { useStateContext } from '../contexts/ContextProvider';
import { Children } from "../interfaces/Node"

interface RouteProps extends Children {
  token: boolean,
  to: string,
}

export default function Route(props: RouteProps) {
  const { userToken } = useStateContext();
  return (
      <>
        {(props.token ? userToken : !userToken) ? (
          props.children
        ) : (
          <Navigate to={props.to} />
        )}
      </>
  )
}


