import * as React from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';
import { Button } from '@nx-repo/shared-ui';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './counter/counter.slice';
const Orders = React.lazy(() => import('orders/Module'));

const Products = React.lazy(() => import('products/Module'));

export function App() {
const value = useSelector((state: any) => state.counter.value);
const dispatch = useDispatch();
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/orders">Orders</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>
      <Button label="Click Me shell" onClick={() => console.log('Button clicked! Shell')} />
        <button onClick={() => dispatch(increment())}>increment +</button> value: {value}   <button onClick={() => dispatch(decrement())}>decrement -</button>
      <Routes>
        <Route path="/" element={<NxWelcome title="shell" />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
