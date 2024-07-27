import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import apiInstance from "../utils/axios";
import { userdata } from "../plugins/userdata";
import { Toast } from "../plugins/Toast";
import Swal from "sweetalert2";
import Navbar from "../components/Navbar";

function AddBlog() {
    const [post, setCreatePost] = useState({ image: "", title: "", description: "", category: "", tags: "", status: "" });
    const [imagePreview, setImagePreview] = useState("");
    const [categoryList, setCategoryList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const userId = userdata()?.user_id;
    const navigate = useNavigate();

    const fetchCategory = async () => {
        const response = await apiInstance.get(`post/category/list/`);
        setCategoryList(response.data);
    };

    useEffect(() => {
        fetchCategory();
    }, []);

    const handleCreatePostChange = (event) => {
        setCreatePost({
            ...post,
            [event.target.name]: event.target.value,
        });
    };

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        const reader = new FileReader();

        setCreatePost({
            ...post,
            image: {
                file: selectedFile,
                preview: reader.result,
            },
        });

        reader.onloadend = () => {
            setImagePreview(reader.result);
        };

        if (selectedFile) {
            reader.readAsDataURL(selectedFile);
        }
    };

    const handleCreatePost = async (e) => {
        setIsLoading(true);
        e.preventDefault();
        if (!post.title || !post.description || !post.image.file) {
            Toast("error", "All Fields Are Required To Create A Post");
            setIsLoading(false);
            return;
        }

        const formData = new FormData();
        formData.append("user_id", userId);
        formData.append("title", post.title);
        formData.append("image", post.image.file);
        formData.append("description", post.description);
        formData.append("tags", post.tags);
        formData.append("category", post.category);
        formData.append("post_status", post.status);

        try {
            const response = await apiInstance.post("author/dashboard/post-create/", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            setIsLoading(false);
            Swal.fire({
                icon: "success",
                title: "Post created successfully.",
            });
            navigate("/blogs");
        } catch (error) {
            console.error(error);
            setIsLoading(false);
        }
    };

    return (
        <>
            <Helmet>
                <title>Create Blog Post - SERA Innovations</title>
                <meta name="description" content="Create a new blog post on SERA Innovations. Share your knowledge and insights with our community." />
                <meta name="keywords" content="create blog, new post, SERA Innovations, blog post, share knowledge" />
            </Helmet>
            <Navbar />
            <div className="bg-orange-500">
                <header className="md:p-24 md:pb-5 p-3">
                    <div className="container mx-auto bg-orange-100 rounded-lg p-10 mt-16 md:mt-0">
                        <section className="py-4 py-lg-6 bg-primary rounded-3">
                            <div className="container">
                                <div className="row">
                                    <div className="offset-lg-1 col-lg-10 col-md-12 col-12">
                                        <div className="flex flex-col lg:flex-row items-center justify-between">
                                            <div className="mb-4 lg:mb-0">
                                                <h1 className="font-bold text-2xl mb-1">Create Blog Post</h1>
                                                <p className="mb-0 text-lg lead">Use the article builder below to write your article.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <form onSubmit={handleCreatePost} className="pb-8 mt-5">
                            <div className="card mb-3">
                                <div className="card-header border-b px-4 py-3">
                                    <h4 className="font-bold text-2xl">Basic Information</h4>
                                </div>
                                <div className="rounded-lg p-3">
                                    <label htmlFor="postThumbnail" className="form-label">
                                        Preview
                                    </label>
                                    <img
                                        className="mb-4 w-full object-cover rounded-lg"
                                        src={imagePreview || "https://www.eclosio.ong/wp-content/uploads/2018/08/default.png"}
                                        alt="Post Thumbnail"
                                    />
                                    <div className="mb-3">
                                        <label htmlFor="postThumbnail" className="form-label">
                                            Image 
                                        </label>
                                        <input
                                            onChange={handleFileChange}
                                            name="image"
                                            id="postThumbnail"
                                            className="form-control w-full rounded-lg p-2 border bg-white mx-1"
                                            type="file"
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label text-lg">Title</label>
                                        <input
                                            onChange={handleCreatePostChange}
                                            name="title"
                                            className="form-control rounded-lg p-2 mx-1"
                                            type="text"
                                            placeholder=""
                                        />
                                        <small className="">Write a 60 character post title.</small>
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Posts category</label>
                                        <select
                                            name="category"
                                            onChange={handleCreatePostChange}
                                            className="form-select rounded-lg p-2"
                                        >
                                            <option value="">-------------</option>
                                            {categoryList?.map((c, index) => (
                                                <option key={index} value={c.id}>
                                                    {c.title}
                                                </option>
                                            ))}
                                        </select>
                                        <small className="">Help people find your posts by choosing categories that represent your post.</small>
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Post Description</label>
                                        <textarea
                                            onChange={handleCreatePostChange}
                                            name="description"
                                            className="form-control rounded-lg p-2 w-full"
                                            cols="30"
                                            rows="10"
                                        ></textarea>
                                        <small>A brief summary of your posts.</small>
                                    </div>

                                    <label className="form-label">Tags</label>
                                    <input
                                        onChange={handleCreatePostChange}
                                        name="tags"
                                        className="form-control rounded-lg p-2 mx-1"
                                        type="text"
                                        placeholder="health, medicine, fitness"
                                    />

                                    <div className="mb-3">
                                        <label className="form-label">Status</label>
                                        <select
                                            onChange={handleCreatePostChange}
                                            name="status"
                                            className="rounded-lg p-2 mx-1 mt-1"
                                        >
                                            <option value="Active">Active</option>
                                            <option value="Draft">Draft</option>
                                            <option value="Disabled">Disabled</option>
                                        </select>
                                        <small>Help people find your posts by choosing categories that represent your post.</small>
                                    </div>
                                </div>
                            </div>
                            {isLoading ? (
                                <button className="p-3 rounded-lg text-white bg-green-500 mx-1 w-full" disabled>
                                    Creating Post... <i className="fas fa-spinner fa-spin"></i>
                                </button>
                            ) : (
                                <button className="p-3 rounded-lg text-white bg-green-500 mx-1 w-full" type="submit">
                                    Create Post <i className="fas fa-check-circle"></i>
                                </button>
                            )}
                        </form>
                    </div>
                </header>
            </div>
        </>
    );
}

export default AddBlog;
