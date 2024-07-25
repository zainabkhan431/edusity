import "./VideoPlayer.css";
import college from "../assets/college.mp4";
import { useRef } from "react";
function VideoPlayer({ playstate, setPlayState }) {
  const player = useRef(null);

  function ClosePlayer(e) {
    if (e.target === player.current) {
      setPlayState(false);
    }
  }
  return (
    <div
      className={`video-player 
     ${playstate ? " " : "hide"}`}
      onClick={ClosePlayer}
      ref={player}
    >
      <video src={college} autoPlay muted controls />
    </div>
  );
}

export default VideoPlayer;
