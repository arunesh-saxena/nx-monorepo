type CartItem = {
    id: string;
    name: string;
    qty: number;
};

type CartEvent = {
    type: 'ADD_ITEM' | 'REMOVE_ITEM';
    payload: CartItem;
};

type Listener = (event: CartEvent) => void;

class CartEventBus {
    private listeners = new Set<Listener>();
    private cart: CartItem[] = [];

    subscribe(listener: Listener) {
        this.listeners.add(listener);

        return () => {
            this.listeners.delete(listener);
        };
    }

    emit(event: CartEvent) {
        if (event.type === 'ADD_ITEM') {
            this.cart.push(event.payload);
        }

        if (event.type === 'REMOVE_ITEM') {
            this.cart = this.cart.filter(i => i.id !== event.payload.id);
        }

        this.listeners.forEach(l => l(event));
    }

    getState() {
        return this.cart;
    }
}

export const cartEventBus = new CartEventBus();
