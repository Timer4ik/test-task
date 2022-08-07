export interface IRating {
    id: number
    title: string
}

export interface ResponseType {
    code: number
    result: IRating[]
}

export interface IDate {
    id:number
    startDate: string
    startTime: string
    endDate: string
    endTime: string
}

export interface useInputType {
    value: string
    setValue: Function
    bind: {
        value: string
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => any
    }
    error: string
    setError: Function
    checkValidate:() =>boolean
}
export interface useTextareaType {
    value: string
    setValue: Function
    bind: {
        value: string
        onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => any
    }
    error: string
    setError: Function
    checkValidate:() =>boolean
}

export interface PhotoReaderType {
    bind: {
        ref: React.MutableRefObject<any>;
        onChange: (event: any) => void;
    };
    check: () => void;
    load: (e: any) => void;
    delete: (id: any) => void;
    previews: {
        id: any;
        file: File;
        baseCode: ArrayBuffer;
    }[];
    clear: () => void;
}

