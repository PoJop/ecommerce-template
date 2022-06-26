import React from "react"
import { newId } from "../../../utils/utils"

export const FormInput = ({ label, validation, getError }) => {

    const [state, setState] = React.useState({ value: '', error: '   dsd ' })
    let id = newId()

    const validationFunc = (value, callback, validation) => {
        const error = ''
        for (let index = 0; index <= validation.length; index++) {
            switch (validation[index]?.toLowerCase()) {
                case 'email':
                    if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
                        error = 'Invalid email address'
                    }
                    break;
                case 'required':
                    if (!value) error = 'Required'
                    break;
                default:
                    break;
            }
        }
        callback({ value: value, error: error })
    }
    React.useEffect(() => {
        getError(label, state.error.length > 0)
    }, [state])
    return (
        <label className="text-gray-900">
            {label} <span id="error">{state.error}</span>
            <input
                className="rounded-md custom-input"
                value={state.value}
                onBlur={(e) => {
                    validationFunc(e.target.value, setState, validation)
                }}
                onChange={(e) => {
                    validationFunc(e.target.value, setState, validation)
                }}
            />
        </label>
    )
}