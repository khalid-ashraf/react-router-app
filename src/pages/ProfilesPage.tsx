import { NavLink, Outlet } from "react-router-dom";

const ProfilesPage = () => {
  const profiles = [1, 2, 3, 4, 5];
  return (
    <div className='flex flex-col gap-4'>
      <h1>Profiles Page</h1>
      <div className='flex gap-6'>
        {profiles.map((profile) => (
          // NavLink is a link component provided by react router, using it how we did below helps us highlight the link we are on.
          <NavLink
            key={profile}
            to={`/profiles/${profile}`}
            className={({ isActive }) => {
              return isActive ? "text-primary-700" : "";
            }}>
            Profile {profile}
          </NavLink>
        ))}
      </div>

      <Outlet />
    </div>
  );
};
export default ProfilesPage;
