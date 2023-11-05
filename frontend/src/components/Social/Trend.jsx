

const Trend = () => {
    return (
        <div className="w-[30%] rounded-2xl bg-white flex flex-col gap-6 p-10 h-[400px]" >
            <p className="font-semibold text-3xl">Trending topics</p>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col text-gray-900 gap-1">
                    <p className="font-semibold">Increasing Pollution</p>
                    <p className="text-sm text-gray-400">1.2k posts</p>
                </div>
                <div className="flex flex-col text-gray-900 gap-1">
                    <p className="font-semibold">Corruption</p>
                    <p className="text-sm text-gray-400">1.2k posts</p>
                </div>
                <div className="flex flex-col text-gray-900 gap-1">
                    <p className="font-semibold">Trafficking of children</p>
                    <p className="text-sm text-gray-400">1.2k posts</p>
                </div>
                <div className="flex flex-col text-gray-900 gap-1">
                    <p className="font-semibold">Gender inequality</p>
                    <p className="text-sm text-gray-400">1.2k posts</p>
                </div>
                
                
            </div>
        </div>
    )
}

export default Trend