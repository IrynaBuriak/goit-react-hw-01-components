import Profile from 'components/Profile/Profile';
import user from 'components/Profile/user.json';
import StatisticList from 'components/Statistic/StatisticList';
import data from 'components/Statistic/data.json';
import FriendList from 'components/FriendList/FriendList';
import friends from 'components/FriendList/friends.json';
import TransactionHistory from 'components/Transactions/TransactionHistory';
import transactions from 'components/Transactions/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <StatisticList title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
