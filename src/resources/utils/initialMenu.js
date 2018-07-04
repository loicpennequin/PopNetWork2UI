import Dashboard         from '../../components/pages/Dashboard/Dashboard.jsx';
import Apps              from '../../components/pages/Apps/Apps.jsx';
import Profile           from '../../components/pages/Profile/Profile.jsx';
import Inbox             from '../../components/pages/Inbox/Inbox.jsx';
import Projects          from '../../components/pages/Projects/Projects.jsx';
import Settings          from '../../components/pages/Settings/Settings.jsx';

export default [
   {
       label: "Dashboard",
       path: "/dashboard",
       component: Dashboard
   },
   {
       label: "Profile",
       path: "/profile",
       component: Profile
   },
   {
       label: "Inbox",
       path: "/inbox",
       component: Inbox
   },
   {
       label: "Apps",
       path: "/apps",
       component: Apps
   },
   {
       label: "Projects",
       path: "/projects",
       component: Projects
   },
   {
       label: "Settings",
       path: "/settings",
       component: Settings
   }
]
