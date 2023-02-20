import "./App.css";
import { Header } from "./Components/Header/Header";
import { Main } from "./Components/Main/Main";
import { Footer } from "./Components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <ul>
        <h1>
          <Header />
        </h1>
        <h2>
          <Main />
        </h2>
        <h3>
          <Footer />
        </h3>
      </ul>
    </div>
  );
}

export default App;
