'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {

    const [eliteOpen, setEliteOpen] = useState(false)
    const [programOpen, setProgramOpen] = useState(false)
    const [cScience, setCScience] = useState(false)
    const [cEnginer, setCEnginer] = useState(false)
    const [ece, setEce] = useState(false)
    const [mech, setMech] = useState(false)

    const active = 'style="border: 1.5px solid rgb(212, 212, 212); background-color: rgb(246, 246, 246); box-shadow: rgb(233, 233, 233) 0px -5px 1px inset; color: rgb(0, 0, 0);"'

    return (
        <>
            <header className="header-desktop gap-4 h-fit p-[40px_140px_0px_140px] flex justify-between items-center fixed w-full z-[999]">

                <div className="header-left-side h-fit flex items-center justify-between w-[831px] bg-[rgba(233,233,233,0.7)] border border-[rgba(211,211,211,1)] 
                rounded-[90px] p-[6.5px_8px_6.5px_21px] text-lg font-normal backdrop-blur-[80px] transition ease duration-1000 delay-0 relative z-[4] ">

                    <Link href={'/'}>
                        <Image src={require('../../public/image/ITNOVA.svg')} loading="lazy" className="rinex-header-logo transition ease duration-1000 delay-0 w-[101px] h-[26px] " alt="" />
                    </Link>

                    <div id="headerHome" className="nav-link no-underline text-[#878787] p-[13.5px_16px] rounded-[130px] flex items-center justify-center transition ease duration-1000 delay-0 " href="/"
                        onMouseEnter={() => setEliteOpen(true)}
                        onMouseLeave={() => setEliteOpen(false)}>
                        Elite

                        <Image src={require("../../public/image/down_arrow.svg")} className='ml-[10px]' alt="" />

                        <div id="elite-menu-container" className={`menu-container absolute w-[310px] h-fit top-[75px] left-[140px] bg-[rgba(255,255,255,1)] 
                        p-[0px_30px_20px] border border-[rgb(215,215,215)] rounded-[20px] z-[1000] shadow-custom bottom-[-395px] ${eliteOpen ? 'block' : 'hidden'} `}>

                            <div className="elite-link-menu flex flex-col">

                                <div className='flex items-center cursor-pointer mt-5'>

                                    <Image src={require("../../public/image/programm_icon.svg")} className='ml-[10px]' alt="" />

                                    <div className='ml-[10px]'>

                                        <p className="elite-menu-para text-sm font-bold uppercase"></p>

                                        <h6 className="elite-menu-heading text-lg font-bold text-left flex-grow">
                                            Elite Programs
                                        </h6>

                                    </div>

                                </div>

                                <Link className="nav-sub-link-elite mt-[25px] flex items-center no-underline" href="/ep/DSAPython.html">

                                    <Image src={require("../../public/image/pythonElite.png")} className='ml-[10px]' width={40} alt="" />

                                    <div>
                                        <h6 className="elite-submenu-option hover:text-black flex justify-center items-center text-[15px] font-medium ml-5 text-[gray]">Data Structures and Algorithms with Python</h6>
                                    </div>

                                </Link>

                                <Link className="nav-sub-link-elite mt-[25px] flex items-center no-underline" href="/ep/DSAPython.html">

                                    <Image src={require("../../public/image/javaElite.png")} className='ml-[10px]' width={40} alt="" />

                                    <div>
                                        <h6 className="elite-submenu-option hover:text-black flex justify-center items-center text-[15px] font-medium ml-5 text-[gray]">Data Structures and Algorithms with Java</h6>
                                    </div>

                                </Link>

                                <Link className="nav-sub-link-elite mt-[25px] flex items-center no-underline" href="/ep/DSAPython.html">

                                    <Image src={require("../../public/image/c++Elite.png")} className='ml-[10px]' width={40} alt="" />

                                    <div>
                                        <h6 className="elite-submenu-option hover:text-black flex justify-center items-center text-[15px] font-medium ml-5 text-[gray]">
                                            Data Structures and Algorithms with C++</h6>
                                    </div>

                                </Link>

                                <Link className="nav-sub-link-elite mt-[25px] flex items-center no-underline" href="/ep/DSAPython.html">

                                    <Image src={require("../../public/image/uiuxElite.png")} className='ml-[10px]' width={40} alt="" />

                                    <div>
                                        <h6 className="elite-submenu-option hover:text-black flex justify-center items-center text-[15px] font-medium ml-5 text-[gray]">
                                            UI/UX</h6>
                                    </div>

                                </Link>

                                <Link className="nav-sub-link-elite mt-[25px] flex items-center no-underline" href="/ep/DSAPython.html">

                                    <Image src={require("../../public/image/digitalmarketingElite.png")} className='ml-[10px]' width={40} alt="" />

                                    <div>
                                        <h6 className="elite-submenu-option hover:text-black flex justify-center items-center text-[15px] font-medium ml-5 text-[gray]">Digital Marketing</h6>
                                    </div>

                                </Link>

                            </div>

                        </div>

                    </div>

                    <Link className="nav-link no-underline text-[#878787] p-[13.5px_16px] rounded-[130px] flex items-center justify-center transition ease duration-1000 delay-0" id="headerAbout" href="/about">
                        About
                    </Link>

                    <div id="btnHeadProgram" className="nav-link no-underline text-[#878787] p-[13.5px_16px] rounded-[130px] flex items-center justify-center transition ease duration-1000 delay-0" href="/"
                        onMouseEnter={() => setProgramOpen(true)}
                        onMouseLeave={() => setProgramOpen(false)}
                    >
                        Programs

                        <Image src={require("../../public/image/down_arrow.svg")} className='ml-[10px]' alt="" />

                        <div id="program-menu-container" className={`menu-container absolute w-[337px] h-fit top-[75px] left-[42%] bg-[rgba(255,255,255,1)] 
                        p-[0px_30px_20px] border border-[rgb(215,215,215)] rounded-[20px] z-[1000] shadow-custom bottom-[-395px] py-[30px] ${programOpen ? 'block' : 'hidden'}`}>

                            <div className="program-link-menu flex flex-col">

                                <div className='flex items-center cursor-pointer relative pb-[25px]'>

                                    <Image src={require("../../public/image/programm_icon.svg")} className='ml-[10px]' alt="" />

                                    <div className='ml-[10px]'>

                                        <p className="elite-menu-para text-[10px] font-bold text-black tracking-[3px] uppercase">PROGRAMS</p>
                                        <h6 className="elite-menu-heading text-2xl -mt-[8px] tracking-[-1px] font-bold text-black">See all programs</h6>

                                    </div>

                                </div>

                                <div className='flex items-center cursor-pointer relative pb-[25px]'
                                    onMouseEnter={() => setCScience(true)}
                                    onMouseLeave={() => setCScience(false)}
                                >

                                    <Image src={require("../../public/image/cs_logo.svg")} className='ml-[10px] mr-[16px]' width={40} alt="" />

                                    <div>

                                        <h6 className="program-menu-option hover:text-black text-[16px] tracking-[-1px] font-medium text-[rgba(135,135,135,1)]">Computer Science/Information Science</h6>
                                    </div>

                                    <div id="cs-program-link" className={`program-sublink-container-cs absolute right-[-375px]
                                    bottom-[-360px] pl-[13px] ${cScience ? 'block' : 'hidden'}`}>

                                        <div className="program-sublink-menu rounded-[20px] border border-[rgba(211,211,211,1)] 
                                        bg-white p-[20px] w-[334px]">

                                            <div className='mb-[21px]'>
                                                <p className="sublink-menu-para text-[10px] font-bold text-black tracking-[3px]">COMPUTER SCIENCE / INFORMATION SCIENCE</p>
                                            </div>

                                            <Link className="nav-sub-link mt-[20px] flex items-center no-underline mb-[21px] " href="/program/1">

                                                <Image src={require("../../public/image/ai_logo.svg")} alt="" className='ml-[10px] mr-4' />

                                                <div>
                                                    <h6 className="program-submenu-option text-[16px] font-medium text-black">Artificial Intelligence</h6>
                                                </div>

                                            </Link>

                                            <Link className="nav-sub-link mt-[20px] flex items-center no-underline mb-[21px]" href="/program/2">

                                                <Image src={require("../../public/image/security_logo.svg")} className='ml-[10px] mr-4' alt="" />

                                                <div>
                                                    <h6 className="program-submenu-option text-[16px] font-medium text-black">Cyber Security &amp; Ethical Hacking</h6>
                                                </div>

                                            </Link>

                                            <Link className="nav-sub-link mt-[20px] flex items-center no-underline mb-[21px]" href="/program/3">

                                                <Image src={require("../../public/image/data_logo.svg")} className='ml-[10px] mr-4' alt="" />

                                                <div>
                                                    <h6 className="program-submenu-option text-[16px] font-medium text-black">Data Science</h6>
                                                </div>

                                            </Link>

                                            <Link className="nav-sub-link mt-[20px] flex items-center no-underline mb-[21px]" href="/program/4">

                                                <Image src={require("../../public/image/gear_logo.svg")} className='ml-[10px] mr-4' alt="" />

                                                <div>
                                                    <h6 className="program-submenu-option text-[16px] font-medium text-black">Machine Learning with Python</h6>
                                                </div>

                                            </Link>

                                            <Link className="nav-sub-link mt-[20px] flex items-center no-underline" href="/program/5">

                                                <Image src={require("../../public/image/web_logo.svg")} className='ml-[10px] mr-4' alt="" />

                                                <div>
                                                    <h6 className="program-submenu-option text-[16px] font-medium text-black">Web Development</h6>
                                                </div>

                                            </Link>

                                        </div>
                                    </div>
                                </div>

                                <div className='flex items-center cursor-pointer relative pb-[25px]'
                                    onMouseEnter={() => setCEnginer(true)}
                                    onMouseLeave={() => setCEnginer(false)}
                                >

                                    <Image src={require("../../public/image/civil_logo.svg")} className='ml-[10px] mr-[16px]' width={40} alt="" />

                                    <div>
                                        <h6 className="program-menu-option hover:text-black text-[16px] tracking-[-1px] font-medium text-[rgba(135,135,135,1)]">Civil Engineering</h6>
                                    </div>

                                    <div id="civil-program-link" className={`program-sublink-container-civil absolute right-[-375px]
                                    bottom-[-50px] pl-[13px] ${cEnginer ? 'block' : 'hidden'} `}>

                                        <div className="program-sublink-menu rounded-[20px] border border-[rgba(211,211,211,1)] 
                                        bg-white p-[20px] w-[334px]">

                                            <div className='mb-[21px]'>
                                                <p className="sublink-menu-para text-[10px] font-bold text-black tracking-[3px]">CIVIL ENGINEERING</p>
                                            </div>

                                            <Link className="nav-sub-link mt-[20px] flex items-center no-underline" href="/program/6">

                                                <Image src={require("../../public/image/autocad_logo.svg")} alt="" className='ml-[10px] mr-4' />

                                                <div>
                                                    <h6 className=" text-[16px] font-medium text-black">AutoCAD</h6>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex items-center cursor-pointer relative pb-[25px]'
                                    onMouseEnter={() => setEce(true)}
                                    onMouseLeave={() => setEce(false)}
                                >

                                    <Image src={require("../../public/image/extc_logo.svg")} className='ml-[10px] mr-[16px]' width={40} alt="" />

                                    <div>
                                        <h6 className="program-menu-option hover:text-black text-[16px] tracking-[-1px] font-medium text-[rgba(135,135,135,1)]">Electronics &amp; Communication Engineering</h6>
                                    </div>

                                    <div id="extc-program-link" className={`program-sublink-container-extc absolute right-[-375px]
                                    bottom-[-60px] pl-[13px] ${ece ? 'block' : 'hidden'}`}>

                                        <div className="program-sublink-menu rounded-[20px] border border-[rgba(211,211,211,1)] 
                                        bg-white p-[20px] w-[334px]">

                                            <div className='mb-[21px]'>
                                                <p className="sublink-menu-para text-[10px] font-bold text-black tracking-[3px]">Electronics &amp; Communication Engineering</p>
                                            </div>
                                            <Link className="nav-sub-link mt-[20px] flex items-center no-underline" href="/program/7">

                                                <Image src={require("../../public/image/cloud_upload.svg")} alt="" className='ml-[10px] mr-4' />

                                                <div>
                                                    <h6 className="program-submenu-option text-[16px] font-medium text-black">Internet of Things</h6>
                                                </div>

                                            </Link>

                                        </div>

                                    </div>

                                </div>

                                <div className='flex items-center cursor-pointer relative'
                                    onMouseEnter={() => setMech(true)}
                                    onMouseLeave={() => setMech(false)}
                                >

                                    <Image src={require("../../public/image/mech_logo.svg")} className='ml-[10px] mr-[16px]' width={40} alt="" />

                                    <div>
                                        <h6 className="program-menu-option hover:text-black text-[16px] tracking-[-1px] font-medium text-[rgba(135,135,135,1)]">Mechanical Engineering</h6>
                                    </div>

                                    <div id="mech-program-link" className={`program-sublink-container-mech absolute right-[-375px]
                                    bottom-[-70px] pl-[13px] ${mech ? 'block' : 'hidden'}`}>

                                        <div className="program-sublink-menu rounded-[20px] border border-[rgba(211,211,211,1)] 
                                        bg-white p-[20px] w-[334px]">

                                            <div className='mb-[21px]'>
                                                <p className="sublink-menu-para text-[10px] font-bold text-black tracking-[3px]">Mechanical Engineering</p>
                                            </div>

                                            <Link className="nav-sub-link mt-[20px] flex items-center no-underline" href="/program/8">

                                                <Image src={require("../../public/image/autocad_logo2.svg")} alt="" className='ml-[10px] mr-4' />

                                                <div>
                                                    <h6 className="program-submenu-option text-[16px] font-medium text-black">AutoCAD &amp; MATLAB</h6>
                                                </div>
                                            </Link>

                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                    <Link id="headerCareer" className="nav-link no-underline text-[#878787] p-[13.5px_16px] rounded-[130px] flex items-center justify-center transition ease duration-1000 delay-0" href="/career">
                        Career
                        <p className="hiring-chip text-[10px] font-medium text-[rgba(135,135,135,1)] bg-black rounded ml-[9px] transition ease duration-1000 delay-0 h-5 flex items-center justify-center p-1">
                            <span>
                                WE ARE HIRING
                            </span>
                        </p>
                    </Link>

                    <Link href="/#blogNav" id="headerBlogs" className="nav-link no-underline text-[#878787] p-[13.5px_16px] rounded-[130px] flex items-center justify-center transition ease duration-1000 delay-0">Blogs</Link>

                </div>


                <div className="header-right-side flex gap-4 items-center">

                    {/* <button id="btnToggle" className='flex items-center fixed justify-between right-[10px] top-[50px] border-0 p-[5px] rounded-[130px] w-[82px] bg-black rotate-90 transition ease duration-1000 delay-0 '>

                        <div id="lightDiv" style={{ backgroundColor: "rgb(129, 129, 129)" }}>

                            <img src="/images/sun_light.svg" alt="" />
                        </div>
                        <img id="sunImg" src="/images/vertical.svg" alt="" />
                        <div id="darkDiv">
                            <img src="/images/moon.svg" alt="" />
                        </div>
                    </button> */}


                    <button className="btn-signUp flex justify-center items-center text-lg font-normal text-black rounded-[130px] p-[19px_20px_19px_22px] mr-[10px] transition ease duration-1000 delay-0 bg-[rgba(233,233,233,0.7)] backdrop-blur-[80px] border-none">
                        <Image src={require("../../public/image/person_icon.b6fd4cef071015312a7e.svg")} className="person-icon mr-[7px] " alt="" />
                        Sign Up
                    </button>

                    <Link href="https://rinex.edmingle.com/login" target="_blank" className=" flex items-center justify-center gap-1 btn-logIn text-lg bg-black shadow-[0px_4px_14px_rgba(0,0,0,0.25)] rounded-[130px] 
                    p-[19px_20px_19px_22px] transition ease duration-1000 delay-0 no-underline text-[rgba(255,255,2551)]">
                        <Image src={require("../../public/image/login_icon.svg")} alt="" />
                        Login
                    </Link>

                </div>

            </header>

            <header className="header-mobile" id="headerMobile">
                <div className="header-container-mobile" id="headerContainerMobile">
                    <a href="/">
                        <img className="rinex-header-logo" alt="" />
                    </a>
                    <button className="btn-header-menu">
                        {/* <img src="" alt="" /> */}
                    </button>
                </div>
            </header>

            <div id="headerMainMenu" style={{ marginTop: "0px", display: "none" }}>
                <div>
                    <div>
                        <div id="headerContainerMobile" style={{ padding: "35px" }}>
                            <a href="/">
                                <img className="rinex-header-logo" alt="" />
                            </a>
                            <button className="btn-header-menu-close">
                                {/* <img src="" alt="" /> */}
                            </button>
                        </div>
                        <div className="menu-category-contianer">
                            <ul>
                                <li>
                                    <a href="#" className="nav-link no-underline text-[#878787] p-[13.5px_16px] rounded-[130px] flex items-center justify-center transition ease duration-1000 delay-0 elite-mobile-header">
                                        Elite
                                    </a>
                                </li>
                                <li>
                                    <a className="menuLink" href="/about">About</a>
                                </li>
                                <li>Program
                                    <img src="/images/right_arrow_grey.svg" alt="" />
                                </li>
                                <li>
                                    <a className="menuLink" href="/career">
                                        Career
                                        <span className="hiring-chip">WE ARE HIRING</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/#blogNav" className="menuLink">blog</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <button id="btnToggle">
                        <div id="lightDiv">
                            <img src="/images/sun_light.svg" alt="" />
                        </div>
                        <img id="sunImg" src="/images/vertical.svg" alt="" />
                        <div id="darkDiv">
                            <img src="/images/moon.svg" alt="" />
                        </div>
                    </button>
                    <div className="header-right-side">
                        <button className="btn-signUp">
                            <img className="person-icon" alt="" />
                            Sign Up
                        </button>
                        <a href="https://rinex.edmingle.com/login" target="_blank" className="btn-logIn">
        // <img src="/images/login_icon.svg" alt="" />
                            Login
                        </a>
                    </div>
                    <div id="program-categories-modal-section" style={{ display: "none" }}>
                        <div id="program-categories-modal" style={{ display: "flex" }}>
                            <div className="program-modal-head"><div>
                                <p className="program-menu-para">PROGRAMS</p>
                                <h6 className="program-menu-heading">See all programs</h6>
                            </div>
                                <img className="closeMnu" src="/images/programm_icon.svg" alt="" />
                            </div>
                            <img src="/images/hor_devider.svg" alt="" />
                            <div className="program-categories" value="csProg">
                                <img src="/images/cs_logo.svg" alt="" />
                                <div>
                                    <h6 className="program-menu-option">Computer Science/Information Science</h6>
                                </div>
                            </div>
                            <div className="program-categories" id="civilProg">
                                <img src="/images/civil_logo.svg" alt="" />
                                <div>
                                    <h6 className="program-menu-option">Civil Engineering</h6>
                                </div>
                            </div>
                            <div className="program-categories" id="extcProg">
                                <img src="/images/extc_logo.svg" alt="" />
                                <div>
                                    <h6 className="program-menu-option">Electronics &amp; Communication Engineering</h6>
                                </div>
                            </div>
                            <div className="program-categories" id="mechProg">
                                <img src="/images/mech_logo.svg" alt="" />
                                <div>
                                    <h6 className="program-menu-option">Mechanical Engineering</h6>
                                </div>
                            </div>
                        </div>
                        <div id="program-subcategories-modal" style={{ display: "none" }}>
                            <div className="program-modal-head">
                                <img className="subCatArrow" alt="" />
                                <p className="program-menu-para"></p>
                            </div>
                            <img src="/images/hor_devider.svg" alt="" />
                            <a className="program-categories" href="/program/0">
                                {/* <img src="" alt="" /> */}
                                <div>
                                    <h6 className="program-menu-option"></h6>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div id="elite-modal-section" style={{ display: "block" }}>
                        <div id="elite-modal">
                            <div className="elite-modal-head">
                                <div className="elite-modal-head-left">
                                    <p className="elite-menu-para">ELITE</p>
                                    <h6 className="elite-menu-heading">See all Elite options</h6>
                                </div>
                                <img className="closeicon" src="/images/menu_close_button.svg" alt="close" />
                            </div>
                            <hr />
                            <div className="elite-program-details">
                                <div className="elite-option">
                                    <img src="/images/pythonElite.png" alt="Elite Icon" />
                                    <h6>Data Structures and Algorithms in Python</h6>
                                </div>
                                <div className="elite-option">
                                    <img src="/images/javaElite.png" alt="Elite Icon" />
                                    <h6>Data Structures and Algorithms in Java</h6>
                                </div>
                                <div className="elite-option">
                                    <img src="/images/c++Elite.png" alt="Elite Icon" />
                                    <h6>Data Structures and Algorithms in C++</h6>
                                </div>
                                <div className="elite-option">
                                    <img src="/images/uiuxElite.png" alt="Elite Icon" />
                                    <h6>UI/UX</h6>
                                </div>
                                <div className="elite-option">
                                    <img src="/images/digitalmarketingElite.png" alt="Elite Icon" />
                                    <h6>Digital Marketing</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar