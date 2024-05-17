import useCounter from "./useCounter"

export default function Counter() {
    const {counterData} = useCounter();
	
  return (
		<div className="flex flex-col gap-10 items-center justify-center md:pt-16 pt-10 pb-2 text-center sm:flex-row md:gap-7">
			{counterData && counterData?.map((counter) => (
				<div className="flex flex-col text-center sm:gap-y-1 justify-center items-center" key={counter.id}>
					<h4 className="font-bold text-3xl">{counter.figure}+</h4>
					<span className="text-gray-500 font-medium text-lg sm:text-base">{counter.label}</span>
				</div>
			))}
		</div>
	);
}
				
