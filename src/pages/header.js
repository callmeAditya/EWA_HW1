import React from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../redux/actions/user";
import { useNavigate } from "react-router-dom";

const Header = () => {

	const dispatch = useDispatch();
	const history = useNavigate();

	const handlelogout = ()=>{
		dispatch(userActions.logout());
		history('/')
	}
  return (
    <header>
      <div className="width">
        <h1>
          <a href="/">
            Company<span>Name</span>
          </a>
        </h1>
      </div>
      <nav>
        <div className="width">
          <ul>
            <li className="start selected">
              <a href="/">Home</a>
            </li>
            <li className="">
              <a href="/lighting?maker=all">Lightings</a>
            </li>
            <li>
              <a href="/speaker?maker=all">Speakers</a>
            </li>
            <li>
              <a href="/doorbell?maker=all">Doorbells</a>
            </li>
            <li>
              <a href="/thermostat?maker=all">Thermostats</a>
            </li>
            <li>
              <a href="/doorlock?maker=all">Doorlocks</a>
            </li>
            <li>
              <a href="/cart">Cart</a>
            </li>
			<li><a href="/account">Account</a></li>
          	 	<li><a href="" onClick={handlelogout}>Logout</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
