import { Box, Stack, Button, TextField, Typography } from "@mui/material";
import { useState, useEffect, SetStateAction, Dispatch } from "react";
import { ExerciseType } from "../pages/Home";
import { exerciseOptions, fetchData } from "../utils/funcs";
import HorizontalScrollbar from "./HorizontalScrollbar";

interface SearchExercisesProps {
  setExercises: Dispatch<SetStateAction<ExerciseType[]>>;
  bodyPart: string;
  setBodyPart: Dispatch<SetStateAction<string>>;
}

const SearchExercises = ({
  setExercises,
  bodyPart,
  setBodyPart,
}: SearchExercisesProps) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState<string[]>([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );

      setBodyParts(["all", ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  async function handleSearch() {
    if (search) {
      const exerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );

      const searchedExercise = exerciseData.filter(
        (exercise: ExerciseType) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );

      setSearch("");
      setExercises(searchedExercise);
    }
  }

  return (
    <Stack className="items-center justify-center p-5 mt-10">
      <Typography className="font-bold text-3xl lg:text-4xl text-center mb-12">
        Awsome Exercises you <br /> should know
      </Typography>
      <Box className="relative mb-16">
        <TextField
          className="h-16 font-bold border-none rounded lg:w-[800px] w-[350px] bg-white"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises..."
          type="text"
        />
        <Button
          onClick={handleSearch}
          className="absolute top-0 right-0 w-20 lg:w-44 text-base lg:text-2xl h-14 bg-primary text-[#fff] capitalize border border-primary"
        >
          Search
        </Button>
      </Box>

      <Box className="relative w-full p-5">
        <HorizontalScrollbar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
