import { useState, useEffect } from "react";
import "./uploadservice.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import SeekerSidebar from "../../components/SeekerSidebar/SeekerSidebar";
import supportIcon from "../../images/svg/customer-support.svg";
import categoryIcon from "../../images/svg/category.svg";
import uploadPlaceholderUp from "../../images/upload-placeholder-up.png";
import locationIcon from "../../images/svg/Location-red.svg";
import viewDetailsIcon from "../../images/svg/view-details.svg";
import imageIcon from "../../images/svg/image-el.svg";
import RegisterUpload from "../Register/elements/RegisterUpload";
import { dragAndDrops, locations } from "./uploadData";
import { useDocTitle } from "../../hooks/useDocTitle";
import { useFilter } from "../../hooks/useFilter";
import FixedSelect from "../../components/Select/FixedSelect";
import CreatableSelect from "../../components/Select/CreatableSelect";
import { useSerTypeQuery } from "../../hooks/useSerTypeQuery";
import { useAuth } from "../../context/AuthProvider";

const UploadService = () => {
  // libaries functions
  useDocTitle();

  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    control,
    setValue,
    handleSubmit,
  } = useForm();

  // ger serType
  const [serTypes, setSerTypes] = useState([]);
  const { serTypeData } = useSerTypeQuery();

  useEffect(() => {
    serTypeData && setSerTypes(serTypeData);
  }, [serTypeData]);

  // post service
  const { user } = useAuth();
  const userUId = user?.uid;
  const userEmail = user?.email;

  const { serRefetch } = useFilter("userUId", userUId);
  const serPost = process.env.REACT_APP_SER_POST_API_KEY;

  const onSubmit = async (data) => {
    console.log(data);

    const formData = new FormData();
    formData.append("id", 0);
    formData.append("CompanyInfoId", 25);
    formData.append("userUId", userUId);
    formData.append("title", data.title);
    formData.append("time", "");
    formData.append("location", data.location?.value);
    formData.append("serviceClose", "");
    formData.append("serviceOpen", userEmail); //? serviceOpen => creatorEmail
    formData.append("serviceDetails", data.serviceDetails);
    formData.append("serCategoryId", data.serType.id);
    formData.append("serCategoryval", data.serType.value);
    formData.append("serCategory", data.serType);
    formData.append("offeredServices", "");
    formData.append("active", false);
    formData.append("status", false);
    formData.append("extraServices", "");
    formData.append("whyUs", "");
    formData.append("ImgFile", data.serImg1);
    formData.append("ImgFile", data.serImg2);
    formData.append("ImgFile", data.serImg3);
    formData.append("ImgFile", data.serImg4);

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
        <div className="postSerWrapper">
          <div className="upload-ser-heading">
            <h4 className="upload-ser-title">
              Get Started Setting Up Services
            </h4>
            <p className="upload-ser-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor
              aliquam arcu tincidunt eros quis ut tristique iaculis consectetur.{" "}
            </p>
          </div>
          <form
            aria-label="service-upload form"
            className="upload-ser-form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="upload-ser-input-ctn">
              <label htmlFor="serviceName" className="upload-ser-label-ctn">
                <img
                  src={supportIcon}
                  alt="label icon"
                  className="upload-ser-label-icon"
                />
                <p className="upload-ser-label-title">
                  Service Name
                  <span className="uploadSerInputLabelAsterisk">*</span>
                </p>
              </label>
              <input
                id="upload_service_name"
                type="text"
                className="register-form-input"
                placeholder="Service name"
                {...register("title", {
                  required: "Service Name is required",
                })}
              />
              {errors.title && (
                <p className="error-message">{errors.title?.message}</p>
              )}
            </div>
            <div className="upload-ser-input-ctn">
              <label htmlFor="serType" className="upload-ser-label-ctn">
                <img
                  src={categoryIcon}
                  alt="label icon"
                  className="upload-ser-label-icon"
                />
                <p className="upload-ser-label-title">
                  Category
                  <span className="uploadSerInputLabelAsterisk">*</span>
                </p>
              </label>
              <CreatableSelect
                id="upload_service_category"
                name="serType"
                control={control}
                items={serTypes}
                isMulti={false}
                placeholder={
                  <p className="upload-ser-tag-placeholder">
                    Select or Create category
                  </p>
                }
                isRequired={true}
              />
              {errors.serType && (
                <p className="error-message">Service Category is required</p>
              )}
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
                  <p className="upload-ser-tag-placeholder">Select location</p>
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
                <p className="upload-ser-label-title">Service Details</p>
              </label>
              <textarea
                id="upload_service_details"
                cols="30"
                rows="5"
                className="register-form-input upload-ser-textarea"
                placeholder="Describe your service"
                {...register("serviceDetails", {
                  required: false,
                })}
              ></textarea>
            </div>
            <div className="upload-ser-input-ctn upload-ser-input-ctn-img">
              <label htmlFor="whyUs" className="upload-ser-label-ctn">
                <img
                  src={imageIcon}
                  alt="label icon"
                  className="upload-ser-label-icon"
                />
                <p className="upload-ser-label-title">Service Images</p>
              </label>
              <p className="imageUploadInstruction">
                Please upload images under 1MB
              </p>
              <div className="upload-ser-img-ctn">
                {dragAndDrops.map((item) => (
                  <RegisterUpload
                    id={`upload_service_image_${item.id}`}
                    key={item.id}
                    isTypeImg={true}
                    uploadPlaceholderImg={uploadPlaceholderUp}
                    changePlaceholderText={true}
                    getFiles={null}
                    setValue={setValue}
                    {...register(`serImg${item.id}`, {
                      required: false,
                    })}
                    ref={null}
                  />
                ))}
              </div>
            </div>
            <button type="submit" className="postSerButton">
              Post Service
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UploadService;
