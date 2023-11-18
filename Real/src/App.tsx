import { ThemeProvider , createTheme} from "@mui/material/styles";
import { AppRoutes } from "./routes/Routes";
import { BrowserRouter } from 'react-router-dom';
import './App.css';


const defaultTheme = createTheme();

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}



export default App;
