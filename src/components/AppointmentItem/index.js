// Write your code here
import './index.css'
import {format} from 'date-fns'

const AppointmentItem = props => {
  const {appointmentDetails, toggleISFavStar} = props
  const {id, title, date, isFavorite} = appointmentDetails

  const newDate = format(new Date(date), 'dd MMMM yyyy, EEEE')

  const starImgUrl = isFavorite
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const onClickFavorite = () => {
    toggleISFavStar(id)
  }

  return (
    <li className="list-item-container">
      <div>
        <p className="app-title">{title}</p>
        <p className="app-date">Date: {newDate}</p>
      </div>
      <button
        className="star-button"
        type="button"
        onClick={onClickFavorite}
        data-testid="star"
      >
        <img className="star-image" src={starImgUrl} alt="star" />
      </button>
    </li>
  )
}

export default AppointmentItem
