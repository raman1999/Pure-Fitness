export const useDocumentTitle = (docTitle) => {
    useEffect(() => {
        document.title = docTitle;
    }, []);

}