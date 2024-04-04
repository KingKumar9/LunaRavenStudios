function NavigationBar(props) {
  return (
    <div class="navigation">
      <a href="/">
        <img src="/images/logo.png" alt="Company Logo" class="logo" />
      </a>
      <nav id="navigationList">
        <a href="/" class={props.prop1 ? "link active" : "link"}>
          home
        </a>
        <a href="/our_games" class={props.prop2 ? "link active" : "link"}>
          our games
        </a>
        <a href="/the_future" class={props.prop3 ? "link active" : "link"}>
          the future
        </a>
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
