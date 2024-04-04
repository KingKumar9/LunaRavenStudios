import "../App.css";
import NavigationBar from "../components/NavigationBar";

function Home() {
  return (
    <div class="Home">
      <div id="scene3d" class="scene3d"></div>
      <NavigationBar prop1={true} />
      <div class="container">
        <div class="content">
          <div class="text">
            <img
              src="/images/companyName.png"
              alt="Company Name"
              class="companyName"
            />
            <h3 class="studios">Studios</h3>
          </div>
          <a class="ViewGames" href="/our_games">
            <div class="circle"></div>
            view games
            <div class="circle"></div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
