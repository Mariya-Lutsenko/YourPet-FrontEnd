import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useContext } from 'react';
import { ThemeContext } from 'shared/hooks/context/ThemeProvider';

import {
  fetchNoticesByCategory,
  fetchNoticesByOwn,
  fetchAllFavoriteNotices,
} from '../../redux/notices/noticesOperations';
import {
  getAllNotices,
  selectNoticesLoading,
  selectNoticesTotalPages,
  selectNoticesPage,
} from '../../redux/notices/noticesSelectors';

import NoticesSearch from 'modules/Notices/NoticesSearch/NoticesSearch';
import NoticesCategoriesNav from 'modules/Notices/NoticesCategoriesNav/NoticesCategoriesNav';
import PaginationNotices from 'shared/components/Pagination/PaginationNotices';

import css from '../NoticesPage/NoticesPage.module.css';
import Loader from 'shared/components/Loader/Loader';
import ScrollButton from 'shared/components/ScrollButton/ScrollButton';

const NoticesPage = () => {
  const dispatch = useDispatch();
  const notices = useSelector(getAllNotices);
  const loading = useSelector(selectNoticesLoading);
  const totalPages = useSelector(selectNoticesTotalPages);
  const currentPage = useSelector(selectNoticesPage);
  const location = useLocation();
  const currentCategory = location.pathname.split('/')[2];
  const [ownCurrentPage, setOwnCurrentPage] = useState(1);
  const [favoriteCurrentPage, setFavoriteCurrentPage] = useState(1);
  const { theme } = useContext(ThemeContext);


  useEffect(() => {
    if (currentCategory === 'sell') {
      dispatch(
        fetchNoticesByCategory({
          categoryName: 'sell',
          query: '',
          page: 1,
        })
      );
      return;
    }
    if (currentCategory === 'for-free') {
      dispatch(
        fetchNoticesByCategory({
          categoryName: 'for-free',
          query: '',
          page: 1,
        })
      );
      return;
    }
    if (currentCategory === 'lost-found') {
      dispatch(
        fetchNoticesByCategory({
          categoryName: 'lost-found',
          query: '',
          page: 1,
        })
      );
      return;
    }
    if (currentCategory === 'own') {
      dispatch(fetchNoticesByOwn({ query: '', page: ownCurrentPage }));
      return;
    }
    if (currentCategory === 'favorite') {
      dispatch(
        fetchAllFavoriteNotices({ query: '', page: favoriteCurrentPage })
      );
      return;
    }
  }, [currentCategory, dispatch, ownCurrentPage, favoriteCurrentPage]);

  const onPageChange = page => {
    if (currentCategory === 'own') {
      dispatch(fetchNoticesByOwn({ query: '', page }));
      return;
    } else if (currentCategory === 'favorite') {
      dispatch(fetchAllFavoriteNotices({ query: '', page }));
      return;
    } else {
      dispatch(
        fetchNoticesByCategory({
          categoryName: currentCategory,
          query: '',
          page,
        })
      );
    }
  };

  const handleOwnClick = () => {
    dispatch(fetchNoticesByOwn({ query: '', page: ownCurrentPage }));
  };

  const handleFavoriteClick = () => {
    dispatch(fetchAllFavoriteNotices({ query: '', page: favoriteCurrentPage }));
  };

  const handleOwnPageChange = page => {
    setOwnCurrentPage(page);
    dispatch(fetchNoticesByOwn({ query: '', page }));
  };

  const handleFavoritePageChange = page => {
    setFavoriteCurrentPage(page);
    dispatch(fetchAllFavoriteNotices({ query: '', page }));
  };

  return (
    <div
      className={`${css.myСomponent} ${
        theme === 'light' ? css.light : css.dark
      }`}
    >
      <div className="container">
        <h2 className={css.title}>Find your favorite pet</h2>
        <NoticesSearch />
        <NoticesCategoriesNav
          onOwnClick={handleOwnClick}
          onFavoriteClick={handleFavoriteClick}
        />
        {loading && <Loader />}
        {notices && <Outlet />}

        <PaginationNotices
          currentPage={currentPage}
          totalPages={totalPages}
          currentCategory={currentCategory}
          ownCurrentPage={ownCurrentPage}
          favoriteCurrentPage={favoriteCurrentPage}
          onPageChange={page => {
            if (currentCategory === 'own') {
              handleOwnPageChange(page);
            } else if (currentCategory === 'favorite') {
              handleFavoritePageChange(page);
            } else {
              onPageChange(page);
            }
          }}
        />
        <ScrollButton />
      </div>
    </div>
  );
};

export default NoticesPage;
