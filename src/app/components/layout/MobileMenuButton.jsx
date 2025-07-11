"use client";
import { useState } from "react";
import IconWrapper from '../ui/IconWrapper.jsx';
import MobileMenu from './MobileMenu.jsx';

export default function MobileMenuButton({ navigation }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <button className="sm:hidden" aria-label="Menú móvil" onClick={() => setMenuOpen(true)}>
        <IconWrapper name="bars" className="w-6 h-6" />
      </button>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} navigation={navigation} />
    </>
  );
} 