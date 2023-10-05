import { useParams } from "react-router-dom";
const Project = () => {
  const { name } = useParams();
  return (
    <div>
      Project: <b>{name}</b>
    </div>
  );
};

export default Project;
