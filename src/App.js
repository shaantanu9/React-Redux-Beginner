import "./styles.css";
import Purchase from "./components/Purchase";
import Total from "./components/Total";
import Cart from "./components/Cart";

export default function App() {
  return (
    <div className="App">
      <Cart />
      <Purchase />
      <Total />
    </div>
  );
}
