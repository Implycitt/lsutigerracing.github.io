import { useRef } from "react";
import { Link } from "react-router-dom";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

import { AdminImages, ChassisImages, PowertrainImages, SoftwareImages } from "../assets/images/Team";

import SystemChassis from "../assets/images/Team/SystemChassis.jpg";
import SystemPowertrain from "../assets/images/Team/SystemPowertrain.jpg";
import SystemBusiness from "../assets/images/Team/SystemBusiness.jpg";
import SystemPublicRelations from "../assets/images/Team/SystemPublicRelations.jpg";
import SystemSoftware from "../assets/images/Team/SystemSoftware.jpg";

import DownArrow from "../assets/images/General/BIG-DOWN-ARROW.png"

import Linkedin from "../assets/images/General/icons/linkedin.png"
import Mail from "../assets/images/General/icons/mail.png"
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Team = () => {
    const landingRef = useRef<HTMLDivElement>(null);
    const tl = useRef<gsap.core.Timeline | null>(null);

	useGSAP(() => {
        tl.current = gsap
            .timeline()
            .from("#team-landing-text", {
                opacity: 0,
                y: -10,
                duration: 0.5,
                ease: "power1.out"
            })
            .from(".team-redirect-container", {
                opacity: 0,
                y: 30,
                delay: 0.1,
                duration: 0.5,
                ease: "power1.out",
            }, "-=0.2")
    }, { scope: landingRef })

    return (
    <div className="w-full background">
        <section className="team-landing" ref={landingRef}>
            <div className="text-center" id="team-landing-text">
                <h1 className="max-w-[85vw] mx-auto">Meet the hands behind the wheel.</h1>
                <p className="my-3">
                    TigerRacing is split into five different systems similar to a real engineering business operation.<br/>
                    Click on the icons to learn more!
                </p>
            </div>
            <section className="team-redirect-container mt-1 mb-5">
                <Redirect
                    to="/join/chassis"
                    image={SystemChassis}
                    title="Chassis"
                    description="Designs and builds all the mechanical components that make up the car's structure."
                />
                <Redirect
                    to="/join/powertrain"
                    image={SystemPowertrain}
                    title="Powertrain"
                    description="Develops the electrical systems that power and control the vehicle."
                />
                <Redirect
                    to="/join/business"
                    image={SystemBusiness}
                    title="Business"
                    description="Manages sponsor relationships, fundraising, and the team's financial operations."
                />
                <Redirect
                    to="/join/public-relations"
                    image={SystemPublicRelations}
                    title="PR"
                    description="Creates marketing materials, graphics, and media content to promote the team."
                />
                <Redirect
                    to="/join/software"
                    image={SystemSoftware}
                    title="Software"
                    description="Builds internal web tools and embedded devices to improve team productivity."
                />
            </section>
            <div className="w-fit flex flex-col gap-3 mx-auto items-center">
                <h2>Meet the 2027 Team</h2>
                <img
                    src={DownArrow}
                    className="w-[10%]"
                    alt="Down Arrow"
                />
            </div>
        </section>
        <div className="purple-line"/>

        {/* admin */}
        <section className="team-portrait-section">

        <h2>Admin</h2>
            <div className="team-portrait-container">
                <Portrait
                    to="none"
                    email="uabbas3@lsu.edu"
                    image={AdminImages.President}
                    title="President"
                    name="Urwah Abbas"
                />
                <Portrait
                    to="none"
                    email="James.Sirois@lsu.edu"
                    image={AdminImages.VicePresident}
                    title="Vice President"
                    name="James Sirois"
                />
                <Portrait
                    to="https://www.linkedin.com/in/rickyxliang/"
                    email="rliang4@lsu.edu"
                    image={AdminImages.PublicRelations}
                    title="Public Relations"
                    name="Ricky Liang"
                />
                <Portrait
                    to="https://www.linkedin.com/in/syphany-guo-3773b82b6/"
                    email="sguo15@lsu.edu"
                    image={AdminImages.Treasurer}
                    title="Treasurer"
                    name="Octavio Combello-Jaimes"
                />
                <Portrait
                    to="https://www.linkedin.com/in/tristan-thai/"
                    email="tthai5@lsu.edu"
                    image={AdminImages.Captain}
                    title="Captain"
                    name="Tristan Thai"
                />
                <Portrait
                    to="https://www.linkedin.com/in/anthony-terry-rojas-71788b2b2/"
                    email="aterr36@lsu.edu"
                    image={AdminImages.Chassis}
                    title="Chassis Lead"
                    name="Anthony Terry-Rojas"
                />
                <Portrait
                    to="https://www.linkedin.com/in/ian-robertson-00199b326/"
                    email="Ian.Robertson@lsu.edu"
                    image={AdminImages.Powertrain}
                    title="Powertrain Lead"
                    name="Ian Robertson"
                />
                <Portrait
                    to="https://www.linkedin.com/in/luka-brekalo1/"
                    email="lbreka1@lsu.edu"
                    image={AdminImages.Safety}
                    title="Education & Safety Chair"
                    name="Jered Perry"
                />
                {/* 
                <Portrait
                    to="https://www.linkedin.com/in/gareth-oram-02470a22b/"
                    email="goram1@lsu.edu"
                    image={AdminImages.Education}
                    title="Education Chair"
                    name="Gareth Oram"
                />
                <Portrait
                    to="none"
                    email="mteruy1@lsu.edu"
                    image={AdminImages.President}
                    title="President"
                    name="Mizuki Teryama"
                />
                <Portrait
                    to="https://www.linkedin.com/in/urwah-abbas/"
                    email="uabbas3@lsu.edu"
                    image={AdminImages.VicePresident}
                    title="Vice President"
                    name="Urwah Abbas"
                />
                <Portrait
                    to="none"
                    email="Thomas.Au@lsu.edu"
                    image={AdminImages.PublicRelations}
                    title="Public Relations"
                    name="Thomas Au"
                />
                <Portrait
                    to="https://www.linkedin.com/in/syphany-guo-3773b82b6/"
                    email="sguo15@lsu.edu"
                    image={AdminImages.Treasurer}
                    title="Treasurer"
                    name="Syph Guo"
                />
                <Portrait
                    to="https://www.linkedin.com/in/gareth-oram-02470a22b/"
                    email="goram1@lsu.edu"
                    image={AdminImages.Captain}
                    title="Captain"
                    name="Gareth Oram"
                />
                <Portrait
                    to="https://www.linkedin.com/in/tristan-thai/"
                    email="tthai5@lsu.edu"
                    image={AdminImages.Chassis}
                    title="Chassis Lead"
                    name="Tristan Thai"
                />
                <Portrait
                    to="https://www.linkedin.com/in/john-kiritsis/"
                    email="jkirit1@lsu.edu"
                    image={AdminImages.Powertrain}
                    title="Powertrain Lead"
                    name="Yianni Kiritsis"
                />
                <Portrait
                    to="https://www.linkedin.com/in/luka-brekalo1/"
                    email="lbreka1@lsu.edu"
                    image={AdminImages.Safety}
                    title="Safety Chair"
                    name="Luka Brekalo"
                /> */}
            </div>
        </section>

        <div className="purple-line"/>

{/* 
        <section className="team-portrait-section">
        <h2>Chassis Leads</h2>
            <div className="team-portrait-container">
                <Portrait
                    to="https://www.linkedin.com/in/nicholas-fortie-987191331/"
                    email="nforti2@lsu.edu"
                    image={ChassisImages.Frame}
                    title="Frame"
                    name="Nick Fortie"
                />
                <Portrait
                    to="https://www.linkedin.com/in/robert-gruse-892a59309/"
                    email="rgruse1@lsu.edu"
                    image={ChassisImages.Aerodynamics}
                    title="Aerodynamics"
                    name="Robert Gruse"
                />
                <Portrait
                    to="/team/member1"
                    email="James.Sirois@lsu.edu"
                    image={ChassisImages.Suspension}
                    title="Suspension"
                    name="James Sirois"
                />
                <Portrait
                    to="https://www.linkedin.com/in/anthony-terry-rojas-71788b2b2/"
                    email="aterr36@lsu.edu"
                    image={ChassisImages.Brakes}
                    title="Brakes"
                    name="Anthony Terry-Rojas"
                />
                <Portrait
                    to="https://www.linkedin.com/in/urwah-abbas/"
                    email="uabbas3@lsu.edu"
                    image={ChassisImages.Ergonomics}
                    title="Ergonomics"
                    name="Urwah Abbas"
                />
                <Portrait
                    to="https://www.linkedin.com/in/gareth-oram-02470a22b/"
                    email="goram1@lsu.edu"
                    image={ChassisImages.Drivetrain}
                    title="Drivetrain"
                    name="Gareth Oram"
                />
            </div>
        </section>

        <div className="purple-line"/>

        <section className="team-portrait-section">
        <h2>Powertrain Leads</h2>
            <div className="team-portrait-container">
                <Portrait
                    to="https://www.linkedin.com/in/emiliano-owsley-8660752ba/"
                    email="Emiliano.Owsley@lsu.edu"
                    image={PowertrainImages.Electronics}
                    title="Electronics"
                    name="Emiliano Owsley"
                />
                <Portrait
                    to="https://www.linkedin.com/in/gareth-oram-02470a22b/"
                    email="goram1@lsu.edu"
                    image={PowertrainImages.Battery}
                    title="Battery"
                    name="Gareth Oram"
                />
                <Portrait
                    to="https://www.linkedin.com/in/sammy-ziegler/"
                    email="sziegl6@lsu.edu"
                    image={PowertrainImages.LowVoltage}
                    title="Low Voltage"
                    name="Sammy Ziegler"
                />
                <Portrait
                    to="https://www.linkedin.com/in/luka-brekalo1/"
                    email="lbreka1@lsu.edu"
                    image={PowertrainImages.TractiveSystem}
                    title="Tractive System"
                    name="Luka Brekalo"
                />
            </div>
        </section>
        <div className="purple-line"/>


        <section className="team-portrait-section">
        <h2>Software Leads</h2>
            <div className="team-portrait-container">
                <Portrait
                    to="https://www.linkedin.com/in/rickyxliang/"
                    email="rliang4@lsu.edu"
                    image={SoftwareImages.AppDev}
                    title="Software Lead
                    App Development"
                    name="Ricky Liang"
                />
                <Portrait
                    to="https://www.linkedin.com/in/alex-bui-707b90355/"
                    email="abui34@lsu.edu"
                    image={SoftwareImages.Embedded}
                    title="Embedded Controls"
                    name="Alex Bui"
                />
                <Portrait
                    to="https://www.linkedin.com/in/brandon-randle-link/"
                    email="Brandon.Randle1@lsu.edu"
                    image={SoftwareImages.DAQ}
                    title="Data Analysis"
                    name="Brandon Randle"
                />
            </div>
        </section>
 */}
    </div>
  );
};

