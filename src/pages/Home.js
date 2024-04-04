import "../App.css";
import NavigationBar from "../components/NavigationBar";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div class="Home">
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
          <Link class="ViewGames" to="/our_games">
            <div class="circle"></div>
            view games
            <div class="circle"></div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
