import { ChangeEvent, useState } from "react";


export function Pagination(){

    const [total, setTotal] = useState(0);
    const [totalPage, setTotalPage] = useState(0);

    const [search, setSearch] = useState(() => {
        const url = new URL(window.location.toString());

        if(url.searchParams.has('search')){
            return url.searchParams.get('search') ?? '';
        }

        return '';
    });
    const [page, setPage] = useState(() => {
        const url = new URL(window.location.toString());

        if(url.searchParams.has('page')){
            return Number(url.searchParams.get('page'));
        }

        return 1;
    });

    function setCurrentPage(page: number){
        const url = new URL(window.location.toString());
        url.searchParams.set('page', String(page));
        window.history.pushState({}, "", url);

        setPage(page);
    }

    function setCurrentSearch(search: string){
        const url = new URL(window.location.toString());
        url.searchParams.set('search', search);
        window.history.pushState({}, "", url);

        setSearch(search);
    }

    function onSearchInputChange(event: ChangeEvent<HTMLInputElement>){
        setCurrentSearch(event.target.value);        
        setCurrentPage(1);
    }

    function goToFirstPage(){       
        setCurrentPage(1);
    }
    function goToNextPage(){
        setCurrentPage(page + 1);
    }
    
    function goToPreviousPage(){
       setCurrentPage(page - 1);
    }
    function goToLastPage(){
       setCurrentPage(totalPage);
    }

    return {
        goToLastPage,
        goToPreviousPage,
        goToNextPage,
        goToFirstPage,
        onSearchInputChange,
        total,
        totalPage,
        page,
        search,
        setTotal,
        setTotalPage,
    }
}