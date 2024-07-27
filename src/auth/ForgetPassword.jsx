import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Navbar from "../components/Navbar";
import apiInstance from "../utils/axios";
import { FaArrowRight } from "react-icons/fa";

function ForgetPassword() {
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleEmailSubmit = async () => {
        try {
            setIsLoading(true);
            await apiInstance.get(`user/password-reset/${email}/`).then((res) => {
                setEmail("");
                Swal.fire({
                    icon: "success",
                    title: "Password Reset Email Sent!",
                });
            });
        } catch (error) {
            console.log();
            setIsLoading(false);
        }
    };

    return (
        <>
            <Navbar />
            <section className="mt-20 mx-5" >
                <div className="row align-items-center justify-content-center g-0 h-lg-100 py-8">
                    <div className="">
                        <div className="card bg-orange-200 shadow-lg rounded-lg">
                            <div className="card-body p-6">
                                <div className="mb-4">
                                    <h1 className="text-3xl font-bold">Forgot Password</h1>
                                    <span className="text-gray-500 text-lg">Let's help you get back into your account</span>
                                </div>
                                <div className="needs-validation">
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">
                                            Email Address
                                        </label>
                                        <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" id="email" className="border rounded-lg w-full p-2" name="email" placeholder="johndoe@gmail.com" required="" />
                                    </div>

                                    <div>
                                        <div className="d-grid">
                                            {isLoading === true ? (
                                                <button disabled className="bg-blue-500 p-3 w-full text-white rounded-lg">
                                                    {" "}
                                                    Processing ....
                                                </button>
                                            ) : (
                                                <button onClick={handleEmailSubmit} className="bg-blue-500 p-3 w-full text-white rounded-lg">
                                                    {" "}
                                                    Reset Password <FaArrowRight className="inline"/>
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    );
}

export default ForgetPassword;
