import React, { useState, useEffect } from 'react';
import Squares from './UI/Squares';
import DownloadTheApp from './UI/DownloadTheApp';
import Loader from './UI/Loader';
import { div } from 'framer-motion/client';

function Collaboration() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const [formError, setFormError] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });
        const [isLoading, setIsLoading] = useState(false);
    const [responseStatus, setResponseStatus] = useState(null); // null | 'success' | 'error'

    useEffect(() => {
        if (isLoading) {
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        } else {
            document.body.style.overflow = 'auto'; // Enable scrolling
        }
    }, [isLoading]);

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    
        // let errors = { ...formError };
    
        // if (name === 'firstName') {
        //     errors.firstName = value.trim() === '' ? 'First name is required.' : '';
        // }
    
        // if (name === 'lastName') {
        //     errors.lastName = value.trim() === '' ? 'Last name is required.' : '';
        // }
    
        // if (name === 'email') {
        //     errors.email = !validateEmail(value) ? 'The email address format is incorrect.' : '';
        // }
    
        // setFormError(errors);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let errors = {
            firstName: formData.firstName.trim() === '' ? 'First name is required.' : '',
            lastName: formData.lastName.trim() === '' ? 'Last name is required.' : '',
            email: !validateEmail(formData.email) ? 'The email address format is incorrect.' : ''
        };
    
        setFormError(errors);
    
        if (errors.firstName || errors.lastName || errors.email) return;
    
        setIsLoading(true);

        const payload = {
            token: "SzC6prFZdnPmhLHF",
            email: formData.email,
            firstname: formData.firstName,
            lastname: formData.lastName,
            message: formData.message
        };

        try {
            const response = await fetch("https://g8way-app.com/contact/mailsend.php", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });

            const data = await response.json();
            if (response.status === 200) {
                setResponseStatus('success');
            } else {
                setResponseStatus('error');
            }
        } catch (error) {
            console.error("Error sending message:", error);
            setResponseStatus('error');
        } finally {
            setIsLoading(false); // Hide loader after response
        }
    };

    return (
        <>
            {/* Form Section */}
            <div className={`bg-black relative`}>
                {isLoading && (
                    <div className="absolute inset-0 z-50 h-screen w-screen flex justify-center items-center bg-transparent">
                        <Loader className="z-50" />
                    </div>
                )}      
                 <div className={`flex flex-col space-y-3 h-[592px] max-md:w-[91.47vw] max-md:mx-auto font-roboto items-center justify-center relative  ${isLoading ? 'blur-sm' : ''}`}>
                    <Squares
                        squareSize={90}
                        borderColor="#0c1f1f"
                        bgColor='#000'
                        opacity={"opacity-60"}
                        className="absolute inset-0 -z-10"
                    />
                    <p className={`font-bold text-white text-[46px] leading-[46px]   max-md:text-[32px] max-md:leading-[34px] tracking-[2%] mb-3 uppercase text-center ${responseStatus != null ? "max-md:text-center" : "max-md:text-left"}`}>
                        Interested in <span className='text-[#10E0D7]'>collaborating</span> <br /> or <span className='text-[#10E0D7]'>learning more</span>?
                    </p>
                    <p className={`font-normal opacity-90 mb-7 max-md:w-[91.47vw] max-md:mx-auto text-[#f0f0f0] text-[18px] leading-[26px]  max-md:text-[16px] max-md:leading-[24px] tracking-[0] text-center  ${responseStatus != null ? "max-md:text-center" : "max-md:text-left"}`}>
                        Reach out to us through our user-friendly contact form. Our team looks forward to working <span className='max-md:hidden'><br /> </span> with you and creating innovative solutions.
                    </p>
                    <div className="w-[632px] max-md:max-w-[91.47vw] mx-auto">
                        {/* Success Message */}
                        {responseStatus === 'success' ? (
                            <div className="w-[632px] max-md:max-w-[91.47vw] z-50">
                                <div className="w-[632px] max-md:max-w-[91.47vw] z-50">
                                    <FormResponseUI img={"checkmark.svg"} text1={"Thank you! "} text2={"Your message has been sent successfully. Our team will contact you shortly."} />
                                </div>
                                {/* <button onClick={() => setResponseStatus(null)} className="mt-4 px-4 py-2 bg-green-500 text-black rounded">
                                    OK
                                </button> */}
                            </div>
                        ) : responseStatus === 'error' ? (
                            /* Error Message */
                            <div className="w-[632px] max-md:max-w-[91.47vw] z-50">
                                <FormResponseUI img={"cross.svg"} text1={"OOPS!"} text2={"Something went wrong. Please try again later."} />
                            </div>
                        ) : (
                            /* Show Form Only If No Response Yet */
                            <form autoComplete='off' onSubmit={handleSubmit} className="w-[632px] max-md:max-w-[91.47vw]">
                                <div className="flex space-x-5 mb-4 max-md:flex-col max-md:space-x-0 max-md:space-y-3">
                                    <InputField name="firstName" value={formData.firstName} onChange={handleChange} PlaceHolder="First name" error={formError.firstName} />
                                    <InputField name="lastName" value={formData.lastName} onChange={handleChange} PlaceHolder="Last name" error={formError.lastName} />
                                </div>
                                <div className=" flex flex-col space-y-5">
                                    <InputField name="email" value={formData.email} onChange={handleChange} PlaceHolder="Email" error={formError.email} />
                                    <InputField name="message" value={formData.message} onChange={handleChange} PlaceHolder="Message" type="textarea" isTextArea={true} />
                                </div>
                                <button type="submit" className="w-full h-[48px] rounded-full mt-5 text-center text-[#1E1E1E] bg-[#10E0D7] font-bold default-hover:bg-[#7fccc8] transition-all duration-700" disabled={isLoading}>
                                    {isLoading ? 'Submitting...' : 'Submit'}
                                </button>
                            </form>
                        )}
                    </div>

                </div>
                <div className='h-[844px] font-roboto flex items-center justify-center space-x-8 bg-[#050C0C] max-md:flex-col max-md:h-auto'>
                    <div className='w-[632px] h-[684px] max-[1300px]:w-[45vw] relative flex flex-col space-y-3 items-center justify-center rounded-2xl border border-[#86868B33] bg-linear-to-b from-[#FFFFFF0D] to-[#FFFFFF00] max-md:w-[91.47%] max-md:mx-auto max-md:h-fit max-md:py-6 max-md:mt-24'>
                        <p className="font-bold text-white text-[35px] w-[552px] max-lg:max-w-[100%] max-lg:scale-95 text-left leading-[35px] tracking-[2%] max-md:text-[27px] max-md:leading-[32px] max-md:tracking-[2%] mb-3 uppercase max-[1300px]:scale-75">
                            <span className='text-[#10E0D7] '> Discover </span>  seamless <br /> airport navigation <span className='text-[#10E0D7]'> today </span>
                        </p>
                        <p className={`font-normal w-[552px] max-lg:max-w-[100%] max-lg:scale-95 text-left opacity-90 mb-7 text-[#f0f0f0] text-[18px] leading-[26px] tracking-[0] max-[1300px]:scale-75 max-md:text-[16px] max-md:leading-[24px] max-md:tracking-[0]`}>
                            Ready to enhance your travel experience? Download the G8WAY app now and explore effortless airport navigation, real-time flight updates, and personalized recommendations. Your journey just got smarter.
                        </p>
                        <div className='w-[552px] mt-7 max-[1300px]:scale-75 max-lg:max-w-[100%] max-lg:scale-95'>
                            <DownloadTheApp className={"max-sm:!w-[91.47vw] max-sm:!h-[56px] max-md:!font-roboto max-md:!font-medium"} />
                        </div>
                        <div className='absolute bottom-5 right-8 max-[1300px]:scale-75 max-md:hidden max-lg:bottom-1 max-lg:right-1'>
                            <img src="QrcodeG8.svg" alt="" />
                        </div>
                    </div>
                    <div className='w-[632px] overflow-hidden h-[684px] max-md:h-fit max-[1300px]:w-[45vw] rounded-2xl border border-[#86868B33] bg-linear-to-b from-[#FFFFFF0D] to-[#FFFFFF00] max-md:w-[91.47vw] max-md:overflow-hidden max-md:my-6'>
                        <img className='ml-16 max-md:ml-5 mt-5 max-[1300px]:scale-75 max-md:scale-100 min-[1301px]:w-[474px]  min-[1301px]:h-[662px]' src="g8mobileinhand.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Collaboration;


function InputField({ PlaceHolder, name, value, onChange, error, isTextArea }) {
    return (
        <div className="w-full">
            <div className="relative w-full font-roboto text-white font-normal text-[16px] max-md:text-[14px] leading-[24px] tracking-[0%] text-center">
                {isTextArea ? (
                    <textarea
                        id={PlaceHolder}
                        name={name}
                        autoComplete='off'
                        value={value}
                        onChange={onChange}
                        placeholder=" "
                        className={`peer w-full h-[100px] bg-transparent placeholder:text-[#fff] 
                            border ${error ? "border-[#F44336]" : "border-[#FFFFFF1A]"} 
                            text-[#fff] rounded-md px-3 py-4 transition duration-300 ease 
                            focus:outline-none focus:border-[#FFFFFF1A] hover:border-[#FFFFFF1A] shadow-sm focus:shadow resize-none`}
                    />
                ) : (
                    <input
                        id={PlaceHolder}
                        name={name}
                        autoComplete="off"
                        value={value}
                        onChange={onChange}
                        placeholder=" "
                        className={`peer w-full h-[48px] bg-transparent placeholder:text-[#fff] 
                            border ${error ? "border-[#F44336] focus:border-[#F44336]" : "border-[#FFFFFF1A] focus:border-[#FFFFFF1A]"} 
                            text-[#fff] rounded-md px-3 py-2 transition duration-300 ease 
                            focus:outline-none  hover:border-[#FFFFFF1A] shadow-sm focus:shadow`}
                    />
                )}
                <label
                    htmlFor={PlaceHolder}
                    className={`absolute opacity-90 cursor-text px-1 left-2.5 top-4 transition-all transform origin-left 
                    ${isTextArea ? 'peer-placeholder-shown:top-2' : 'peer-placeholder-shown:top-3'} 
                    peer-placeholder-shown:scale-100
                    peer-focus:top-0.5 
                    peer-focus:left-2.5 
                    peer-focus:text-xs 
                    peer-focus:scale-90
                    peer-not-placeholder-shown:top-0.5 
                    peer-not-placeholder-shown:left-2.5 
                    peer-not-placeholder-shown:text-xs 
                    peer-not-placeholder-shown:scale-90`}>
                    {PlaceHolder}
                </label>
            </div>
            {error && <p className="text-[#F44336] font-normal text-xs mt-1 ml-3">{error}</p>}
        </div>
    );
}



const FormResponseUI = ({ img, text1, text2 }) => {
    return (
        <div className='w-[632px] h-[240px] response-shadow text-[#F0F0F0] rounded-2xl p-4 flex flex-col items-center justify-center gap-6 max-md:w-[343px] max-md:h-[158px] max-md:rounded-[12px] '>
            <img className='w-10 h-10 max-md:w-[33.33px] max-md:h-[33.33px]' src={img} alt="" />
            <div className='w-[600px] h-[87px] gap-2 max-md:w-[311px] max-md:h-[84px]'>
                <p className='font-roboto font-bold text-[35px] leading-[35px] tracking-[2%] max-md:text-[28px] max-md:leading-[32px] text-center uppercase'>{text1}</p>
                <p className='font-roboto font-normal text-[16px] leading-[24px] max-md:text-[14px] max-md:leading-[22px] tracking-[0%] text-center '>{text2}</p>
            </div>
        </div>
    );
};
