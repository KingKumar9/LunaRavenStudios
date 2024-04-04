import "../App.css";
import NavigationBar from "../components/NavigationBar";

function Games() {
  return (
    <div class="Screen">
      <NavigationBar prop2={true} />
      <div class="container">
        <div class="content2">
          <div class="title">
            <h2 class="supportingText">Journey Into The Selection Of</h2>
            <h1 class="rainbowText">Our Games</h1>
          </div>
          <div class="cardContainer">
            <a href="/our_games/fortnite" class="card">
              <img class="fortnite" src="/images/fortnite.jpg" />
            </a>
            <a href="/our_games/steam" class="card">
              <img class="steam" src="/images/steam.jpg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Games;
