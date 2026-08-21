import { useEffect, useState } from "react";

function Data() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments').then(response => response.json()).then(data => {
            setTimeout(() => {
                setUsers(data)
                setLoading(false)
            }, 1000)
        });
    }, []);

    return (
        <div>
            {loading ? (<h6>Loading....</h6>) :

                (
                    <table className="border border-5">
                        <thead>
                            <tr className="border border-5">
                                <th className="border border-5">Post Id</th>
                                <th className="border border-5">User Name</th>
                                <th className="border border-5">User Email</th>
                                <th className="border border-5">User Message</th>
                            </tr>
                        </thead>

                        <tbody>
                            {users.map(user => (
                                <tr key={user.id}>
                                    <td className="border border-5">{user.id}</td>
                                    <td className="border border-5">{user.name}</td>
                                    <td className="border border-5">{user.email}</td>
                                    <td className="border border-5">{user.body}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )
            }
        </div>
    )
}

export default Data
