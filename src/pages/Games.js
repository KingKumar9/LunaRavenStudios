import "../App.css";
import NavigationBar from "../components/NavigationBar";
import { Link } from "react-router-dom";

function Games() {
  return (
    <div class="Screen">
      <NavigationBar prop2={true} />
      <div class="container">
        <div class="content">
          <div class="title">
            <h2 class="supportingText">Journey Into The Selection Of</h2>
            <h1 class="rainbowText">Our Games</h1>
          </div>
          <div class="cardContainer">
            <Link to="/our_games/fortnite" class="card">
              <img
                class="fortnite"
                src="/images/fortnite.jpg"
                alt="Fortnite Games"
              />
            </Link>
            <Link to="/our_games/steam" class="card">
              <img class="steam" src="/images/steam.jpg" alt="Steam Games" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Games;
