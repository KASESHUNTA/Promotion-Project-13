import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./header.jsx";
import Worries from "./worries.jsx";
import Features from "./features.jsx";
import Inquiry from "./inquiry.jsx";
import Company from "./company.jsx";
import FeeList from "./fee.jsx";
import ComparisonTable from "./PricingComparisonTable.jsx";
import ComparisonTableSP from "./PricingComparisonTableSP.jsx";
import Step from "./step.jsx";
import Questions from "./question.jsx";
import Footer from "./footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <Worries />
    <Features />
    <Inquiry />
    <Company />
    <FeeList />
    <ComparisonTable />
    <ComparisonTableSP />
    <Step />
    <Inquiry />
    <Questions />
    <Footer />
  </StrictMode>
);
