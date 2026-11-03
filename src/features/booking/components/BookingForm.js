"use client";
import React, { useState, useMemo, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaMapMarkerAlt, FaCalendarAlt, FaClock, FaCar, FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { ArrowRight } from "lucide-react";
import { readBookingDraft, saveBookingDraft } from "@/features/booking/lib/booking-draft";

// ─── Data ────────────────────────────────────────────────────────────────────

const CITY_AREAS = {
  Canberra: [
    { label: "Canberra Airport", value: "Canberra Airport, ACT 2609" },
    { label: "Canberra City (CBD)", value: "Canberra City, ACT 2601" },
    { label: "Belconnen Town Centre", value: "Belconnen Town Centre, ACT 2617" },
    { label: "Gungahlin Town Centre", value: "Gungahlin Town Centre, ACT 2912" },
    { label: "Woden Town Centre", value: "Woden Town Centre, ACT 2606" },
    { label: "Tuggeranong Town Centre", value: "Tuggeranong Town Centre, ACT 2900" },
    { label: "ANU (Australian National Uni)", value: "Australian National University, ACT 2601" },
    { label: "Canberra Hospital", value: "Canberra Hospital, Garran ACT 2605" },
    { label: "Manuka / Kingston", value: "Manuka, ACT 2603" },
    { label: "Dickson", value: "Dickson, ACT 2602" },
    { label: "Other (enter below)", value: "__custom__" },
  ],
  Sydney: [
    { label: "Sydney Airport (T1/T2/T3)", value: "Sydney Kingsford Smith Airport, NSW 2020" },
    { label: "Sydney CBD", value: "Sydney CBD, NSW 2000" },
    { label: "Parramatta", value: "Parramatta, NSW 2150" },
    { label: "Chatswood", value: "Chatswood, NSW 2067" },
    { label: "Bondi Junction", value: "Bondi Junction, NSW 2022" },
    { label: "Surry Hills", value: "Surry Hills, NSW 2010" },
    { label: "North Sydney", value: "North Sydney, NSW 2060" },
    { label: "Macquarie Park", value: "Macquarie Park, NSW 2113" },
    { label: "Liverpool", value: "Liverpool, NSW 2170" },
    { label: "Penrith", value: "Penrith, NSW 2750" },
    { label: "Blacktown", value: "Blacktown, NSW 2148" },
    { label: "Other (enter below)", value: "__custom__" },
  ],
};

const CAR_TYPES = [
  { label: "Comfort Car — Sedan · 5 Seater", value: "Comfort Car (Sedan 5 seater)" },
  { label: "SUV — 7 Seater", value: "SUV (7 Seater)" },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function getTodayStr() {
    const now = new Date(
    new Date().toLocaleString("en-US", { timeZone: "Australia/Sydney" })
  );
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
}

function getMaxDateStr() {
  const max = new Date(
    new Date().toLocaleString("en-US", { timeZone: "Australia/Sydney" })
  );
  max.setDate(max.getDate() + 15);
  return max.toISOString().split("T")[0];
}

function isToday(dateStr) {
  return dateStr === getTodayStr();
}

/**
 * Generate 30-min time slots for a full day.
 * If `restrictPast` is true, slots at or before the current time are disabled.
 */
function generateTimeSlots(restrictPast) {
   const now = new Date(
    new Date().toLocaleString("en-US", { timeZone: "Australia/Sydney" })
  );
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();
  const slots = [];

  for (let h = 0; h < 24; h++) {
    for (const m of [0, 30]) {
      const label = `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
      let disabled = false;
      if (restrictPast) {
        if (h < currentHour) disabled = true;
        else if (h === currentHour && m <= currentMinute) disabled = true;
      }
      slots.push({ label, value: label, disabled });
    }
  }
  return slots;
}

// ─── Sub-component: CityAreaPicker ───────────────────────────────────────────

function CityAreaPicker({ side, label, iconColor, city, area, customAddress, onCityChange, onAreaChange, onCustomChange }) {
  const areas = city ? CITY_AREAS[city] : [];
  const showCustom = area === "__custom__";

  return (
    <div className={`location-field location-${side} flex flex-col gap-2`}>
      <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">{label}</span>

      <div className="flex gap-3 items-start">
        {/* City */}
        <div className="flex-1 flex flex-col gap-1">
          <span className="text-[11px] text-gray-400 font-medium">City</span>
          <div className="relative">
            <FaMapMarkerAlt className={`absolute left-3 top-3 text-sm ${iconColor}`} />
            <select
              value={city}
              onChange={(e) => onCityChange(e.target.value)}
              required
              className="w-full pl-9 pr-8 py-2 border border-gray-200 rounded-xl bg-yellow-50/70 text-sm text-gray-800 focus:ring-2 focus:ring-yellow-400 focus:outline-none appearance-none shadow-inner cursor-pointer"
            >
              <option value="" disabled>Select city</option>
              <option value="Canberra">Canberra</option>
              <option value="Sydney">Sydney</option>
            </select>
            <FaChevronDown className="absolute right-3 top-3.5 text-gray-400 text-xs pointer-events-none" />
          </div>
        </div>

        {/* Arrow */}
        <div className="text-yellow-500 font-bold text-lg mt-7 select-none">→</div>

        {/* Area */}
        <div className="flex-1 flex flex-col gap-1">
          <span className="text-[11px] text-gray-400 font-medium">Area / Suburb</span>
          <div className="relative">
            <FaMapMarkerAlt className="absolute left-3 top-3 text-sm text-gray-400" />
            <select
              value={area}
              onChange={(e) => onAreaChange(e.target.value)}
              disabled={!city}
              required
              className="w-full pl-9 pr-8 py-2 border border-gray-200 rounded-xl bg-yellow-50/70 text-sm text-gray-800 focus:ring-2 focus:ring-yellow-400 focus:outline-none appearance-none shadow-inner cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <option value="" disabled>
                {city ? "Select area" : "Select city first"}
              </option>
              {areas.map((a) => (
                <option key={a.value} value={a.value}>
                  {a.label}
                </option>
              ))}
            </select>
            <FaChevronDown className="absolute right-3 top-3.5 text-gray-400 text-xs pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Custom address input */}
      {showCustom && (
        <input
          type="text"
          placeholder="Enter specific address or landmark..."
          value={customAddress}
          onChange={(e) => onCustomChange(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-200 rounded-xl bg-yellow-50/70 text-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none shadow-inner mt-1"
        />
      )}
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────

export default function BookingForm() {
  const router = useRouter();

  // Location state
  const [pickCity, setPickCity] = useState("");
  const [pickArea, setPickArea] = useState("");
  const [pickCustom, setPickCustom] = useState("");

  const [dropCity, setDropCity] = useState("");
  const [dropArea, setDropArea] = useState("");
  const [dropCustom, setDropCustom] = useState("");

  // Booking state
  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [carName, setCarName] = useState("");
  const [isSameDay, setIsSameDay] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [draftLoaded, setDraftLoaded] = useState(false);
  const [savedDraft, setSavedDraft] = useState({});
  const [storageError, setStorageError] = useState("");

  useEffect(() => {
    try {
      const draft = readBookingDraft();
      setSavedDraft(draft);
      setPickCity(typeof draft.pickCity === "string" ? draft.pickCity : "");
      setPickArea(typeof draft.pickArea === "string" ? draft.pickArea : "");
      setPickCustom(typeof draft.pickCustom === "string" ? draft.pickCustom : "");
      setDropCity(typeof draft.dropCity === "string" ? draft.dropCity : "");
      setDropArea(typeof draft.dropArea === "string" ? draft.dropArea : "");
      setDropCustom(typeof draft.dropCustom === "string" ? draft.dropCustom : "");

      const savedDate = typeof draft.pickupDate === "string" ? draft.pickupDate : "";
      setPickupDate(savedDate);
      setPickupTime(typeof draft.pickupTime === "string" ? draft.pickupTime : "");
      setCarName(typeof draft.carName === "string" ? draft.carName : "");
      setIsSameDay(isToday(savedDate));
    } catch (error) {
      console.error("Unable to load saved booking details:", error);
      setSavedDraft({});
      setStorageError("Saved booking details could not be loaded.");
    } finally {
      setDraftLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!draftLoaded) return;

    try {
      saveBookingDraft({
        ...savedDraft,
        pickCity,
        pickArea,
        pickCustom,
        dropCity,
        dropArea,
        dropCustom,
        pickupDate,
        pickupTime,
        carName,
      });
      setStorageError("");
    } catch (error) {
      console.error("Unable to save booking details:", error);
      setStorageError("Booking details could not be saved in this browser.");
    }
  }, [
    draftLoaded,
    savedDraft,
    pickCity,
    pickArea,
    pickCustom,
    dropCity,
    dropArea,
    dropCustom,
    pickupDate,
    pickupTime,
    carName,
  ]);

  // Time slots: recalculate whenever same-day flag changes
  const timeSlots = useMemo(() => generateTimeSlots(isSameDay), [isSameDay]);

  const today = getTodayStr();
  const maxDate = getMaxDateStr();

  // When city changes, reset area and custom
  function handlePickCityChange(val) {
    setPickCity(val);
    setPickArea("");
    setPickCustom("");
  }
  function handleDropCityChange(val) {
    setDropCity(val);
    setDropArea("");
    setDropCustom("");
  }

  function handleDateChange(val) {
    setPickupDate(val);
    const same = isToday(val);
    setIsSameDay(same);
    // If selected time is now disabled (past), reset it
    if (same && pickupTime) {
      const now = new Date(
  new Date().toLocaleString("en-US", { timeZone: "Australia/Sydney" })
);
      const [h, m] = pickupTime.split(":").map(Number);
      if (h < now.getHours() || (h === now.getHours() && m <= now.getMinutes())) {
        setPickupTime("");
      }
    }
  }

  function getResolvedAddress(city, area, custom) {
    if (!area) return "";
    if (area === "__custom__") return custom.trim();
    return `${city} — ${area}`;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const pickAddress = getResolvedAddress(pickCity, pickArea, pickCustom);
    const dropAddress = getResolvedAddress(dropCity, dropArea, dropCustom);

    if (!pickAddress) return toast.error("Please complete the pickup location.");
    if (!dropAddress) return toast.error("Please complete the drop location.");
    if (pickAddress === dropAddress) return toast.error("Pickup and drop cannot be the same!");
    if (!pickupDate) return toast.error("Please select a pickup date.");
    if (!pickupTime) return toast.error("Please select a pickup time.");
    if (!carName) return toast.error("Please select a car type.");

    setIsSubmitting(true);

    const sameDayNote = isSameDay ? " (Same-day — we'll contact you to confirm.)" : "";
    toast.success("Booking submitted! Redirecting..." + sameDayNote);

    const params = new URLSearchParams({ pickAddress, dropAddress, pickupDate, pickupTime, carName }).toString();
    router.push(`/booking-page?${params}`);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="booking-section flex items-center justify-center px-4 py-8"
    >
      <form
        onSubmit={handleSubmit}
        className="booking-form-card bg-white w-full max-w-4xl rounded-3xl p-6 sm:p-10 flex flex-col gap-6"
      >
        <div className="booking-heading">
          <span className="eyebrow">A few details, then you’re on your way</span>
          <h2>Book your <em>ride.</em></h2>
          <p>Share your route and preferred time. We’ll take it from there.</p>
        </div>
        <div className="booking-steps" aria-label="Booking steps">
          <span className="current"><i>1</i> Trip details</span><b /><span><i>2</i> Your details</span><b /><span><i>3</i> Request sent</span>
        </div>
        {storageError && (
          <p role="alert" className="text-center text-sm text-red-600">
            {storageError}
          </p>
        )}

        {/* Pickup Location */}
        <CityAreaPicker
          side="pick"
          label="📍 Pickup Location"
          iconColor="text-yellow-500"
          city={pickCity}
          area={pickArea}
          customAddress={pickCustom}
          onCityChange={handlePickCityChange}
          onAreaChange={setPickArea}
          onCustomChange={setPickCustom}
        />

        {/* Drop Location */}
        <CityAreaPicker
          side="drop"
          label="🏁 Drop Location"
          iconColor="text-[var(--forest)]"
          city={dropCity}
          area={dropArea}
          customAddress={dropCustom}
          onCityChange={handleDropCityChange}
          onAreaChange={setDropArea}
          onCustomChange={setDropCustom}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Date */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              📅 Pickup Date
            </label>
            <div className="relative">
              <FaCalendarAlt className="absolute left-3 top-3 text-yellow-500" />
              <input
                type="date"
                value={pickupDate}
                onChange={(e) => handleDateChange(e.target.value)}
                min={today}
                max={maxDate}
                required
                className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-xl bg-yellow-50/70 text-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none shadow-inner"
              />
            </div>
            {isSameDay && (
              <p className="text-[var(--forest)] bg-[#edf0e9] border border-[#d9e2d6] rounded-lg px-3 py-2 text-xs mt-1">
                ℹ️ For same-day booking, please contact us for confirmation.
              </p>
            )}
          </div>

          {/* Time */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              ⏰ Pickup Time
            </label>
            <div className="relative">
              <FaClock className="absolute left-3 top-3 text-yellow-500" />
              <select
                value={pickupTime}
                onChange={(e) => setPickupTime(e.target.value)}
                required
                className="w-full pl-9 pr-8 py-2 border border-gray-200 rounded-xl bg-yellow-50/70 text-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none appearance-none shadow-inner cursor-pointer"
              >
                <option value="" disabled>Select time</option>
                {timeSlots.map((slot) => (
                  <option key={slot.value} value={slot.value} disabled={slot.disabled}>
                    {slot.label}{slot.disabled ? " (past)" : ""}
                  </option>
                ))}
              </select>
              <FaChevronDown className="absolute right-3 top-3.5 text-gray-400 text-xs pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Car Type */}
        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            🚗 Car Type
          </label>
          <div className="relative">
            <FaCar className="absolute left-3 top-3 text-yellow-500" />
            <select
              value={carName}
              onChange={(e) => setCarName(e.target.value)}
              required
              className="w-full pl-9 pr-8 py-2 border border-gray-200 rounded-xl bg-yellow-50/70 text-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none appearance-none shadow-inner cursor-pointer"
            >
              <option value="" disabled>Select car type</option>
              {CAR_TYPES.map((car) => (
                <option key={car.value} value={car.value}>{car.label}</option>
              ))}
            </select>
            <FaChevronDown className="absolute right-3 top-3.5 text-gray-400 text-xs pointer-events-none" />
          </div>
        </div>

        {/* Submit */}
        <div className="booking-submit flex justify-center">
          <motion.button
            whileHover={{ y: isSubmitting ? 0 : -1 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.99 }}
            type="submit"
            disabled={isSubmitting}
            className="booking-continue"
          >
            {isSubmitting ? (
              <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
              </svg>
            ) : (
              <><span>Continue to your details</span><ArrowRight size={18} aria-hidden="true" /></>
            )}
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
}
