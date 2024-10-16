"use client";
import CardProp from "@/components/CardProp";
import React, { useEffect, useState } from "react";

const CommercialPropertiesPage = () => {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch properties when the component mounts
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch("/api/commercial"); // Replace with your correct API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch properties");
        }

        const data = await response.json();
        setProperties(data.properties);
        setFilteredProperties(data.properties); // Initially, show all properties
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  // Update filtered properties based on the search query
  useEffect(() => {
    const filtered = properties.filter(
      (property) =>
        property.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.status.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.bedrooms.toString().includes(searchQuery) ||
        property.price.toString().includes(searchQuery)
    );
    setFilteredProperties(filtered);
  }, [searchQuery, properties]);

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Render the properties
  return (
    <div className="mt-20">
      <h2 className="text-2xl font-bold mb-4">Commercial Properties</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search properties..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="border-2 border-gray-300 p-2 mb-5 w-full rounded-md"
      />

      {loading ? (
        <p>Loading properties...</p>
      ) : error ? (
        <p className="text-red-500">Error: {error}</p>
      ) : filteredProperties.length > 0 ? (
        <div className="space-y-4">
          {filteredProperties.map((property) => (
            <CardProp
              key={property._id}
              imageSrc={property.photoUrl}
              basePrice={property.price}
              address={property.address}
              details={property.bedrooms}
            />
          ))}
        </div>
      ) : (
        <p>No commercial properties found.</p>
      )}
    </div>
  );
};

export default CommercialPropertiesPage;
