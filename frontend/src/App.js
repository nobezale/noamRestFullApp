import "./App.css";
import { CustomRoutes } from "./routes/Routes";
import { UserData } from "./Context/UserDataContext";
function App() {
  return (
    <UserData>
      <CustomRoutes />
    </UserData>
  );
}

export default App;
