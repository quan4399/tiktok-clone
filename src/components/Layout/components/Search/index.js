import {Wrapper as PopperWrapper} from "~/components/Popper";
import AccountItem from "~/components/AccountItem";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleXmark, faMagnifyingGlass, faSpinner} from "@fortawesome/free-solid-svg-icons";
import HeadlessTippy from "@tippyjs/react/headless";
import {useState, useEffect, useRef} from "react";
import classNames from "classnames/bind";
import styles from "./Search.module.scss";
import {useDebounce} from "~/hooks";
import * as searchServices from '~/services/searchServices';

// import axios from "axios";

const cx = classNames.bind(styles)

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);

  const debounced = useDebounce(searchValue, 800)

  const inputRef = useRef()

  useEffect(() => {
    if (!debounced.trim()) {
      setSearchResult([]);
      return;
    }

    const fetchApi = async () => {
      setLoading(true);

      const result = await searchServices.search(debounced);
      setSearchResult(result);

      setLoading(false);
    };

    fetchApi();
  }, [debounced]);

  const handleHideResult = () => {
    setShowResult(false)
  }

  const handleClear = () => {
    setSearchValue('');
    setSearchResult([]);
    inputRef.current.focus();
  }

  return (
    <HeadlessTippy
      interactive
      visible={showResult && searchResult.length > 0}
      render={(attrs) => (
        <div className={cx('search-result')} tabIndex='-1'{...attrs}>
          <PopperWrapper>
            <h4 className={cx('search-title')}>Accounts</h4>
            {searchResult.map((result) => (
              <AccountItem key={result.id} data={result}/>
            ))}
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
        {!!searchValue && !loading && (
          <button
            className={cx('clear')}
            onClick={handleClear}
          >
            <FontAwesomeIcon icon={faCircleXmark}/>
          </button>
        )}
        {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner}/>}
        <button className={cx('search-btn')}>
          <FontAwesomeIcon icon={faMagnifyingGlass}/>
        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;