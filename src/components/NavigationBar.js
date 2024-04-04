import { Link } from "react-router-dom";

function NavigationBar(props) {
  return (
    <div class="navigation">
      <Link to="/">
        <img src="/images/logo.png" alt="Company Logo" class="logo" />
      </Link>
      <nav id="navigationList">
        <Link to="/" class={props.prop1 ? "link active" : "link"}>
          home
        </Link>
        <Link to="/our_games" class={props.prop2 ? "link active" : "link"}>
          our games
        </Link>
        <Link to="/the_future" class={props.prop3 ? "link active" : "link"}>
          the future
        </Link>
        <div class="externalLinks">
          <div class="separator"></div>
          <a
            href="https://www.youtube.com/channel/UCjq678ngarUpCBRT8-tzOcg"
            target="_blank"
            rel="noreferrer"
          >
            <img
              class="socialImages youtube"
              src="/images/yt_ia.png"
              alt="YouTube Page Link"
            />
          </a>
          <a
            href="https://www.tiktok.com/@lunaravenstudios"
            target="_blank"
            rel="noreferrer"
          >
            <img
              class="socialImages tiktok"
              src="/images/tiktok_ia.png"
              alt="TikTok Page Link"
            />
          </a>
          <a
            href="https://twitter.com/LunaRavenStudio"
            target="_blank"
            rel="noreferrer"
          >
            <img
              class="socialImages twitter"
              src="/images/twitter_ia.png"
              alt="Twitter Page Link"
            />
          </a>
        </div>
      </nav>
    </div>
  );
}

export default NavigationBar;
