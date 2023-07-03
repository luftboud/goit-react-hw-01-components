import React from 'react';
import ReactDOM from 'react-dom/client';
// task 1
import { Profile } from 'components/Profile/Profile';
import user from './user.json';
// task 2
import { Statistics } from 'components/Stats/Statistics';
import data from './data.json';
// task 3
import { FriendList } from './components/FriendList/FriendList';
import friends from './friends.json';
//task 4
import { TransactionHistory } from './components/TransactionHistory/TransactionHistory';
import transactions from './transactions.json';
//
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Profile
      name={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
    />
    <Statistics stats={data} title="upload stats" />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </React.StrictMode>
);
