import reactImg from "../../assets/investment-calculator-logo.png";
import "./Header.css";
const reactDescriptions = ["Current", "Important", "Crucial"];
function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}
export default function Header() {
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>Investment Calculator</h1>
      <p></p>
    </header>
  );
}
