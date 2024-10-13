export function Button({onClick,className,type,icon,children}){
    return<button className={className} onClick={onClick} type={type}>{icon} {children}</button>
}