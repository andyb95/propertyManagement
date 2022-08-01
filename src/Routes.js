import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Scenes/Home';
import Register from './Scenes/Register'
import Landlord from './Scenes/Landlord/Landlord';
import Tenant from './Scenes/Tenant/Tenant';
import Payment from './Scenes/Payment/Payment';
import Request from './Scenes/Request';
import Documents from './Scenes/Documents';
import AutoDraft from './Scenes/Payment/AutoDraft';
import OneTimePayment from './Scenes/Payment/OneTimePayment';

export default (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/landlord" element={<Landlord/>}/>
        <Route path="/tenant" element={<Tenant/>}/>
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/submitRequest" element={<Request/>}/>
        <Route path="/documents" element={<Documents/>}/>
        <Route path="/autoDraft" element={<AutoDraft/>}/>
        <Route path="/oneTimePayment" element={<OneTimePayment/>}/>
    </Routes>
);
