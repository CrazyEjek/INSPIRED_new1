import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { setPage } from '../features/goodsSlice';


export const usePageFromSearch = (dispatch) => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const pageURL = +searchParams.get('page');

    useEffect(() => {
        dispatch(setPage(pageURL))
    }, [pageURL, dispatch])

    return pageURL;
};