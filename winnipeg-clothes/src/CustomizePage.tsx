import { useState } from "react";

import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

import whiteShirt from "./assets/white-shirt.png";
import "./CustomizePage.css";
import DisplayPreview from "./components/DisplayPreview";
import ImageUploader from "./components/ImageUploader";

// function ImageUpload({
//   onImageUpload,
// }: {
//   onImageUpload: (image: string | null) => void;
// }) {
//   const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (file) {
//       onImageUpload(URL.createObjectURL(file));
//     }
//   };

//   return (
//     <div className="uploadSection">
//       <input type="file" accept="image/*" onChange={handleImageUpload} />
//     </div>
//   );
// }

function CustomizePage() {
  const [image, setImage] = useState<string | null>(null);

  const handleImageUpload = (image: string) => {
    console.log("Uploaded Image (Base64):", image);
    setImage(image);
  };

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

          <div className="display-preview-container">
            <DisplayPreview image={image} />
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
          <div className="section-customize" id="upload-image">
            <div className="title">Upload Image</div>
            <div className="options-container">
              <ImageUploader onFileUpload={handleImageUpload} />
            </div>
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
