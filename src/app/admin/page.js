"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { FaUsers, FaBullhorn, FaCar } from "react-icons/fa";

export default function page() {
  const cards = [
    {
      title: "Total Users",
      icon: <FaUsers size={30} className="text-blue-500" />,
    },
    {
      title: "Announcements",
      icon: <FaBullhorn size={30} className="text-green-500" />,
    },
    {
      title: "Manage Cars",
      icon: <FaCar size={30} className="text-yellow-500" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-10">Admin</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
        {cards.map((card, index) => (
          <Card
            key={index}
            className="bg-white shadow-xl hover:shadow-2xl transition duration-300 ease-in-out cursor-pointer rounded-2xl p-6 text-center"
          >
            <CardContent className="flex flex-col items-center gap-4">
              <div className="bg-gray-100 p-4 rounded-full shadow-inner">
                {card.icon}
              </div>
              <h2 className="text-xl font-semibold text-gray-700">
                {card.title}
              </h2>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
