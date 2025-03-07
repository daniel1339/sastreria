'use client';

import { FaCut, FaTshirt, FaRulerCombined, FaMapMarkerAlt, FaPhone, FaClock, FaBars } from 'react-icons/fa';

const icons = {
  scissors: FaCut,
  tshirt: FaTshirt,
  ruler: FaRulerCombined,
  location: FaMapMarkerAlt,
  phone: FaPhone,
  clock: FaClock,
  bars: FaBars
};

export default function IconWrapper({ name, className }) {
  const Icon = icons[name];
  if (!Icon) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }
  return <Icon className={className} />;
} 