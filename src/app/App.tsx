import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LinkPreview from "./components/LinkPreview";
import "./styles.css";

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <Header />
      <LinkPreview />
      <Footer />
    </div>
  );
};

export default App;
