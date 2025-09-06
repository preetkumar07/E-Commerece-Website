import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product, CartItem, User, mockProducts } from '@/data/mockData';

interface StoreState {
  // Products
  products: Product[];
  categories: string[];
  
  // Cart
  cart: CartItem[];
  isCartOpen: boolean;
  
  // User
  user: User | null;
  isAuthModalOpen: boolean;
  authMode: 'login' | 'signup';
  
  // Wishlist
  wishlist: string[];
  
  // Search & Filters
  searchQuery: string;
  selectedCategory: string;
  priceRange: [number, number];
  sortBy: 'name' | 'price-low' | 'price-high' | 'rating' | 'newest';
  
  // Actions
  addToCart: (productId: string, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateCartQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  
  toggleWishlist: (productId: string) => void;
  
  setUser: (user: User | null) => void;
  toggleAuthModal: () => void;
  setAuthMode: (mode: 'login' | 'signup') => void;
  
  setSearchQuery: (query: string) => void;
  setSelectedCategory: (category: string) => void;
  setPriceRange: (range: [number, number]) => void;
  setSortBy: (sort: 'name' | 'price-low' | 'price-high' | 'rating' | 'newest') => void;
  
  // Computed
  cartTotal: () => number;
  cartItemsCount: () => number;
  getFilteredProducts: () => Product[];
}

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      // Initial state
      products: mockProducts,
      categories: ['all', 'electronics', 'fashion', 'accessories', 'home'],
      cart: [],
      isCartOpen: false,
      user: null,
      isAuthModalOpen: false,
      authMode: 'login',
      wishlist: [],
      searchQuery: '',
      selectedCategory: 'all',
      priceRange: [0, 1000],
      sortBy: 'newest',
      
      // Cart actions
      addToCart: (productId: string, quantity = 1) => {
        set((state) => {
          const existingItem = state.cart.find(item => item.productId === productId);
          if (existingItem) {
            return {
              cart: state.cart.map(item =>
                item.productId === productId
                  ? { ...item, quantity: item.quantity + quantity }
                  : item
              )
            };
          }
          return {
            cart: [...state.cart, { productId, quantity }]
          };
        });
      },
      
      removeFromCart: (productId: string) => {
        set((state) => ({
          cart: state.cart.filter(item => item.productId !== productId)
        }));
      },
      
      updateCartQuantity: (productId: string, quantity: number) => {
        if (quantity <= 0) {
          get().removeFromCart(productId);
          return;
        }
        set((state) => ({
          cart: state.cart.map(item =>
            item.productId === productId
              ? { ...item, quantity }
              : item
          )
        }));
      },
      
      clearCart: () => set({ cart: [] }),
      toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
      
      // Wishlist actions
      toggleWishlist: (productId: string) => {
        set((state) => ({
          wishlist: state.wishlist.includes(productId)
            ? state.wishlist.filter(id => id !== productId)
            : [...state.wishlist, productId]
        }));
      },
      
      // User actions
      setUser: (user: User | null) => set({ user }),
      toggleAuthModal: () => set((state) => ({ isAuthModalOpen: !state.isAuthModalOpen })),
      setAuthMode: (mode: 'login' | 'signup') => set({ authMode: mode }),
      
      // Search & Filter actions
      setSearchQuery: (query: string) => set({ searchQuery: query }),
      setSelectedCategory: (category: string) => set({ selectedCategory: category }),
      setPriceRange: (range: [number, number]) => set({ priceRange: range }),
      setSortBy: (sort: 'name' | 'price-low' | 'price-high' | 'rating' | 'newest') => set({ sortBy: sort }),
      
      // Computed values
      cartTotal: () => {
        const { cart, products } = get();
        return cart.reduce((total, item) => {
          const product = products.find(p => p.id === item.productId);
          return total + (product?.price || 0) * item.quantity;
        }, 0);
      },
      
      cartItemsCount: () => {
        const { cart } = get();
        return cart.reduce((total, item) => total + item.quantity, 0);
      },
      
      getFilteredProducts: () => {
        const { products, searchQuery, selectedCategory, priceRange, sortBy } = get();
        
        let filtered = products.filter(product => {
          // Search filter
          const matchesSearch = !searchQuery || 
            product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.brand.toLowerCase().includes(searchQuery.toLowerCase());
          
          // Category filter
          const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
          
          // Price filter
          const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
          
          return matchesSearch && matchesCategory && matchesPrice;
        });
        
        // Sort
        filtered.sort((a, b) => {
          switch (sortBy) {
            case 'name':
              return a.name.localeCompare(b.name);
            case 'price-low':
              return a.price - b.price;
            case 'price-high':
              return b.price - a.price;
            case 'rating':
              return b.rating - a.rating;
            case 'newest':
              return (a.isNew ? 1 : 0) - (b.isNew ? 1 : 0);
            default:
              return 0;
          }
        });
        
        return filtered;
      }
    }),
    {
      name: 'luxe-store',
      partialize: (state) => ({
        cart: state.cart,
        wishlist: state.wishlist,
        user: state.user
      })
    }
  )
);