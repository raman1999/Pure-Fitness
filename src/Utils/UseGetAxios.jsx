export const UseGetAxios = (api, encodedToken) => {
    const [isLoading, setIsLoading] = useState(true);
    const [serverData, setServerData] = useState({});
    const [serverError, setServerError] = useState(null);
    const getData = async () => {
        try {
            setIsLoading(true);
            if (encodedToken) {
                let { data } = await axios.get(api, { headers: { authorization: encodedToken } });
            }
            else {
                let { data } = await axios.get(api);
            }
            setServerData(data);
        } catch (err) {
            setServerError(err);
        } finally {
            setIsLoading(false);
        }
    }
    useEffect(() => {
        getData()
    }, [api]);
    return {
        isLoading,
        serverData,
        serverError,
        setServerData
    };
} 