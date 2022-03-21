export default function ErrorText({ errorName }) {

    return (
        <div
            style={{
                display: errorName ? 'inline-block' : 'none'
            }} className="txt-bgFailure txt-left"
        >
            <span className='txt-bgFailure'>
                <i className='fas fa-exclamation-circle'></i>
            </span>
            {errorName}
        </div>
    )
}