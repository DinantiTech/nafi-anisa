"use client";

import moment from 'moment';
// import 'moment/locale/id';

export class Helpers {
    static youtubeEmbed(youtubeId: string): string {
        return `https://www.youtube.com/embed/${youtubeId}?Version=3&autoplay=1&mute=1&loop=1&playlist=${youtubeId}`;
    }

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
            return startMoment.format('D MMMM YYYY');
        }

        const endMoment = moment(endDate);

        if (startMoment.isSame(endMoment, 'day')) {
            return startMoment.format('D MMMM YYYY');
        } else {
            if (startMoment.month() === endMoment.month() && startMoment.year() === endMoment.year()) {
                return `${startMoment.format('D')} - ${endMoment.format('D MMMM YYYY')}`;
            } else {
                return `${startMoment.format('D MMM')} - ${endMoment.format('D MMM YYYY')}`;
            }
        }
    }

    static convert_date(date: Date): string {
        return moment(date).format('dddd, DD MMMM YYYY')
    }
}