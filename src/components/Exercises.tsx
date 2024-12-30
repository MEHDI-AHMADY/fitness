import { Box, Pagination, Stack, Typography } from "@mui/material";
import { Dispatch, SetStateAction, useEffect } from "react";
import { ExerciseType } from "../pages/Home";
import ExerciseCard from "./ExerciseCard";
import {useState} from 'react';
import { exerciseOptions, fetchData } from "../utils/funcs";

interface ExercisesProps {
  exercises: ExerciseType[];
  bodyPart: string;
  setExercises: Dispatch<SetStateAction<ExerciseType[]>>;
}

const Exercises = ({ exercises, bodyPart, setExercises }: ExercisesProps) => {
  const [currentPage , setCurrentPage] = useState(1);
  const exercisesPerPage = 6;

  useEffect(() => {
  const fetchExercisesData = async () => {
    let exercisesData = [];

    if (bodyPart === 'all') {
      exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
    } else {
      exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
    }

    setExercises(exercisesData);
  };

  fetchExercisesData();
}, [bodyPart]);


  const lastIndex = currentPage * exercisesPerPage;
  const firstIndex = lastIndex - exercisesPerPage;

  const currentExercises = exercises.slice(firstIndex , lastIndex)

  const paginate = (e :React.ChangeEvent<unknown> , value : number) => {
    setCurrentPage(value);

    window.scrollTo({top : 1800 , behavior : "smooth"})
  } 
  
  return (
    <Box id="exercises" className="lg:mt-28 mt-4 p-5">
      <Typography variant="h3" className="mb-11">
        Showing Results
      </Typography>
      {currentExercises.length ? (<>
        <Stack
        direction="row"
        className="gap-12 lg:gap-28 flex-wrap justify-center"
      >
        {currentExercises.map((exercise, index) => (
          <ExerciseCard exercise={exercise} key={index} />
        ))}
      </Stack>
      <Stack className="items-center mt-24">
        {exercises.length > exercisesPerPage && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            size="large"
            onChange={paginate}
          ></Pagination>
        )}
      </Stack>
      </>) : (<Typography variant="h4" className="">Loading...</Typography>)}
    </Box>
  );
};

export default Exercises;
