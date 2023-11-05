import React, { useContext } from "react"
import { DashboardContext } from "../../pages/NewDashboard";
import marketImg from '../../assets/market.svg'
import logoImg from "../../assets/logo.png"
import volunteerImg from '../../assets/volunteer.svg'
import generateImg from '../../assets/generate.svg'
import { Link } from "react-router-dom";

const Sidebar = () => {

  const { stateContext, handleSelect } = useContext(DashboardContext)

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
      {/* shadow-md */}
      <div className="m-4">
        <ul className="mb-4 flex flex-col gap-1">
          <li>
            <a aria-current="page" href="home">
              <button
                className={"font-bold transition-all text-xs py-3 rounded-lg text-base-100  active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize " + `${stateContext.selected == 0 ? 'bg-primary' : 'hover:bg-white/10'}`}
                type="button" onClick={() => handleSelect(0)}
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
            <Link to='chatbot'>
              <button
                className={"font-bold transition-all text-xs py-3 rounded-lg text-base-100 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize " + `${stateContext.selected == 6 ? 'bg-primary' : 'hover:bg-white/10'}`}
                type="button" onClick={() => handleSelect(6)}
              >
                <img className="w-[22px]" src={generateImg} />
                <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                  Generate NFT
                </p>
              </button>
            </Link>
          </li>
          <li>
            <a className="" href="/product">
              <button
                className={"font-bold transition-all text-xs py-3 rounded-lg text-base-100 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize " + `${stateContext.selected == 1 ? 'bg-primary ' : 'hover:bg-white/10'}`}
                type="button" onClick={() => handleSelect(1)}
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
                className={"font-bold transition-all text-xs py-3 rounded-lg text-base-100 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize " + `${stateContext.selected == 2 ? 'bg-primary' : 'hover:bg-white/10'}`}
                type="button" onClick={() => handleSelect(2)}
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
                className={"font-bold transition-all text-xs py-3 rounded-lg text-base-100 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize " + `${stateContext.selected == 3 ? 'bg-primary' : 'hover:bg-white/10'}`}
                type="button" onClick={() => handleSelect(3)}
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
                className={"font-bold transition-all text-xs py-3 rounded-lg text-base-100 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize " + `${stateContext.selected == 4 ? 'bg-primary' : 'hover:bg-white/10'}`}
                type="button" onClick={() => handleSelect(4)}
              >
                <img className="w-[19px]" src={volunteerImg} />
                <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                  Volunteer
                </p>
              </button>
            </a>
          </li>
          <li>
            <a className="" href="#/dashboard/notifictions">
              <button
                className={"font-bold transition-all text-xs py-3 rounded-lg text-base-100 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize " + `${stateContext.selected == 5 ? 'bg-primary' : 'hover:bg-white/10'}`}
                type="button" onClick={() => handleSelect(5)}
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
          <li>
            <a className="" href="leaderboard">
              <button
                className={"font-bold transition-all text-xs py-3 rounded-lg text-base-100 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize " + `${stateContext.selected == 7 ? 'bg-primary' : 'hover:bg-white/10'}`}
                type="button" onClick={() => handleSelect(7)}
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
            </a>
          </li>

        </ul>

      </div>
    </aside>
  );
};

export default Sidebar