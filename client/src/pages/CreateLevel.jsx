import React, { useState } from "react";
import Grid from "../components/Grid";
import Button from "../components/Button";
import { fillGridWithWalls } from "../helpers/gridHelpers";

function CreateLevel() {
  const [isValidLevel, setIsValidLevel] = useState(false);
  const [level, setLevel] = useState([]);

  const handleLevelSubmit = (e) => {
    e.preventDefault();
    console.log("click");
    const newLevel = fillGridWithWalls(level);
    setLevel(newLevel);
    console.log(JSON.stringify(newLevel));
  };

  return (
    <main className="bg-gray-background container flex flex-col items-center justify-center mx-auto max-w-full h-screen">
      <Grid
        setLevel={setLevel}
        isValidLevel={isValidLevel}
        setIsValidLevel={setIsValidLevel}
      />
      <form onSubmit={handleLevelSubmit}>
        <Button
          text="Submit Level"
          type="submit"
          disabled={!isValidLevel}
          // onClick={handleLevelSubmit}
        />
      </form>
    </main>
  );
}

export default CreateLevel;
