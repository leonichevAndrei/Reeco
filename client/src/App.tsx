import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/common/navbar';
import { Fragment } from 'react';
import Analytics from './components/pages/analytics';
import Orders from './components/pages/orders';
import Basket from './components/pages/basket';
import Store from './components/pages/store';

function App() {

  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="*" element={<Navigate to="/basket" />} />
        <Route path="/store" element={<Store />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </Fragment>
  );
}

export default App;
