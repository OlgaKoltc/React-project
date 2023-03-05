import "./style/App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Game from "./components/Game/Game";
import Table from "./components/Table/Table";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Game />
        <Table />
      </div>
      <Footer />
    </div>
  );
}

export default App;
