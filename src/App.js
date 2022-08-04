import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import AboutUs from './pages/AboutUS/AboutUs';
import ContactUsPage from './pages/ContactUsPage/ContactUsPage';
import SignUp from './pages/SignUp/SignUp';
import SignUpTwo from './pages/SignUpTwo/SignUpTwo';
import SignIn from './pages/SignIn/SignIn';
import AllServices from './pages/AllServices/AllServices';
import ServiceDetails from './pages/ServiceDetails/ServiceDetails';
import Profile from './pages/Profile/Profile';
import ProfileEdit from './pages/ProfileEdit/ProfileEdit';
import Register from './pages/Register/Register';
import RegisterFormOne from './pages/Register/RegisterFormOne';
import RegisterFormTwo from './pages/Register/RegisterFormTwo';
import RegisterFormThree from './pages/Register/RegisterFormThree';
import RegisterFormFour from './pages/Register/RegisterFormFour';
import RegisterFormSucess from './pages/Register/RegisterFormSucess';
import RegisterFormOneIndie from './pages/Register/RegisterFormOneIndie';
import RegisterFormTwoIndie from './pages/Register/RegisterFormTwoIndie';
import RegisterFormThreeIndie from './pages/Register/RegisterFormThreeIndie';
import RegisterFormFourIndie from './pages/Register/RegisterFormFourIndie';
import RegisterFormSucessIndie from './pages/Register/RegisterFormSucessIndie';
import MoreServices from './pages/MoreServices/MoreServices';
import SameServices from './pages/SameServices/SameServices';
import Error from './pages/404/Error';
import ServiceDashboard from './pages/ServiceDashboard/ServiceDashboard';
import UploadService from './pages/UploadService/UploadService';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/about_us" element={<AboutUs />} />
      <Route path="/contact_us" element={<ContactUsPage />} />
      <Route path="/sign_up_step_two" element={<SignUpTwo />} />
      <Route path="/sign_up" element={<SignUp />} />
      <Route path="/sign_in" element={<SignIn />} />
      <Route path="/register" element={<Register />} />
      <Route path="/register/company/step1" element={<RegisterFormOne />} />
      <Route path="/register/company/step2" element={<RegisterFormTwo />} />
      <Route path="/register/company/step3" element={<RegisterFormThree />} />
      <Route path="/register/company/step4" element={<RegisterFormFour />} />
      <Route
        path="/register/company/success"
        element={<RegisterFormSucess />}
      />
      <Route
        path="/register/individual/step1"
        element={<RegisterFormOneIndie />}
      />
      <Route
        path="/register/individual/step2"
        element={<RegisterFormTwoIndie />}
      />
      <Route
        path="/register/individual/step3"
        element={<RegisterFormThreeIndie />}
      />
      <Route
        path="/register/individual/step4"
        element={<RegisterFormFourIndie />}
      />
      <Route
        path="/register/individual/success"
        element={<RegisterFormSucessIndie />}
      />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/edit_profile" element={<ProfileEdit />} />
      <Route path="/all_services" element={<AllServices />} />
      <Route path="/:service_type/:title" element={<ServiceDetails />} />
      <Route path="/:service_type" element={<SameServices />} />
      <Route path="/more_services" element={<MoreServices />} />
      <Route path="/more_services/all_services" element={<AllServices />} />
      <Route path="/service_dashboard" element={<ServiceDashboard />} />
      <Route
        path="/service_dashboard/upload_service"
        element={<UploadService />}
      />
      <Route path="*" element={<Error />}></Route>
    </Routes>
  );
};

export default App;
