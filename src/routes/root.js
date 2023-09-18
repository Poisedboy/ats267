import { createBrowserRouter } from "react-router-dom";
import ArtCenter from '../components/ArtCenter/ArtCenter';
import HumanCenter from '../components/HumanCenter';
import Shelter from '../components/Shelter';
import Team from '../components/Team';
import Supporting from '../components/Supporting';
import AboutUs from '../components/AboutUs/AboutUs';
import Contacts from "../components/Contacts";
import Media from "../components/Media";
import Projects from "../components/Projects";
import CustomModal from "../components/buttons/CustomModal/CustomModal";
import Blog from '../components/Blog/Blog';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AboutUs />
  },
  {
    path: 'art-center',
    element: <ArtCenter />
  },
  {
    path: 'blog',
    element: <Blog />
  },
  {
    path: 'humanitarian-center',
    element: <HumanCenter />
  },
  {
    path: 'shelter',
    element: <Shelter />
  },
  {
    path: 'team',
    element: <Team />
  },
  {
    path: 'media',
    element: <Media />
  },
  {
    path: 'projects',
    element: <Projects />
  },
  {
    path: 'support',
    element: <Supporting />
  },
  {
    path: 'contacts',
    element: <Contacts />
  },
  {
    path: 'support-modal',
    element: <CustomModal />
  }
]);

// export default function Root() {
//   return (
//     <Routes>
//       <Route path='/' element={<AboutUs />}>About Us</Route>
//       <Route path='art-center' element={<ArtCenter />}>Art Center</Route>
//       <Route path='blog' element={<Blog />}>Blog</Route>
//       <Route path='humanitarian-center' element={<HumanCenter />}>Humanitarian Center</Route>
//       <Route path='shelter' element={<Shelter />}>Shelter For Refugees</Route>
//       <Route path='team' element={<Team />}>Our Team</Route>
//       <Route path='media' element={<Media />}>Media</Route>
//       <Route path='projects' element={<Projects />}>Projects</Route>
//       <Route path='support' element={<div style={{ marginTop: '90px' }}><Supporting /></div>}>Support Us</Route>
//       <Route path='contacts' element={<Contacts />}>Contacts</Route>
//       <Route path='support-modal' element={<CustomModal />}></Route>
//     </Routes>
//   );
// };
