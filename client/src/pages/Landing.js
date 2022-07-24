import main from "../assets/images/main.svg";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <main className="landing">
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            IoT <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime,
            corporis eveniet. Porro corrupti ad quo facere numquam, quis autem
            eos accusamus nisi perspiciatis, quisquam eius quae veniam incidunt
            quia quaerat harum modi recusandae expedita doloribus consequatur.
            Quidem dolorem distinctio ea modi, qui cupiditate quos in excepturi
            animi ab,
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="smart home" className="img main-img" />
      </div>
    </main>
  );
};

export default Landing;
