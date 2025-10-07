import React, { useRef } from 'react';
import { FaPhoneSquareAlt, FaWhatsappSquare } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { MdEmail } from 'react-icons/md';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';



const Contact = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(import.meta.env.VITE_SERVICE_ID_EMAIL_JS, import.meta.env.VITE_TEMPLATE_ID_EMAIL_JS, form.current, {
                publicKey: import.meta.env.VITE_PUBLIC_KEY_EMAIL_JS,
            })
            .then(
                () => {
                    // console.log('SUCCESS!');
                    toast.success("Email Send Successfully")
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div>
            <div className='mb-16'>
                <h2 className='md:text-4xl text-2xl text-center font-bold heading text-white md:w-[40%] w-[80%] border-2 mx-auto py-4 border-[#0ef] border-dashed uppercase shadow-[0_0_15px_#0ef] rounded-2xl'>
                    Contact Me
                </h2>
            </div>
            <div className='flex flex-wrap md:flex-row flex-col-reverse gap-7 justify-center'>
                <div className={`bg-white/10 p-5 rounded-xl md:w-1/3 transition hover:shadow-[0_0_30px_#fff] shadow-[0_0_20px_#fff] text-center`}>
                    <div className='mb-7'>
                        <h2 className='para-strong-word text-3xl font-semibold'>Contact Form</h2>
                    </div>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className='mb-5'>
                            <label className="block text-left font-medium text-white" htmlFor="name">
                                Name
                            </label>
                            <div className="flex items-center mt-2">
                                <input
                                    type="text"
                                    id="name"
                                    name='name'
                                    required={true}
                                    placeholder="Enter your name...."
                                    className="w-full px-4 py-2 border rounded-lg text-black outline-none bg-white shadow-[0_0_20px_#0ef] focus:shadow-[0_0_30px_#0ef]"
                                />
                            </div>
                        </div>
                        <div className='mb-5'>
                            <label className="block text-left font-medium text-white" htmlFor="email">
                                Email address
                            </label>
                            <div className="flex items-center mt-2">
                                <input
                                    type="email"
                                    id="email"
                                    name='email'
                                    required={true}
                                    placeholder="Enter your email address...."
                                    className="w-full px-4 py-2 border rounded-lg text-black outline-none bg-white shadow-[0_0_20px_#0ef] focus:shadow-[0_0_30px_#0ef]"
                                />
                            </div>
                        </div>
                        <div className='mb-5'>
                            <label className="block text-left font-medium text-white" htmlFor="message">
                                Email address
                            </label>
                            <div className="flex items-center mt-2">
                                <textarea
                                    type="text"
                                    id="message"
                                    name='message'
                                    required={true}
                                    placeholder="Enter Message...."
                                    rows={4}
                                    className="w-full px-4 py-2 border rounded-lg outline-none bg-transparent shadow-[0_0_20px_#0ef] focus:shadow-[0_0_30px_#0ef] bg-white text-black"
                                />
                            </div>
                        </div>
                        <div className='flex justify-center'>
                            <button
                                type="submit"
                                className="px-9 mt-9 py-3 bg-[#0ef] rounded-3xl text-black font-bold
                            shadow-[0_0_5px_#0ef,0_0_25px_#0ef] 
                            hover:shadow-[0_0_5px_cyan,0_0_25px_cyan,0_0_30px_cyan] 
                            transition-all duration-300"
                            >
                                Send Email
                            </button>
                        </div>
                    </form>
                </div>
                <div className={`bg-white/10 p-5 md:w-1/3 rounded-xl transition hover:shadow-[0_0_30px_#2ecc71] shadow-[0_0_20px_#2ecc71] text-center`}>
                    <div className='mb-7'>
                        <h2 className='para-strong-word text-3xl font-semibold'>Contact Information</h2>
                    </div>
                    <div>
                        <h2 className='flex items-center gap-3 text-xl font-semibold para-strong-word-contact-info mb-2 p-3 bg-purple-950 rounded-xl shadow-[0_0_20px_#fff]'><MdEmail size={25} /><span>jaberriyan357@gmail.com</span></h2>
                        <h2 className='flex items-center gap-3 text-xl font-semibold para-strong-word-contact-info mb-2 p-3 bg-purple-950 rounded-xl shadow-[0_0_20px_#fff]'><FaPhoneSquareAlt size={25} /><span>+8801709050934</span></h2>
                        <h2 className='flex items-center gap-3 text-xl font-semibold para-strong-word-contact-info p-3 bg-purple-950 rounded-xl shadow-[0_0_20px_#fff]'><FaWhatsappSquare size={25} /><span>+8801709050934</span></h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;