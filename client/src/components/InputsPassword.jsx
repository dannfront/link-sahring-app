

function InputsPassword({htmlForId,label="password",placeholder,state,hanndler,empty}) {
    return (
        <div className="mt-5 relative">
            <label className="text-sm" htmlFor={htmlForId}>{label}</label>
            {empty&& <span className="absolute top-8 right-3 text-sm text-red">Please check again</span>}
            <input className="inputs-register-login  input-password shadow-md focus  input-email border border-light-grey rounded-lg w-full h-10 focus:outline-none focus:border-primary focus:shadow-primary/40" type="password" id={htmlForId} required value={state} placeholder={placeholder} onChange={(e)=> hanndler(e)}/>
        </div>
    )
}

export default InputsPassword
