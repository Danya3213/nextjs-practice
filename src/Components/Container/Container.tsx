import cl from './Container.module.scss'

export const Container = ({children, className = ''}) => {

    return (
        <div className={`${cl.container} ${className}`}>
            {children}
        </div>
    );
};