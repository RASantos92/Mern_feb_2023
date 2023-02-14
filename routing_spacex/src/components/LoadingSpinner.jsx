import loadingSpinnerStyle from "./LoadingSpinner.module.css"

const LoadingSpinner = (props) => {
    return (
        <div className={loadingSpinnerStyle.spinnerContainer}>
            <div className={loadingSpinnerStyle.loadingSpinner}></div>
        </div>
    )
}

export default LoadingSpinner;