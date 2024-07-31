import React from 'react'
import { Link } from 'react-router-dom'
 import {FaShoppingCart} from 'react-icons/fa'
import "../style/Btncart.css"
import {useSelector} from 'react-redux'

const Btncart = () => {

    const { isLogedin ,ItemCount} = useSelector((state) => state.user)
    

    return (
        <div>
            <Link to='/shopscart' className='shopcart mlink mfont cart_trol'>
                {
                    isLogedin==true?<><FaShoppingCart className='cart_trolley'/>
                    <span className='cart_total'><b>{ItemCount}</b></span></>:<FaShoppingCart className='cart_trolley'/>
                }
                
                </Link>
            

        </div>
    )
}

export default Btncart