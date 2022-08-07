import React, { useEffect, useState } from "react"

type Validate = (text: string) => { isValid: boolean, message: string}

function useInput(defaulValue: string, validate: Validate) {

    const [value, setValue] = useState(defaulValue)
    const [error, setError] = useState<string>("")

    return {
        value,
        setValue,
        bind: {
            value,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                let { isValid, message } = validate(e.target.value)
                if (!isValid) {
                    setError(message)
                } else setError("")
                setValue(e.target.value)
            }
        },
        error,
        setError,
        checkValidate() {
            let { isValid, message } = validate(value)
            if (!isValid) {
                setError(message)
            } else setError("")
            return isValid
        }
    }
}


export default useInput