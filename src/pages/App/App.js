import "./App.css";
import SuccessPage from "../success-page/success-page";
import { Routes, Route } from "react-router-dom";
import pageImage from "../../images/illustration-sign-up-desktop.svg";
import ListItems from "../../components/listItem/list";
import Form from "../../components/form/form";
import Header from "../../components/header/header";
import Attribution from "../../components/attribution/attribution";
import BannerImage from "../../components/banner/banner";

function DefaultPage() {
  const listItems = [
    "Product discovery and building what matters",
    " Measuring to ensure updates are a success",
    "And much more!",
  ];

  return (
    <main className="body">
      <div className="entire-page-container">
        {/* section 1 */}
        <section className="newsletter-page-content">
          <Header className="newsletter-page-content__header" />
          <ListItems listItems={listItems} />
          <Form />
        </section>

        {/*  section 2 */}
        <BannerImage src={pageImage} />
      </div>
      <Attribution />
    </main>
  );
}
function App() {
  return (
    <Routes>
      <Route path="/" element={<DefaultPage />}></Route>
      <Route path="success" element={<SuccessPage />}></Route>
    </Routes>
  );
}

export default App;
