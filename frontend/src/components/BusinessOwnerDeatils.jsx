/* eslint-disable react/prop-types */

const BusinessOwnerDetails = ({ formData, setFormData }) => {
  const handleChange = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Business Owner Details</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Applicant Citizenship
        </label>
        <select
          className="mt-1 p-2 border rounded w-full"
          value={formData.applicantCitizenship || ""}
          onChange={(e) => handleChange("applicantCitizenship", e.target.value)}
        >
          <option value="">Select citizenship</option>
          <option value="Rwandan">Rwandan</option>
          <option value="Foreigner">Foreigner</option>
        </select>
        {formData.applicantCitizenship === "" && (
          <p className="text-red-500">This field is required</p>
        )}
      </div>

      {formData.applicantCitizenship === "Rwandan" && (
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Identification Document Number
          </label>
          <input
            type="text"
            className="mt-1 p-2 border rounded w-full"
            value={formData.identificationNumber || ""}
            onChange={(e) =>
              handleChange("identificationNumber", e.target.value)
            }
          />
          {formData.identificationNumber === "" && (
            <p className="text-red-500">This field is required</p>
          )}
        </div>
      )}

      {formData.applicantCitizenship === "Foreigner" && (
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Passport Number
          </label>
          <input
            type="text"
            className="mt-1 p-2 border rounded w-full"
            value={formData.passportNumber || ""}
            onChange={(e) => handleChange("passportNumber", e.target.value)}
          />
          {formData.passportNumber === "" && (
            <p className="text-red-500">This field is required</p>
          )}
        </div>
      )}

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Other Names
        </label>
        <input
          type="text"
          className="mt-1 p-2 border rounded w-full"
          value={formData.otherNames || ""}
          onChange={(e) => handleChange("otherNames", e.target.value)}
        />
        {formData.otherNames === "" && (
          <p className="text-red-500">This field is required</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Surname
        </label>
        <input
          type="text"
          className="mt-1 p-2 border rounded w-full"
          value={formData.surname || ""}
          onChange={(e) => handleChange("surname", e.target.value)}
        />
        {formData.surname === "" && (
          <p className="text-red-500">This field is required</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Nationality
        </label>
        <input
          type="text"
          className="mt-1 p-2 border rounded w-full"
          value={formData.nationality || ""}
          onChange={(e) => handleChange("nationality", e.target.value)}
        />
        {formData.nationality === "" && (
          <p className="text-red-500">This field is required</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Phone Number
        </label>
        <input
          type="tel"
          className="mt-1 p-2 border rounded w-full"
          value={formData.phoneNumber || ""}
          onChange={(e) => handleChange("phoneNumber", e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          E-mail Address
        </label>
        <input
          type="email"
          className="mt-1 p-2 border rounded w-full"
          value={formData.emailAddress || ""}
          onChange={(e) => handleChange("emailAddress", e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Business Owner Address
        </label>
        <div className="flex">
          <input
            type="text"
            className="mt-1 p-2 border rounded w-full mr-2"
            placeholder="Street"
            value={formData.street || ""}
            onChange={(e) => handleChange("street", e.target.value)}
          />
          <input
            type="text"
            className="mt-1 p-2 border rounded w-full"
            placeholder="District"
            value={formData.district || ""}
            onChange={(e) => handleChange("district", e.target.value)}
          />
        </div>
        {(formData.street === "" || formData.district === "") && (
          <p className="text-red-500">Street and District are required</p>
        )}
      </div>
    </div>
  );
};

export default BusinessOwnerDetails;
