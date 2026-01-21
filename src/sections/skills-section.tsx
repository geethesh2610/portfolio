import Section from "../components/section";

export default function SkillsSection() {
	const skills = [
		"HTML5",
		"CSS3",
		"JavaScript",
		"React.js",
		"Next.js",
		"Nuxt.js",

		// Styling & UI
		"Tailwind CSS",
		"Bootstrap",

		// Animations
		"GSAP",
		"Framer Motion",

		// Backend (Basic)
		"Laravel",
		"Livewire",

		// Databases (Basic)
		"MySQL",

		// Tools
		"Git",
		"GitHub",
		"Chrome DevTools",
		"Figma (Basic)",
	];

	return (
		<Section title="Skills">
			<div className="flex flex-wrap justify-center sm:justify-start gap-4">
				{skills.map((skill) => (
					<p key={skill} className="border cursor-default border-gray-300 hover:bg-gray-100/70 text-gray-600 text-[13px] rounded-full px-5 py-1.5">
						{skill}
					</p>
				))}
			</div>
		</Section>
	);
}
