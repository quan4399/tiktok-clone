import {Wrapper as PopperWrapper} from "~/components/Popper";
import AccountItem from "~/components/AccountItem";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleXmark, faMagnifyingGlass, faSpinner} from "@fortawesome/free-solid-svg-icons";
import HeadlessTippy from "@tippyjs/react/headless";
import {useState, useEffect, useRef} from "react";
import classNames from "classnames/bind";
import styles from "./Search.module.scss";

const cx = classNames.bind(styles)

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true)

  const inputRef = useRef()

  useEffect(() => {
    setTimeout(() => {
      // setSearchResult([])
      setSearchResult([1, 2, 3])
    }, 0);
  }, []);

  const handleHideResult = () => {
    setShowResult(false)
  }

  return (
    <HeadlessTippy
      interactive
      visible={showResult && searchResult.length > 0}
      render={(attrs) => (
        <div className={cx('search-result')} tabIndex='-1'{...attrs}>
          <PopperWrapper>
            <h4 className={cx('search-title')}>
              Accounts
            </h4>
            <AccountItem/>
            <AccountItem/>
            <AccountItem/>
          </PopperWrapper>
        </div>
      )}
      onClickOutside={handleHideResult}

    >
      <div className={cx('search')}>
        <input
          ref={inputRef}
          value={searchValue}
          placeholder='search account and video'
          spellCheck={false}
          onChange={e => setSearchValue(e.target.value)}
          onFocus={() => setShowResult(true)}
        />
        {/* convert search value to boolean */}
        {!!searchValue && (
          <button
            className={cx('clear')}
            onClick={() => {
              setSearchValue('');
              inputRef.current.focus();
            }}
          >
            <FontAwesomeIcon icon={faCircleXmark}/>
          </button>
        )}
        {/*<FontAwesomeIcon className={cx('loading')} icon={faSpinner}/>*/}
        <button className={cx('search-btn')}>
          <FontAwesomeIcon icon={faMagnifyingGlass}/>
        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;