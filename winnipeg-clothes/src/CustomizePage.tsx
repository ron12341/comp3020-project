import Footer from "./components/Footer";
import NavBar from "./components/navbar";

import whiteShirt from "./assets/white-shirt.png";
import "./CustomizePage.css";

function CustomizePage() {
  return (
    <div className="app">
      <NavBar />

      <div className="contents">
        <div className="section">
          <div className="section-customize" id="change-neckline">
            <p className="title">Change Neckline</p>
            <div className="options-container">
              <div className="option">Option1</div>
              <div className="option">Option2</div>
              <div className="option">Option3</div>
            </div>
          </div>

          <div className="section-customize" id="change-sleeves">
            <p className="title">Change Sleeves</p>
            <div className="options-container">
              <div className="option">Option1</div>
              <div className="option">Option2</div>
              <div className="option">Option3</div>
            </div>
          </div>

          <div className="section-customize" id="change-fit">
            <p className="title">Change Fit</p>
            <div className="options-container">
              <div className="option">Option1</div>
              <div className="option">Option2</div>
              <div className="option">Option3</div>
            </div>
          </div>
        </div>

        <div className="display-section">
          <div className="display-container">
            <img src={whiteShirt} alt="shirt" />
            <button className="rotate-btn">Rotate</button>
          </div>
        </div>

        <div className="section">
          <div className="section-customize" id="change-neckline">
            <p className="title">Change Colour</p>
            <div className="options-container">
              <div className="option">
                <div className="option-color" id="white"></div>
                <p className="option-label">White</p>
              </div>
              <div className="option">
                <div className="option-color" id="black"></div>
                <p className="option-label">Black</p>
              </div>
              <div className="option">
                <div className="option-color" id="red"></div>
                <p className="option-label">Red</p>
              </div>
              <div className="option">
                <div className="option-color" id="blue"></div>
                <p className="option-label">Blue</p>
              </div>
            </div>
          </div>
          <div className="section-customize" id="change-sleeve">
            <h1>Option 2</h1>
          </div>
          <div className="section-customize" id="change-fit">
            <h1>Option 3</h1>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CustomizePage;
