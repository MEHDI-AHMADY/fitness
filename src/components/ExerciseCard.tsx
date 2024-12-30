import { Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ExerciseType } from "../pages/Home";

interface ExerciseCardProps {
    exercise : ExerciseType
}

const ExerciseCard = ({ exercise }: ExerciseCardProps) => {
  return (
    <Link
      to={`/exercise/${exercise.id}`}
      className="w-[280px] sm:w-[400px] h-[440px] bg-white border-t-4 border-primary rounded-bl-2xl flex justify-between flex-col pb-2.5 scale-100 transition-all duration-300 hover:scale-110"
    >
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack direction="row">
        <Button className="ml-5 text-white bg-[#ffa9a9] text-base rounded-2xl capitalize">
          {exercise.bodyPart}
        </Button>
        <Button className="ml-5 text-white bg-[#fcc357] text-base rounded-2xl capitalize">
          {exercise.target}
        </Button>
      </Stack>
      <Typography className="ml-5 text-black text-2xl font-bold mt-2.5 capitalize pb-2.5">{exercise.name}</Typography>
    </Link>
  );
};

export default ExerciseCard;
