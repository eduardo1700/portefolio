import Header from '../components/AgenciesHeader';
import Footer from '../components/Footer';
import Hero from '../components/WebAppsHero'
import Partners from '../components/AgenciesPartners'
import Help from '../components/WebAppsHowCanWeHelp'
import Process from '../components/Process'
import Work from '../components/WorkWithUs'
const WebAppsPage = () => {

    return (
        <div className='absolute w-full bg-[#1b1b1b] -z-50 overflow-x-clip '>
            <div className='mx-6 mb-8 sm:mx-16 xl:mx-36'>
                <Header />
            <Hero />
            </div>
            <Partners/>
            <Help/>
            <Process/>
            <Work scrollBreakpoint={75} scrollBreakpointTabletLarge={78} scrollBreakpointTablet={78} scrollBreakpointMobile={78} />
            <Footer />
        </div>
    );
}

export default WebAppsPage