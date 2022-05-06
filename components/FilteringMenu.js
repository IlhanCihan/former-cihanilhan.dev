
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBorderAll, faFeather, faList} from '@fortawesome/free-solid-svg-icons';

const LIST_VIEW_ICONS = [faList, faBorderAll];

const FilteringMenu = ({onChange, filter}) => {

  return (
    <div className="filtering-menu mb-2"  >
      <FontAwesomeIcon
        className="clickable hoverable mr-3"
        size="2x"
        icon={LIST_VIEW_ICONS[filter.view.list]}
        onClick={() =>
          onChange('view', {list: +!filter.view.list })} />
    </div>
  )
}

export default FilteringMenu;
