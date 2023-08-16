export const requiredFiled = (value:any) => {
    if (value) return undefined


    return 'Field is required!'
}


export const maxLengthCreator = (maxLength:number) => (value:any) => {
    if (value && value.length > maxLength) return 'Max ' + maxLength +  ' symbols!'

    return undefined
}