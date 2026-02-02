import * as React from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';
import { Button } from '@nx-repo/shared-ui';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './counter/counter.slice';

import { cartEventBus } from '@nx-repo/cart-events';

const Cart = React.lazy(() => import('cart/Module'));
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
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/orders">Orders</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>
      <Button
        label="Click Me shell"
        onClick={() => console.log('Button clicked! Shell')}
      />
      <br />
      <button onClick={() => dispatch(decrement())}>
        decrement -
      </button>value:{' '}
      <button onClick={() => dispatch(increment())}>increment +</button>
      <br />
      <button
        onClick={() =>
          cartEventBus.emit({
            type: 'ADD_ITEM',
            payload: { id: `${Date.now()}`, name: 'iPhone', qty: 1 },
          })
        }
      >
        Add to Cart | example of Simple Event Bus
      </button>
      <Routes>
        <Route path="/" element={<NxWelcome title="shell" />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
