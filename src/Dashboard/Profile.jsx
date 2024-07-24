import React, { useState, useEffect } from "react";
import { Toast } from '../plugins/Toast';
import apiInstance from "../utils/axios";
import { userdata } from "../plugins/userdata";
import Navbar from "../components/Navbar";

function Profile() {
    const [profileData, setProfileData] = useState({
        image: null,
        full_name: "",
        about: "",
        bio: "",
        facebook: "",
        twitter: "",
        country: "",
    });
    const userId = userdata()?.user_id;

    const [imagePreview, setImagePreview] = useState("");
    const [loading, setLoading] = useState(false);

    const fetchProfile = () => {
        apiInstance.get(`user/profile/${userId}/`).then((res) => {
            setProfileData(res.data);
        });
    };

    useEffect(() => {
        fetchProfile();
    }, []);

    const handleProfileChange = (event) => {
        setProfileData({
            ...profileData,
            [event.target.name]: event.target.value,
        });
    };

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setProfileData({
            ...profileData,
            [event.target.name]: selectedFile,
        });

        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreview(reader.result);
        };
        if (selectedFile) {
            reader.readAsDataURL(selectedFile);
        }
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const res = await apiInstance.get(`user/profile/${userId}/`);

        const formData = new FormData();
        if (profileData.image && profileData.image !== res.data.image) {
            formData.append("image", profileData.image);
        }
        formData.append("full_name", profileData.full_name);
        formData.append("about", profileData.about);
        formData.append("bio", profileData.bio);
        formData.append("facebook", profileData.facebook);
        formData.append("twitter", profileData.twitter);
        formData.append("country", profileData.country);

        try {
            await apiInstance.patch(`user/profile/${userId}/`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            Toast("success", "Profile updated successfully", "");
            setLoading(false);
        } catch (error) {
            console.error("Error updating profile:", error);
            Toast("error", "An Error Occured", "");
            setLoading(false);
        }
    };

    return (
        <>
        <Navbar/>
        <div className="bg-orange-500">
            <div className='mt-16'>
                <div className='p-5 flex flex-col md:flex-row'>
                    <div className='rounded-lg p-5 h-fit sticky bg-orange-200 shadow-lg '>
                      <div className="flex flex-col items-center content-center">
                        <img
                            className='h-[200px] w-[200px] rounded-full border-orange-500 border-4 mx-'
                            src={imagePreview || profileData?.image || "/default.jpg"}
                            alt="avatar"
                        />
                        
                        <div className="ms-3">
                          <h4 className="mb-0 text-center font-bold text-lg">Your avatar</h4>
                          <p className="mb-0 text-center">PNG or JPG no bigger than 800px wide and tall.</p>
                          <input type="file" name="image" className=" border rounded-lg w-full p-2 border-black" onChange={handleFileChange} />
                        </div></div>
                        <div className="text-center">
                            <button className="btn btn-primary m-2 rounded-lg bg-blue-500 text-white p-3">Follow</button>
                            <button className="btn btn-secondary m-2 rounded-lg bg-blue-500 text-white p-3">Message</button>
                        </div>
                    </div>
                    <div className='flex flex-col w-full gap-2 p-5'>
                        <h1 className='text-center text-3xl font-bold'>Update Profile</h1>
                        <form onSubmit={handleFormSubmit}>
                            <label htmlFor="full_name">Full Name</label>
                            <input
                                className='w-full border rounded-lg h-10 p-2'
                                type="text"
                                placeholder='Full Name'
                                name="full_name"
                                value={profileData?.full_name}
                                onChange={handleProfileChange}
                            />
                            <label htmlFor="about">About</label>
                            <textarea
                                className='w-full border rounded-lg h-20 p-2'
                                name="about"
                                placeholder="About Me"
                                value={profileData?.about}
                                onChange={handleProfileChange}
                            />
                            <label htmlFor="bio">Bio</label>
                            <textarea
                                className='w-full border rounded-lg h-40 p-2'
                                name="bio"
                                placeholder="Bio"
                                value={profileData?.bio}
                                onChange={handleProfileChange}
                            />
                            <label htmlFor="country">Country</label>
                            <input
                                className='w-full border rounded-lg h-10 p-2'
                                type="text"
                                placeholder='Country'
                                name="country"
                                value={profileData?.country}
                                onChange={handleProfileChange}
                            />
                            <label htmlFor="facebook">Facebook</label>
                            <input
                                className='w-full border rounded-lg h-10 p-2'
                                type="text"
                                placeholder='Facebook Profile Link'
                                name="facebook"
                                value={profileData?.facebook || ''}
                                onChange={handleProfileChange}
                            />
                            <label htmlFor="twitter">Twitter</label>
                            <input
                                className='w-full border rounded-lg h-10 p-2'
                                type="text"
                                placeholder='Twitter Profile Link'
                                name="twitter"
                                value={profileData?.twitter}
                                onChange={handleProfileChange}
                            />
                            <button
                                type="submit"
                                className="rounded-lg bg-orange-200 mt-2 p-3 w-fit"
                            >
                                Update Profile
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div></>
    );
}

export default Profile;
