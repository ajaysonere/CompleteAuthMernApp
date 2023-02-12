// import { Link } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
// import { useFormik } from 'formik';
// import avatar from '../assets/profile.png';

import styles from "../styles/username.module.css";

export function Recovery() {

    return (
        <div className="container mx-auto ">
            <Toaster position="top-center" reverseOrder={false}></Toaster>

            <div className="flex justify-center items-center h-screen">

                <div className={styles.glass} id={styles.recovery}>
                    <div className="title flex flex-col
                     items-center ">
                        <h4 className="text-5xl font-bold "> Recovery </h4>
                        <span className="py-4 text-xl w-2/3 text-center text-gray-5" >Enter OTP to recovery password </span>
                    </div>

                    <form className="pt-20">
                        
                        <div className="textbook flex flex-col items-center gap-6">
                            <div className="input     text-center ">
                                <span className="py-4 text-sm text-left text-gray-500">
                                    Enter 6 digit OTP sent to your email address
                                </span>
                                <input className={styles.textbox} type="password" placeholder="OTP">
                                </input>
                            </div>
                            <button className={styles.btn} type="submit"> Sign In  </button>
                        </div>

                        <div className="text-center py-4">

                            <span className="text-gray-500"> Can't Get OTP ? 
                                <button className="text-red-500" > Resend</button>
                            </span>

                        </div>

                    </form>
                </div>

            </div>
        </div>
    );
}