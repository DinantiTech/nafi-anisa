
import moment from 'moment';
import 'moment/locale/id'; 

export class Helpers {
    formatDateRange(startDate: string, endDate: string): string {
        const startMoment = moment(startDate);
        const endMoment = moment(endDate);
    
        if (startMoment.month() === endMoment.month() && startMoment.year() === endMoment.year()) {
            return `${startMoment.format('D')} - ${endMoment.format('D MMM YY')}`;
        } else {
            return `${startMoment.format('D MMM')} - ${endMoment.format('D MMM YY')}`;
        }
    }

    convert_date (date: Date): string {
        return moment(date).format('dddd, DD MMMM YYYY')
    }
}