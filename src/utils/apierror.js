class ApiError{
    constructor(
        statuscode,
        message="something went wrong",
        error=[],
        stack=""
    ){
        super(message)
        this.statuscode=stack,
        this.message=message,
        this.success=false,
        this.error=error
        if(stack){
            this.stack=stack
        }else{
            error.captureStackTrace(this,this.constructor)
        }

    }
}
export {ApiError}