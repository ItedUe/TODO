import classes from './Header.module.scss'
export const Header = () =>{
    return(
        <div>
            <header className={classes.header}>
            <div className={classes.container}>
                <a href="/" className={`${classes.link} ${classes.active}`}>ToDo</a>
            </div>
            </header>
        </div>
    )
}