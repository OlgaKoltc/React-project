import { useState, useEffect, createContext } from 'react';

export const glContext = createContext();

export function ContextProvider({ children }) {

    const [data, setData] = useState(false);

    useEffect(() => {
        async function getPost() {
            try {
                const resp = await fetch('http://itgirlschool.justmakeit.ru/api/words');
                const words = await resp.json()
                setData(words)
            }
            catch (err) {
                console.error(err);
            }

        }
        getPost()
    }, [])

    if (!data) {
        return <h1 > Loading... </h1>
    }

    const value = { data, setData }

    return (

        <glContext.Provider value={value}>
            {children}
        </glContext.Provider>);

}