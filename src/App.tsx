import { useContext } from "react";
import "./App.css";
import { Banner } from "./components/Banner/Banner";
import { Button } from "./components/Button/Button";
import { Form } from "./components/Form/Form";
import { Input } from "./components/Input/Input";
import { Link } from "./components/Link/Link";
import { List } from "./components/List/List";
import { AppContext, AppContextProvider } from "./context/AppContext";
import { ThemeContext } from "./context/ThemeContext";
import { ProductContext } from "./context/ProductContext";
import { SongsContext } from "./context/SongsContext";
import { useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { toggleTheme } from "./redux/slice";

// mozliwa opcja uzaleznienia configu od theme
// odczyt CONFIG[theme]
export const CONFIG = {
  dark: {
    backgroundColor: "black",
    color: "white",
  },
  light: {
    backgroundColor: "white",
    color: "black",
  },
};

function App() {
  // const { count, handleCount } = useContext(AppContext);
  // const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  // const { products, getSum, remove, add } = useContext(ProductContext);
  const { songs, addToFav } = useContext(SongsContext);
  const dispatch = useAppDispatch();
  const { isDarkMode } = useAppSelector((state) => state.appReducer);

  const handleTheme = () => dispatch(toggleTheme());

  return (
    <div className="App">
      {/* Zadanie 2 - context */}
      {/* <h2>Lista produktów</h2>
      {products.length > 0 ? (
        <ul>
          {products.map(({ id, title, price }) => (
            <li key={id}>
              Nazwa: {title} - cena: {price}
            </li>
          ))}
        </ul>
      ) : null}
      <p>Całkowita wartość koszyka: {getSum()} PLN</p>
      <button onClick={() => remove(3)}>Usuń 3 elemenet</button>
      <button
        onClick={() =>
          add({
            id: 11231321313,
            title: "nowy produkt",
            price: 10000,
          })
        }
      >
        Dodaj nowy produkt
      </button> */}
      {/* Zadanie 4 */}
      <h2>lista piosenek</h2>
      <p>ilość piosenek: {songs.length}</p>
      <button
        onClick={() =>
          addToFav({
            id: 2,
            title: "Blinding Lights",
            artist: "The Weeknd",
            duration: "3:20",
            album: "After Hours",
          })
        }
      >
        Add to fav
      </button>
      {/* Redux */}
      <button onClick={handleTheme}>Toggle theme</button>
    </div>
  );
}

export default App;
