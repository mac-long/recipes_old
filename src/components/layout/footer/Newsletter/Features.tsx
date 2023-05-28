import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline';

export default function NewsletterFeatures() {
  return (
    <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
      <div className="flex flex-col items-start">
        <div className="p-2 rounded-md ring-1 bg-white/5 ring-white/10">
          <CalendarDaysIcon className="w-6 h-6 text-white" aria-hidden="true" />
        </div>
        <dt className="mt-4 font-semibold text-white">Weekly articles</dt>
        <dd className="mt-2 leading-7 text-slate-400">
          Regular meal updates is great for your health, both mental and
          physical. So enjoy recieving a variety of recipes.
        </dd>
      </div>
      <div className="flex flex-col items-start">
        <div className="p-2 rounded-md ring-1 bg-white/5 ring-white/10">
          <HandRaisedIcon className="w-6 h-6 text-white" aria-hidden="true" />
        </div>
        <dt className="mt-4 font-semibold text-white">No spam</dt>
        <dd className="mt-2 leading-7 text-slate-400">
          Only the highest quality recipes and nothing more from these
          newsletters. No spam to worry about.
        </dd>
      </div>
    </dl>
  );
}
