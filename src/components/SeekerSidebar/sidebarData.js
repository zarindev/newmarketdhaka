import seekerServicesIcon from '../../images/seeker-services.png';
import seekerProfileIcon from '../../images/seeker-profile.png';
import seekerApprovalIcon from '../../images/seeker-approval.png';

export const sidebarData = [
  {
    id: 1,
    label: 'My Services',
    icon: seekerServicesIcon,
    link: '/service_dashboard',
  },
  { id: 2, label: 'Profile', icon: seekerProfileIcon, link: '/profile' },
  { id: 3, icon: seekerApprovalIcon, label: 'Approval', link: '/approval' },
];
