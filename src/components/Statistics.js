import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
    return (
        <section className={css.statistics}>
            <h2 className={css.title}>{title}</h2>
        
            <ul className={css.statList}>
                {stats.map((stat) => {
                    
                    return(
                        <li key={stat.id} className={css.item} style={{backgroundColor: getRandomHexColor()}}>
                            <span className={css.label}>{stat.label}<br/></span>
                            <span className={css.percentage}>{stat.percentage}%</span>
                        </li>
                    )
                })}
            </ul>
        </section>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}