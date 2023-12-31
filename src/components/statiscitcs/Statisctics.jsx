import css from './Statistics.module.css';
import PropTypes from 'prop-types';
import { getRandomColor } from '../../helpers/helpers';

export function Statistic({ title, stats }) {


  return (
    <div className={css.container}>
      <section className={css.statistics}>
        <div className={css.containertitle}>
          {title && <h2 className={css.title}>{title}</h2>}
        </div>
        <ul className={css.statList}>
          {stats.map(stat => (
            <li
              key={stat.id}
              className={css.item}
              style={{ backgroundColor: getRandomColor() }}
            >
              <span className={css.label}>{stat.label}</span>
              <span className={css.percentage}>{stat.percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ).isRequired,
};

