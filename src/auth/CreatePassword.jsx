import React, { useState } from "react";

import { Link, useNavigate, useSearchParams } from "react-router-dom";
import apiInstance from "../utils/axios";
import { Toast } from "../plugins/Toast";
import Navbar from "../components/Navbar";
function CreatePassword() {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const [searchParams] = useSearchParams();
    const otp = searchParams.get("otp");
    const uidb64 = searchParams.get("uidb64");
    const reset_token = searchParams.get("reset_token");

    const handlePasswordSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        if (password !== confirmPassword) {
            setIsLoading(false);
            Toast().fire({
                icon: "warning",
                text: "Password Does Not Match",
            });
        } else {
            setIsLoading(true);

            const formdata = new FormData();
            formdata.append("otp", otp);
            formdata.append("uidb64", uidb64);
            formdata.append("reset_token", reset_token);
            formdata.append("password", password);

            try {
                apiInstance.post(`user/password-change/`, formdata).then((res) => {
                    Toast().fire({
                        icon: "success",
                        text: "Password Changed Successfully",
                    });
                    navigate("/login");
                });
            } catch (error) {
                console.log(error);
                Toast().fire({
                    icon: "error",
                    title: "An Error Occured Try Again",
                });
                setIsLoading(false);
            }
        }
    };
    return (
        <>
            <Navbar/>
            <section className="mt-20" >
                <div className="row align-items-center justify-content-center g-0 h-lg-100 py-8">
                    <div className="col-lg-5 col-md-8 py-8 py-xl-0 p-5 ">
                        <div className="bg-orange-200 shadow rounded-lg">
                            <div className="card-body p-6">
                                <div className="mb-4">
                                    <h1 className="text-3xl font-bold">Create New Password</h1>
                                    <span className=" text-lg text-gray-500">Choose a new password for your account</span>
                                </div>
                                <form className="needs-validation" onSubmit={handlePasswordSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">
                                            Enter New Password
                                        </label>
                                        <input type="password" className="border rounded-lg w-full p-2" placeholder="**************" required onChange={(e) => setPassword(e.target.value)} />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">
                                            Confirm New Password
                                        </label>
                                        <input type="password" className="border rounded-lg w-full p-2" placeholder="**************" required onChange={(e) => setConfirmPassword(e.target.value)} />
                                    </div>

                                    <div>
                                        <div className="d-grid">
                                            {isLoading === true ? (
                                                <button disabled className="bg-blue-500 p-3 w-full text-white rounded-lg">
                                                    Processing <i className="fas fa-spinner fa-spin"></i>
                                                </button>
                                            ) : (
                                                <button type="submit" className="bg-blue-500 p-3 w-full text-white rounded-lg">
                                                    Save New Password <i className="fas fa-check-circle"></i>
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    );
}

export default CreatePassword;
