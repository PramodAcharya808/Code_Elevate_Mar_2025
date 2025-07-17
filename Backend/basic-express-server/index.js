import express from "express";

const app = express();
const PORT = 8000;

// global middlware
app.use(express.json());

// dummy data (in-memory)
let products = [
  { id: "1", name: "iPhone 15" },
  { id: "2", name: "Samsung Galaxy s23" },
];

// API's

// list all products
app.get("/products", (req, res) => {
  try {
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    res
      .status(404)
      .json({ success: false, message: "No data found", error: error.message });
  }
});

// list individual product
app.get("/product/:id", (req, res) => {
  try {
    const id = req.params.id;

    const product = products.find((prd) => prd.id === id);

    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "product not found" });
    }

    res.status(200).json({ success: true, data: product });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// add a product
app.post("/products", (req, res) => {
  const name = req.body.name;

  const newProduct = {
    id: products.length + 1,
    name: name,
  };

  products.push(newProduct);

  res.status(201).json({ succes: true, data: newProduct });
});

// server spin up
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
