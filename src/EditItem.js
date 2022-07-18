import { useEffect, useMemo, useState, Fragment } from "react";
import { useGCPContext } from "./contexts/GCPContext";
import { EditButton, EditInput, EditLabel, EditModal, Spacer } from "./styles";

const EditItem = () => {
	// ToDo: Add checks if there are changes ("dirty") to enable save button
	// ToDo: Add validations for the edited values
	
	const [isDirty, setIsDirty] = useState (false);
	const [edit, setEdit] = useState();
	
	const { editItemName, getEntryByName, editEntry, updateEntry } = useGCPContext ();
	const item               = useMemo (() => {
		setIsDirty (false);
		return getEntryByName (editItemName)
	}, [editItemName]);
	
	useEffect(() => {
		setEdit({...item})
	}, [item]);
	
	const handleChange = evt => {
		setEdit(prevState => ({ ...prevState, [evt.target.name]: evt.target.value}));
	}
	
	const handleCancelClicked = () => editEntry("");
	const handleSaveClicked = () => updateEntry(edit);
	
	return (
		<Fragment>
			{ editItemName &&
			  <EditModal>
				  <EditLabel>
					  Name:
				  <EditInput type="text" name="name" value={edit.name} defaultValue={item.name} onChange={handleChange} />
				  </EditLabel>
				  <EditLabel>
					  N:
					  <EditInput type="text" name="n" value={edit.n} defaultValue={item.n} onChange={handleChange} />
				  </EditLabel>
				  <EditLabel>
					  E:
					  <EditInput type="text" name="e" value={edit.e} defaultValue={item.e} onChange={handleChange} />
				  </EditLabel>
				  <EditLabel>
					  H:
					  <EditInput type="text" name="h" value={edit.h} defaultValue={item.h} onChange={handleChange} />
				  </EditLabel>
				  <Spacer />
				  <EditButton as="button" onClick={handleCancelClicked}>Cancel</EditButton>
				  <EditButton as="button" onClick={handleSaveClicked}>Save</EditButton>
			
			  </EditModal> }
		</Fragment>
	);
};

export { EditItem };