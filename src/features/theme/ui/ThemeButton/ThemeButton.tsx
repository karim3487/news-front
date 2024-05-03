import { themeIcons } from "@/shared/assets";
import { useTheme } from "@/app/providers/ThemeContext.tsx";

const ThemeButton = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <img
      src={isDark ? themeIcons.light : themeIcons.dark}
      width={30}
      alt="theme"
      onClick={toggleTheme}
    />
  );
};

export default ThemeButton;
