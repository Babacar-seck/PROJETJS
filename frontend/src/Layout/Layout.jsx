import Footer from "../components/Footer/Footer"
import Navbar from "../components/Navbar/Navbar"

const Layout = ({children}) => {

    return (
		<>
			<Navbar />
			<div className="container pt-5">
                {children}
                </div>
			<Footer />
		</>
	)
}

export default Layout