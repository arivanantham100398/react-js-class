import { Link, NavLink } from "react-router-dom"

function Navabr() {
    const isUserLoggedIn = false
    return (
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
                <span className="font-semibold text-xl tracking-tight">
                    <NavLink
                        to="/"
                        style={({ isActive }) => ({
                            color: isActive ? "red" : "black",
                            fontWeight: isActive ? "700" : "500"
                        })}
                    >
                        Tailwind CSS
                    </NavLink>
                </span>
            </div>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <span href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        <NavLink
                            to="/"
                            style={({ isActive }) => ({
                                color: isActive ? "red" : "black",
                                fontWeight: isActive ? "700" : "500"
                            })}
                        >
                            Home
                        </NavLink>
                    </span>
                    <span href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        <NavLink
                            to="/about"
                            style={({ isActive }) => ({
                                color: isActive ? "red" : "black",
                                fontWeight: isActive ? "700" : "500"
                            })}
                        >
                            About
                        </NavLink>
                    </span>
                    <span href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                        <NavLink
                            to="/contact"
                            style={({ isActive }) => ({
                                color: isActive ? "red" : "black",
                                fontWeight: isActive ? "700" : "500"
                            })}
                        >
                            Contact
                        </NavLink>
                    </span>
                    <span href="#responsive-header" className="block ml-5 mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                        <NavLink
                            to="/products"
                            style={({ isActive }) => ({
                                color: isActive ? "red" : "black",
                                fontWeight: isActive ? "700" : "500"
                            })}
                        >
                            Products
                        </NavLink>
                    </span>
                    {isUserLoggedIn && <span href="#responsive-header" className="block ml-5 mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                        <NavLink
                            to="/Users"
                            style={({ isActive }) => ({
                                color: isActive ? "red" : "black",
                                fontWeight: isActive ? "700" : "500"
                            })}
                        >
                            User
                        </NavLink>
                    </span>}
                </div>
                <div>
                    {isUserLoggedIn ?
                        <img className="w-10 h-10 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="Rounded avatar" />
                        :
                        <Link to="/login">
                           <button className="flex items-center px-3 py-2 border rounded text-white-200 border-white-400 hover:text-white hover:border-white">
                            <h1 className="text-white font-bold">
                                Login
                            </h1>
                        </button>
                        </Link>
                    }
                </div>
            </div>
        </nav >
    )

}

export default Navabr