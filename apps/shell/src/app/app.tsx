import * as React from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';

const Orders = React.lazy(() => import('orders/Module'));

const Products = React.lazy(() => import('products/Module'));
import { Button } from '@nx-kavi2/shared-ui';
export function App() {
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
      <Button label="Click Me" onClick={() => console.log('Button clicked! Shell')} />
      <Routes>
        <Route path="/" element={<NxWelcome title="shell" />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
