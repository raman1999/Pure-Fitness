import * as Loader from "react-loader-spinner"
export function LoadingSpinner() {
    return (
        <Loader.TailSpin type="Oval" color="red" height={80} width={80} />
    )
}