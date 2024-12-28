import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Box sx={{ width: { xl: "1488px" } }} width="400px" m="auto">
      <Navbar />
      <Outlet />
    </Box>
  );
};

export default App;
