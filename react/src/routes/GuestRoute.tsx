import Route from "./Route"
import { Children } from "../interfaces/Node"

export default function GuestRoute({ children }: Children) {
  return (
    <Route token={false} to="/">
      {children}
    </Route>
  )
}


