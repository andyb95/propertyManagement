import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Tenant = () => {
    const navigate = useNavigate();
    const user = useSelector(state => state.user)
    console.log(user)
    return (
        <div>
            <button onClick={()=>navigate('/payment')}>
                Make a Payment
            </button>
            <button onClick={()=>navigate('/submitRequest')}>
                Submit a Request
            </button>
            <ol>Tenant page
                <li>submit work orders</li>
                <li>transaction history</li>
                <li>documents</li>
            </ol>
        </div>
    );
}

export default Tenant;
