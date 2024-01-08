import Box from "@mui/material/Box";
const MarkingMainComponents = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      component="section"
      sx={{ height: "100vh", widht: "100vw", justifyContent: "space-between" }}
    >
      {children}
    </Box>
  );
};

export default MarkingMainComponents;
