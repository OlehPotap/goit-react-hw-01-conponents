import PropTypes from "prop-types";
import s from './statistics.module.css';

const Statistics = ({title, stats }) => {
  return (
    <section className={s.statistics}>
      {title ? <h2 className={s.title}>{title}</h2> : ""}
      <ul className={s.list}>
        {stats.map(el => {
          return (
            <li className={s.item} key={el.id}>
            <span className={s.label}>{el.label}</span>
            <span className={s.percentage}>{el.percentage}%</span>
          </li>
          )
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    percentage: PropTypes.number
  }))
}

export default Statistics;
