import './UserProfile.css';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import saveIcon from '../../images/svg/save.svg';
import emailIcon from '../../images/svg/Email-red.svg';
import binIcon from '../../images/svg/bin-number.svg';
import { useDocTitle } from '../../hooks/useDocTitle';
import { useAuth } from '../../context/AuthProvider';
import TopNav from '../../components/Navbar/TopNav';
import BottomNav from '../../components/Navbar/BottomNav';
import { formatError } from '../../functions/formatString';

const UserProfileEdit = () => {
  useDocTitle();

  const { user, changeEmail, changePassword } = useAuth();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: 'all' });

  const onSubmit = async (data) => {
    try {
      await changeEmail(user, data.email);
      toast.success(`Email updated`, {
        progress: undefined,
        toastId: 'updateUserEmail',
      });
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = formatError(errorCode);
      toast.error(`${errorMessage}`, {
        progress: undefined,
        toastId: 'updateEmailError',
      });
      console.log(errorCode);
    }

    try {
      await changePassword(user, data.password);
      toast.success(`Password updated`, {
        progress: undefined,
        toastId: 'updateUserPassword',
      });
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = formatError(errorCode);
      toast.error(`${errorMessage}`, {
        progress: undefined,
        toastId: 'updatePasswordError',
      });
      console.log(errorCode);
    }
  };

  return (
    <>
      <TopNav />
      <BottomNav />
      <div className="service-dash-ctn profile-ctn edit-ctn">
        <div className="service-dash userProfEdit">
          <div className="edit-items">
            <form className="edit-form" onSubmit={handleSubmit(onSubmit)}>
              <div className="edit-items-title-ctn">
                <div className="profile-styled-divider"></div>
                <p className="profile-title">User Profile</p>
                <button className="profile-edit-ctn">
                  <img
                    src={saveIcon}
                    alt="save"
                    className="profile-edit-icon"
                  />
                  <p className="profile-edit-text">Save</p>
                </button>
              </div>
              <p className="userEditDm">
                Please update both email and password for better security
              </p>
              <div className="edit-form-item">
                <label className="profile-label">
                  <img
                    src={emailIcon}
                    alt="email"
                    className="profile-label-icon"
                  />
                  <p className="profile-label-text">Email</p>
                </label>
                <input
                  type="text"
                  className="edit-form-input"
                  placeholder="Email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: 'Please enter a valid email',
                    },
                  })}
                  defaultValue={user?.email}
                />
                {errors.email && (
                  <p className="error-message">{errors.email?.message}</p>
                )}
              </div>
              <div className="edit-form-item">
                <label className="profile-label">
                  <img
                    src={binIcon}
                    alt="phone"
                    className="profile-label-icon"
                  />
                  <p className="profile-label-text">Password</p>
                </label>
                <input
                  type="text"
                  className="edit-form-input"
                  placeholder="Password"
                  {...register('password', {
                    required: 'Password is required',
                  })}
                  defaultValue={''}
                />
                {errors.password && (
                  <p className="error-message">{errors.password?.message}</p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfileEdit;
