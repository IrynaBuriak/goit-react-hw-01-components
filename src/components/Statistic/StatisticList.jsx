import StatisticItem from './StatisticItem';
import css from './Statistic.module.css';
import PropTypes from 'prop-types';

const StatisticList = ({ title, stats }) => {
  return (
    <section className={css.statistic}>
      {title ? <h2 className={css.title}>{title}</h2> : null}
      <ul className={css.statList}>
        {stats.map(({ id, ...item }) => (
          <StatisticItem key={item.id} {...item} />
        ))}
      </ul>
    </section>
  );
};

StatisticList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ),
};

export default StatisticList;
