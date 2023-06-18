import StatisticItem from './StatisticItem';
import css from './Statistic.module.css';

const StatisticList = ({ title, stats }) => {
  return (
    <section className={css.statistic}>
      {title ? <h2 className={css.title}>{title}</h2> : null}
      <ul className={css.statList}>
        {stats.map(item => (
          <StatisticItem key={item.id} {...item} />
        ))}
      </ul>
    </section>
  );
};

export default StatisticList;
