import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import apiInstance from "../utils/axios";
import { userdata } from "../plugins/userdata";
import moment from "moment"; 

function ProfileBlogs() {
    const [posts, setPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const userId = userdata()?.user_id;

    const fetchPosts = async () => {
        const post_res = await apiInstance.get(`author/dashboard/post-list/${userId}/`);
        setPosts(post_res.data);
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        if (query === "") {
            fetchPosts();
        } else {
            const filtered = posts.filter((p) => {
                return p.title.toLowerCase().includes(query);
            });
            setPosts(filtered);
        }
    };

    const handleSortChange = (e) => {
        const sortValue = e.target.value;
        let sortedPosts = [...posts];
        if (sortValue === "Newest") {
            sortedPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
        } else if (sortValue === "Oldest") {
            sortedPosts.sort((a, b) => new Date(a.date) - new Date(b.date));
        } else if (sortValue === "Active" || sortValue === "Draft" || sortValue === "Disabled") {
            sortedPosts = posts.filter((post) => post.status === sortValue);
        } else if (sortValue === "") {
            fetchPosts();
        }
        setPosts(sortedPosts);
    };

    return (
        <>
           
            <section className="py-4 md:mt-20">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                        <h5 className="text-xl font-semibold">
                            All Blog Posts <span className="badge bg-primary bg-opacity-10 text-primary">{posts?.length}</span>
                        </h5>
                        <Link to="/create-post" className="btn bg-primary text-white">
                            Add New <i className="fas fa-plus"></i>
                        </Link>
                    </div>
                    <div className="mb-4 flex flex-col md:flex-row justify-between items-center">
                        <input
                            onChange={handleSearch}
                            className="form-input rounded-lg bg-gray-100 border-0 w-full md:w-2/3 mb-2 md:mb-0 p-1"
                            type="search"
                            placeholder="Search Articles"
                            aria-label="Search"
                        />
                        <select onChange={handleSortChange} className="form-select p-2 ml-1 bg-gray-100 border-0 rounded-lg w-full md:w-1/3">
                            <option value="">Sort by</option>
                            <option value="Newest">Newest</option>
                            <option value="Oldest">Oldest</option>
                        </select>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full text-left">
                            <thead className="bg-gray-200">
                                <tr>
                                    <th className="px-4 py-2">Image</th>
                                    <th className="px-4 py-2">Article Name</th>
                                    <th className="px-4 py-2">Views</th>
                                    <th className="px-4 py-2">Published Date</th>
                                    <th className="px-4 py-2">Category</th>
                                    <th className="px-4 py-2">Status</th>
                                    <th className="px-4 py-2">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {posts?.map((p, index) => (
                                    <tr key={index} className="border-t">
                                        <td className="px-4 py-2">
                                            <Link to={`/blog/${p.slug}/`}>
                                                <img
                                                    src={p.image}
                                                    className="w-24 h-24 object-cover rounded-lg"
                                                    alt={p.title}
                                                />
                                            </Link>
                                        </td>
                                        <td className="px-4 py-2">
                                            <h6 className="mb-0">
                                                <Link to={`/blog/${p.slug}/`} className="text-primary hover:underline">
                                                    {p.title}
                                                </Link>
                                            </h6>
                                        </td>
                                        <td className="px-4 py-2">{p.view} Views</td>
                                        <td className="px-4 py-2">{moment(p.date).format("DD MMM, YYYY")}</td>
                                        <td className="px-4 py-2">{p.category?.title}</td>
                                        <td className="px-4 py-2">
                                            <span className={`rounded-lg p-2 ${p.status === 'Active' ? 'bg-green-500' : p.status === 'Draft' ? 'bg-yellow-500' : 'bg-red-500'} text-white`}>
                                                {p.status}
                                            </span>
                                        </td>
                                        <td className="px-4 py-2 flex gap-2">
                                            <Link to={`/edit-blog/${p.id}/`} className="btn rounded-lg p-2 bg-blue-500 text-white">
                                                Edit
                                            </Link>
                                            <button className="btn bg-red-500 text-white rounded-lg p-2">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
           
        </>
    );
}

export default ProfileBlogs;
