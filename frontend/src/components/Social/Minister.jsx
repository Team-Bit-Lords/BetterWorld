

const Minister = () => {
    return (
        <div className="w-[30%] rounded-2xl bg-white flex flex-col gap-6 p-10 h-[440px]" >
            <p className="font-semibold text-3xl">Top Ministries</p>
            <div className="flex flex-col gap-4">
                <div className="flex text-gray-900 gap-2">
                    <img className="rounded-full w-12" src="https://www.nlcbharat.org/wp-content/uploads/2023/01/Telangana-300x300.png"/>
                    <div>
                        <p className="font-semibold"> Telangana</p>
                        <p className="text-sm text-gray-400">Resolved 80% Issues</p>
                    </div>
                </div>
                <div className="flex text-gray-900 gap-2">
                    <img className="rounded-full w-12" src="https://w7.pngwing.com/pngs/694/117/png-transparent-andhra-pradesh-uttar-pradesh-states-and-territories-of-india-telangana-chief-minister-andhrapradesh-miscellaneous-logo-state-government.png" />
                    <div>
                        <p className="font-semibold"> Andhra Pradesh</p>
                        <p className="text-sm text-gray-400">Resolved 75% Issues</p>
                    </div>
                </div>
                <div className="flex text-gray-900 gap-2">
                    <img className="rounded-full w-12" src="https://www.nlcbharat.org/wp-content/uploads/2023/01/Chhattisgarh.png" />
                    <div>
                        <p className="font-semibold"> Chhattisgarh</p>
                        <p className="text-sm text-gray-400">Resolved 70% Issues</p>
                    </div>
                </div>
                <div className="flex text-gray-900 gap-2">
                    <img className="rounded-full w-12" src="https://vijayam.in/wp-content/uploads/2022/01/emblem-of-Maharashtra.jpg.webp" />
                    <div>
                        <p className="font-semibold"> Maharashtra</p>
                        <p className="text-sm text-gray-400">Resolved 68% Issues</p>
                    </div>
                </div>
                <div className="flex text-gray-900 gap-2">
                    <img className="rounded-full w-12" src="https://vijayam.in/wp-content/uploads/2022/01/emblem-of-Punjab.jpg.webp" />
                    <div>
                        <p className="font-semibold"> Punjab</p>
                        <p className="text-sm text-gray-400">Resolved 65% Issues</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Minister