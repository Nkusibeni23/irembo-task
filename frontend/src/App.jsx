import { useState } from "react";
import BusinessDetails from "./components/BusinessDetails";
import BusinessOwnerDetails from "./components/BusinessOwnerDeatils";
import ProductionInformation from "./components/ProductionInformation";

const App = () => {
  const [formData, setFormData] = useState({});

  const handleFormSubmit = () => {
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">
        RICA - Import permit Application Form
      </h1>
      <BusinessOwnerDetails formData={formData} setFormData={setFormData} />
      <BusinessDetails formData={formData} setFormData={setFormData} />
      <ProductionInformation formData={formData} setFormData={setFormData} />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
        onClick={handleFormSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default App;
