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
import varius from "./Assets/Images/varius.png";
import euTempure from "./Assets/Images/eu-tempus.png";
import blandit from "./Assets/Images/blandit.png";
import Card from "./Components/Card/Card";
import confort from "./Assets/Images/confort.png";
import disk from "./Assets/Images/disk.svg";
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
              Discover Most Suitable <span>Property</span>
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
      <div className="trusted box">
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
      <div className="popular box">
        <h2>Popular Residences</h2>
        <p>
          Integer dictum urna, mauris imperdiet. Sollicitudin enim vitae laoreet
          lorem quis eget. Nam potenti dolor dui, netus.
        </p>
        <div className="popular__content">
          <Card
            img={varius}
            title="Varius odio vel"
            desc="Sagittis, odio turpis amet at lacinia ornare id. Felis bibendum."
          />
          <Card
            img={blandit}
            title="Blandit volutpat nunc"
            desc="Suspendisse pellentesque vestibulum tincidunt in diam libero dolor urna"
          />
          <Card
            img={euTempure}
            title="Eu tempus, gravida"
            desc="Rhoncus pellentesque et porttitor mi adipiscing vitae odio enim"
          />
        </div>
      </div>
      <div className="confort box ">
        <div className="confort__content">
          <div className="confort__img">
            <img src={confort} alt="" />
          </div>
          <div className="confort__text">
            <h2>Comfort is our Top Priority for you</h2>
            <p>
              Congue enim vitae a ultricies feugiat aliquet netus leo. Nec,
              volutpat volutpat vulputate adipiscing.
            </p>
            <div className="confort-info">
              <img src={disk} alt="" />
              <span>Premium National Marketing</span>
            </div>
            <div className="confort-info">
              <img src={disk} alt="" />
              <span>Free, no Obligation Valuations</span>
            </div>

            <Button variant="contained">See More</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
