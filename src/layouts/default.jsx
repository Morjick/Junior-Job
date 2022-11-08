import goBackImage from '../assets/icons/goBack.png'

export default function DefaultLayout (props) {
  const { content, history } = props

  function goBack() {
    history.back()
  }
  
  return (
    <div>
      <header className="page-header">
        <div className="page-header-inner">
          <img 
            src={goBackImage} 
            alt="go back" 
            onClick={goBack}
          />
          <span>Junior Job</span>
        </div>
      </header>

      <div className="page-content">
        { content }
      </div>
    </div>
  )
}