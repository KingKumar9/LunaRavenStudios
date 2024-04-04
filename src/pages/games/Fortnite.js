import "../../App.css";
import NavigationBar from "../../components/NavigationBar";
import { useState } from "react";
import { FaCopy, FaRegCopy } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Fortnite() {
  const [hoverState1, setHoverState1] = useState(false);
  const [hoverState2, setHoverState2] = useState(false);
  const [hoverState3, setHoverState3] = useState(false);
  const [hoverState4, setHoverState4] = useState(false);
  return (
    <div class="Screen">
      <NavigationBar prop2={true} />
      <div class="container">
        <div class="content">
          <div class="title">
            <p class="supportingText">Check Out Our Games On</p>
            <p class="rainbowText">FORTNITE</p>
          </div>
          <div class="cardMiniContainer">
            <div class="cardMini">
              <img
                class="cardImg"
                src="/images/TheFloorIsLava.jpg"
                alt="The Floor Is Lava Banner"
              />
              <div class="cardInfo">
                <h3>The Floor Is Lava!</h3>
                <button
                  onMouseEnter={() => setHoverState1(true)}
                  onMouseLeave={() => setHoverState1(false)}
                  onClick={(e) => CopyToClipboard(e)}
                >
                  {hoverState1 ? <FaCopy /> : <FaRegCopy />}
                  1678-9714-6716
                </button>
              </div>
            </div>
            <div class="cardMini">
              <img
                class="cardImg"
                src="/images/GuessThePrice.png"
                alt="Guess The Price Banner"
              />
              <div class="cardInfo">
                <h3>Guess The Price 💎</h3>
                <button
                  onMouseEnter={() => setHoverState2(true)}
                  onMouseLeave={() => setHoverState2(false)}
                  onClick={(e) => CopyToClipboard(e)}
                >
                  {hoverState2 ? <FaCopy /> : <FaRegCopy />}
                  4766-2163-3295
                </button>
              </div>
            </div>
            <div class="cardMini">
              <img
                class="cardImg"
                src="/images/BackroomsGunGame.png"
                alt="Backrooms Gun Game Banner"
              />
              <div class="cardInfo">
                <h3>Backrooms Gun Game 🔒</h3>
                <button
                  onMouseEnter={() => setHoverState3(true)}
                  onMouseLeave={() => setHoverState3(false)}
                  onClick={(e) => CopyToClipboard(e)}
                >
                  {hoverState3 ? <FaCopy /> : <FaRegCopy />}
                  4263-9195-0900
                </button>
              </div>
            </div>
            <div class="cardMini">
              <img
                class="cardImg"
                src="/images/DefaultBlockParkour.jpg"
                alt="Default Block Parkour Banner"
              />
              <div class="cardInfo">
                <h3>Default Block Parkour 🧱</h3>
                <button
                  onMouseEnter={() => setHoverState4(true)}
                  onMouseLeave={() => setHoverState4(false)}
                  onClick={(e) => CopyToClipboard(e)}
                >
                  {hoverState4 ? <FaCopy /> : <FaRegCopy />}
                  4685-2189-3570
                </button>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer
          position="bottom-right"
          autoClose={1800}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    </div>
  );
}

function CopyToClipboard(e) {
  const notify = () =>
    toast.success("Fortnite Code Copied!", {
      position: "bottom-right",
      autoClose: 1800,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  // Get the text field
  var copyText = e.target.innerText;
  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText);
  notify();
}

export default Fortnite;
