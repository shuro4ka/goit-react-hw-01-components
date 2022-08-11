import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
    return (
        <section className={css.statistics}>
            {title ? <h2 className={css.title}>{title}</h2> : ''}
        
            <ul className={css.statList}>
                {stats.map(({ id, label, percentage }) => {
                    return(
                        <li key={id} className={css.item} style={{backgroundColor: getRandomHexColor()}}>
                            <span className={css.label}>{label}<br/></span>
                            <span className={css.percentage}>{percentage}%</span>
                        </li>
                    )
                })}
            </ul>
        </section>
    );
};

Statistics.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string,
        percentage: PropTypes.number
    }))
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}