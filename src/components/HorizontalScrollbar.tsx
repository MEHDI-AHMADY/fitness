import { Box, Typography } from "@mui/material";
import { Dispatch, SetStateAction, useContext } from "react";
import BodyPart from "./BodyPart";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";
export interface HorizontalScrollbarProps {
  data: string[];
  bodyPart: string;
  setBodyPart: Dispatch<SetStateAction<string>>;
}

interface VisibilityContextType {
  scrollPrev: () => void;
  scrollNext: () => void;
}

const LeftArrow = () => {
  const { scrollPrev } = useContext<VisibilityContextType>(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext<VisibilityContextType>(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const HorizontalScrollbar = ({
  data,
  bodyPart,
  setBodyPart,
}: HorizontalScrollbarProps) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item, i) => (
        <Box key={i} className="mx-10">
          <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        </Box>
      ))}
    </ScrollMenu>
  );
};

export default HorizontalScrollbar;
