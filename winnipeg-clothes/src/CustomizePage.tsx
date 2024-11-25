import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import DisplayPreview from "./components/DisplayPreview";
import ImageUploader from "./components/ImageUploader";
import "./CustomizePage.css";
import { useCart } from "./contexts/CartProvider";
import { CartItem } from "./objects/CartItem";
import { useCartNotification } from "./contexts/CartNotificationProvider";


const imagesBasePath = "/images";

const SIZES = ["XS", "S", "M", "L", "XL", "2XL", "3XL"];
const APPAREL_STYLES = ["tshirt", "polo", "hoodie", "sweatpant", "hat"];

function CustomizePage() {
  const { addToCart } = useCart();
  const { handleShowNotification } = useCartNotification();
  const [uploaded, setUploaded] = useState<string | "">("");
  const [apparel, setApparel] = useState<number>(0);
  const [color, setColor] = useState<string>("white");
  const [neckline, setNeckline] = useState<string>("regular");
  const [sleeves, setSleeves] = useState<string>("regular");
  const [fit, setFit] = useState<string>("regular");
  const [size, setSize] = useState<string>("XS");
  const [quantity, setQuantity] = useState<number | "">(1);
  const [isCustomizable, setIsCustomizable] = useState<boolean>(true);

  const getApparelClassName = () => {
    let style = APPAREL_STYLES[apparel];

    let className = "";
    if (style === "tshirt") {
      const nl = neckline == "casual" ? "regular" : neckline;
      const sl = sleeves == "fitted" ? "regular" : sleeves;
      className = `${style}-${color}-${nl}-${sl}`;
    } else {
      className = `${style}-${color}`;
    }

    return className;
  };

  const getApparelImagePath = () => {
    return `${imagesBasePath}/apparels/${getApparelClassName()}.png`;
  };

  const handleImageUpload = (image: string) => {
    console.log("Uploaded Image (Base64):", image);
    setUploaded(image);
  };

  const handleImageDelete = () => {
    console.log("Image deleted");
    setUploaded("");
  };

  const handleLeftClick = () => {
    // Logic for the left button click
    console.log("Left button clicked");
    setApparel((prevApparel) => (prevApparel + APPAREL_STYLES.length - 1) % APPAREL_STYLES.length);
    setUploaded("");
  };

  const handleRightClick = () => {
    // Logic for the right button click
    console.log("Right button clicked");
    setApparel((prevApparel) => (prevApparel + 1) % APPAREL_STYLES.length);
    setUploaded("");
  };

  const handleAddToCart = () => {
    if (quantity === "" || quantity < 1) {
      alert("Quantity must be at least 1");
      return;
    }

    console.log("Added to cart");

    addToCart(
      new CartItem(
        getApparelClassName(),
        19.99,
        size,
        color,
        `Apparel: ${APPAREL_STYLES[apparel]}, Color: ${color}, Neckline: ${neckline}, Sleeves: ${sleeves}, Fit: ${fit}, Size: ${size}`,
        quantity,
        getApparelImagePath()
      )
    );

    handleShowNotification();
  };

  useEffect(() => {
    const style = APPAREL_STYLES[apparel];
    setIsCustomizable(style === "tshirt");
  }, [apparel]);

  return (
    <div className="app">
      <NavBar />

      <div className="contents">
        <div className={`section ${!isCustomizable ? "disabled" : ""}`}>
          <div className="section-customize" id="change-neckline">
            <p className="title">Change Neckline</p>
            <div className="options-container">
              <div
                className={`option ${neckline === "regular" ? "selected" : ""}`}
                onClick={() => setNeckline("regular")}
              >
                <img
                  src={`${imagesBasePath}/options/neckline/regular.png`}
                  alt="Regular"
                />
                <span>Regular</span>
              </div>
              <div
                className={`option ${neckline === "vneck" ? "selected" : ""}`}
                onClick={() => setNeckline("vneck")}
              >
                <img
                  src={`${imagesBasePath}/options/neckline/vneck.png`}
                  alt="V-neck"
                />
                <span>V-neck</span>
              </div>
              <div
                className={`option ${neckline === "casual" ? "selected" : ""}`}
                onClick={() => setNeckline("casual")}
              >
                <img
                  src={`${imagesBasePath}/options/neckline/casual.png`}
                  alt="Casual"
                />
                <span>Casual</span>
              </div>
            </div>
          </div>

          <div className="section-customize" id="change-sleeves">
            <p className="title">Change Sleeves</p>
            <div className="options-container">
              <div
                className={`option ${sleeves === "regular" ? "selected" : ""}`}
                onClick={() => setSleeves("regular")}
              >
                <img
                  src={`${imagesBasePath}/options/sleeves/regular.png`}
                  alt="Regular"
                />
                <span>Regular</span>
              </div>
              <div
                className={`option ${sleeves === "fitted" ? "selected" : ""}`}
                onClick={() => setSleeves("fitted")}
              >
                <img
                  src={`${imagesBasePath}/options/sleeves/fitted.png`}
                  alt="Fitted"
                />
                <span>Fitted</span>
              </div>
              <div
                className={`option ${sleeves === "long" ? "selected" : ""}`}
                onClick={() => setSleeves("long")}
              >
                <img
                  src={`${imagesBasePath}/options/sleeves/long.png`}
                  alt="Long-sleeve"
                />
                <span>Long</span>
              </div>
            </div>
          </div>

          <div className="section-customize" id="change-fit">
            <p className="title">Change Fit</p>
            <div className="options-container">
              <div
                className={`option ${fit === "regular" ? "selected" : ""}`}
                onClick={() => setFit("regular")}
              >
                <img
                  src={`${imagesBasePath}/options/fit/regular.png`}
                  alt="Regular"
                />
                <span>Regular</span>
              </div>
              <div
                className={`option ${fit === "slim" ? "selected" : ""}`}
                onClick={() => setFit("slim")}
              >
                <img
                  src={`${imagesBasePath}/options/fit/slim.png`}
                  alt="Slim"
                />
                <span>Slim</span>
              </div>
              <div
                className={`option ${fit === "loose" ? "selected" : ""}`}
                onClick={() => setFit("loose")}
              >
                <img
                  src={`${imagesBasePath}/options/fit/loose.png`}
                  alt="Loose"
                />
                <span>Loose</span>
              </div>
            </div>
          </div>
        </div>

        <div className="display-section">
          <div className="display-container">
            <button className="left-button" onClick={handleLeftClick}>
              &#8249;
            </button>

            <div className="image-container">
              <img
                className={getApparelClassName()}
                src={getApparelImagePath()}
                alt="Apparel Preview"
              />
              <div
                className="display-preview-container"
                style={{
                  border: `1px dashed ${color === "black" ? "white" : "black"}`,
                }}
              >
                <DisplayPreview image={uploaded} />
              </div>
            </div>

            <button className="right-button" onClick={handleRightClick}>
              &#8250;
            </button>
          </div>
        </div>

        <div className="section">
          <div className="section-customize" id="change-neckline">
            <p className="title">Change Colour</p>

            <div className="options-container">
              <div
                className={`option ${color === "white" ? "selected" : ""}`}
                onClick={() => setColor("white")}
              >
                <div className="option-color" id="white"></div>
                <span>White</span>
              </div>
              <div
                className={`option ${color === "black" ? "selected" : ""}`}
                onClick={() => setColor("black")}
              >
                <div className="option-color" id="black"></div>
                <span>Black</span>
              </div>
              <div
                className={`option ${color === "grey" ? "selected" : ""}`}
                onClick={() => setColor("grey")}
              >
                <div className="option-color" id="grey"></div>
                <span>Grey</span>
              </div>
            </div>
          </div>
          <div className="section-customize" id="upload-image">
            <p className="title">Upload Image</p>
            <div className="options-container">
              <ImageUploader
                onFileUpload={handleImageUpload}
                onFileDelete={handleImageDelete}
                fileString={uploaded}
              />
            </div>
          </div>

          <div className="section-customize" id="change-fit">
            <p className="title">Size and Quantity</p>

            <div className="size-quantity-button-container">
              <div className="size-quantity-container">
                <div className="size-container">
                  <label>Size:</label>
                  <select
                    id="size-select"
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                  >
                    {SIZES.map((size) => (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="quantity-container">
                  <label>Quantity:</label>
                  <input
                    className="quantity-input"
                    type="number"
                    value={quantity}
                    onChange={(e) => {
                      let value = e.target.value;

                      // Remove leading zeros by converting the value to a number
                      if (value.startsWith("0")) {
                        value = String(Number(value));
                      }

                      setQuantity(value === "" ? "" : Number(value)); // Allow empty value
                    }}
                    min="1"
                    onBlur={(e) => {
                      if (e.target.value === "") {
                        setQuantity(1);
                      }
                    }}
                  />
                </div>
              </div>
              <button onClick={handleAddToCart}>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomizePage;
