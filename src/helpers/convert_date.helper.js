import moment from "moment/moment";
import 'moment/locale/id'; 

export const convert_date = (date) => {
    return moment(date).format('dddd, DD MMMM YYYY')
}