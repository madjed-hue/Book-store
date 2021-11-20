import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { theSelectedOption } from "../App";
import requests from "../requests";
import "./SideNav.css";

function BooksSideNav() {
  const selectedOption = useContext(theSelectedOption);

  return (
    <div className="side__nav">
      <div className="content">
        <h2>Categories</h2>
        <div className="categories__list">
          <ul>
            <NavLink activeclassname="active" to="/html">
              <li
                onClick={() => {
                  selectedOption(requests.theHtmlUrl);
                }}
              >
                HTML
              </li>
            </NavLink>
            <NavLink activeclassname="active" to="/css">
              <li
                onClick={() => {
                  selectedOption(requests.theCssUrl);
                }}
              >
                CSS
              </li>
            </NavLink>
            <NavLink activeclassname="active" to="/javascript">
              <li
                onClick={() => {
                  selectedOption(requests.theJavaScriptUrl);
                }}
              >
                JavaScript
              </li>
            </NavLink>
            <NavLink activeclassname="active" to="/bootstrap">
              <li
                onClick={() => {
                  selectedOption(requests.theBootstrapUrl);
                }}
              >
                Bootsrap
              </li>
            </NavLink>
            <NavLink activeclassname="active" to="/jquery">
              <li
                onClick={() => {
                  selectedOption(requests.theJqueryUrl);
                }}
              >
                jQuery
              </li>
            </NavLink>
            <NavLink activeclassname="active" to="/php">
              <li
                onClick={() => {
                  selectedOption(requests.thePhpUrl);
                }}
              >
                PHP
              </li>
            </NavLink>
            <NavLink activeclassname="active" to="/react">
              <li
                onClick={() => {
                  selectedOption(requests.theReactUrl);
                }}
              >
                React
              </li>
            </NavLink>
            <NavLink activeclassname="active" to="/angular">
              <li
                onClick={() => {
                  selectedOption(requests.theAngularUrl);
                }}
              >
                Angular
              </li>
            </NavLink>
            <NavLink activeclassname="active" to="/vuejs">
              <li
                onClick={() => {
                  selectedOption(requests.theVueUrl);
                }}
              >
                Vue.js
              </li>
            </NavLink>
            <NavLink activeclassname="active" to="/databases">
              <li
                onClick={() => {
                  selectedOption(requests.theDatabaseUrl);
                }}
              >
                Database
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BooksSideNav;
