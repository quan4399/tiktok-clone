import classNames from "classnames/bind";
import Tippy from '@tippyjs/react/headless';
import {Wrapper as PopperWrapper} from "~/components/Popper";
import styles from './Menu.module.scss';
import MenuItem from "~/components/Popper/Menu/MenuItem";

const cx = classNames.bind(styles)

function Menu({ children, items = [] }) {

  const renderItems = () => {
    return items.map((item, index) => (
      <MenuItem key={index} data={item} />
    ))
  }

  return (
    <Tippy
      delay={[0, 500]}
      interactive
      // visible
      placement='bottom-end'
      render={(attrs) => (
        <div className={cx('menu-items')} tabIndex='-1'{...attrs}>
          <PopperWrapper>{renderItems()}</PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  )
}

export default Menu;