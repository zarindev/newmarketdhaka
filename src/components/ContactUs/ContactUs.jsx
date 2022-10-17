import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../styles/plugin.css";
import "./ContactUs.css";
import contactImage from "../../images/contact.png";
import phoneIcon from "../../images/svg/Phone.svg";
import locationIcon from "../../images/svg/location-white.svg";
import emailIcon from "../../images/svg/Email.svg";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "all" });

  const notify = () => {
    toast.success(`Successfully submitted`, {
      progress: undefined,
      toastId: "contact",
    });
  };

  const onSubmit = (data) => {
    console.log(data);
    notify();
    reset();
  };

  return (
    <section aria-label="contact section" className="contact-us">
      <div className="contact-intro">
        <div className="contact-content">
          <h2 className="contact-title">
            Become <br /> Service Provider
          </h2>
          <p className="contact-desc">
            Amet minim mollit non deserunt ullamco est sit <br /> aliqua dolor
            do amet sint. Velit officia consequat <br /> duis enim velit mollit.
            Exercitation veniam <br /> consequat sunt nostrud amet.
          </p>
          <button className="contact-btn">Get started</button>
        </div>
        <div className="contact-image-ctn">
          <img
            src={contactImage}
            alt="contact"
            className="contact-image"
            loading="lazy"
          />
        </div>
      </div>
      <div className="contact-form-ctn">
        <h2 className="contact-form-title">Contact Us</h2>
        <form
          aria-label="contact form"
          className="contact-form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label htmlFor="fullName">
            <input
              id="contact_full_name"
              type="text"
              className="form-input field-control"
              placeholder="Full Name"
              {...register("fullName", { required: "Full name is required" })}
            />
            {errors.fullName && (
              <p className="contact-error-message">
                {errors.fullName?.message}
              </p>
            )}
          </label>
          <label htmlFor="email">
            <input
              id="contact_email"
              type="text"
              className="form-input field-control"
              placeholder="E-mail"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Please enter a valid email",
                },
              })}
            />
            {errors.email && (
              <p className="contact-error-message">{errors.email?.message}</p>
            )}
          </label>
          <label htmlFor="reason">
            <textarea
              id="contact_textarea"
              cols="30"
              rows="10"
              name="reason"
              className="form-textarea field-control"
              placeholder="Reason"
              {...register("reason", { required: "Reason is required" })}
            />
            {errors.reason && (
              <p className="contact-error-message">{errors.reason?.message}</p>
            )}
          </label>
          <button type="submit" className="form-submit-btn">
            Submit
          </button>
        </form>
        <div className="contact-info-ctn">
          <div className="contact-info">
            <img
              src={phoneIcon}
              alt="phone icon"
              className="contact-icon"
              loading="lazy"
            />
            <p className="contact-address">contact@company.com</p>
          </div>
          <div className="contact-info">
            <img
              src={locationIcon}
              alt="location icon"
              className="contact-icon"
              loading="lazy"
            />
            <p className="contact-address">
              794 Mcallister St San Francisco, 94102
            </p>
          </div>
          <div className="contact-info">
            <img
              src={emailIcon}
              alt="email icon"
              className="contact-icon"
              loading="lazy"
            />
            <p className="contact-address">contact@company.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
