import { Fragment, useMemo } from "react";
import { useGCPContext } from "./contexts/GCPContext";
import { Display, ErrorsMsg, Title } from "./styles";

const ErrorDisplay = () => {
	
	const { importErrors, hasNewContent } = useGCPContext();
	
	const num = useMemo(() => importErrors.length || 0, [importErrors]);
	const title = `Import${hasNewContent ? 'ed some of the data, but had ' : ''} error${ num > 1 ? 's ('+num+')' : ''}:`
	
	return (
		<Fragment>
			{ Boolean(importErrors.length) && <Display>
				<ErrorsMsg><Title>{title}</Title> { importErrors.join(';  ')}</ErrorsMsg>
			</Display> }
		</Fragment>
	);
};

export { ErrorDisplay };