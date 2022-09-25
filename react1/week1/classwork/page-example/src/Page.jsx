import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

import './Page.css';

export default function Page () {
  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}