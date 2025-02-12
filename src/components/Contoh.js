import React from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Slide4 = () => {
  const geojsonData = {
    type: "FeatureCollection",
    features: [
      // Tambahkan data GeoJSON untuk tiap provinsi dengan tingkat stunting
    ],
  };

  const mapStyle = (feature) => ({
    fillColor: getColor(feature.properties.prevalensi),
    weight: 1,
    opacity: 1,
    color: "white",
    fillOpacity: 0.7,
  });

  function getColor(prevalensi) {
    return prevalensi > 30 ? "#b30000" : prevalensi > 25 ? "#e34a33" : prevalensi > 20 ? "#fc8d59" : prevalensi > 15 ? "#fdbb84" : "#fdd49e";
  }

  return (
    <section className="bg-gray-100 py-16 px-6 md:px-16 flex flex-col items-center min-h-screen">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">Peta Persebaran Tingkat Prevalensi Stunting Menurut Provinsi, Tahun 2022</h2>
      <p className="text-gray-600 text-center mb-6">Klik Provinsi untuk lebih detail</p>

      {/* Peta */}
      <div className="w-full max-w-4xl h-96 rounded-lg shadow-lg overflow-hidden">
        <MapContainer center={[-2.5, 118]} zoom={5} style={{ height: "100%", width: "100%" }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; OpenStreetMap contributors" />
          <GeoJSON data={geojsonData} style={mapStyle} />
        </MapContainer>
      </div>

      {/* Sumber Data */}
      <p className="text-sm text-gray-500 mt-3">Sumber: SSGI - Kemenkes</p>

      {/* Legenda Prevalensi */}
      <div className="w-full max-w-3xl mt-4">
        <div className="flex items-center">
          <span className="w-6 h-3 bg-[#fdd49e]"></span>
          <span className="ml-2 text-gray-700 text-sm">8.00</span>
          <div className="flex-grow bg-gradient-to-r from-[#fdd49e] to-[#b30000] h-3 mx-2"></div>
          <span className="mr-2 text-gray-700 text-sm">35.30</span>
        </div>
      </div>

      {/* Tingkat Prevalensi Nasional */}
      <h3 className="text-4xl font-bold text-blue-900 mt-6">21.60%</h3>
      <p className="text-lg font-semibold text-gray-800 mt-2">Tingkat Prevalensi Stunting Indonesia, Tahun 2022</p>
    </section>
  );
};

export default Slide4;
