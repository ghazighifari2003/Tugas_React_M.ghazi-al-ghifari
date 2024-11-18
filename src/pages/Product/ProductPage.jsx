import React, { useState, useEffect } from "react";
import getAllProducts from "../../services/getAllProducts";
import CardList from "../../components/CardList/CardList";
import Navbar from "../../components/Navbar/Navbar";
import RadioButton from "../../components/RadioButton/RadioButton";
import Header from "../../components/HeaderImage";

const StyledPage = {
  container: {
    maxWidth: "100%",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#1a1a1a",
    color: "white",
    paddingTop: "120px", // Memberikan jarak untuk menghindari tumpang tindih dengan navbar
  },
  filterSection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "20px 0",
    color: "white",
  },
  searchInput: {
    padding: "10px 20px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    backgroundColor: "white",
    color: "black", // Teks pencarian berwarna hitam
    outline: "none",
    width: "300px",
  },
  productGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "20px",
  },
};

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const allProducts = getAllProducts();
    setProducts(allProducts.length > 0 ? allProducts : []);
    setFilteredProducts(allProducts);
  }, []);

  const filterProducts = (filter, query) => {
    const filtered = products.filter((product) => {
      const isInCategory =
        filter === "all" || product.category === filter;
      const matchesSearch =
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query);
      return isInCategory && matchesSearch;
    });
    setFilteredProducts(filtered);
  };

  const handleFilterChange = (value) => {
    setSelectedFilter(value);
    filterProducts(value, searchQuery); // Filter langsung saat kategori dipilih
  };

  const handleSearchChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    filterProducts(selectedFilter, query); // Filter langsung saat mengetik
  };

  const RadioButtonOpts = [
    { label: "All", value: "all" },
    { label: "Men's Kit", value: "Men's Kit" },
    { label: "Women's Kit", value: "Women's Kit" },
  ];

  return (
    <>
      <Navbar />
      <div style={StyledPage.container}>
        <Header />
        <div style={StyledPage.filterSection}>
          <h3>Filter Products</h3>
          <div>
            <RadioButton
              options={RadioButtonOpts}
              defaultValue="all"
              onChange={handleFilterChange}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Search product..."
              value={searchQuery}
              onChange={handleSearchChange}
              style={StyledPage.searchInput}
            />
          </div>
        </div>
        <section>
          <main style={StyledPage.productGrid}>
            <CardList products={filteredProducts} />
          </main>
        </section>
      </div>
    </>
  );
}