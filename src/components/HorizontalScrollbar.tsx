import { Box } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import BodyPart from "./BodyPart";

export interface BodyPartsProps {
  data: string[];
  bodyPart: string;
  setBodyPart: Dispatch<SetStateAction<string>>;
}

const HorizontalScrollbar = ({
  data,
  bodyPart,
  setBodyPart,
}: BodyPartsProps) => {
  return (
    <div>
      {data.map((item, i) => (
        <Box key={i} className="mx-10">
          <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        </Box>
      ))}
    </div>
  );
};

export default HorizontalScrollbar;
