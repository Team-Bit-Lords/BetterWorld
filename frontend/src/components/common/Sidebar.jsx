import React, { useContext } from "react";
import { DashboardContext } from "../../pages/NewDashboard";
import marketImg from "../../assets/market.svg";
import logoImg from "../../assets/logo.png";
import volunteerImg from "../../assets/volunteer.svg";
import generateImg from "../../assets/generate.svg";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { stateContext, handleSelect } = useContext(DashboardContext);

  return (
    <aside className="fixed w-72 inset-0 my-4 ml-4 h-[calc(100vh - 32px)] rounded-xl bg-neutral">
      <div className="border-b border-white/20">
        <a className="flex items-center py-6 px-8 gap-4">
          <img
            className="relative inline-block object-contain object-center w-9 h-9"
            src={logoImg}
          />
          <h6 className="block antialiased tracking-normal font-sans text-base font-bold leading-relaxed text-base-100">
            Better World
          </h6>
        </a>
      </div>

      <div className="m-4 relative h-5/6">
        <ul className="mb-4 flex flex-col gap-1">
          <li>
            <a aria-current="page" href="home">
              <button
                className={
                  "font-bold transition-all text-xs py-3 rounded-lg text-base-100  active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize " +
                  `${
                    stateContext.selected == 0
                      ? "bg-primary"
                      : "hover:bg-white/10"
                  }`
                }
                type="button"
                onClick={() => handleSelect(0)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-5 h-5 text-inherit"
                >
                  <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"></path>
                  <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"></path>
                </svg>
                <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                  dashboard
                </p>
              </button>
            </a>
          </li>
          <li>
            <Link className="" to="leaderboard">
              <button
                className={
                  "font-bold transition-all text-xs py-3 rounded-lg text-base-100 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize " +
                  `${
                    stateContext.selected == 1
                      ? "bg-primary"
                      : "hover:bg-white/10"
                  }`
                }
                type="button"
                onClick={() => handleSelect(1)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-5 h-5 text-inherit"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                  Leaderboard
                </p>
              </button>
            </Link>
          </li>
          <li>
            <Link to="chatbot">
              <button
                className={
                  "font-bold transition-all text-xs py-3 rounded-lg text-base-100 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize " +
                  `${
                    stateContext.selected == 2
                      ? "bg-primary"
                      : "hover:bg-white/10"
                  }`
                }
                type="button"
                onClick={() => handleSelect(2)}
              >
                <img className="w-[22px]" src={generateImg} />
                <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                  Generate NFT
                </p>
              </button>
            </Link>
          </li>
          <li>
            <a className="" href="/nft">
              <button
                className={
                  "font-bold transition-all text-xs py-3 rounded-lg text-base-100 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize " +
                  `${
                    stateContext.selected == 3
                      ? "bg-primary focus:bg-primary"
                      : "hover:bg-white/10"
                  }`
                }
                type="button"
                onClick={() => handleSelect(3)}
              >
                <img className="w-[19px]" src={marketImg} />
                <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                  Mint a Nft
                </p>
              </button>
            </a>
          </li>
          <li>
            <a className="" href="/product">
              <button
                className={
                  "font-bold transition-all text-xs py-3 rounded-lg text-base-100 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize " +
                  `${
                    stateContext.selected == 4
                      ? "bg-primary focus:bg-primary"
                      : "hover:bg-white/10"
                  }`
                }
                type="button"
                onClick={() => handleSelect(4)}
              >
                <img className="w-[19px]" src={marketImg} />
                <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                  Store
                </p>
              </button>
            </a>
          </li>
          <li>
            <a className="" href="/blogs">
              <button
                className={
                  "font-bold transition-all text-xs py-3 rounded-lg text-base-100 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize " +
                  `${
                    stateContext.selected == 5
                      ? "bg-primary focus:bg-primary"
                      : "hover:bg-white/10"
                  }`
                }
                type="button"
                onClick={() => handleSelect(5)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-5 h-5 text-inherit"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 18.375V5.625zM21 9.375A.375.375 0 0020.625 9h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zM10.875 18.75a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5zM3.375 15h7.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375zm0-3.75h7.5a.375.375 0 00.375-.375v-1.5A.375.375 0 0010.875 9h-7.5A.375.375 0 003 9.375v1.5c0 .207.168.375.375.375z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                  Blogs
                </p>
              </button>
            </a>
          </li>
          <li>
            <a className="" href="/event">
              <button
                className={
                  "font-bold transition-all text-xs py-3 rounded-lg text-base-100 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize " +
                  `${
                    stateContext.selected == 6
                      ? "bg-primary"
                      : "hover:bg-white/10"
                  }`
                }
                type="button"
                onClick={() => handleSelect(6)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-5 h-5 text-inherit"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                  Events
                </p>
              </button>
            </a>
          </li>
          <li>
            <a className="" href="/volunteer">
              <button
                className={
                  "font-bold transition-all text-xs py-3 rounded-lg text-base-100 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize " +
                  `${
                    stateContext.selected == 7
                      ? "bg-primary"
                      : "hover:bg-white/10"
                  }`
                }
                type="button"
                onClick={() => handleSelect(7)}
              >
                <img className="w-[19px]" src={volunteerImg} />
                <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                  Volunteer
                </p>
              </button>
            </a>
          </li>
          <li>
            <a className="" href="/social">
              <button
                className={
                  "font-bold transition-all text-xs py-3 rounded-lg text-base-100 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize " +
                  `${
                    stateContext.selected == 8
                      ? "bg-primary"
                      : "hover:bg-white/10"
                  }`
                }
                type="button"
                onClick={() => handleSelect(8)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-5 h-5 text-inherit"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                  Feed
                </p>
              </button>
            </a>
          </li>
          <div className="absolute bottom-0">

          <li className="w-64">
            <a className="" href="/profile">
              <button
                className={
                  "font-bold transition-all text-xs py-3 rounded-lg text-base-100 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize " +
                  `${
                    stateContext.selected == 9
                      ? "bg-primary"
                      : "hover:bg-white/10"
                  }`
                }
                type="button"
                onClick={() => handleSelect(9)}
              >
                <svg
                  width="24"
                  height="24"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {" "}
                  <path
                    d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />{" "}
                  <path
                    d="M4.271 18.3457C4.271 18.3457 6.50002 15.5 12 15.5C17.5 15.5 19.7291 18.3457 19.7291 18.3457"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />{" "}
                  <path
                    d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />{" "}
                </svg>
                <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                  Profile
                </p>
              </button>
            </a>
          </li>{" "}
          <li className="mt-0">
            <a className="" href="/">
              <button
                className={
                  "font-bold transition-all text-xs py-3 rounded-lg text-base-100 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize " +
                  `${
                    stateContext.selected == 10
                      ? "bg-primary"
                      : "hover:bg-white/10"
                  }`
                }
                type="button"
                onClick={() => handleSelect(10)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-log-out"
                >
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                  <polyline points="16 17 21 12 16 7"></polyline>
                  <line x1="21" y1="12" x2="9" y2="12"></line>
                </svg>
                <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                  Logout
                </p>
              </button>
            </a>
          </li>
          </div>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
