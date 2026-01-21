import Section from "../components/section";

export default function ContactSection() {
	return (
		<Section title="Contact">
			<table className="table-auto mr-auto">
				<tbody>
					<tr>
						<td className="pr-4 py-2">Email:</td>
						<td className="py-2 text-gray-500">
							<a href="mailto:geetheshnair123@gmail.com">geetheshnair123@gmail.com</a>
						</td>
					</tr>
					<tr>
						<td className="pr-4 py-2">Phone:</td>
						<td className="py-2 text-gray-500">
							<a href="tel:+916282414631">(+91) 62824 14631</a>
						</td>
					</tr>
				</tbody>
			</table>
		</Section>
	);
}
