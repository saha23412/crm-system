import AppBar from "@mui/material/AppBar";
import HeaderProps from "./model";

const Header: React.FC<HeaderProps> = ({ children, sx }) => {
  return (
    <AppBar position="static" sx={sx}>
      {children}
    </AppBar>
  );
};

export default Header;
