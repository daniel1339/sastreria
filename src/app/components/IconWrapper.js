'use client';

import { FaScissors, FaTshirt, FaRulerCombined, FaMapMarkerAlt, FaPhone, FaClock, FaBars } from 'react-icons/fa';

const icons = {
  scissors: FaScissors,
  tshirt: FaTshirt,
  ruler: FaRulerCombined,
  location: FaMapMarkerAlt,
  phone: FaPhone,
  clock: FaClock,
  bars: FaBars
};

export default function IconWrapper({ name, className }) {
  const Icon = icons[name];
  return Icon ? <Icon className={className} /> : null;
} 