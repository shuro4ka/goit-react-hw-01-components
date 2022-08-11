import { Profile } from './Profile';
import { FriendList } from './FriendList';
import { Statistics } from './Statistics';
import { TransactionHistory } from './TransactionHistory';
import friends from '../json/friends.json';
import user from '../json/user.json';
import data from '../json/data.json';
import transactions from '../json/transactions.json';

export const App = () => {
  return (
      <div>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />

        <Statistics 
          // title="Upload stats" 
          stats={data} 
        /> 
        
        <FriendList 
          friends={friends}
        />

        <TransactionHistory items={transactions} />
      </div>     
  );
};