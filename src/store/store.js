import create from "zustand";

const useStore = create((set, get) => ({
  //TEMA
  theme: "light",
  changeTheme: () => set({ theme: get().theme === "light" ? "dark" : "light" }),
  //SIDEBAR
  sidebar: false,
  openSidebar: () => set({ sidebar: true }),
  closeSidebar: () => set({ sidebar: false }),
  //CART
  cart: [],
  subtotal: 0,
  totalItems: 0,
  addCart: (newProduct) => {
    if (!get().cart.some((product) => product.id === newProduct.id)) {
      set({ cart: [...get().cart, newProduct] });
    } else {
      get().cart.forEach((product) => {
        if (product.id === newProduct.id) {
          product.amount = product.amount + newProduct.amount;
        }
      });
    }
    set({ subtotal: get().subtotal + newProduct.price });
    set({ totalItems: get().totalItems + 1 });
  },
  removeFromCart: (id) => {
    let itemToRemove = get().cart.filter((product) => product.id === id)[0];
    set({
      totalItems: get().totalItems - itemToRemove.amount,
    });
    set({
      subtotal: get().subtotal - itemToRemove.amount * itemToRemove.price,
    });
    set({ cart: get().cart.filter((product) => product.id !== id) });
  },
  clearCart: () => {
    set({ cart: [] });
    set({ subtotal: 0 });
    set({ totalItems: 0 });
  },
  //CATEGORY FILTER
  category: "all",
  changeCategory: (e) => set({ category: e.target.value }),
}));

export default useStore;
