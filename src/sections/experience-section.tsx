import Section from "../components/section";

export default function ExperienceSection() {
	const experience = [
		{
			image: "/assets/artworksit.jpg",
			title: "Frontend Developer",
			company: "ArtworksIT",
			location: "Bengaluru",
			start: "Feb 2023",
			end: "Present",
			description: [
				"Architected and developed 30+ full-stack web applications using Laravel, Nuxt.js, React.js and Next.js with a focus on scalability and maintainability.",
				"Built responsive, user-friendly interfaces using Tailwind CSS and Bootstrap across multiple devices.",
				"Implemented secure and scalable backend systems in Laravel following clean architecture principles.",
				"Owned projects end-to-end from requirements and system design to development and delivery.",
				"Worked closely with designers and product managers to deliver high-quality solutions on time.",
				"Improved application performance by optimizing load times and server response.",
			],
		},
		{
			image: "/assets/meethale.jpeg",
			title: "Sales Executive",
			company: "Meethale Logistics Pvt Ltd",
			location: "Gandhidham",
			start: "Aug 2021",
			end: "Jan 2023",
			description: ["Identified and pursued sales opportunities through cold calling and social media outreach.", "Negotiated and closed deals with a diverse client base while consistently meeting sales targets.", "Improved customer satisfaction by actively understanding client needs and implementing service improvements."],
		},
	];

	return (
		<Section title="Experience">
			<div className="space-y-6">
				{experience.map((experience) => (
					<div key={experience.title} className="w-full border border-gray-200 p-6 rounded-xl">
						<div className="flex flex-col md:flex-row items-start gap-3 md:items-center justify-between w-full text-gray-500">
							<div className="flex flex-col md:flex-row items-start md:items-center gap-3">
								<div className="bg-gray-50 border border-gray-200 rounded-lg size-14 overflow-hidden">
									<img src={experience.image} alt={experience.title} className="size-full" />
								</div>
								<div>
									<h3 className="text-base font-medium text-gray-800">{experience.title}</h3>
									<div>{experience.company}</div>
								</div>
							</div>
							<div>
								{experience.start} - {experience.end}
							</div>
						</div>
						<ul className="list-disc px-5 mt-6 text-gray-500 space-y-2">
							{experience.description.map((description) => (
								<li key={description}>{description}</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</Section>
	);
}
