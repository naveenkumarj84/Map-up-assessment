import React, { useEffect, useState } from "react";
import API from "../api";

function Vehicles() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    fetchVehicles();
  }, []);

  const fetchVehicles = async () => {
    try {
      const res = await API.get("/vehicles");
      setVehicles(res.data.vehicles || []);
    } catch (err) {
      console.log("Error fetching vehicles", err);
    }
  };

  return (
    <div className="card">
      <h2>🚚 Vehicles</h2>
      {vehicles.length === 0 ? (
        <p>No vehicles</p>
      ) : (
        vehicles.map((v, index) => (
          <div key={index} className="item">
            <p><b>Number:</b> {v.vehicle_number}</p>
            <p><b>Driver:</b> {v.driver_name}</p>
            <p><b>Status:</b> {v.status || "Active"}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Vehicles;
