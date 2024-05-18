function InputsEditDataUser({label,type,id,dispatch,typeDis,value,nameEmpty}) {
    return (
        <div className="relative mb-5 last:m-0 md:flex md:justify-between">
            <label className="block text-sm cursor-pointer"  htmlFor={id}>{label}</label>
            {nameEmpty&&<span className="absolute right-1 top-2 text-sm text-red">Can’t be empty</span>}
            <input className={`w-full shadow-md p-2 border border-light-grey rounded-md md:w-[344px] focus:outline-none focus:border-primary focus:shadow-primary/40 ${nameEmpty?"border-red":""}`} type={type} value={value} id={id} onChange={(e)=>dispatch({type:typeDis,payload:e.target.value})}/>
        </div>
    )
}

export default InputsEditDataUser
