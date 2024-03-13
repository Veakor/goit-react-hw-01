
export default App;
import Profile from './components/Profile/Profile';
import FriendList from './components/FriendList/FriendList'; 
// eslint-disable-next-line no-unused-vars
import FriendListItem from './components/FriendListItem/FriendListItem'; 
import userData from './userData.json'; 
import friends from "./friends.json";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
    </>
  );
};

