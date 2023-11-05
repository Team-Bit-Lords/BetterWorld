import React from "react";
import profile from '../assets/profile.jpg'

const Profile = () => {
  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center" >
        <div className="flex flex-col max-w-md p-6 border border-gray-400 dark:bg-gray-900 dark:text-gray-100">
          <img
            src={profile}
            alt=""
            className="flex-shrink-0 object-cover h-64 rounded-xl sm:h-96 dark:bg-gray-500 aspect-square"
          />
          <div>
            <h2 className="text-xl font-bold">Change is us</h2>
            {/* <span className="block pb-2 text-sm dark:text-gray-400">
              Student
            </span> */}
            <p>
              <p className="font-semibold inline-block">Email:</p> org@gmail.com
            </p>
            <p className="font-semibold">
              Non Profit Organization
            </p>
            <p>
              <p className="font-semibold inline-block">NGO Number:</p> ABCD123456
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
