import first from "./../../assets/first.svg";
import second from "./../../assets/second.svg";
import third from "./../../assets/third.svg";
import profile1 from "./../../assets/profile-pic-1.png";
import profile2 from "./../../assets/profile-pic-2.png";
import profile3 from "./../../assets/profile-pic-3.png";
import impact from "./../../assets/city.jpg";
import impact2 from "./../../assets/city-2.jpg";
import impact3 from "./../../assets/city-3.jpg";
const Leaderboard = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-5">
        <div className="flex gap-16 px-32">
          <div className="w-56 h-56 bg-[#e5e5e5] shadow-[0px_0px_50px_5px_rgba(160,128,128,0.79)] rounded-2xl p-6 flex flex-col gap-3">
            <h1 className="font-bold text-2xl">2nd</h1>
            <img src={second} alt="" className="w-24 h-24 block mx-auto" />
            <p className="block mx-auto font-semibold">Pranav Patil</p>
          </div>
          <div className="w-72 h-72 bg-[#ffffe7] shadow-[0px_0px_75px_3px_rgba(229,209,0,0.59)] rounded-2xl p-6 flex flex-col gap-3">
            <h1 className="font-bold text-2xl">1st</h1>
            <img src={first} alt="" className="w-40 h-40 block mx-auto" />
            <p className="block mx-auto font-semibold text-xl">Shagun Gupta</p>
          </div>
          <div className="w-56 h-56 bg-[#f9efe6] shadow-[0px_0px_50px_5px_rgba(165,42,42,0.3)] rounded-2xl p-6 flex flex-col gap-3">
            <h1 className="font-bold text-2xl">3rd</h1>
            <img src={third} alt="" className="w-24 h-24 block mx-auto" />
            <p className="block mx-auto font-semibold">Archie Shah</p>
          </div>
        </div>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box flex flex-col gap-3">
                <h1 className="font-semibold text-2xl flex justify-center">YOUR CITY</h1>
                <p className="text-center">Looks great buddy!! But there is always room for improvement. Help us make it even better</p>
              <img src={impact} alt="" className="block m-auto h-36 w-96"/>
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
          <dialog id="my_modal_2" className="modal">
            <div className="modal-box flex flex-col gap-3">
                <h1 className="font-semibold text-2xl flex justify-center">YOUR CITY</h1>
                <p className="text-center">Looks great buddy!! But there is always room for improvement. Help us make it even better</p>
              <img src={impact2} alt="" className="block m-auto h-36 w-96"/>
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box flex flex-col gap-3">
                <h1 className="font-semibold text-2xl flex justify-center">YOUR CITY</h1>
                <p className="text-center">Looks great buddy!! But there is always room for improvement. Help us make it even better</p>
              <img src={impact3} alt="" className="block m-auto h-36 w-96"/>
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>Rank</label>
                </th>
                <th>Name</th>
                <th>Job</th>
                <th>Amount</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>
                  <label>5</label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={profile1}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Hart Hagerty</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>
                  Zemlak, Daniel and Leannon
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Desktop Support Technician
                  </span>
                </td>
                <td>$55000</td>
                <th>
                  <button className="btn btn-ghost btn-xs" onClick={()=>document.getElementById('my_modal_1').showModal()}>
                    details
                  </button>
                </th>
              </tr>
              {/* row 2 */}
              <tr>
                <th>
                  <label>6</label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={profile2}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Brice Swyre</div>
                      <div className="text-sm opacity-50">China</div>
                    </div>
                  </div>
                </td>
                <td>
                  Carroll Group
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Tax Accountant
                  </span>
                </td>
                <td>$44000</td>
                <th>
                  <button className="btn btn-ghost btn-xs" onClick={()=>document.getElementById('my_modal_2').showModal()}>details</button>
                </th>
              </tr>
              {/* row 3 */}
              <tr>
                <th>
                  <label>7</label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={profile3}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Marjy Ferencz</div>
                      <div className="text-sm opacity-50">Russia</div>
                    </div>
                  </div>
                </td>
                <td>
                  Rowe-Schoen
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Office Assistant I
                  </span>
                </td>
                <td>$10000</td>
                <th>
                  <button className="btn btn-ghost btn-xs" onClick={()=>document.getElementById('my_modal_3').showModal()}>details</button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
