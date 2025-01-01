import { Box } from "@mui/material"
import Detail from "../components/Detail"
import ExerciseVideo from "../components/ExerciseVideo"
import SimilarExercises from "../components/SimilarExercises"
import {useState , useEffect, Suspense} from 'react';
import { useParams } from "react-router-dom";
import { exerciseOptions, fetchData } from "../utils/funcs";
import Loader from "../components/Loader";
import ErrorBoundary from "../components/ErrorBoudary";

export interface ExerciseDetailType {
  bodyPart:string
equipment:string
gifUrl:string
id:string
name:string
target:string
secondaryMuscles?: string[]
instructions?: string[]
}

const ExerciseDetails = () => {
  const [exerciseDetail, setExerciseDetail] = useState<ExerciseDetailType | null>(null)
  const {id} = useParams<{ id: string }>()

  useEffect(() => {
    const fetchExercisesData = async () => {
      if (!id) return;

      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}` , exerciseOptions);
      setExerciseDetail(exerciseDetailData);
    }

    fetchExercisesData()
  } , [id])

  return (
    <Box>
      <ErrorBoundary fallback={<div>Something went wrong!</div>}>
      <Suspense fallback={<Loader  variant="rectangular" className="p-5 mt-5 w-[300px] h-[300px] xl:w-[730px] xl:h-[742px]"/>}>
      {exerciseDetail ? (
            <Detail exerciseDetails={exerciseDetail} />
          ) : (
            <Loader variant="rectangular" className="p-5 mt-5"/>
          )}
      </Suspense>
      </ErrorBoundary>
      <ExerciseVideo />
      <SimilarExercises />
    </Box>
  )
}

export default ExerciseDetails