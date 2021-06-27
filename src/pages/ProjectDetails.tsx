import { useRouteMatch } from "react-router-dom";

type ProjectDetailsProps = {};

export const ProjectDetails: React.FC<ProjectDetailsProps> = () => {
  let match = useRouteMatch();
  return <>{(match.params as any).id}</>;
};
