// krok 1 - tworzenie typu kontekstu

import { createContext, useState } from "react";
import { useThemeContext } from "./hooks/useThemeContext";

type ThemeContextType = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

// krok 2 - tworzymy context na bazie typu
// {} as ThemeContextType - obietnica, że obiekt pusty jest typu ThemeContextType
// aby móc pobrać context w komponentach musimy użyc "export"

export const ThemeContext = createContext<ThemeContextType>(
  {} as ThemeContextType
);

// krok 3 - tworzenie naszego providera z propsami

type Props = {
  children: JSX.Element;
};

export const ThemContextProvider = ({ children }: Props) => {
  const { isDarkMode, toggleTheme } = useThemeContext();

  return (
    // ustawiamy jako value - obiekt który udostepniamy potomkom providera - children
    <ThemeContext.Provider
      value={{
        isDarkMode,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

// krok 4 - należy owrappować naszą aplikacje <App /> w pliku index.tsx

// krok 5 - jakoś odczytać nasz stan z poziomu komponentu za pomoca useContext(naszContext)
