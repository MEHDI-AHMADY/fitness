import { Box } from "@mui/material";
import { useState } from "react";
import Exercises from "../components/Exercises";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";

export interface ExerciseType {
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  name: string;
  secondaryMuscles: string[];
  target: string;
}

const Home = () => {
  const [bodyPart, setBodyPart] = useState<string>("all");
  const [exercises, setExercises] = useState<ExerciseType[]>([]);

  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        exercises={exercises}
        bodyPart={bodyPart}
        setExercises={setExercises}
        />
    </Box>
  );
};

export default Home;
