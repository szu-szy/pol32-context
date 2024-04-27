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

function App() {
  const { count, handleCount } = useContext(AppContext);
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className="App"
      style={{
        backgroundColor: isDarkMode ? "black" : "white",
        color: isDarkMode ? "white" : "black",
      }}
    >
      <Banner text="nasz text dla bannera" />
      <Button>nasz tekst1</Button>
      <button onClick={() => handleCount(5)}>Dodaj count globalny</button>
      <p>{count}</p>
      <button onClick={toggleTheme}>
        Włącz tryb: {isDarkMode ? "Jasny" : "ciemny"}
      </button>
      <Link href="www.google.com">1231</Link>
      <Input />
      <Form />
      <List />
    </div>
  );
}

export default App;
