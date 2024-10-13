export function Form({children,action,method,onSubmit}){
    return(
        <form action={action} method={method} onSubmit={onSubmit}>
            {children}
        </form>
    )
}