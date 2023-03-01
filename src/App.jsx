import "./App.scss";
import "./Components/Header/Header";
import topImg from "./Assets/Images/top-img.png";
import waveIcon from "./Assets/Images/top-logo.svg";
import Header from "./Components/Header/Header";
import icnMap from "./Assets/Images/iconLocation.svg";
import Button from "@mui/material/Button";
import airbnbLogo from "./Assets/Images/airbnbLogo.svg";
import amazonLogo from "./Assets/Images/amazonLogo.svg";
import paypalLogo from "./Assets/Images/paypalLogo.svg";
import iftttLogo from "./Assets/Images/iftttLogo.svg";
import googleLogo from "./Assets/Images/googleLogo.svg";
function App() {
  return (
    <div className="App">
      <div className="top">
        <Header />
        <div className="top__content">
          <img src={topImg} alt="" />
          <img className="waveIcn" src={waveIcon} alt="" />
          <div className="top__text">
            <h1>
              Discover Most Suitable <span>Property </span>{" "}
            </h1>
            <p>
              Non id ut volutpat urna, nulla ornare tempus molestie tincidunt. A
              vitae ut purus non elementum sapien ac at.
            </p>

            <div className="top__search">
              <div className="top__search__icn">
                <img src={icnMap} alt="" />
              </div>
              <div className="input__search">
                <input type="text" placeholder="Search by Location" />
              </div>
              <div className="searchButton">
                <Button id="btn__search" variant="contained">
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="trusted">
        <div className="trusted__content">
          <h2>TrustedBy</h2>
          <p>
            Non egestas nunc tempor pellentesque consequat. Metus neque, sodales
            nisl mauris.
          </p>
          
          <div className="slider">
            <div className="slide-track">
              <div className="slide">
              <img src={iftttLogo} alt="ifttt logo" />
              </div>
              <div className="slide">
              <img src={amazonLogo} alt="amazon logo" />
              </div>
              <div className="slide">
              <img src={googleLogo} alt="google logo" />
              </div>
              <div className="slide">
              <img src={paypalLogo} alt="paypal logo" />
              </div>
              <div className="slide">
              <img src={airbnbLogo} alt="airbnb logo" />
              </div>
              <div className="slide">
              <img src={iftttLogo} alt="ifttt logo" />
              </div>
              <div className="slide">
              <img src={amazonLogo} alt="amazon logo" />
              </div>
              <div className="slide">
              <img src={googleLogo} alt="google logo" />
              </div>
              <div className="slide">
              <img src={paypalLogo} alt="paypal logo" />
              </div>
              <div className="slide">
              <img src={airbnbLogo} alt="airbnb logo" />
              </div>
              <div className="slide">
              <img src={iftttLogo} alt="ifttt logo" />
              </div>
              <div className="slide">
              <img src={amazonLogo} alt="amazon logo" />
              </div>
              <div className="slide">
              <img src={googleLogo} alt="google logo" />
              </div>
              <div className="slide">
              <img src={paypalLogo} alt="paypal logo" />
              </div>
              <div className="slide">
              <img src={airbnbLogo} alt="airbnb logo" />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
