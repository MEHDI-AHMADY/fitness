import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";
import { HorizontalScrollbarProps } from "./HorizontalScrollbar";

type BodyPartProps = Pick<
  HorizontalScrollbarProps,
  "bodyPart" | "setBodyPart"
> & {
  item: string;
};

const BodyPart = ({ item, bodyPart, setBodyPart }: BodyPartProps) => {
  return (
    <Stack
      className={`bodyPart-card items-center justify-center hover:scale-110 transition-all duration-300 ease-in-out rounded-bl-3xl w-[270px] h-[280px] cursor-pointer gap-12 bg-white ${
        item === bodyPart && "border-t border-primary"
      }`}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <img src={Icon} alt="dumbbell" className="w-10 h-10" />
      <Typography className="text-2xl text-[#3A1212] capitalize">
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
