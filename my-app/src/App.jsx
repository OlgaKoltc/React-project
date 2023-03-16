import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Game from "./components/Game/Game";
import Table from "./components/Table/Table";
import Card from "./components/CardSet/CardSet";
import "./style/App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Game />
        <Table />
        <Card />
      </div>
      <Footer />
    </div>
  );
}

export default App;
