export default function MobileMenu({ open, onClose, navigation }) {
  if (!open) return null;
  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-[#fff0f8]/80 z-50 transition-opacity duration-200"
        onClick={onClose}
        aria-label="Cerrar menú móvil"
      />
      {/* Sidebar */}
      <nav
        className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 flex flex-col p-8 animate-fade-in-up"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="self-end mb-8 text-[#ff69b4] text-2xl focus:outline-none"
          aria-label="Cerrar menú"
        >
          ×
        </button>
        <ul className="flex flex-col gap-6">
          {navigation.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="text-[#ff69b4] text-lg font-medium hover:text-[#ff8dc7] transition-colors"
                onClick={onClose}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
} 