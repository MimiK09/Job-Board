import Job from "./Job";

const Jobs = (props) => {
	return (
		<main className="caseJob">
			<Job
				className="red"
				title="Dev web front"
				contractType="CDI"
				country="France"
				city="Paris"
			/>
			<Job
				className="green"
				title="Dev web back"
				contractType="CDD"
				country="Korea"
				city="Seoul"
			/>
			<Job
				className="yellow"
				title="Dev web fullStack"
				contractType="CDD"
				country="Japan"
				city="Tokyo"
			/>
			<Job
				className="blue"
				title="Product owner"
				contractType="CDI"
				country="USA"
				city="New York"
			/>
			<Job
				className="pink"
				title="Dev web back"
				contractType="CDI"
				country="France"
				city="Marseille"
			/>
			<Job
				className="red"
				title="Dev web front"
				contractType="CDI"
				country="France"
				city="Paris"
			/>
			<Job
				className="green"
				title="Dev web fullStack"
				contractType="CDD"
				country="Korea"
				city="Seoul"
			/>
			<Job
				className="yellow"
				title="Dev web fullStack"
				contractType="CDD"
				country="Japan"
				city="Tokyo"
			/>
			<Job
				className="blue"
				title="Dev web back"
				contractType="CDI"
				country="USA"
				city="New York"
			/>
		</main>
	);
};

export default Jobs;
