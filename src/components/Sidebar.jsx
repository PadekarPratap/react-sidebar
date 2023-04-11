import React, { Children, createContext, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { ImCodepen, ImBook } from "react-icons/im";
import { MdDashboard } from "react-icons/md";
import { BsFillBagFill } from "react-icons/bs";
import { BiCategory, BiLocationPlus, BiLogOut } from "react-icons/bi";
import { VscPerson } from "react-icons/vsc";
import { IoSettingsSharp } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router-dom";

export const AppContext = createContext();

const Sidebar = ({ children }) => {

  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        style={{ width: isOpen ? "250px" : "80px" }}
        className="sidebar text-white bg-[#12171e] fixed top-0 h-[100vh] px-4 py-5"
      >
        {/* logo section  */}
        <div className="flex items-center relative gap-3">
          <ImCodepen style={{ display: isOpen ? "block" : "none" }} size={30} />
          <h1
            style={{ display: isOpen ? "block" : "none" }}
            className="text-xl font-semibold"
          >
            CodersMania
          </h1>
          <div
            style={{
              left: !isOpen && "50%",
              transform: !isOpen && "translateX(-50%)",
              marginTop: !isOpen && "2rem",
            }}
            className="absolute right-0 cursor-pointer"
          >
            <BiMenu onClick={() => setIsOpen(!isOpen)} size={30} />
          </div>
        </div>

        {/* Admin Section  */}
        <div className="flex items-center mt-12 gap-7">
          <img
            src="https://qph.cf2.quoracdn.net/main-thumb-758632827-200-xqpxooxydywfubiwgozrawahzatvedma.jpeg"
            alt="headerImg"
            className="h-[50px] w-[50px] rounded-full border-2 border-white"
          />
          <div style={{ display: isOpen ? "block" : "none" }}>
            <h2 className="text-lg font-bold">Pratap Padekar</h2>
            <p>Admin</p>
          </div>
        </div>

        {/* list  */}
        <div>
          <ul className="space-y-8 flex flex-col mt-8">
            <li role="button" onClick={() => navigate('/')} className="flex items-center gap-5 cursor-pointer hover:bg-white hover:text-black py-2 px-3 rounded-lg group" style={{
              backgroundColor: window.location.pathname === "/" && "#009688"
            }} >
              <MdDashboard size={25} />
              <h4
                style={{ display: isOpen ? "block" : "none" }}
                className="text-2xl"
              >
                Dashboard
              </h4>

              {/* tooltip  */}
              <p
                style={{ display: isOpen && "none" }}
                className="group-hover:block hidden shadow shadow-black/50 px-4 py-2 rounded-lg absolute left-[100px] text-black bg-white"
              >
                Dashboard
              </p>
            </li>
            <li role="button" onClick={() => navigate('/products')} className="flex items-center gap-5 cursor-pointer hover:bg-white hover:text-black py-2 px-3 rounded-lg group" to={"/products"} style={{
              backgroundColor: window.location.pathname.includes("/products") && "#009688"
            }} >   
              <BsFillBagFill size={25} />
              <h4
                style={{ display: isOpen ? "block" : "none" }}
                className="text-2xl"
                >
                Products
              </h4>

              {/* tooltip  */}
              <p
                style={{ display: isOpen && "none" }}
                className="group-hover:block hidden shadow shadow-black/50 px-4 py-2 rounded-lg absolute left-[100px] text-black bg-white"
                >
                Products
              </p>
            </li>
            <li role="button" onClick={() => navigate('/categories')} className="flex items-center gap-5 cursor-pointer hover:bg-white hover:text-black py-2 px-3 rounded-lg group" style={{
              backgroundColor: window.location.pathname.includes("/categories") && "#009688"
            }} >
              <BiCategory size={25} />
              <h4
                style={{ display: isOpen ? "block" : "none" }}
                className="text-2xl"
              >
                Categories
              </h4>

              {/* tooltip  */}
              <p
                style={{ display: isOpen && "none" }}
                className="group-hover:block hidden shadow shadow-black/50 px-4 py-2 rounded-lg absolute left-[100px] text-black bg-white"
              >
                Categories
              </p>
            </li>
            <li role="button" onClick={() => navigate('/orders')} className="flex items-center gap-5 cursor-pointer hover:bg-white hover:text-black py-2 px-3 rounded-lg group" style={{
              backgroundColor: window.location.pathname.includes("/orders") && "#009688"
            }} >
              <ImBook size={25} />
              <h4
                style={{ display: isOpen ? "block" : "none" }}
                className="text-2xl"
              >
                Orders
              </h4>

              {/* tooltip  */}
              <p
                style={{ display: isOpen && "none" }}
                className="group-hover:block hidden shadow shadow-black/50 px-4 py-2 rounded-lg absolute left-[100px] text-black bg-white"
              >
                Orders
              </p>
            </li>
            <li role="button" onClick={() => navigate('/customers')} className="flex items-center gap-5 cursor-pointer hover:bg-white hover:text-black py-2 px-3 rounded-lg group" style={{
              backgroundColor: window.location.pathname.includes("/customers") && "#009688"
            }} >
              <VscPerson size={25} />
              <h4
                style={{ display: isOpen ? "block" : "none" }}
                className="text-2xl"
              >
                Customers
              </h4>

              {/* tooltip  */}
              <p
                style={{ display: isOpen && "none" }}
                className="group-hover:block hidden shadow shadow-black/50 px-4 py-2 rounded-lg absolute left-[100px] text-black bg-white"
              >
                Customers
              </p>
            </li>
            <li role="button" onClick={() => navigate('/shipping')} className="flex items-center gap-5 cursor-pointer hover:bg-white hover:text-black py-2 px-3 rounded-lg group" style={{
              backgroundColor: window.location.pathname.includes("/shipping") && "#009688"
            }} >
              <BiLocationPlus size={25} />
              <h4
                style={{ display: isOpen ? "block" : "none" }}
                className="text-2xl"
              >
                Shipping
              </h4>

              {/* tooltip  */}
              <p
                style={{ display: isOpen && "none" }}
                className="group-hover:block hidden shadow shadow-black/50 px-4 py-2 rounded-lg absolute left-[100px] text-black bg-white"
              >
                Shipping
              </p>
            </li>
            <li role="button" onClick={() => navigate('/settings')} className="flex items-center gap-5 cursor-pointer hover:bg-white hover:text-black py-2 px-3 rounded-lg group" style={{
              backgroundColor: window.location.pathname.includes("/settings") && "#009688"
            }} >
              <IoSettingsSharp size={25} />
              <h4
                style={{ display: isOpen ? "block" : "none" }}
                className="text-2xl"
              >
                Settings
              </h4>

              {/* tooltip  */}
              <p
                style={{ display: isOpen && "none" }}
                className="group-hover:block hidden shadow shadow-black/50 px-4 py-2 rounded-lg absolute left-[100px] text-black bg-white"
              >
                Settings
              </p>
            </li>
            <li role="button" onClick={() => navigate('/logout')} className="flex items-center gap-5 cursor-pointer hover:bg-white hover:text-black py-2 px-3 rounded-lg group" style={{
              backgroundColor: window.location.pathname.includes("/logout") && "#009688"
            }} >
              <BiLogOut size={25} />
              <h4
                style={{ display: isOpen ? "block" : "none" }}
                className="text-2xl"
              >
                Logout
              </h4>

              {/* tooltip  */}
              <p
                style={{ display: isOpen && "none" }}
                className="group-hover:block hidden shadow shadow-black/50 px-4 py-2 rounded-lg absolute left-[100px] text-black bg-white"
              >
                Logout
              </p>
            </li>
          </ul>
        </div>
      </div>
      <AppContext.Provider value={{isOpen}}>
        <main>{children}</main>
      </AppContext.Provider>
    </>
  );
};

export default Sidebar;
