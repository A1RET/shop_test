import { Link } from 'react-router-dom'

const Page404 = () => {
  return (
    <div>
      <p style={{'textAlign': 'center', 'fontWeight': '600', 'fontSize': '24px'}}>Page doesn't exist</p>
      <Link style={{'display': 'block', 'textAlign': 'center', 'fontWeight': '600', 'fontSize': '24px'}} to='/'>
        Back to main page
      </Link>
    </div>
  )
}

export default Page404;