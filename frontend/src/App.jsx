/* eslint-disable no-unused-vars */
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CreateCollection from "./pages/CreateCollection";
import Registration from "./pages/Registration";
import Product from "./pages/Product";
import Eventspage from "./pages/Eventspage";
import Blogs from "./pages/Blogs";
import Error from "./pages/Error";
import Generate from "./pages/Generate";
import Test from "./components/common/Test";
import Leaderboard from "./components/Dashboard/Leaderboard";
import Volunteer from "./pages/Volunteer";
import Volform from "./components/Volunteer/Volform";
import Social from "./pages/Social";
import { DashboardContext } from "./components/Dashboard/Dashboard";
import RegisterForEventPage from "./pages/Registerforevent";
import NewDashboard from "./pages/NewDashboard";
import Home from "./pages/Home";
import ImageGenAI from "./dashboardItems/gen/ImageGenAI";


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <LandingPage /> ,
//     errorElement: <Error/> ,
//   },
//   {
//     path: "/nft",
//     element: <CreateCollection />,
//     errorElement: <Error />,
//   },
//   {
//     path: "/blogs",
//     element: <Blogs/> ,
//     errorElement: <Error />,
//   },
//   {
//     path: "/product",
//     element: <Product />,
//     errorElement: <Error />,
//   },
//   {
//     path: "/volunteer",
//     element: <Volunteer/>,
//     errorElement: <Error />,
//   },
//   {
//     path: "/volunteer/form",
//     element: <Volform/>,
//     errorElement: <Error />,
//   },
//   {
//     path: "/social",
//     element: <Social/>,
//     errorElement: <Error />,
//   },
//   {
//     path: "/login",
//     element: <Registration/>,
//     errorElement: <h1>error</h1>,
//   },
//   {
//     path: "/event",
//     element: <Eventspage/>,
//     errorElement: <Error />,
//   },
//   {
//     path: "/regevent",
//     element: <RegisterForEventPage/>,
//     errorElement: <Error />,
//   },
//   // {
//   //   path: "/dashboardd",
//   //   element: <Dashboard/> ,
//   //   errorElement: <Error />,
//   // },
//   {
//     path: "/generate",
//     element: <Generate/> ,
//     errorElement: <Error />,
//   },
//   {
//     path: "/leader",
//     element: <Leaderboard/>,
//     errorElement: <Error />,
//   },
//   {
//     path: "/dashboard",
//     element: <NewDashboard />,
//     children: {
//       index: true,
//       element: <Home />
//     },
//     errorElement: <Error />,
//   }
// ]);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="" element={<LandingPage />} />
        <Route path="nft" element={<CreateCollection />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="product" element={<Product />} />
        <Route path="volunteer" element={<Volunteer />} />
        <Route path="volunteer/form" element={<Volform />} />
        <Route path="social" element={<Social />} />
        <Route path="login" element={<Registration />} />
        <Route path="event" element={<Eventspage />} />
        <Route path="regevent" element={<RegisterForEventPage />} />
        <Route path="dashboard" element={<NewDashboard />}>
          <Route index element={<Home />} />
          <Route path="home"  element={<Home />} />
          <Route path="chatbot" element={<ImageGenAI />} />
          <Route path="leaderboard" element={<Leaderboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
};
export default App;
