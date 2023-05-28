import { ClockIcon } from "@heroicons/react/24/outline";

export default function CreationTime({
	loading,
	cooking_time,
}: {
	loading: boolean;
	cooking_time: string;
}) {
	return (
		<>
			<h2 className={`${loading && "skeleton w-[200px]"}`}>Creation Time</h2>
			<span className="flex items-center font-bold leading-8 text-slate-700">
				<ClockIcon className="mr-1 w-6 h-6" />
				<span className={`${loading && "skeleton h-6 p-0"}`}>
					{cooking_time ? cooking_time : "90 minutes"}
				</span>
			</span>
		</>
	);
}
