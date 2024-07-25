import "./Programe.css";
import programe1 from "../assets/program-1.png";
import programe2 from "../assets/program-2.png";
import programe3 from "../assets/program-3.png";
import icon1 from "../assets/program-icon-1.png";
import icon2 from "../assets/program-icon-2.png";
import icon3 from "../assets/program-icon-3.png";

function Programe() {
  return (
    <div className="programs">
      <div className="program">
        <img src={programe1} />
        <div className="caption">
          <img src={icon1} />
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={programe2} />
        <div className="caption">
          <img src={icon1} />
          <p>Masters Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={programe3} />
        <div className="caption">
          <img src={icon1} />
          <p>Post Graduation</p>
        </div>
      </div>
    </div>
  );
}

export default Programe;
