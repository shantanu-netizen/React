import { useContext } from 'react'
import Dashboard from '../components/Dashboard'
import  MyContext  from '../store/mycontext'

export default function Home() {
    const { user } = useContext(MyContext);
    return (
        <div>
            <Dashboard username={user} />
        </div>
    )
}

