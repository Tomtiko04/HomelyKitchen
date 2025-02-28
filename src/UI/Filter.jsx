import { useSearchParams } from "react-router-dom";
import {PropTypes} from "prop-types";


export default function Filter({filterField, options}) {
    const [searchParams, setSearchParams] = useSearchParams();

    function handleClick(value){
        searchParams.set(filterField, value);
        setSearchParams(searchParams);
    }
   
  return (
		<select
			onChange={(e) => handleClick(e.target.value)}
			value={searchParams.get(filterField) || options[0].value}
			name={filterField}
			className="border rounded py-2 w-60 px-3 shadow bg-white outline-none focus:outline-none focus:ring focus:ring-orange-500 ">
			{options.map((option) => (
				<option
					key={option.id}
					value={option.value}
					className="hover:bg-orange-100 rounded cursor-pointer p-1 appearance-none">
					{option.label}
				</option>
			))}
		</select>
	);
}

Filter.propTypes = {
    options: PropTypes.any,
    filterField: PropTypes.any
}
