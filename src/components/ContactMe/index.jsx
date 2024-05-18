import React, { useEffect } from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PropagateLoader, PulseLoader } from 'react-spinners';


const ContactMe = () => {
    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required('Name is required'),
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
    });
    const sendMailData = async (values) => {
        try {
            const response = await fetch('https://protfolio-backend.netlify.app/.netlify/functions/server/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message);
            }
            const data = await response.json()
            toast.success(data.message);
        }
        catch (error) {
            toast.error(error.message)
        }
    }

    return (
        <>
            <Formik
                initialValues={{ email: '', name: '',phone: '',  message: '' }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    setSubmitting(true)
                    sendMailData({ values }).then(() => {
                        setSubmitting(false)
                        resetForm()
                    })
                    // setTimeout(() => {
                    //     alert(JSON.stringify(values, null, 2));
                    //     setSubmitting(false);
                    // }, 400);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <>
                        {isSubmitting && <div className='fixed top-[50%] left-[50%]'>
                            <PropagateLoader color="#36d7b7" />
                        </div>}
                        <ToastContainer />
                        <h3 className='text-center py-[40px] text-[22px] text-[#04c2c9]'>Have a question or want to work together?</h3>
                        <form onSubmit={handleSubmit} className='flex text-[18px] flex-col gap-1 xl:w-[600px]'>
                            <input
                                type="text"
                                placeholder='Name'
                                name="name"
                                className="bg-[#1e242c] p-[10px] outline-none text-white"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                            />
                            <span className='text-red-500'>{errors.name && touched.name && errors.name}</span>
                            <input
                                type="email"
                                placeholder='Enter Email'
                                name="email"
                                className="bg-[#1e242c] p-[10px] outline-none text-white"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            <span className='text-red-500'>{errors.email && touched.email && errors.email}</span>

                            <input
                                type="tel"
                                placeholder='Enter Phone ( optional )'
                                name="phone"
                                className="bg-[#1e242c] p-[10px] outline-none text-white"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.phone}
                            />
                            <textarea
                                type="text"
                                placeholder='Your Message'
                                name="message"
                                className="min-h-[200px] bg-[#1e242c] p-[10px] outline-none text-white"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.message}
                            />
                            <button type="submit" className='mx-auto hover:bg-[#04c2c9] transition-all duration-300 mt-[20px] outline-none py-[10px] px-[50px] text-white text-[22px] border-[2px] border-white hover:border-[#04c2c9] w-fit' disabled={isSubmitting}>
                                {!isSubmitting ? <>Submit</> : <PulseLoader color="#36d7b7" />}
                            </button>
                        </form>
                    </>)}
            </Formik>
        </>
    )
}

export default ContactMe