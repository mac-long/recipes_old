import { CameraIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { Link } from "react-feather";
import Background from "./Background";
import CreationTime from "./main/CreationTime";
import Heading from "./main/Heading";
import Ingredients from "./main/Ingredients";
import Instructions from "./main/Instructions";
import Summary from "./main/Summary";

export default async function Content({
	meal,
	title,
	photographer_name,
	photographer_url,
	image_url,
	summary,
	ingredients,
	cooking_time,
	instructions,
	loading,
}: any) {
	return (
		<div className="overflow-hidden relative py-32 px-6 bg-white lg:overflow-visible lg:px-0 isolate">
			<Background />
			<div className="grid grid-cols-1 gap-x-8 gap-y-16 mx-auto max-w-2xl lg:grid-cols-2 lg:gap-y-10 lg:items-start lg:mx-0 lg:max-w-none animate-slideLeft">
				<div className="lg:grid lg:grid-cols-2 lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:gap-x-8 lg:px-8 lg:mx-auto lg:w-full lg:max-w-7xl">
					<div className="lg:pr-4">
						<div className="lg:max-w-lg">
							<Heading loading={loading} meal={meal} title={title} />
							<Summary loading={loading} summary={summary} />
							<Ingredients loading={loading} ingredients={ingredients} />
							<CreationTime loading={loading} cooking_time={cooking_time} />
						</div>
					</div>
					<Instructions loading={loading} instructions={instructions} />
				</div>
				<div className="p-12 -mt-12 -ml-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 animate-slideRight">
					<Image
						className="max-w-none bg-gray-900 rounded-xl ring-1 shadow-2xl sm:max-w-2xl w-[64rem] ring-gray-400/10"
						style={{ width: "auto", height: "auto" }}
						src={image_url}
						alt={`${title} a food for ${meal}.`}
						width={1024}
						height={672}
						priority
						placeholder="blur"
						blurDataURL="https://placehold.co/1024x662"
					/>
					<Link
						className="flex items-center w-64 text-xs font-extralight"
						href={
							photographer_url ||
							`https://unsplash.com/s/users/${photographer_name}`
						}
						target="_blank"
					>
						<CameraIcon className="mr-1 w-6 h-6" />
						{photographer_name}
					</Link>
				</div>
				<Link href="/recipes" className="mx-auto button primary">
					Back to recipes
				</Link>
			</div>
		</div>
	);
}
