import { Header, HeaderRow, NameHeader } from "./styles";
import { StyledInput, StyledLabel } from "../styles";

const Headers = ({changeSort, changeFilter}) => {
	const clickHandler = column => () => changeSort(column);
	const typeHandler = evt => changeFilter(evt.target.value);
	
	return (
		<HeaderRow>
			<NameHeader onClick={clickHandler("name")}>Name</NameHeader>
			<Header onClick={clickHandler("n")}>N</Header>
			<Header onClick={clickHandler("e")}>E</Header>
			<Header onClick={clickHandler("h")}>H</Header>
			<StyledLabel>Filter by name (case-sensitive): <StyledInput type={"text"} onChange={typeHandler} /></StyledLabel>
		</HeaderRow>
	);
};

export { Headers };