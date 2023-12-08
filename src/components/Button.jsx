function Button (props) {
    return (
        <div className='card'>
            <button className={`button ${props.rounded && 'round-button'} square google`}>{props.text}</button>
        </div>
    )
}

export default Button