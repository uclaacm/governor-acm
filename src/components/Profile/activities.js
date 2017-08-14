import React from 'react';
import Utils from 'utils';
import moment from 'moment';
import {activityTypes} from './activity';
import ActivitiesMonth from './activitiesMonth';

export default class Activities extends React.Component {
	render() {
		const activities = this.props.activities.reverse();
		const months = [];
		let totalPoints = 0;
		let currStatus = Utils.getLevel(totalPoints);
		let i = 0;

		while (i < activities.length) {
			let month = { date: activities[i].date, days: [] };
			while (i < activities.length && activities[i].date.month() === month.date.month()) {
				if (month.days.length === 0 || activities[i].date.date() !== month.days[month.days.length - 1].date.date())
					month.days.push({ date: activities[i].date, activities: [] });

				totalPoints += activities[i].pointsEarned;
				const nextStatus = Utils.getLevel(totalPoints);

				if (currStatus.currLevel !== nextStatus.currLevel) {
					month.days[month.days.length - 1].activities.push({
						type: activityTypes.LEVEL_UP,
						date: activities[i].date,
						prevLevel: currStatus.currLevel,
						nextLevel: nextStatus.currLevel,
					});

					currStatus = nextStatus;
				}

				month.days[month.days.length - 1].activities.push(activities[i]);
				i++;
			}
			months.push(month);
		}
		
		return (
			<div className="activity-wrapper">
				{ months.map((month, i) => <ActivitiesMonth key={'month'+i} month={month} />) }
			</div>
		);
	}
}