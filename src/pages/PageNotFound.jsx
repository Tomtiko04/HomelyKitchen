import { useNavigate } from "react-router-dom";
import Button from "../UI/Button";

export default function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className="pageNotFound">
      <h2 className="text-center text-3xl">PAGE NOT FOUND</h2>
      <Button onClick={()=> navigate(-1)} type="primary">Home</Button>
    </div>
  )
}
