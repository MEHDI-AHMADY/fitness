import { Skeleton } from '@mui/material';
interface LoaderProps {
  variant : "text" | "rectangular" | "rounded" | "circular" 
  className?: string
}
const Loader = ({ variant , className} : LoaderProps) => (
  <>
  <Skeleton variant={variant} className={className}/>
  </>
);

export default Loader;