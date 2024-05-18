
import { useContextDataUser } from "../contexts/contextDataUser"
import InputsEditDataUser from "./InputsEditDataUser"

function EditDataUse({nameEmpty}) {
    const {name,email,lastName,dispatch}=useContextDataUser()

    return (
        <div className=" bg-White-bone rounded-lg p-3 m-3">
            <InputsEditDataUser id='name' label='First name' type='text'  dispatch={dispatch} value={name} typeDis='name' nameEmpty={nameEmpty}/>
            <InputsEditDataUser id='last' label='Last name' type='text' dispatch={dispatch} value={lastName} typeDis='lastName'/>
            <InputsEditDataUser id='email' label='Email' type='email' dispatch={dispatch} value={email} typeDis='email'/>
        </div>
    )
}

export default EditDataUse
