import Toggle from 'react-toggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSun, faMoon} from '@fortawesome/free-solid-svg-icons';

const ThemeToggle = ({onChange}) =>
    <label>
        <Toggle
            className="day-night-toggle"
            icons={{
                checked: <FontAwesomeIcon inverse icon={ faMoon }/>,
                unchecked: <FontAwesomeIcon inverse icon={  faSun}/>,
            }}
            onChange={onChange} />
    </label>

export default ThemeToggle;