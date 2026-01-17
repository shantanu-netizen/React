import { useContext } from 'react'
import  MyContext  from '../store/mycontext'
export default function HTML() {
  let { user } = useContext(MyContext);
  return (
    <div>
      <h3> Hey {user}, All the best.</h3>
      <h4>Welcome to HTML</h4>
    </div>
  )
}
