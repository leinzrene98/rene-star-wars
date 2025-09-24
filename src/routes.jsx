import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { StarWarsLandingPage } from "./pages/StarWarsLandingPage";
import { PeopleProfilePage } from "./pages/PeopleProfilePage";
import { PlanetProfilePage } from "./pages/PlanetProfilePage";
import { VehicleProfilePage } from "./pages/VehicleProfilePage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>}>
      <Route path="/" element={<StarWarsLandingPage />} />
      <Route path="/profile-page/people/:uid" element={<PeopleProfilePage />} />
      <Route path="/profile-page/planets/:uid" element={<PlanetProfilePage />} />
      <Route path="/profile-page/vehicles/:uid" element={<VehicleProfilePage />} />
    </Route>
  )
);
