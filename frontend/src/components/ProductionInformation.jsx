/* eslint-disable react/prop-types */
import { useState } from "react";

const ProductionInformation = ({ formData, setFormData }) => {
  const [otherPurpose, setOtherPurpose] = useState(false);

  const handleChange = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handlePurposeChange = (value) => {
    setOtherPurpose(value === "Other");
    handleChange("importationPurpose", value);
  };

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Production Information</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Purpose of Importation
        </label>
        <select
          className="mt-1 p-2 border rounded w-full"
          value={formData.importationPurpose || ""}
          onChange={(e) => handlePurposeChange(e.target.value)}
        >
          <option value="">Select Purpose of Importation</option>
          <option value="Direct sale">Direct sale</option>
          <option value="Personal use">Personal use</option>
          <option value="Trial use">Trial use</option>
          <option value="Other">Other</option>
        </select>
        {formData.importationPurpose === "" && (
          <p className="text-red-500">This field is required</p>
        )}
      </div>

      {otherPurpose && (
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Specify Purpose of Importation
          </label>
          <input
            type="text"
            className="mt-1 p-2 border rounded w-full"
            value={formData.specifyImportationPurpose || ""}
            onChange={(e) =>
              handleChange("specifyImportationPurpose", e.target.value)
            }
          />
          {formData.specifyImportationPurpose === "" && (
            <p className="text-red-500">This field is required</p>
          )}
        </div>
      )}

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Product Category
        </label>
        <select
          className="mt-1 p-2 border rounded w-full"
          value={formData.productCategory || ""}
          onChange={(e) => handleChange("productCategory", e.target.value)}
        >
          <option value="">Select Product Category</option>
          <option value="General purpose">General purpose</option>
          <option value="Construction materials">Construction materials</option>
          <option value="Chemicals">Chemicals</option>
        </select>
        {formData.productCategory === "" && (
          <p className="text-red-500">This field is required</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Product Name
        </label>
        <input
          type="text"
          className="mt-1 p-2 border rounded w-full"
          value={formData.productName || ""}
          onChange={(e) => handleChange("productName", e.target.value)}
        />
        {formData.productName === "" && (
          <p className="text-red-500">This field is required</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Weight (kg)
        </label>
        <input
          type="number"
          className="mt-1 p-2 border rounded w-full"
          value={formData.productWeight || ""}
          onChange={(e) => handleChange("productWeight", e.target.value)}
        />
        {/* Add validation for weight if needed */}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Description of Products
        </label>
        <textarea
          className="mt-1 p-2 border rounded w-full"
          value={formData.productDescription || ""}
          onChange={(e) => handleChange("productDescription", e.target.value)}
        />
        {formData.productDescription === "" && (
          <p className="text-red-500">This field is required</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Unit of Measurement
        </label>
        <select
          className="mt-1 p-2 border rounded w-full"
          value={formData.unitOfMeasurement || ""}
          onChange={(e) => handleChange("unitOfMeasurement", e.target.value)}
        >
          <option value="">Select Unit of Measurement</option>
          <option value="Kgs">Kgs</option>
          <option value="Tonnes">Tonnes</option>
        </select>
        {formData.unitOfMeasurement === "" && (
          <p className="text-red-500">This field is required</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Quantity of Product(s)
        </label>
        <input
          type="number"
          className="mt-1 p-2 border rounded w-full"
          value={formData.productQuantity || ""}
          onChange={(e) => handleChange("productQuantity", e.target.value)}
        />
        {formData.productQuantity === "" && (
          <p className="text-red-500">This field is required</p>
        )}
        {formData.productQuantity !== "" &&
          parseFloat(formData.productQuantity) <= 0 && (
            <p className="text-red-500">
              Please provide a number greater than zero
            </p>
          )}
      </div>
    </div>
  );
};

export default ProductionInformation;
