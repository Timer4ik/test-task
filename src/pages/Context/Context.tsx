import { createContext, useRef } from "react"
import { IDate, IRating, PhotoReaderType, useInputType, useTextareaType } from "../../models/models"

export interface ContextProps {
    organizer: useInputType
    phone: useInputType
    email: useInputType
    city: useInputType
    name: useInputType
    description: useTextareaType
    address: useInputType

    ratings: IRating[]
    setRatings: React.Dispatch<React.SetStateAction<IRating[]>>

    dates: IDate[]
    setDates: React.Dispatch<React.SetStateAction<IDate[]>>

    startDate: useInputType
    startTime: useInputType
    endDate: useInputType
    endTime: useInputType

    selectedRating: useInputType

    photoReader: PhotoReaderType

    isValid: boolean
    setIsValid: Function
    handleClear: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => any
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => any
    handleAddDate: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => any

}

const useInputDefault = {
    bind: { onChange: () => { }, value: "" },
    checkValidate: () => false,
    error: "",
    setError: () => { },
    setValue: () => { },
    value: ""
}

const initialContext: ContextProps = {
    organizer: useInputDefault,
    phone: useInputDefault,
    email: useInputDefault,
    city: useInputDefault,
    name: useInputDefault,
    description: useInputDefault,
    address: useInputDefault,

    ratings: [],
    setRatings: () => { },
    selectedRating: useInputDefault,

    dates: [],
    setDates: () => { },
    startDate: useInputDefault,
    startTime: useInputDefault,
    endDate: useInputDefault,
    endTime: useInputDefault,

    photoReader: {
        bind: { onChange: () => { }, ref: { current: "" } },
        check: () => { },
        clear: () => { },
        delete: () => { },
        load: () => { },
        previews: []
    },

    isValid: false,
    setIsValid: () => { },
    handleClear: () => { },
    handleSubmit: () => () => { },
    handleAddDate: () => { }
}

export const Context = createContext<ContextProps>(initialContext)