export default Team;

const Redirect = ( props: { to: any; image: any; title: any; description: any; } ) => {
    const {
        to,
        image,
        title,
        description
    } = props;
    return (
        <div
            className="team-redirect"
        >
            <h3>{title}</h3>
            <Link to={to}>
                <div className="team-redirect-img-container">
                    <img
                        src={image}
                        alt={title}
                    />
                </div>
            </Link>
            <p className="text-[0.8rem]">{description}</p>
        </div>
    )
}

// use "none" as an input to disable hover
const Portrait = ( props: { to: any; email: any; image: any; title: any; name: any; } ) => {
    const {
        to,
        email,
        image,
        title,
        name
    } = props;
    return (
        <div className='portrait'>
            <img
                src={image}
                alt={title}
                className="portrait-image"
                fetchPriority="high"
            />
            <div className="portrait-lining">
                <div className="portrait-content">
                    <p>{name}</p>
                    <h3 className="whitespace-pre-line">{title}</h3>
                </div>
            </div>
            <div className="portrait-contact">
                <div className="portrait-contact-content">
                    <h3>Contact</h3>
                    <div className="flex flex-row gap-2">
                        <a className={`${email === "none" ? 'hidden' : ''}`} href={`mailto:${email}`} target="_blank">
                            <img 
                                src={Mail}
                                alt="Mail Icon"
                            />
                        </a>
                        <a className={`${to === "none" ? 'hidden' : ''}`} href={to} target="_blank">
                            <img 
                                src={Linkedin}
                                alt="Linkedin Icon"
                            />
                        </a>
                    </div>

                </div>
            </div>

        </div>
    )
}