export type CartItemType = {
  id: number;
  name: string;
  price: number;
  size: number;
  imageUrl: string;
  qty?: number;
};

export type CartItemRequestType = {
  name: string;
  price: number;
  size: number;
  imageUrl: string;
};
