import backbtn from '../../assets/back-btn.png'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

const Volform = () => {
    const navigate = useNavigate();

    const [oopenmodal, setoopenmodal] = useState(false);
    const handleclick = () => {
        setoopenmodal(true);
        setTimeout(() => {
            navigate('/volunteer')
        }, 5000);
    }
    return (
        <><div>
            <div className='ml-4 mt-4'><img src={backbtn} onClick={() => { navigate('/volunteer') }} /></div>
            <section className="p-6 \  text-gray-800">
                <form novalidate="" action="" className="container flex flex-col mx-auto space-y-12">
                    <fieldset className="grid grid-row-2 gap-6 p-6 rounded-md shadow-sm  ">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <p className="font-medium text-xl">Volunteer Data</p>
                            <p className="text-sm">We'll reach out to you in 24 hours</p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label for="firstname" className="text-sm px-2 ">Name</label>
                                <input id="name" type="text" placeholder="Name" className=" w-full p-2 border rounded-md focus:border-[#0098ea] focus:border   border-gray-400  text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label for="email" className="text-sm p-2">Email</label>
                                <input id="email" type="email" placeholder="Email" className=" w-full p-2 border rounded-md focus:border-[#0098ea] focus:border   border-gray-400  text-gray-900" />
                            </div>
                            <div className="col-span-full">
                                <label for="address" className="text-sm p-2">Address</label>
                                <input id="address" type="text" placeholder="Address" className=" w-full p-2 border rounded-md focus:border-[#0098ea] focus:border   border-gray-400  text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label for="city" className="text-sm p-2">Education</label>
                                <input id="city" type="text" placeholder="Education" className=" w-full p-2 border rounded-md focus:border-[#0098ea] focus:border   border-gray-400  text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label for="state" className="text-sm p-2">Aadhar Card</label>
                                <input id="state" type="file" accept='.pdf,.jpg,.jpeg,.png' title='upload image or pdf' placeholder="" className=" w-full p-2 border rounded-md focus:border-[#0098ea] focus:border   border-gray-400  text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label for="zip" className="text-sm p-2">Age</label>
                                <input id="zip" type="number" placeholder="" className=" w-full p-2 border rounded-md focus:border-[#0098ea] focus:border   border-gray-400  text-gray-900" />
                            </div>
                            <div>
                                <button className='btn bg-primary text-white' onClick={handleclick}>submit</button>
                            </div>
                        </div>
                    </fieldset>

                </form>
            </section>
            {oopenmodal && (
                <div className="toast toast-top toast-center">
                    <div className="alert alert-info">
                        <span>Submitted Succesfully</span>
                    </div>
                </div>)
            }
        </div>

        </>
    )
}

export default Volform