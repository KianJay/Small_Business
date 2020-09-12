import React from 'react';
import ModernDatepicker from 'react-modern-datepicker';

class DatePickers extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			startDate: new Date(), // can be any of these ['dayjs()', '', null, new Date(2018,12,1)]
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(date) {
		this.setState({
			startDate: date,
		});
	}

	render() {
		return (
			<ModernDatepicker
				date={this.state.startDate}
        		format={'DD-MM-YYYY'}
        		minDate={this.state.startDate}
				showBorder
				onChange={date => this.handleChange(date)}
				placeholder={'Select a date'}
			/>
		);
	}
}

export default DatePickers;