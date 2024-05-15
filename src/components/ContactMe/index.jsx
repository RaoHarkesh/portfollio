import React from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';


const ContactMe = () => {
    const validationSchema = Yup.object().shape({
        name: Yup.string()
          .required('Name is required'),
        email: Yup.string()
          .email('Invalid email address')
          .required('Email is required'),
      });
    return (
        <>
            <Formik
                initialValues={{ email: '', name: '',  message: '' }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
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
                            Submit
                        </button>
                    </form>
                </>)}
            </Formik>
        </>
    )
}

export default ContactMe