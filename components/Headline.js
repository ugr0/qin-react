import classes from './Headline.module.css'

export function Headline(props) {
  return (
    <>
      <h1 className={classes.title}>
        {props.page} Page
      </h1>

      <p className={classes.description}>
        Get started by editing {props.children}
      </p>
    </>
  )
}