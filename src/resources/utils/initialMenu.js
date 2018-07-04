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
       component: Dashboard,
       link: "/dashboard"
   },
   {
       label: "Profile",
       path: "/profile/:id",
       component: Profile,
       link: "/profile/" +  localStorage.getItem('uid')
   },
   {
       label: "Inbox",
       path: "/inbox",
       component: Inbox,
       link: "/inbox"
   },
   {
       label: "Apps",
       path: "/apps",
       component: Apps,
       link: "/apps"
   },
   {
       label: "Projects",
       path: "/projects",
       component: Projects,
       link: "/projects"
   },
   {
       label: "Settings",
       path: "/settings",
       component: Settings,
       link: "/settings"
   }
]
