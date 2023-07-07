import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import BuyersHomePage from "./BuyersHomePage";
import { BuyersNavBar } from "./BuyersNavBar";
import { Favorites } from "./Favorites";
import { Profile } from "./Profile";

export const Buyer = ({ user, setUser }) => {
  const [favorites, setFavorites] = useState([]);
  const [property, setProperty] = useState([])

  useEffect(() => {
    fetch("/properties")
    .then((resp) => resp.json())
    .then((data) => {
        setProperty(data)
    });
  }, []);

  useEffect(() => {
    fetch("/favorites")
      .then((resp) => resp.json())
      .then((data) => {
        setFavorites(data);
      });
  }, []);

  return (
    <Router>
      <div>
        <nav>
          <BuyersNavBar user={user} setUser={setUser} />
        </nav>
        <Switch>
          <Route exact path="/buyer/favorites">
            <Favorites favorites={favorites} />
          </Route>
          <Route exact path="/buyer/buyers_profile">
            <Profile user={user} />
          </Route>
          <Route exact path="/buyer/buyers_home">
            <BuyersHomePage property={property} user={user}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
