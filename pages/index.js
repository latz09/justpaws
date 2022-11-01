import AboutBlurb from "../components/about/AboutBlurb";
import LandingHero from "../components/layout/heros/LandingHero";

export default function Home() {
	return (
		<div className="grid gap-9 mb-9">
			<LandingHero />
			<AboutBlurb />
		
		</div>
	);
}
