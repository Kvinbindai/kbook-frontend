
const validateInput = (schema,body) => { //body = {email }
    const {  value,error } = schema.validate(body,{abortEarly: false})
    let errorObj = {}
    if(error) {
        error.details.reduce((acc,e)=>{
            let key = e.path[0]
            let value = e.message
            acc[key] = value
            return acc
        },errorObj)
    }
    return {value , errorObj}
}

export default validateInput