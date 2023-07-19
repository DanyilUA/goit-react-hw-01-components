import { Profile } from '../components/profile/Profile';
import { Statistic } from './statiscitcs/Statisctics';
import { FriendList } from './friendlist/FriendList';
import { Transaction } from './transactionhistory/TransactionHistory';

import friends from '../data/friends.json';
import user from '../data/user.json';
import staty from '../data/data.json';
import transactions from '../data/transactions.json';

import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.container}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistic title="Upload stats" stats={staty} />
      <FriendList friends={friends} />
      <Transaction items={transactions} />
    </div>
  );
};
