import { User, useFetchUsers } from '../hooks/UseFetchUsers';
import { BtnDiminish } from './Counter';
import './Users.css';

const Users = () => {

    const { data, loading, fetchData } = useFetchUsers();

    
    return (
        <div>
            <BtnDiminish onClick={fetchData} disabled={loading}>
                {loading ? 'Loading...' : 'Get users'}
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