import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useStateMachine } from 'little-state-machine';
import updateAction from './elements/updateAction';
import { toast } from 'react-toastify';
import sign from '../../images/sign.png';
import brandLogo from '../../images/brand-logo.png';
import brandLogoDesk from '../../images/brand-logo-transparent.png';
import { useFetch } from '../../hooks/useFetch';
import { useAuth } from '../../context/AuthProvider';
import { useDocTitle } from '../../hooks/useDocTitle';

const SignUpTwo = () => {
  useDocTitle();
  const navigate = useNavigate();

  const userPost = `http://mdadmin-001-site2.ftempurl.com/api/Values/GetUser?usrMail=fahad@gmail.com&usrpass=fahad`;

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'all',
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      phoneNumber: '',
    },
  });
  const { actions, state } = useStateMachine({ updateAction });

  // signup via email and password
  const { createUser } = useAuth();

  const onSubmit = async (data) => {
    actions.updateAction(data);
    try {
      await createUser(state.email, state.password);
      reset();
      navigate('/');
      toast.success(`Successfully singed up`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sign-up-page">
      <div className="left-side">
        <img src={sign} alt="cover" className="sign-up-img" />
        <img
          src={brandLogoDesk}
          alt="new-market-dhaka logo"
          className="sign-up-logo"
        />
        <img
          src={brandLogo}
          alt="new-market-dhaka logo"
          className="sign-up-logo sign-up-logo-mobile"
        />
      </div>
      <div className="right-side right-side-step2">
        <h2 className="sign-up-title">Sign Up</h2>
        <div>
          <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
            <label className="field-text">Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              className="field-style"
              placeholder="Phone Number"
              {...register('phoneNumber', {
                required: 'Phone Number is required',
              })}
            />
            {errors.phoneNumber && (
              <p className="error-message">{errors.phoneNumber?.message}</p>
            )}
            <button className="sign-up-btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpTwo;
