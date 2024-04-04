import "../App.css";
import NavigationBar from "../components/NavigationBar";

function Future() {
  return (
    <div class="Screen">
      <NavigationBar prop3={true} />
      <div class="container">
        <div class="content">
          <div class="title">
            <h2 class="supportingText">What We Have Planned For</h2>
            <h1 class="rainbowText">The Future</h1>
          </div>
          <div class="forTheFuture">
            <div class="textBlock">
              <h3>Who We Are</h3>
              <p>
                It's just me, myself and I, an independent designer/developer
                from Sydney, Australia. <em>My favourite video games?</em> Last
                Of Us, God Of War, Uncharted, GTA/RDR, Walking Dead TellTale
                Series. <em>Games I Played Growing Up?</em> Crash Bandicoot,
                Tekken, Mario, Fifa, Need For Speed.{" "}
                <em>Other Games I Like?</em> Let's not get into it, we'll be
                here all day..
                <br />
                <br />
                Currently, I am creating games/modes/maps using UEFN (Unreal
                Editor for Fortnite) and levelling up my skills within the game
                development industry, focusing on a clear workflow to maximise
                efficiency and minimise confusion when managing the complexity
                of different roles as an individual.
              </p>
            </div>
            <div class="textBlock">
              <h3>The Ultimate Goal</h3>
              <p>
                To create games for both PC & PlayStation. The aim is to develop
                story based video games which are affordable, fun to play and
                have an aesthetically pleasing look. With many IP ideas already
                in mind, the main goal is to develop a community surrounded by
                like minded people of all kinds (developers, streamers, players,
                etc.) to iterate over the finer details for a polished final
                game that is not only developer made, but community made.
              </p>
            </div>
            <img
              class="displayImage"
              src="/images/fullLogo.png"
              alt="LunaRavenStudios Banner"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Future;
