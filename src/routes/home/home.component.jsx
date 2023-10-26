import { Outlet } from "react-router-dom";

import Directory from "../../components/directory/directory.component";

function Home() {
  return (
    <div>
      <Directory></Directory>
      <Outlet></Outlet>
    </div>
  );
}

export default Home;
