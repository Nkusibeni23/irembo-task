import { useState } from "react";
import axios from "axios";
import BusinessDetails from "./components/BusinessDetails";
import BusinessOwnerDetails from "./components/BusinessOwnerDeatils";
import ProductionInformation from "./components/ProductionInformation";

const App = () => {
  const [formData, setFormData] = useState({});

  const handleFormSubmit = async () => {
    try {
      // Make a POST request to your backend API
      const response = await axios.post(
        "http://localhost:3003/api/user/signup",
        formData
      );

      // Log the response from the backend
      console.log("Response from the backend:", response.data);

      // You can handle the response or update your UI accordingly
    } catch (error) {
      // Handle errors if any
      console.error("Error submitting form:", error.message);
    }
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
