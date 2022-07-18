import { createContext, useMemo, useState, useContext } from "react";
import { addToList } from "./GCPContext.utils";

const GCPContext = createContext({
	startImporting:     () => {},
	addFileToList:   () => {},
	removeEntry: () => {},
	editEntry:   () => {},
	getEntryByName: () => {},
	updateEntry: () => {},
	isLoading:   false,
	editItemName: "",
	hasNewContent: false,
	importErrors: [],
	listObj: {},
	
})

const GCPContextProvider = ({children}) => {
	const [isLoading, setIsLoading]         = useState(false);
	const [hasNewContent, setHasNewContent] = useState(false);
	const [listObj, setListObj]             = useState({});
	const [importErrors, setImportErrors] = useState([]);
	const [editItemName, setEditItemName] = useState("");
	
	const addFileToList = fileStr => {
		setHasNewContent(false);
		const {errors, newRows} = addToList(fileStr);
		if (Boolean(errors.length)) setImportErrors(errors);
		if (newRows) {
			setListObj(prevState => ({...prevState, ...newRows}));
			if (Boolean(errors.length)) setHasNewContent(true);
		}
	}
	
	const startImporting = () => {
		setIsLoading(true);
		setHasNewContent(false);
		setImportErrors([]);
		setEditItemName(null);
	};
	
	const removeEntry = name => {
		setListObj(prevState => {
			const { [name]: omit, ...list } = prevState;
			return list;
		})
	};
	
	const editEntry = name => {
		setImportErrors([]);
		setEditItemName(name);
	};
	
		// user may change the name
	const updateEntry = (previousName, item) => {
		setListObj(prevState => {
			const { [previousName]: omit, ...list } = prevState;
			list[item.name] = item;
			return list;
		})
	};
	
	const getEntryByName = name => listObj[name];
	
	const value = useMemo(() => ({
		startImporting,
		addFileToList,
		removeEntry,
		editEntry,
		getEntryByName,
		updateEntry,
		isLoading,
		editItemName,
		hasNewContent,
		importErrors,
		listObj,
	}))
	return <GCPContext.Provider value={value}>
		{children}
	</GCPContext.Provider>
};

const useGCPContext = () => {
	const context = useContext(GCPContext);
	if (context === undefined) {
		throw new Error(
			'useGCPContext must be used within a GCPContextProvider',
		);
	}
	return context;
}

export {GCPContextProvider, useGCPContext};