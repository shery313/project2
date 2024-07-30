import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import apiInstance from '../utils/axios';
import Swal from 'sweetalert2';
import Navbar from '../components/Navbar';

function EmailVerify() {
    const [error, setError] = useState(null);
    const axios = apiInstance;
    const navigate = useNavigate();

    const [searchParams] = useSearchParams();
    const otp = searchParams.get('otp');
    const uidb64 = searchParams.get('uidb64');
    const reset_token = searchParams.get('token');
    const formData = new FormData();
    
    formData.append('otp', otp);
    formData.append('uidb64', uidb64);
    formData.append('token', reset_token);

    useEffect(() => {
        console.log(`OTP: ${otp}, UIDB64: ${uidb64}, Token: ${reset_token}`);
        for (let pair of formData.entries()) {
            console.log(`${pair[0]}: ${pair[1]}`);
        }

        axios.post(`/user/email-verify/`, formData)
            .then(res => {
                console.log('Response data:', res.data);
                Swal.fire({
                    icon: 'success',
                    title: 'Email verified successfully',
                });
                navigate('/login');
            })
            .catch(error => {
                if (error.response) {
                    console.log('Error response data:', error.response.data);
                    setError(error.response.data.error || 'Verification failed. Invalid or expired link.');
                } else {
                    console.log('Error message:', error.message);
                    setError('An unexpected error occurred. Please try again.');
                }
                Swal.fire({
                    icon: 'error',
                    title: 'An error occurred. Try again',
                });
            });
    }, [axios, formData, navigate]);

    return (
        <>
        <Navbar/>
        <div className="verify-email-container my-20 font-bold text-lg">
            {error ? (
                <p className="text-red-500">{error}</p>
            ) : (
                <p className='text-green-500'>Verifying...</p>
            )}
        </div>
        </>
    );
}

export default EmailVerify;
