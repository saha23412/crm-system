import Box from "@mui/material/Box";
import MainContentLayoutProps from "./model";

const MainContentLayout: React.FC<MainContentLayoutProps> = ({
  children,
  sx,
}) => {
  return (
    <Box component="main" sx={sx}>
      {children}
    </Box>
  );
};

export default MainContentLayout;
