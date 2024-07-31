import React from 'react'
import { Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { BiLogInCircle } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'

import { logout } from '../Redux_work/UserSlice'


const Btnlog = () => {

  const { isLogedin } = useSelector((state) => state.user)
  const dispatcher = useDispatch()
  const navi = useNavigate()


  return (
    <div>
      <Link to='Login'>

        {
          isLogedin == false ? <Button>Login<BiLogInCircle /></Button> :
            <Button onClick={() => {
              dispatcher(logout())
              navi("/")
            }
            }>logout</Button>
        }

      </Link>
    </div>
  )
}

export default Btnlog