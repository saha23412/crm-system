"use client"
import ButtonPanel from "@/components/buttons-components/button-panel/button-panel";
import Box from "@mui/material/Box";

const PanelFilter = () => {
  return (
    <Box
      sx={{
        widht: "100%",
        borderRadius: "10px",
        backgroundColor: "background.default",
        padding: "10px"
      }}
    >
      <ButtonPanel onClick={()=>1}>PanelFilter</ButtonPanel> 
    </Box>
  );
};

export default PanelFilter;
