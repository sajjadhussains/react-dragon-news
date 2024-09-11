import React from "react";
import { FaGoogle } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import qZone1 from "../../assets/qZone1.png";
import qZone2 from "../../assets/qZone2.png";
import qZone3 from "../../assets/qZone3.png";

const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 space-y-3 mb-6">
        <h1 className="text-3xl font-bold">Login With</h1>
        <button className="btn btn-outline w-full">
          <FaGoogle />
          Login With Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub />
          Login With Github
        </button>
      </div>
      <div className="p-4 space-y-3 mb-6">
        <h1 className="text-3xl font-bold mb-3">Find Us</h1>
        <a
          className="p-4 flex items-center text-lg border rounded-t-lg"
          href=""
        >
          <FaFacebook />
          <span className="ml-3">Facebook</span>
        </a>
        <a
          className="p-4 flex items-center text-lg border rounded-t-lg"
          href=""
        >
          <FaTwitter />
          <span className="ml-3">Twitter</span>
        </a>
        <a
          className="p-4 flex items-center text-lg border rounded-t-lg"
          href=""
        >
          <FaInstagram />
          <span className="ml-3">Instagram</span>
        </a>
      </div>

      <div className="p-4 space-y-3 mb-6">
        <h1 className="text-3xl font-bold">Q-Zone</h1>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
