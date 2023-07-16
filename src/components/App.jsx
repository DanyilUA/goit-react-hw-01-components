import { Profile } from '../components/profile/Profile';
import { Statistic } from './statiscitcs/Statisctics';
import { FriendList } from './friendlist/FriendList';
import { Transaction } from './transactionhistory/TransactionHistory';

import friends from './friendlist/friends.json';
import user from './profile/user.json';
import staty from './statiscitcs/data.json';
import transactions from './transactionhistory/transactions.json';

import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.container}

    >
      <Profile props={user} />
      <Statistic title="Upload stats" stats={staty} />
      <FriendList friends={friends} />
      <Transaction items={transactions} />
    </div>
  );
};
