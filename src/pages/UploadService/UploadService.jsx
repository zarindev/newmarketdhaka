import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import SeekerSidebar from "../../components/SeekerSidebar/SeekerSidebar";
import "./UploadService.css";
import supportIcon from "../../images/svg/customer-support.svg";
import categoryIcon from "../../images/svg/category.svg";
import clockIcon from "../../images/svg/clock-red.svg";
import calendarIcon from "../../images/svg/calendar.svg";
import locationIcon from "../../images/svg/Location-red.svg";
import viewDetailsIcon from "../../images/svg/view-details.svg";
import imageIcon from "../../images/svg/image-el.svg";
import uploadPlaceholderUp from "../../images/upload-placeholder-up.png";
import RegisterUpload from "../Register/elements/RegisterUpload";
import {
  categoryTags,
  closingDays,
  dragAndDrops,
  locations,
} from "./uploadData";
import { useDocTitle } from "../../hooks/useDocTitle";
import { useFind } from "../../hooks/useFind";
import { useFilter } from "../../hooks/useFilter";
import FixedSelect from "../../components/Select/FixedSelect";
import CreatableSelect from "../../components/Select/CreatableSelect";

const UploadService = () => {
  useDocTitle();

  const navigate = useNavigate();

  const { register, control, setValue, handleSubmit } = useForm();

  // post service
  const { activeCom } = useFind();
  const activeComId = activeCom.id;
  console.log(activeComId);

  const { serRefetch } = useFilter("companyInfoId", activeComId);
  const serPost = process.env.REACT_APP_SER_POST_API_KEY;

  const onSubmit = async (data) => {
    console.log(data);

    const formData = new FormData();
    formData.append("id", 0);
    formData.append("CompanyInfoId", activeComId);
    formData.append("ImgFile", [
      data.serImg1,
      data.serImg2,
      data.serImg3,
      data.serImg4,
    ]);
    formData.append("title", data.title);
    formData.append("time", "");
    formData.append("location", data.location.value);
    formData.append("serviceClose", data.serviceClose.value);
    formData.append("serviceOpen", data.serviceOpen);
    formData.append("serviceDetails", data.serviceDetails);
    formData.append("serType", data.serType.value);
    formData.append("offeredServices", data.offeredServices);
    formData.append("active", false);
    formData.append("status", false);
    formData.append("extraServices", data.extraServices);
    formData.append("whyUs", data.whyUs);
    formData.append("serImg1", "");
    formData.append("serImg2", "");
    formData.append("serImg3", "");
    formData.append("serImg4", "");
    console.log(data);

    for (const [key, value] of formData.entries()) {
      console.log(key, value);
    }

    const res = await fetch(serPost, {
      method: "POST",
      body: formData,
    });

    const resData = await res.json();
    console.log(resData);

    resData === true
      ? toast.success("Successfully uploaded", {
          progress: undefined,
          toastId: "upSerSuccess",
        })
      : toast.error("Upload failed", {
          progress: undefined,
          toastId: "upSerError",
        });
    resData === true && serRefetch();
    resData === true && navigate("/service_dashboard");
  };

  return (
    <div className="service-dash-ctn">
      <SeekerSidebar />
      <div className="service-dash">
        <div className="upload-ser-heading">
          <h4 className="upload-ser-title">Get Started Setting Up Services</h4>
          <p className="upload-ser-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor
            aliquam arcu tincidunt eros quis ut tristique iaculis consectetur.{" "}
          </p>
        </div>
        <form
          aria-label="service-upload form"
          className="upload-ser-form-ctn"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="upload-ser-form">
            <div className="upload-ser-left">
              <div className="upload-ser-input-ctn">
                <label htmlFor="serviceName" className="upload-ser-label-ctn">
                  <img
                    src={supportIcon}
                    alt="label icon"
                    className="upload-ser-label-icon"
                  />
                  <p className="upload-ser-label-title">
                    Service Name{" "}
                    <span className="uploadSerInputLabelAsterisk">*</span>
                  </p>
                </label>
                <input
                  id="upload_service_name"
                  type="text"
                  className="register-form-input"
                  placeholder="Service Name"
                  {...register("title", {
                    required: true,
                  })}
                />
              </div>
              <div className="upload-ser-input-ctn">
                <label htmlFor="serType" className="upload-ser-label-ctn">
                  <img
                    src={categoryIcon}
                    alt="label icon"
                    className="upload-ser-label-icon"
                  />
                  <p className="upload-ser-label-title">
                    Category{" "}
                    <span className="uploadSerInputLabelAsterisk">*</span>
                  </p>
                </label>
                <CreatableSelect
                  id="upload_service_category"
                  name="serType"
                  control={control}
                  items={categoryTags}
                  isMulti={false}
                  placeholder={
                    <p className="upload-ser-tag-placeholder">
                      Select category
                    </p>
                  }
                  isRequired={true}
                />
              </div>
              <div className="upload-ser-input-ctn">
                <label htmlFor="serOpen" className="upload-ser-label-ctn">
                  <img
                    src={clockIcon}
                    alt="label icon"
                    className="upload-ser-label-icon"
                  />
                  <p className="upload-ser-label-title">Opening Time</p>
                </label>
                <input
                  id="upload_service_opening_time"
                  type="time"
                  className="register-form-input"
                  placeholder="Select opening time"
                  {...register("serviceOpen", {
                    required: false,
                  })}
                />
              </div>
              <div className="upload-ser-input-ctn">
                <label htmlFor="close" className="upload-ser-label-ctn">
                  <img
                    src={calendarIcon}
                    alt="label icon"
                    className="upload-ser-label-icon"
                  />
                  <p className="upload-ser-label-title">Select Closing Days</p>
                </label>
                <FixedSelect
                  id="upload_service_closing_days"
                  name="serviceClose"
                  control={control}
                  items={closingDays}
                  isMulti={false}
                  placeholder={
                    <p className="upload-ser-tag-placeholder">
                      Select closing days
                    </p>
                  }
                  isRequired={false}
                />
              </div>
              <div className="upload-ser-input-ctn">
                <label htmlFor="serOpen" className="upload-ser-label-ctn">
                  <img
                    src={locationIcon}
                    alt="label icon"
                    className="upload-ser-label-icon"
                  />
                  <p className="upload-ser-label-title">Location</p>
                </label>
                <FixedSelect
                  id="upload_service_location"
                  name="location"
                  control={control}
                  items={locations}
                  isMulti={false}
                  placeholder={
                    <p className="upload-ser-tag-placeholder">
                      Select location
                    </p>
                  }
                  isRequired={false}
                />
              </div>
              <div className="upload-ser-input-ctn">
                <label htmlFor="serDetails" className="upload-ser-label-ctn">
                  <img
                    src={viewDetailsIcon}
                    alt="label icon"
                    className="upload-ser-label-icon"
                  />
                  <p className="upload-ser-label-title">Add Details</p>
                </label>
                <textarea
                  id="upload_service_details"
                  cols="30"
                  rows="10"
                  className="register-form-input upload-ser-textarea"
                  placeholder="Describe your service"
                  {...register("serviceDetails", {
                    required: false,
                  })}
                ></textarea>
              </div>
              <div className="upload-ser-input-ctn">
                <label
                  htmlFor="offeredServices"
                  className="upload-ser-label-ctn"
                >
                  <img
                    src={viewDetailsIcon}
                    alt="label icon"
                    className="upload-ser-label-icon"
                  />
                  <p className="upload-ser-label-title">Add offered services</p>
                </label>
                <textarea
                  id="upload_services_offered"
                  cols="30"
                  rows="10"
                  className="register-form-input upload-ser-textarea"
                  placeholder="Services offered"
                  {...register("offeredServices", {
                    required: false,
                  })}
                ></textarea>
              </div>
              <div className="upload-ser-input-ctn">
                <label htmlFor="extraServices" className="upload-ser-label-ctn">
                  <img
                    src={viewDetailsIcon}
                    alt="label icon"
                    className="upload-ser-label-icon"
                  />
                  <p className="upload-ser-label-title">Add extra services</p>
                </label>
                <textarea
                  id="upload_services_extra"
                  cols="30"
                  rows="10"
                  className="register-form-input upload-ser-textarea"
                  placeholder="Extra services"
                  {...register("extraServices", {
                    required: false,
                  })}
                ></textarea>
              </div>
              <div className="upload-ser-input-ctn">
                <label htmlFor="whyUs" className="upload-ser-label-ctn">
                  <img
                    src={viewDetailsIcon}
                    alt="label icon"
                    className="upload-ser-label-icon"
                  />
                  <p className="upload-ser-label-title">Why choose us</p>
                </label>
                <textarea
                  id="upload_service_reason"
                  cols="30"
                  rows="10"
                  className="register-form-input upload-ser-textarea"
                  placeholder="Why choose us"
                  {...register("whyUs", {
                    required: false,
                  })}
                ></textarea>
              </div>
            </div>
            <div className="upload-ser-right">
              <div className="upload-ser-input-ctn upload-ser-input-ctn-img">
                <label htmlFor="whyUs" className="upload-ser-label-ctn">
                  <img
                    src={imageIcon}
                    alt="label icon"
                    className="upload-ser-label-icon"
                  />
                  <p className="upload-ser-label-title">Upload Service Image</p>
                </label>
                <p className="imageUploadInstruction">
                  Please upload images under 1MB
                </p>
                <div className="upload-ser-img-ctn">
                  {dragAndDrops.map((item) => {
                    const { id } = item;
                    return (
                      <RegisterUpload
                        id={`upload_service_image_${id}`}
                        key={id}
                        isTypeImg={true}
                        uploadPlaceholderImg={uploadPlaceholderUp}
                        changePlaceholderText={true}
                        getFiles={null}
                        setValue={setValue}
                        {...register(`serImg${id}`, {
                          required: false,
                        })}
                        ref={null}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="combo-btn-ctn">
            <button type="submit" className="combo-btn">
              Upload
            </button>
            {/* <button className="combo-btn combo-btn-two">Save as draft</button> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadService;
