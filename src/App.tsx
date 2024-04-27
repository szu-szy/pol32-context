import "./App.css";
import { Banner } from "./components/Banner/Banner";
import { Button } from "./components/Button/Button";
import { Form } from "./components/Form/Form";
import { Input } from "./components/Input/Input";
import { Link } from "./components/Link/Link";
import { List } from "./components/List/List";

function App() {
  return (
    <div className="App">
      <Banner text="nasz text dla bannera" />
      <Button>nasz tekst1</Button>
      <Link href="www.google.com">Go to google</Link>
      <Input />
      <Form />
      <List />
    </div>
  );
}

export default App;
