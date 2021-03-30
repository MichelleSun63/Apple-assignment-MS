import "./styles.css";
import logo from "./asset/Netflix_2015_logo.svg";
import MainPage from "./components/container/MainPage";
export default function App() {
  return (
    <div className="App">
      <div>
        <img className="logo" src={logo} alt="netflix logo" />
      </div>
      <MainPage />
    </div>
  );
}
