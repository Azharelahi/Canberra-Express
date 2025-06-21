"use client";
import React from "react";
import usePlacesAutocomplete from "use-places-autocomplete";

const PlacesAutocompleteInput = ({ label, value, onChange, icon, highlight }) => {
  const {
    ready,
    value: inputVal,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete({
    debounce: 300,
    requestOptions: {
      componentRestrictions: { country: "au" },
    },
  });

  const handleSelect = (description) => {
    setValue(description, false);
    clearSuggestions();
    onChange(description);
  };

  const ringColor = highlight === "blue" ? "focus:ring-blue-400" : "focus:ring-yellow-400";

  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-1">{label}</label>
      <div className="relative">
        <span className="absolute left-3 top-3">{icon}</span>
        <input
          type="text"
          placeholder={`Search ${label.toLowerCase()}`}
          value={inputVal}
          onChange={(e) => setValue(e.target.value)}
          onBlur={() => onChange(inputVal)}
          disabled={!ready}
          className={`w-full px-4 py-2 pl-10 border border-gray-300 rounded-md text-base font-semibold text-gray-800 bg-white outline-none ${ringColor}`}
        />
        {status === "OK" && (
          <ul className="absolute bg-white z-10 w-full shadow-lg border mt-1 rounded-md max-h-56 overflow-y-auto">
            {data.map(({ place_id, description }) => (
              <li
                key={place_id}
                onClick={() => handleSelect(description)}
                className="p-2 cursor-pointer hover:bg-gray-100"
              >
                {description}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default PlacesAutocompleteInput;
