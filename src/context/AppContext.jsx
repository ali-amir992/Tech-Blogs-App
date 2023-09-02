import { createContext, useState } from "react";
import { baseURL } from "../BaseURL";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
    
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState("");
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);

    async function fetchBlogData(page) {

        setLoading(true);
        let url = `${baseURL}?page=${page}`;
        
        try {
            const result = await fetch(url);
            const data = await result.json();
            console.log("new data is here");
            console.log(data.page);
            setPage(data.page)
            setPosts(data.posts)
            setTotalPages(data.totalPages)

        } catch (error) {
            console.log("Errrorrr");
            setPage(1)
            setPosts([])
            setTotalPages(null)
        }
        setLoading(false);
    }

    const value = {
        loading,
        setLoading,
        posts,
        setPosts,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogData,
        handlePageChange
    }

    function handlePageChange(page) {
        console.log("handle page function");
        fetchBlogData(page);
        setPage(page);
    }


    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>

}