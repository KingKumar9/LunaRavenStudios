import "../../App.css";
import NavigationBar from "../../components/NavigationBar";

function Steam() {
  return (
    <div class="Screen">
      <NavigationBar prop2={true} />
      <div class="container">
        <div class="content2">
          <div class="title">
            <p class="supportingText">Our Steam Games Are</p>
            <p class="rainbowText">COMING SOON</p>
            {/* 
            <p class="supportingText">Check Out Our Games On</p>
            <p class="rainbowText">STEAM</p> 
            */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Steam;
