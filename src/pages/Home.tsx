import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import { horizontalLoop } from '../helpers/horizontalLoop';

import { Link } from 'react-router-dom';
import { holdForReveal } from '../helpers/intro';

import Landing from "../assets/images/Home/Landing.jpg";
import Hero from "../assets/images/Home/Hero.jpg";

import About from "../assets/images/Home/About.jpg";
import Join from "../assets/images/Home/Join.jpg";
import Sponsor from "../assets/images/Home/Sponsor.jpg";

// Carousel
import Tilt from "../assets/images/Home/Carousel/Tilt.jpg"
import Judge from "../assets/images/Home/Carousel/Judge.jpg"
import Run from "../assets/images/Home/Carousel/Run.jpg"

// Sponsors
import BASF from "../assets/images/Home/Sponsor-Icons/BASF.png"
import Ecotron from "../assets/images/Home/Sponsor-Icons/Ecotron.png"
import Exxon from "../assets/images/Home/Sponsor-Icons/Exxon.png"
import Haas from "../assets/images/Home/Sponsor-Icons/Haas.png"
import Hoosier from "../assets/images/Home/Sponsor-Icons/Hoosier.png"
import Kenesto from "../assets/images/Home/Sponsor-Icons/Kenesto.png"
import LSUEngineering from "../assets/images/Home/Sponsor-Icons/LSUEngineering.png"
import Siemens from "../assets/images/Home/Sponsor-Icons/Siemens.png"
import Solidworks from "../assets/images/Home/Sponsor-Icons/Solidworks.png"
import { useState } from 'react';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
	const { contextSafe } = useGSAP(() => {
		const revealTagline = contextSafe(() => {
			gsap.from(".home-landing-tagline", {
				y: 60,
				opacity: 0,
				duration: 1
			})
		})
		const holdTagline = holdForReveal(revealTagline)

		gsap.from(".home-redirect", {
			clipPath: "inset(0 0 100% 0)",
			duration: 1.2,
			ease: "power1.out",
			stagger: 0.2,
			scrollTrigger: {
				trigger: ".home-redirect-section",
				start: "top center",
				// markers: true
			}
		})
        const logos = gsap.utils.toArray<HTMLElement>('.sponsor-logo');

		const loop = horizontalLoop(logos, {
			repeat: -1,
			speed: 1,
			paused: false,
			dragToScroll: true,
			invalidateOnRefresh: true,
			paddingRight: 45
		});

		gsap.from("#home-competition-image", {
			clipPath: "inset(0 0 100% 0)",
			duration: 0.8,
			ease: "power1.out",
			stagger: 0.3,
			scrollTrigger: {
				trigger: ".home-competition-section",
				start: "top center",
				// markers: true
			}
		})

		return holdTagline
	})

	return (
		<div className="background">
			<div className="flex-center relative w-screen h-screen overflow-hidden">
				{/* Background Image */}
				{/* WARNING: discord embed of this website relies on this image; if you change this image out in the future, make sure to update index.html too. */}
				<img
					src={Landing}
					alt="Racing car"
					className="absolute inset-0 w-full h-full object-cover"
					fetchPriority="high"
				/>
				
				{/* Gradient Overlay */}
				<div className="absolute inset-0"
				style={{
					background: 'linear-gradient(to bottom, transparent 0%, transparent 64%, var(--standard-purple) 100%)'
				}}    
				/>
				
				{/* Text Content */}
				<div className="home-landing-tagline">
					<h2>
					Working toward a sustainable future of electric motorsport.
					</h2>
				</div>
			</div>

			<div className="w-[40%] max-[800px]:w-[50%] max-[475px]:w-[80%] text-center mx-auto">
				<p>TigerRacing FSAE is LSU's student-led Formula SAE Electric team. We design, build, and race a fully electric formula-style race car from the ground up, competing against universities worldwide while gaining real-world engineering experience.</p>
			</div>

			<div className="text-8xl text-center !mt-[8vh]">
				<h2 className="text-[#FFD500]">Powering TigerRacing</h2>
			</div>
			<div className='home-sponsor-bar-container'>
				<div className='home-sponsor-bar'>
					<div className='sponsor-logo'>
						<img 
							src={BASF}
							alt='BASF'
						/>
					</div>
					<div className='sponsor-logo'>
						<img 
							src={Exxon}
							alt="Exxon"
						/>
					</div>
					<div className='sponsor-logo'>
						<img 
							src={Haas}
							alt="Haas"
						/>
					</div>
					<div className='sponsor-logo'>
						<img
							src={Hoosier}
							alt="Hoosier"
						/>
					</div>
					<div className='sponsor-logo'>
						<img 
							src={Kenesto}
							alt="Kenesto"
						/>
					</div>
					<div className='sponsor-logo'>
						<img
							src={LSUEngineering}
							alt="LSU College of Engineering"
						/>
					</div>
					<div className='sponsor-logo'>
						<img 
							src={Ecotron}
							alt="Ecotron"
							/>
					</div>
					<div className='sponsor-logo'>
						<img 
							src={Solidworks}
							alt="Solidworks"
						/>
					</div>
				</div>
			</div>

			<div className="purple-line mb-[5rem]"/>

			<section className="home-redirect-section">
				<Redirect
					to="/about"
					image={About}
					title="About Us"
					description="We started as a curriculum-integrated program. Now, we grow as our own independent team. Learn more about our history behind TigerRacing."
				/>
				<Redirect
					to="/join"
					image={Join}
					title="Join Us"
					description="Be part of something bigger. Whether you're designing battery systems or managing the build schedule, there's a place for you on our team."
				/>
				<Redirect
					to="/cars"
					image={Sponsor}
					title="Sponsor Us"
					description="Help us push the boundaries of electric vehicle technology. Your support fuels innovation and gives students real-world engineering experience."
				/>
			</section>
			<div className="flex-center relative w-screen overflow-hidden home-white-section-hero">
				{/* Background Image */}
				<img
					src={Hero}
					alt="Racing car"
					className="absolute inset-0 w-full h-full object-cover"
				/>
				
				{/* Gradient Overlay */}
				<div className="absolute inset-0"
				style={{
					background: 'linear-gradient(to top, transparent 0%, transparent 90%, var(--standard-purple) 100%)'
				}}    
				/>
			</div>

			<section className='bg-white text-black w-screen h-fit'>
				<div className='w-[var(--wide-width)] mx-auto pt-5'>
					<div className='w-[72%] max-[475px]:w-full'>
						<h3 className='pb-5'>Starting in 1985 as an ME capstone project, LSU TigerRacing has become a proving ground where theory meets the test of competition. </h3>
						<p>Here, hands-on experience fuels innovation as we design, build, and race cutting-edge formula vehicles.
							<br/><br/>
							Our shift to electric racing in 2023 reflects both our commitment to progress and our dedication to preparing the next generation of engineers. 
							<br/><br/>
							Every season brings new challenges, new solutions, and new opportunities to push further—on the track and beyond it.</p>
					</div>
				</div>

				<section className='home-competition-section'>
					<img
						src={Tilt}
						className='home-competition-big-image'
						alt="Tilt Test"
						id='home-competition-image'
					/>
					<div className='home-competition-content flex flex-col'>
						<div className='pb-3 max-w-[48%]'>
							<h3>Where Theory Meets Reality</h3>
						</div>
						<div className='flex flex-col justify-between gap-4 flex-1'>
							<div className='flex gap-8'>
								<div className='flex-1'>
									<p>
										Every year, we compete at Formula SAE Electric events against top engineering programs from around the world. The competition tests every aspect of our car through dynamic events like acceleration, autocross, and endurance, plus static events where we defend our design choices to industry judges.
									</p>
								</div>
								<div className='flex-1'>
									<p>
										These competitions push us to our limits. Track time reveals what works and what needs improvement. Judge feedback challenges our assumptions. Every event teaches us something new about engineering, teamwork, and what it takes to build a winning vehicle.
									</p>
								</div>
							</div>

							<div className='flex gap-8 min-h-[50%]'>
								<div className='flex-1'>
									<img
										src={Judge}
										className='w-full h-full object-cover'
										alt="Judging at Competition"
										id='home-competition-image'
									/>
								</div>
								<div className='flex-1'>
									<img
										src={Run}
										className='w-full h-full object-cover'
										alt="Car Driving"
										id='home-competition-image'
									/>
								</div>
							</div>
						</div>

						
					</div>

				</section>

			<div className='home-end-section'>
				<Link 
					to="/sponsor"
					className='bg-[var(--standard-yellow)] flex-6 flex items-center'
				>
					<div className='w-[calc(100%-80px)] h-[calc(100%-80px)] m-auto flex flex-col justify-between'>
						<span>
							<h3>Want to keep our wheels spinning?</h3>
							<p>Let's Talk!</p>
						</span>
						<h2>Sponsor Us</h2>
					</div>
				</Link>
				<Link 
					to="/join"
					className='bg-[var(--standard-purple)] text-white flex-4 flex items-center'
				>
					<div className='w-[calc(100%-80px)] h-[calc(100%-80px)] m-auto flex flex-col justify-between'>
						<span>
							<h3>No backseat engineers here.</h3>
							<p>Grab the wheel!</p>
						</span>
						<h2>Join Us</h2>
					</div>
				</Link>
			</div>
			</section>
		</div>
  	);
};

export default Home;

const Redirect = ( props: { to: any; image: any; title: any; description: any; } ) => {
    const {
        to,
        image,
        title,
        description
    } = props;
    return (
        <div className="home-redirect">
            <h3>{title}</h3>
			<Link to={to}>
				<div className="home-redirect-img-container">
					<img
						src={image}
						alt={title}
					/>
				</div>
			</Link>
            <p>{description}</p>
        </div>
    )
}
