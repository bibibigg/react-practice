import { Outlet, useNavigation } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";

function Roots() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <>
      <MainNavigation />
      <main>
        {isLoading && <p>Loading...</p>}
        <Outlet />
      </main>
    </>
  );
}

export default Roots;
