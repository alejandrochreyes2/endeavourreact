import React from "react";
import {
  FaFileAlt,
  FaCheckCircle,
  FaUserLock,
  FaEye,
  FaThumbsUp,
  FaPenFancy,
  FaTimesCircle,
} from "react-icons/fa";
import "./StatsCardsn.css";
const stats = [
  {
    label: "Doc. Creados",
    value: 0,
    color: "border-red-500 text-red-500",
    icon: <FaFileAlt />,
  },
  {
    label: "Doc. Firmado",
    value: 0,
    color: "border-green-500 text-green-500",
    icon: <FaCheckCircle />,
  },
  {
    label: "Doc. Involucrado",
    value: 0,
    color: "border-red-500 text-red-500",
    icon: <FaUserLock />,
  },
  {
    label: "Doc. por revisar",
    value: 0,
    color: "border-cyan-500 text-cyan-500",
    icon: <FaEye />,
  },
  {
    label: "Doc. por aprobar",
    value: 0,
    color: "border-purple-500 text-purple-500",
    icon: <FaThumbsUp />,
  },
  {
    label: "Doc. por firma",
    value: 0,
    color: "border-pink-500 text-pink-500",
    icon: <FaPenFancy />,
  },
  {
    label: "Doc. rechazado",
    value: 0,
    color: "border-rose-500 text-rose-500",
    icon: <FaTimesCircle />,
  },
];

export default function StatsCardsn() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "16px",
      }}
    >
      {stats.map((stat, index) => (
        <div
          key={index}
          style={{
            backgroundColor: "#1f2937",
            padding: "16px",
            borderRadius: "8px",
            boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
            color: "#e5e7eb",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "8px",
            }}
          >
            {stat.icon && <div style={{ marginRight: "8px" }}>{stat.icon}</div>}
            <span style={{ fontSize: "14px" }}>{stat.label}</span>
          </div>
          <div
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              color: stat.color || "#e5e7eb",
            }}
          >
            {stat.value}
          </div>
        </div>
      ))}
    </div>
  );
}
