import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/common/navbar';
import Analytics from './components/pages/analytics';
import Orders from './components/pages/orders';
import Basket from './components/pages/basket';
import Store from './components/pages/store';
import Order from './components/pages/order';
import { Body } from './components/styled/common';
import { useEffect } from 'react';
import { store } from './redux/store';
import { fetchOrdersIDs } from './redux/features/orders/ordersSlice';

function App() {

  useEffect(() => {
    store.dispatch(fetchOrdersIDs());
  }, [])
  
  return (
    <Body>
      <Navbar />
      <Routes>
        <Route path="*" element={<Navigate to="/orders" />} />
        <Route path="/store" element={<Store />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/order/:id" element={<Order />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </Body>
  );
}

export default App;
