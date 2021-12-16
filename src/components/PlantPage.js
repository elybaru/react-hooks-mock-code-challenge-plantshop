import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((resp) => setPlants(resp))
  }, [])

  let plantsToDisplay;

  function filterPlants(searchTerm) {
    plantsToDisplay = plants.filter((plant) => plant.name.includes(searchTerm) || searchTerm === "")
    setPlants(plantsToDisplay);

  }

  // Not behaving the way I expected, doesn't rerender when search is cleared, case sensitive, can't get toLowerCase() to work for me


  return (
    <main>
      <NewPlantForm plants={plants} setPlants={setPlants} />
      <Search filterPlants={filterPlants} />
      <PlantList plants={plants} />
    </main>
  );
}

export default PlantPage;
