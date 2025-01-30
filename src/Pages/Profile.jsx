import React, { useState } from "react";
import Barcode from "react-barcode";
import { FaUser, FaRegEdit } from "react-icons/fa";

const UserProfile = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
    photo: "",
    height: "",
    weight: "",
    gender: "",
    bio: "",
  });

  const [submittedData, setSubmittedData] = useState(null);
  const [isEditing, setIsEditing] = useState(true);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: URL.createObjectURL(files[0]) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      {isEditing ? (
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-semibold mb-6 text-gray-800 flex items-center gap-2">
            <FaUser /> User Profile
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="md:grid md:grid-cols-2 md:gap-6 flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-gray-700 font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-gray-700 font-medium">Age</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-gray-700 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-gray-700 font-medium">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>

              {/* Photo Upload (Right side) */}
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-gray-700 font-medium">Photo</label>
                <input
                  type="file"
                  name="photo"
                  accept="image/*"
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg shadow-sm focus:outline-none"
                />
                {formData.photo && (
                  <div className="mt-2 w-32 h-32">
                    <img
                      src={formData.photo}
                      alt="User Photo"
                      className="w-full h-full object-cover rounded-full border"
                    />
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-gray-700 font-medium">Height (cm)</label>
                <input
                  type="number"
                  name="height"
                  value={formData.height}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-gray-700 font-medium">Weight (kg)</label>
                <input
                  type="number"
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-gray-700 font-medium">Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-gray-700 font-medium">Bio</label>
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  rows="3"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      ) : (
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 flex items-center gap-2">
            <FaUser /> Submitted Data
          </h2>
          <div className="space-y-4">
            <p><strong>Name:</strong> {submittedData.name}</p>
            <p><strong>Age:</strong> {submittedData.age}</p>
            <p><strong>Email:</strong> {submittedData.email}</p>
            <p><strong>Phone:</strong> {submittedData.phone}</p>
            <p><strong>Height:</strong> {submittedData.height} cm</p>
            <p><strong>Weight:</strong> {submittedData.weight} kg</p>
            <p><strong>Gender:</strong> {submittedData.gender}</p>
            <p><strong>Bio:</strong> {submittedData.bio}</p>
            {submittedData.photo && (
              <div>
                <strong>Photo:</strong>
                <img
                  src={submittedData.photo}
                  alt="User Photo"
                  className="mt-2 w-32 h-32 object-cover rounded-full border"
                />
              </div>
            )}
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800">Barcode:</h3>
            <Barcode
  value={formData.name ? formData.name.substring(0, 3) + formData.age : 'No ID'} // Assuming user ID is generated from Name and Age (you can modify this as per your requirement)
  format="CODE128"
  width={1.5}
  height={50}
  displayValue={true}
  className="mt-2 w-[40vw] h-[20vh]"
/>


            <button
              onClick={() => alert("Barcode is generated.")}
              className="mt-4 bg-green-600 w-[20vw] text-white py-3 rounded-lg hover:bg-green-700 transition"
            >
              Download Barcode
            </button>
          </div>
          <button
            onClick={handleEdit}
            className="mt-6 w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            <FaRegEdit className="inline-block mr-2" /> Edit Details
          </button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
