import LogIn from '../Common/LogIn'
import Home from '../Home/Home'

export const publicRoute =[
    {path:"/",Component: Home},
    {path:"/Home",Component: Home},
    {path:"/logIn", Component: LogIn}
]