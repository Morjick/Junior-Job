import { Link } from "react-router-dom"


export default function UiButton (props) {
  const { text, callback, otherClass, isHref, path } = props

  if(isHref && path) {
    return (
      <Link to={path} className={`ui-button ${ otherClass }`}>
        <button 
          onClick={ callback }
        >{ text }</button>
      </Link>
    )
  }

  return (
    <button 
      className={`ui-button ${ otherClass }`}
      onClick={ callback }
    >{ text }</button>
  )
}
