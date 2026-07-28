import Box from "@mui/material/Box";
import HomePage from "./pages/HomePage";
import CustomCursor from "./components/common/CustomCursor";

export default function App() {
  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      <CustomCursor />
      <HomePage />
    </Box>
  );
}
