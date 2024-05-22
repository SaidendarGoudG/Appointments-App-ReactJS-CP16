// Write your code here

import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import './index.css'

import AppointmentItem from '../AppointmentItem'

class Appointments extends Component {
  state = {listOfAppointments: [], title: '', date: ''}

  onClickStarred = () => {
    this.setState(prevState => ({
      listOfAppointments: prevState.listOfAppointments.filter(eachApp => {
        if (eachApp.isFavorite) {
          return eachApp
        }
        return false
      }),
    }))
  }

  toggleISFavStar = id => {
    const {listOfAppointments} = this.state

    this.setState({
      listOfAppointments: listOfAppointments.map(eachApp => {
        if (id === eachApp.id) {
          return {...eachApp, isFavorite: !eachApp.isFavorite}
        }
        return eachApp
      }),
    })
  }

  onAddAppointment = event => {
    event.preventDefault()
    const {listOfAppointments, title, date} = this.state

    const newAppointment = {
      id: uuidv4(),
      title,
      date,
      isFavorite: false,
    }

    this.setState({
      listOfAppointments: [...listOfAppointments, newAppointment],
      title: '',
      date: '',
    })
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeDate = event => {
    this.setState({date: event.target.value})
  }

  render() {
    const {listOfAppointments, title, date} = this.state

    return (
      <div className="app-container">
        <div className="Appointments-container">
          <h1 className="heading2">Add Appointment</h1>
          <div className="form-image-container">
            <form onSubmit={this.onAddAppointment}>
              <label className="label" htmlFor="inputTitle">
                TITLE
              </label>
              <br />
              <input
                className="input"
                id="inputTitle"
                type="text"
                value={title}
                onChange={this.onChangeTitle}
                placeholder="Title"
              />
              <br />
              <label className="label" htmlFor="inputDate">
                DATE
              </label>
              <br />
              <input
                className="input"
                id="inputDate"
                type="date"
                value={date}
                onChange={this.onChangeDate}
              />
              <br />
              <button className="button" type="submit">
                Add
              </button>
            </form>
            <img
              className="app-image"
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
            />
          </div>
          <hr className="line" />
          <div className="app-starred-container">
            <h1 className="heading">Appointments</h1>
            <button
              className="btn-starred"
              type="button"
              onClick={this.onClickStarred}
            >
              Starred
            </button>
          </div>
          <ul className="app-items-container">
            {listOfAppointments.map(eachAppointment => (
              <AppointmentItem
                key={eachAppointment.id}
                appointmentDetails={eachAppointment}
                toggleISFavStar={this.toggleISFavStar}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
