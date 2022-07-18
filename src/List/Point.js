import { useState } from "react";
import { useGCPContext } from "../contexts/GCPContext";
import { Action, ActionCell, Cell, NameCell, Row } from "./styles";


const Point = ({pointData}) => {
	const [ isHovered, setIsHovered ] = useState(false);
	const {name, n, e, h} = pointData;
	
	const { removeEntry, editEntry } = useGCPContext();
	
	const handleMouseOver = () => {
		setIsHovered(true);
	};
	
	const handleMouseOut = () => {
		setIsHovered (false);
	};
	
	return (
		<li onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
			<Row>
				<NameCell>{name}</NameCell>
				<Cell>{n}</Cell>
				<Cell>{e}</Cell>
				<Cell>{h}</Cell>
				{ isHovered && <ActionCell>
					<Action onClick={() => editEntry(name)}>Edit</Action>
					<Action onClick={() => removeEntry(name)}>Delete</Action>
				</ActionCell> }
			</Row>
			
		</li>
	);
};

export { Point };