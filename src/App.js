// IMPORT COMPONENTS
import Header from "./components/Header";
import Menu from "./components/Menu";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="group">
        <Menu />
        <Main />
      </div>
    </div>
  );
}

export default App;
