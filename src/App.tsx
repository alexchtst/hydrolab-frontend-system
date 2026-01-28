import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DataContextProvider from "./context-provider/data-provider";
import DataShowScreen from "./screens/data-show-screen";
import ContentDetailDataScreen from "./screens/content-detail-data-screen";

export default function App() {
  return (
    <DataContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<DataShowScreen />} index />
          <Route path="/content/:id" element={<ContentDetailDataScreen />} index />
        </Routes>
      </Router>
    </DataContextProvider>
  );
}
