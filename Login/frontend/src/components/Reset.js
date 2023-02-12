// import { Link } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
// import avatar from '../assets/profile.png';

import styles from "../styles/username.module.css";
import {  resetPasswordValidation } from "../helper/validate";

export function Reset() {

    const formik = useFormik({
        initialValues: {
            password: '',
            confirm_pwd : '',
        },
        validate: resetPasswordValidation,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async values => {
            console.log(values);
        }
    })

    return (
        <div className="container mx-auto ">
            <Toaster position="top-center" reverseOrder={false}></Toaster>

            <div className="flex justify-center items-center h-screen ">

                <div className={styles.glass}>
                    <div className="title flex flex-col
                     items-center  ">
                        <h4 className="text-5xl font-bold "> Reset </h4>
                        <span className="py-4 text-xl w-2/3 text-center text-gray-5" > Enter New Password </span>
                    </div>

                    <form className="py-20" onSubmit={formik.handleSubmit}>     
                        <div className="textbook flex flex-col items-center gap-6">
                            <input {...formik.getFieldProps('password')} className={styles.textbox} type="password" placeholder=" New Password"></input>
                            <input {...formik.getFieldProps('confirm_pwd')} className={styles.textbox} type="password" placeholder="Confirm Password"></input>
                            <button className={styles.btn} type="submit"> Reset </button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
}