// import React from 'react'
import { Box, Button, Typography } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box className="relative p-5 mt-16 lg:mt-[212px] ml-12">
      <Typography color="#FF2625" className="font-light text-2xl">
        Fitness Club
      </Typography>
      <Typography className="font-bold text-4xl lg:text-5xl mb-6 mt-8">
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography className="text-xl leading-9 mb-5">
        Check out the most effective exercises!
      </Typography>
      <Button variant="contained" href="#exercises" className="mb-2 bg-primary p-3">
        Explore Exercises
      </Button>
      <Typography className="font-semibold text-primary hidden lg:block opacity-10 text-[200px]">EXERCISE</Typography>
      <img
        src={HeroBannerImage}
        alt="banner"
        className="absolute right-10 top-0 w-[700px] h-[800px] mt-[-320px]"
      />
    </Box>
  );
};

export default HeroBanner;
