import Dashboard    from '../../components/Pages/Dashboard/Dashboard.jsx';
import Profile      from '../../components/Pages/Profile/Profile.jsx';
import Inbox        from '../../components/Pages/Inbox/inbox.jsx';
import Apps         from '../../components/Pages/Apps/Apps.jsx';
import Projects     from '../../components/Pages/Projects/Projects.jsx';
import Settings     from '../../components/Pages/Settings/Settings.jsx';

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
   },
]
