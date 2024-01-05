import './App.css'
import HeaderMobile from './assets/images/image-header-mobile.jpg'

function App() {
    return (
        <>
            <div className="bg-black font-inter h-screen flex items-center justify-center">
                <div className="h-full w-[280px] bg-Very-dark-blue flex items-center justify-center">
                    <div className="flex flex-col h-[500px] w-[240px] bg-Dark-desaturated-blue rounded-lg relative text-center">

                        <img src={HeaderMobile} alt="header" className="rounded-t-lg" />
                        <div className="absolute inset-0 h-[176px] bg-Soft-violet  opacity-60 rounded-t-lg"></div>
                        <h3 className="text-white font-bold font-inter text-xl text-center pt-6 pl-4 pr-4">Get <span className="text-Soft-violet">insights</span> that help your business grow.</h3>
                        <p className="text-Slightly-transparent-white text-xs font-inter  text-center pt-3 pr-5 pl-4">Discover the benifit of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency</p>

                        <h3 className="text-white font-bold ">10k+</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
