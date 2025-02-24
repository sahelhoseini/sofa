import { useState } from "react";

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmNewPassword) {
      setError("رمز جدید و تایید رمز جدید مطابقت ندارند.");
      return;
    }
    if (formData.newPassword.length < 6) {
      setError("رمز عبور باید حداقل ۶ کاراکتر باشد.");
      return;
    }
    setSuccess("رمز عبور با موفقیت تغییر یافت!");
    setFormData({
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">
        Change Your Password
      </h2>

      {error && <p className="text-red-600 text-sm mb-4">{error}</p>}
      {success && <p className="text-green-600 text-sm mb-4">{success}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Now Password
          </label>
          <input
            type="password"
            name="currentPassword"
            value={formData.currentPassword}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:shadow-sm"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            New Password
          </label>
          <input
            type="password"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:shadow-sm"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Confirm New Password
          </label>
          <input
            type="password"
            name="confirmNewPassword"
            value={formData.confirmNewPassword}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:shadow-sm"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gray-950 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Apply
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
