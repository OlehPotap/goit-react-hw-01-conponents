// Импорт json данных

import user from '../data/user.json'
import data from '../data/data.json'
import friends from '../data/friends.json'
import transactions from '../data/transactions.json';

// Импорт компонентов
import Profile from "./Profile";
import Statistics from './Statistics';
import FriendsList from './FriendsList';
import TransactionsHistory from './Transactions';

export const App = () => {
  return (
    <>
      <Profile username={user.username} tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats}/>,
      <Statistics title={"Upload stats"} stats={data}/>,
      <FriendsList friends={friends}/>,
      <TransactionsHistory items={transactions}/>
    </>
  );
};


