export const navbar = {
  navLink: ({ isActive }) =>
    isActive
      ? "text-yellow-500 font-semibold flex items-center gap-1"
      : "text-white hover:text-yellow-500 flex items-center gap-1"
};
