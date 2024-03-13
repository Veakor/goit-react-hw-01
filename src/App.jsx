
import Profile from './components/Profile/Profile'; 
import userData from './userData.json'; 
// eslint-disable-next-line no-unused-vars
import FriendList from './components/FriendList/FriendList';
// eslint-disable-next-line no-unused-vars
import friends from './friends.json';




const App = () => {
  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    </div>
  );
};

export default App;