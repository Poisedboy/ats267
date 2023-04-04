import { Route, Routes } from "react-router-dom";
import ArtCenter from '../components/ArtCenter';
import HumanCenter from '../components/HumanCenter';
import Shelter from '../components/Shelter';
import Team from '../components/Team';
import Blog from '../components/Blog';
import Supporting from '../components/Supporting';
import AboutUs from '../components/AboutUs';
import Contacts from "../components/Contacts";
import Media from "../components/Media";
import Projects from "../components/Projects";

export default function Root() {
    return (
      <Routes>
        <Route path='/' element={<AboutUs />}>About Us</Route>
        <Route path='art-center' element={<ArtCenter />}>Art Center</Route>
        <Route path='humanitarian-center' element={<HumanCenter />}>Humanitarian Center</Route>
        <Route path='shelter' element={<Shelter />}>Shelter For Refugees</Route>
        <Route path='team' element={<Team />}>Our Team</Route>
        <Route path='media' element={<Media />}>Media</Route>
        <Route path='blog' element={<Blog />}>Blog</Route>
        <Route path='projects' element={<Projects />}>Projects</Route>
        <Route path='support' element={<Supporting />}>Support Us</Route>
        <Route path='contacts' element={<Contacts />}>Contacts</Route>
      </Routes>
    );
};
  