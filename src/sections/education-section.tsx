import Section from "../components/section";

export default function EducationSection() {
	return (
		<Section title="Education">
			<div className="w-full border border-gray-200 p-6 rounded-xl">
				<div className="flex flex-col md:flex-row items-start gap-3 md:items-center justify-between w-full text-gray-500">
					<div className="flex flex-col md:flex-row items-start md:items-center gap-3">
						<div className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden">
							<img src="/assets/michaels.jpg" alt="Education" width={25} height={25} className="size-14" />
						</div>
						<div>
							<h3 className="text-base font-medium text-gray-800">Bachelor of Vocation - Software Development</h3>
							<div>St.Michael's College, Cherthala</div>
						</div>
					</div>
					<div>Jun 2018 - Apr 2021</div>
				</div>
			</div>
		</Section>
	);
}
