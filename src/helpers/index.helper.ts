
import moment from 'moment';
// import 'moment/locale/id';

export class Helpers {
    static scrollToElement(elementId: string) {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    static redirectToBlank(url: string) {
        window.open(url, '_blank');
    }

    static formatDateRange(startDate: string, endDate?: string): string {
        const startMoment = moment(startDate);

        if (!endDate) {
            return startMoment.format('D MMM YY');
        }

        const endMoment = moment(endDate);

        if (startMoment.isSame(endMoment, 'day')) {
            return startMoment.format('D MMM YY');
        } else {
            if (startMoment.month() === endMoment.month() && startMoment.year() === endMoment.year()) {
                return `${startMoment.format('D')} - ${endMoment.format('D MMM YY')}`;
            } else {
                return `${startMoment.format('D MMM')} - ${endMoment.format('D MMM YY')}`;
            }
        }
    }

    static convert_date(date: Date): string {
        return moment(date).format('dddd, DD MMMM YYYY')
    }
}