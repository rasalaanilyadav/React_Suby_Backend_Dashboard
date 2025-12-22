import React, { useState } from 'react';
import { API_URL } from '../../data/apiPath';

const AddFirm = () => {
  const [firmname, setFirmName] = useState("");
  const [area, setArea] = useState("");
  const [Category, setCategory] = useState([]);
  const [region, setRegion] = useState([]);
  const [offer, setOffer] = useState("");
  const [file, setFile] = useState(null);

  const handleFirmSubmit = async (e) => {
    e.preventDefault();

    try {
      const loginToken = localStorage.getItem("loginToken");
      const existingFirmId = localStorage.getItem("firmId");

      // 🔥 IF NOT LOGGED IN
      if (!loginToken) {
        alert("User not authenticated");
        return;
      }
      // 🔥 ELSE IF FIRM ALREADY EXISTS (YOUR REQUIREMENT)
      else if (existingFirmId) {
        alert("Firm already exists. You can add only one firm.");
        return;
      }

      const formData = new FormData();
      formData.append("firmName", firmname);
      formData.append("area", area);
      formData.append("offer", offer);
      formData.append("image", file);

      Category.forEach((v) => formData.append("category", v));
      region.forEach((v) => formData.append("region", v));

      const response = await fetch(`${API_URL}/firm/add-firm`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${loginToken}`,
        },
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("firmId", data.firmId);
        alert("Firm added successfully");

        setFirmName("");
        setArea("");
        setCategory([]);
        setRegion([]);
        setOffer("");
        setFile(null);
      } else {
        alert(data.message || "Failed to add firm");
      }
    } catch (error) {
      console.error("failed to add firm", error);
    }
  };

  return (
    <div className="firmSection">
      <form className="tableForm" onSubmit={handleFirmSubmit}>
        <h3>Add Firm</h3>

        <label>Firm Name</label>
        <input value={firmname} onChange={(e) => setFirmName(e.target.value)} />

        <label>Area</label>
        <input value={area} onChange={(e) => setArea(e.target.value)} />

        <label>Offer</label>
        <input value={offer} onChange={(e) => setOffer(e.target.value)} />

        <label>Firm Image</label>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddFirm;
