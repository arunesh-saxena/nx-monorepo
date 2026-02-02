// Uncomment this line to use CSS modules
// import styles from './app.module.css';
import { CartList } from './cart/cart-list';
import NxWelcome from './nx-welcome';

import { Button } from '@nx-repo/shared-ui';
export function App() {
  return (
    <div>
      <Button
        label="Click Me hello he"
        onClick={() => console.log('Button clicked! Products')}
      />
      <CartList />
      <NxWelcome title="products" />
    </div>
  );
}

export default App;
