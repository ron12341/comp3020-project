import Product from "../objects/Product";

const TSHIRT_PRICE = 9.99;
const HOODIE_PRICE = 29.99;
const HAT_PRICE = 14.99;
const SWEATPANTS_PRICE = 24.99;

// Configurations for each product type
const tshirtConfigurations = [
  { color: "white", neckline: "regular", sleeves: "regular" },
  { color: "white", neckline: "regular", sleeves: "long" },
  { color: "white", neckline: "vneck", sleeves: "regular" },
  { color: "white", neckline: "vneck", sleeves: "long" },
  { color: "black", neckline: "regular", sleeves: "regular" },
];

const hoodieConfigurations = [
  { color: "white" },
  { color: "black" },
  { color: "gray" },
];

const hatConfigurations = [
  { color: "white" },
  { color: "black" },
  { color: "blue" },
];

const sweatpantsConfigurations = [
  { color: "black" },
  { color: "gray" },
];

// Factory functions
const createTshirt = (color: string, neckline: string, sleeves: string): Product => {
  const id = `tshirt-${color}-${neckline}-${sleeves}`;
  const description = `T-shirt with a ${neckline} neckline, ${sleeves} sleeves, and a ${color} color.`;
  const imagePath = `/images/apparels/${id}.png`;

  return new Product(id, TSHIRT_PRICE, description, imagePath);
};

const createHoodie = (color: string): Product => {
  const id = `hoodie-${color}`;
  const description = `Hoodie in ${color} color.`;
  const imagePath = `/images/apparels/${id}.png`;

  return new Product(id, HOODIE_PRICE, description, imagePath);
};

const createHat = (color: string): Product => {
  const id = `hat-${color}`;
  const description = `Hat in ${color} color.`;
  const imagePath = `/images/apparels/${id}.png`;

  return new Product(id, HAT_PRICE, description, imagePath);
};

const createSweatpants = (color: string): Product => {
  const id = `sweatpants-${color}`;
  const description = `Sweatpants in ${color} color.`;
  const imagePath = `/images/apparels/${id}.png`;

  return new Product(id, SWEATPANTS_PRICE, description, imagePath);
};

// Generate products
export const tshirtProducts = tshirtConfigurations.map(config =>
  createTshirt(config.color, config.neckline, config.sleeves)
);

export const hoodieProducts = hoodieConfigurations.map(config =>
  createHoodie(config.color)
);

export const hatProducts = hatConfigurations.map(config =>
  createHat(config.color)
);

export const sweatpantsProducts = sweatpantsConfigurations.map(config =>
  createSweatpants(config.color)
);

// Combine all products into one export if needed
export const allProducts = [
  ...tshirtProducts,
  ...hoodieProducts,
  ...hatProducts,
  ...sweatpantsProducts,
];
