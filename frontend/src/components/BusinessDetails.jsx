/* eslint-disable react/prop-types */
const BusinessDetails = ({ formData, setFormData }) => {
  const handleChange = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Business Details</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Business Type
        </label>
        <select
          className="mt-1 p-2 border rounded w-full"
          value={formData.businessType || ""}
          onChange={(e) => handleChange("businessType", e.target.value)}
        >
          <option value="">Select Business Type</option>
          <option value="Retailer">Retailer</option>
          <option value="Wholesale">Wholesale</option>
          <option value="Manufacturer">Manufacturer</option>
        </select>
        {formData.businessType === "" && (
          <p className="text-red-500">This field is required</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Company Name
        </label>
        <input
          type="text"
          placeholder="Enter Company Name"
          className="mt-1 p-2 border rounded w-full"
          value={formData.companyName || ""}
          onChange={(e) => handleChange("companyName", e.target.value)}
        />
        {formData.companyName === "" && (
          <p className="text-red-500">This field is required</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          TIN Number
        </label>
        <input
          type="text"
          placeholder="Enter TIN Number"
          className="mt-1 p-2 border rounded w-full"
          value={formData.tinNumber || ""}
          onChange={(e) => handleChange("tinNumber", e.target.value)}
        />
        {formData.tinNumber === "" && (
          <p className="text-red-500">This field is required</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Registration Date
        </label>
        <input
          type="date"
          className="mt-1 p-2 border rounded w-full"
          value={formData.registrationDate || ""}
          onChange={(e) => handleChange("registrationDate", e.target.value)}
        />
        {formData.registrationDate === "" && (
          <p className="text-red-500">This field is required</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Business Address
        </label>
        <div className="flex">
          <input
            type="text"
            className="mt-1 p-2 border rounded w-full mr-2"
            placeholder="Street"
            value={formData.businessStreet || ""}
            onChange={(e) => handleChange("businessStreet", e.target.value)}
          />
          <input
            type="text"
            className="mt-1 p-2 border rounded w-full"
            placeholder="District"
            value={formData.businessDistrict || ""}
            onChange={(e) => handleChange("businessDistrict", e.target.value)}
          />
        </div>
        {(formData.businessStreet === "" ||
          formData.businessDistrict === "") && (
          <p className="text-red-500">Street and District are required</p>
        )}
      </div>
    </div>
  );
};

export default BusinessDetails;
