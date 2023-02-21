import "./App.css";
import { Header } from "./Components/Header/Header";
import { Main } from "./Components/Main/Main";
import { Footer } from "./Components/Footer/Footer";
import { Form } from "./Components/Form/Form";
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
          <Form />
        </h3>
      </ul>
      <Footer />
    </div>
  );
}

export default App;
