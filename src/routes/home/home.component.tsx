import { Outlet } from "react-router-dom";

import Directory from "../../components/directory/directory.component";
import { BodyContainer } from "./home.styles";

function Home() {
  return (
    <BodyContainer>
      <Directory></Directory>
      <Outlet></Outlet>
    </BodyContainer>
  );
}

export default Home;
