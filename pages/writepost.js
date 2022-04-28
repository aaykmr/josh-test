import AuthCheck from "../components/AuthCheck";
import CreateNewPost from "../components/CreateNewPost";
const writepost = () => {
  return (
    <AuthCheck>
      <CreateNewPost />
    </AuthCheck>
  );
};

export default writepost;
