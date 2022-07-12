import classNames from "classnames/bind";
import styles from './Header.module.scss';
import images from '~/assets/images';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleXmark, faEllipsisVertical, faMagnifyingGlass, faSpinner} from "@fortawesome/free-solid-svg-icons";
import Button from '~/components/Button'
import Tippy from '@tippyjs/react/headless';
import {useEffect, useState} from "react";
import { Wrapper as PopperWrapper } from "~/components/Popper";

const cx = classNames.bind(styles)

function Header() {
  const [searchResult, setSearchResult] = useState([])

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 2, 3])
    }, 3000)
  }, [])

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt="Tiktok"/>
        </div>
        <Tippy
          interactive
          visible={searchResult.length > 0}
          render={attrs => (
            <PopperWrapper>
              <div className={cx('search-result')} tabIndex='-1'{...attrs}>
                ket qua
              </div>
            </PopperWrapper>
          )}
        >
          <div className={cx('search')}>
            <input placeholder='search account and video' spellCheck={false}/>
            <button className={cx('clear')}>
              <FontAwesomeIcon icon={faCircleXmark}/>
            </button>
            <FontAwesomeIcon className={cx('loading')} icon={faSpinner}/>
            <button className={cx('search-btn')}>
              <FontAwesomeIcon icon={faMagnifyingGlass}/>
            </button>
          </div>
        </Tippy>
        <div className={cx('action')}>
          <Button text>Upload</Button>
          <Button primary onClick={() => alert('Clicked')}>
            Log in
          </Button>
          <Button className={cx('more-btn')}>
            <FontAwesomeIcon icon={faEllipsisVertical}/>
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;