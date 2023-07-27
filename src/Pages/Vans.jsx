import { useEffect, useState } from "react";
import VansMain from "./VansMain";
const Vans = () => {
  const [stateVan, setStateVan] = useState();
  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setStateVan(data.vans));
  }, []);
  console.log(stateVan);

  return stateVan == undefined ? (
    <h1>Wait for a minute</h1>
  ) : (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-4">
      {stateVan.map((van) => {
        return <VansMain {...van} key={van.id} />;
      })}
    </div>
  );
};
export default Vans;
