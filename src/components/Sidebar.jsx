import Avatar from "../img/roberta.jpg";
import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer";

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Nome do usuário" />
      <p className="title">Desenvolvedor</p>
      <SocialNetworkContainer />
      <InformationContainer />
      <a href="#" className="btn">
        Download currículo
      </a>
    </aside>
  );
};

export default Sidebar;
