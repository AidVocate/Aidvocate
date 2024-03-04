import Route from "../routes/Route"
import { Children } from "../interfaces/Node"

export default function UserRoute({ children }: Children) {
  return (
    <Route token={true} to="/login">
      {children}
    </Route>
  )
}


