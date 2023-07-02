/** @format */

import React, { useEffect } from "react";
import Loader from "../layouts/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getAllUrders } from "../../redux/actions/adminAction";

function Users() {
    const dispatch = useDispatch();

    const { loading, users } = useSelector((state) => state.admin);

    useEffect(() => {
        dispatch(getAllUrders());
    }, [dispatch]);

    return (
        <section className="tableClass">
            {loading ? (
                <Loader />
            ) : (
                <main>
                    <table>
                        <thead>
                            <tr>
                                <th>User Id</th>
                                <th>Name</th>
                                <th>Phto</th>
                                <th>Role</th>
                                <th>Since</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users &&
                                users.map((i, index) => (
                                    <tr key={index}>
                                        <td>{i._id}</td>
                                        <td>{i.name}</td>
                                        <td>
                                            <img
                                                src={i.photo}
                                                alt="User"
                                            />
                                        </td>
                                        <td>{i.role}</td>
                                        <td>{i.createdAt.split("T")[0]}</td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </main>
            )}
        </section>
    );
}

export default Users;
