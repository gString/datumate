import { Fragment, useMemo, useState } from "react";
import { useGCPContext } from "../contexts/GCPContext";
import { Point } from "./Point";
import { Headers } from "./Headers";
import { Display, List } from "./styles";

const ListDisplay = () => {
	const [orderBy, setOrderBy] = useState("name");
	const [filter, setFilter] = useState("");
	
	const { listObj } = useGCPContext();
	
	const filteredList = useMemo(() => Object.values(listObj).filter(item => Boolean(filter.length) ? item.name.includes(filter) : true) || []
	, [listObj, filter]);
	
	const sortFunctions = orderBy => {
		// this is too specific solution, but is a good compromise in this case
		if (orderBy === "name") {
			return (a, b) => {
				if ( a[orderBy] < b[orderBy] ) return -1;
				if ( a[orderBy] > b[orderBy] ) return 1;
				return 0;
			}
		}
		return (a, b) => Number(a[orderBy]) -  Number(b[orderBy]);
	}
	const list = useMemo(() => filteredList.map(item => item).sort(sortFunctions(orderBy)) || [], [filteredList, orderBy]);
	
	const changeSort = column => setOrderBy(column);
	
	const changeFilter = str => setFilter(str);
	
	// ToDo: Make the list scrollable
	return (
		<Fragment>
			{ Boolean(list.length) && <Display>
				<Headers changeSort={changeSort} changeFilter={changeFilter} />
				<List>
					{list.map(item => <Point key={item.name} pointData={item} /> )}
				</List>
				
			</Display> }
		</Fragment>
	);
};

export { ListDisplay };