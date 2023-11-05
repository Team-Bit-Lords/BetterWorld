const Banner = () => {
    return (
        <div className="flex mt-5 rounded-2xl pl-10 justify-center flex-col" style={{
            backgroundImage: "url(https://odindesignthemes.com/vikinger-theme/wp-content/themes/vikinger/img/banner/banner-bg.png)",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '30vh',
            width: '100%',
            color: 'white',
        }}>
            <p className="text-3xl  font-semibold">News feed</p>
            <p>Check what your nation have been up to!</p>
        </div>
    )
}

export default Banner