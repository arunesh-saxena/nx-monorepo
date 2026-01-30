// Uncomment this line to use CSS modules
// import styles from './app.module.css';
import NxWelcome from './nx-welcome';

import { Button } from '@nx-kavi2/shared-ui';
export function App() {
  return (
    <div>
      <Button label="Click Me hello he" onClick={() => console.log('Button clicked! Products')} />
      <NxWelcome title="products" />
    </div>
  );
}

export default App;
