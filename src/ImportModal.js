import { useEffect, useState } from "react";
import { useGCPContext } from "./contexts/GCPContext";
import { HiddenInput, InputWrapper, Modal } from "./styles";

const ImportModal = () => {
	const [file, setFile]   = useState ();
	const { addFileToList, startImporting } = useGCPContext ();
	
	const fileReader = new FileReader ();
	
	const handleOnChange = evt => {
		startImporting();
		setFile (evt.target.files[ 0 ]);
	};
	
	useEffect(() => {
		if ( file ) {
			fileReader.onload = function ( event ) {
				const text = event.target.result;
				addFileToList (text);
			};
			
			fileReader.readAsText (file);
		}
	}, [file]);
	
	return (
		<Modal>
			<InputWrapper>
				Select File To Load
			<HiddenInput type={ "file" }
				   id={ "csvFileInput" }
				   accept={ ".csv" }
				   onChange={ handleOnChange }/>
			</InputWrapper>
		</Modal>
	
	);
};

export { ImportModal };