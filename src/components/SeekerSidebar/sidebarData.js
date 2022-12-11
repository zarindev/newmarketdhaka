import seekerServicesIcon from "../../images/seeker-services.png";
import seekerProfileIcon from "../../images/seeker-profile.png";
import seekerApprovalIcon from "../../images/seeker-approval.png";
import categoryIcon from "../../images/subfolder 1.png";
import settingsIcon from "../../images/settings 1.png";
import dashboardIcon from "../../images/speedometer 1.png";

export const comData = [
  {
    id: 1,
    label: "My Services",
    icon: seekerServicesIcon,
    link: "/service_dashboard",
  },
  {
    id: 2,
    label: "Manage",
    icon: seekerServicesIcon,
    link: "/manage_services",
  },
  // { id: 3, label: "Profile", icon: seekerProfileIcon, link: "/profile" },
];

export const adminData = [
  {
    id: 1,
    label: "Dashboard",
    icon: dashboardIcon,
    link: "/admin_panel",
  },
  {
    id: 2,
    label: "Approval",
    icon: seekerApprovalIcon,
    link: "/approval",
  },
  {
    id: 3,
    label: "Category creation",
    icon: categoryIcon,
    link: "/category_creation",
  },
  {
    id: 4,
    label: "Settings",
    icon: settingsIcon,
    link: "/settings",
  },
];
