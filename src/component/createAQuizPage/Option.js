function Option({value, qno}) {

    return (
        <div>
            <input type={'radio'} name={qno}/>
            <label>{value}</label>
        </div>
    )
}

export default Option