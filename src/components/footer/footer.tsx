import Box from "@mui/material/Box";
import FooterProps from "./model";

const Footer: React.FC<FooterProps> = ({ children, sx }) => {
  return (
    <Box component="footer" sx={sx}>
      {children}
    </Box>
  );
};

export default Footer;
