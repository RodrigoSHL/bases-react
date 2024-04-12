import { useState } from 'react';

export interface User {
    id: number;
    name: string;
    email: string;
}

export const useFetchUsers = () => {
    const [data, setData] = useState<User[]>();
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return { data, loading, fetchData };
};