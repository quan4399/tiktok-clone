import styles from './Sidebar.module.scss';
import classNames from "classnames/bind";
import config from "~/config";
import Menu, { MenuItem } from "~/layouts/components/Sidebar/Menu";

const cx = classNames.bind(styles)

function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
      <Menu>
        <MenuItem title='For you' to={config.routes.home} />
        <MenuItem title='Following' to={config.routes.following} />
        <MenuItem title='LIVE' to={config.routes.live} />
      </Menu>
    </aside>
  )
}

export default Sidebar;