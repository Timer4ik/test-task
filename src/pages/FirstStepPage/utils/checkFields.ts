import { useInputType, useTextareaType } from "../../../models/models"

export const isLength = (value: any, min = 0, max = 4000) => {
    const len = value?.trim().length
    return len <= max && len >= min
}

export function checkValidateAndSetErrors(inputs: (useInputType|useTextareaType)[]) {

    let errors = 0

    for (let i = 0; i < inputs.length; i++) {
        try {
            if (!inputs[i].checkValidate()) {
                errors++
            }
        } catch (error) {
            console.log(i)
        }

    }

    return errors;
}

export function clearFields(inputs: (useInputType|useTextareaType)[]) {
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].setValue("")
    }
}
