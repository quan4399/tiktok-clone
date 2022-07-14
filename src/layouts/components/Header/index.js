import classNames from "classnames/bind";
import styles from './Header.module.scss';
import images from '~/assets/images';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion, faCloudUpload, faCoins,
  faEllipsisVertical, faGear, faKeyboard,
  faLanguage, faSignOut, faUser
} from "@fortawesome/free-solid-svg-icons";
import Button from '~/components/Button'
import Tippy from '@tippyjs/react';
import Menu from "~/components/Popper/Menu";
import 'tippy.js/dist/tippy.css'
import Image from "~/components/Image";
import Search from "~/layouts/components/Search";

const cx = classNames.bind(styles)
const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faLanguage}/>,
    title: 'English',
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion}/>,
    title: 'Feedback and help',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard}/>,
    title: 'Keyboard and shortcut',
  }
]

function Header() {

  const currentUser = true

  //add item to menu item
  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: 'View profile',
      to: '/@hoaa',
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: 'Get coin',
      to: '/coin',
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: 'Setting',
      to: '/settings',
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: 'Log out',
      to: '/logout',
    },
  ]

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <img src={images.logo} alt="Tiktok"/>

        <Search />

        <div className={cx('actions')}>
          {currentUser ? (
            <>
              <Tippy trigger='click' content='Upload video' placement='bottom'>
                <button className={cx('action-btn')}>
                  <FontAwesomeIcon icon={faCloudUpload}/>
                </button>
              </Tippy>
            </>
          ) : (

            <>
              <Button text>Upload</Button>
              <Button primary onClick={() => alert('login')}>Log in</Button>
            </>
          )}

          <Menu items={currentUser ? userMenu : MENU_ITEMS}>
            {currentUser ? (
              <Image className={cx('user-avatar')}
                   src="https://ncrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiIBCGW_Kh4itNM5MTgT_110NcxnyoSnkS4g&usqp=CAU"
                   alt="current user"
              />
            ) : (
              <button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical}/>
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;