import { useState } from 'react'
import { BtnDiminish } from './Counter';
interface User {
    id: number;
    name: string;
    email: string;
}
const Users = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };
    return (
        <div>
            <BtnDiminish onClick={fetchData} disabled={loading}>
                {loading ? 'Loading...' : 'Get Users'}
            </BtnDiminish>
            {data && (

                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((user: User) => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            )}
        </div>
    )
}

export default Users