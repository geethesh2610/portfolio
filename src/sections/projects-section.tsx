import Section from "../components/section";

export default function ProjectsSection() {
	const projects = [
		{
			title: "Hunan Square",
			description: "Modern Dining Experience",
			image: "/assets/hunan-square.png",
			liveUrl: "https://hunansquare.com/",
			githubUrl: "",
		},
		{
			title: "Greensky Logistics",
			description: "Smart Logistics Solutions",
			image: "/assets/greensky.png",
			liveUrl: "https://greensky.ae/",
			githubUrl: "",
		},
		{
			title: "Celeste Properties",
			description: "Premium Property Platform",
			image: "/assets/celeste.png",
			liveUrl: "https://celestelanddeals.com/",
			githubUrl: "",
		},
	];

	return (
		<Section title="Projects">
			<div className="sm:grid sm:grid-cols-2 flex flex-wrap justify-center gap-4 mr-auto">
				{projects.map((project) => (
					<a key={project.title} href={project.liveUrl || project.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:-translate-y-0.5 transition duration-300 max-w-75 border border-gray-200 rounded-xl block">
						<img className="rounded-t-xl h-42 object-cover" src={project.image} alt={project.title} width={300} height={170} />
						<div className="p-4">
							<h3 className="text-base font-medium">{project.title}</h3>
							<p className="text-gray-500 mt-1">{project.description}</p>
						</div>
					</a>
				))}
			</div>
		</Section>
	);
}
