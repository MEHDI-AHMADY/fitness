import { Stack } from "@mui/material"
import {Link} from 'react-router-dom';
import Logo from "../assets/images/Logo.png"

const Navbar = () => {
  return (
    <Stack direction="row" className="justify-start sm:gap-28 gap-10 sm:mt-8 mt-5 px-5">
      <Link to="/">
        <img src={Logo} alt="logo" className="w-12 h-12 object-cover mx-5"/>
      </Link>
      <Stack direction="row" className="gap-10 text-2xl items-end ">
        <Link to="/" className="border-b-2 border-red-500 text-[#3A1212]">Home</Link>
        <a href="#exercises" className="no-underline text-[#3A1212]">Exercises</a>
      </Stack>
    </Stack>
  )
}

export default Navbar