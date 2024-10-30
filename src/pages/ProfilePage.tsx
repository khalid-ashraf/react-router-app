import { useParams } from "react-router-dom";

const ProfilePage = () => {
  // By using useParams, you can get the dynamic link that is being used and get the value. Based on the link/url we can render data as we need to. This is important as we do not need to call on state or context. We can just fetch data based on our link and render it.
  const { profileId } = useParams<{ profileId: string }>();

  return (
    <div>
      <h1>Profile Page {profileId}</h1>
    </div>
  );
};
export default ProfilePage;
