export function Card({children,className}){
    return(
        <div className={`bg-card card ${className}`}>
            {children}
        </div>
    )
}