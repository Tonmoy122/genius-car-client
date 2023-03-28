import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import loginImg from '../../assets/images/login/login.svg';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth'



const SignUp = () => {

    const { providerLogin, createUser } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();

    const handelGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    const handelSignUp = event => {
        event.preventDefault();
        const from = event.target;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(err => console.error(err));
    }


    return (
        <div className="hero w-full bg-base-200 mb-20 mt-20 pt-10 pb-10">
            <div className="hero-content grid gap-10 md:grid-cols-2 flex-col lg:flex-row">

                <div className=''>
                    <img src={loginImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl py-20 bg-base-100">

                    <h1 className="text-5xl text-center p-2 font-bold">Sign Up now!</h1>

                    <form onSubmit={handelSignUp} className="card-body  pb-0">


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name='Name' type="text" placeholder="Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="text" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="text" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="SignUp" />
                        </div>
                    </form>

                    <div className="form-control items-center mt-6">
                        <button onClick={handelGoogleSignIn} className="mb-2 btn btn-wide">Google SignUp</button>
                    </div>

                    <p className='text-center'>Already Have An Account? <Link className='text-orange-600 font-bold ' to='/login'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;