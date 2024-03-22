import React from "react";
import "./App.css";
import Header from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/collection";
import NftCollection from "./pages/nftCollectionPage/NftCollection";
import NftDetail from "./pages/nftDetailPage/NftDetail";

export default function Index() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/collection/:collection_slug"
            element={<NftCollection />}
          />
          <Route path="/nft" element={<NftDetail />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
