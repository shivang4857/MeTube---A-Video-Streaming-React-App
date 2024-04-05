import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Sidebar = () => {

  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  if(!isMenuOpen) return null ;
  
  return (
    <div className="col col-span-1 p-4 shadow-md">
      <ul>
        
        <li><Link to={"/"}>home</Link></li>
        <li>shorts</li>
        <li>live</li>
        <li>videos</li>
      </ul>
      <h1 className="font-bold">Subscriptions</h1>
      <ul>
        <li>music</li>
        <li>sports</li>
        <li>gaming</li>
        <li>movies</li>
      </ul>
      <h1 className="font-bold">watch later</h1>
      <ul>
        <li>music</li>
        <li>sports</li>
        <li>gaming</li>
        <li>movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
