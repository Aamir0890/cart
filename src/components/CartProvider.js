'use client';

import { CartProvider as UsecartProvider } from 'react-use-cart';

export function CartProvider({ children }) {
  return <UsecartProvider>{children}</UsecartProvider>;
}
