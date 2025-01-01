import { Button, Stack, Typography } from "@mui/material"
import { ExerciseDetailType } from "../pages/ExerciseDetails"
import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

 interface DetailProps {
    exerciseDetails : ExerciseDetailType
 }

const Detail = ({exerciseDetails} : DetailProps) => {
    const {bodyPart , gifUrl , name , target , equipment} = exerciseDetails;

    const extraDetail = [
        {icon : BodyPartImage , name : bodyPart},
        {icon : TargetImage , name : target},
        {icon : EquipmentImage , name : equipment},
    ]

  return (
    <Stack className="flex-col lg:flex-row gap-16 p-5 items-center">
        <img src={gifUrl} alt={name} loading="lazy" className="w-[300px] h-[300px] xl:w-[730px] xl:h-[742px]"/>
        <Stack className="gap-5 lg:gap-9">
            <Typography variant="h3">{name}</Typography>
            <Typography variant="h6">Exercises keep you strong. {name} {" "} bup is one of the best exercises to target your {target}. It will help you improve your mood and gain energy.</Typography>
            {extraDetail.map(item => (
                <Stack key={item.name} direction="row" gap="24px" alignItems="center">
                    <Button className="bg-[#fff2db] rounded-full w-24 h-24">
                        <img src={item.icon} alt={item.name} className="w-12 h-12"/>
                    </Button>
                    <Typography variant="h5">{item.name}</Typography>
                </Stack>
            ))}
        </Stack>
    </Stack>
  )
}

export default Detail