import { useEffect, useState } from 'react';
import { cartEventBus } from '@nx-repo/cart-events';

export function CartList() {
  const [items, setItems] = useState(cartEventBus.getState());

  useEffect(() => {
    return cartEventBus.subscribe(() => {
      setItems([...cartEventBus.getState()]);
    });
  }, []);

  return (
    <ul>
        <li>Simple Event Bus example</li>
      {items.map((item) => (
        <li key={item.id}>
          {item.name} x {item.qty}
        </li>
      ))}
    </ul>
  );
}
