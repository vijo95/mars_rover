import React, { Component } from 'react'
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';


export default class DatePicker extends Component {


  parseDate = (day) => {
    const date = day.toLocaleDateString().split("/")
    this.props.setDateType('earth_date')
    this.props.setEarthDate(`${date[2]}-${date[0]}-${date[1]}`)
    this.props.setSolDate('')
    return `${date[2]}-${date[0]}-${date[1]}`
  }

  constructor(props) {
    super(props);
    this.handleDayChange = this.handleDayChange.bind(this);
    this.state = {
      selectedDay: null,
    };
  }

  handleDayChange(day) {
    try {
      this.setState({ selectedDay: this.parseDate(day)});
    } catch (error) {
      console.log(error);
    }
  }

  render() {

    return (
      <DayPickerInput 
        value={this.props.earthDate}
        placeholder="Earth date"
        onDayChange={this.handleDayChange} />
    )
  }
}
