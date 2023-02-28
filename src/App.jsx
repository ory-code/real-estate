import "./App.scss";
import "./Components/Header/Header";
import topImg from "./Assets/Images/top-img.png"
import Header from "./Components/Header/Header";
function App() {
  return (
    <div className="App">
      <div className="top">
        <Header />
        <div className="top__content">
          <img src={topImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
