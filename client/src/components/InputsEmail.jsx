import InputsEmpty from "./InputsEmpty"

function InputsEmail({state,hanndler,isEmpty}) {
    return (
        <div className="mt-5 relative">
            <label className="block text-sm" htmlFor="email">Email address</label>
            {isEmpty && <InputsEmpty mesage="Can’t be empty"/>}
            <input className="inputs-register-login input-email shadow-md focus  border border-light-grey rounded-lg w-full h-10 focus:outline-none focus:border-primary focus:shadow-primary/40" type="email" id="email" placeholder="e.g. alex@email.com" required onChange={(e)=>hanndler(e)} value={state} />
        </div>
    )
}

export default InputsEmail
