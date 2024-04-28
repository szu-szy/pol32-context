import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./slice";

// krok 1 - utwworzenie store
export const store = configureStore({
  reducer: { appReducer },
});

// krok 2 - dodanie store do aplikacji w pliku index.tsx

// krok 3 utworzenie redux state slice - plik redux/slice.tsx

// krok 4 utworzenie typów dla state i dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// krok 5 useSelector - pobieranie elementów z naszego konrenera

// jak czytac pliki redux
// 1. store.ts
// 2. slice.ts
// 3. hooks.ts
// 4. index.tsx - > udostepnienie redux dla aplikacji
// 5. App.tsx - użycie useDispatch i useSelector
