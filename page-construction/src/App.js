import logo from "./logo.svg";
import "./App.css";
import coin from "./assets/coin.png";
import vroom from "./assets/Vroom Logo.png";
import labbro from "./assets/LabBro_Logo.png";
import orana from "./assets/orana.png";
import shadow from "./assets/shadow.png";

function App() {
    return (
        <div className="container">
            <div className="logos">
                <img src={vroom} alt="vroom" />
                <img src={labbro} alt="labbro" />
            </div>
            <div className="coin-container">
                <h3>Lab Bro under Construction</h3>
                <img src={coin} className="coin" alt="logo" />
                <img src={shadow} className="shadow" alt="shadow" />
            </div>
            <div className="developer-team">
                <h3>POWERED BY: </h3>
                <img src={orana} alt="orana" />
            </div>
        </div>
    );
}

export default App;
