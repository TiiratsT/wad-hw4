import { mount } from '@vue/test-utils'
import Header from "../../src/components/Header.vue";

describe('Header', () => {
    // Now mount the component and you have the wrapper
    const wrapper = mount(Header);

    // Check that this component properly displays today's date
    let today = new Date();
    it('renders the correct date', () => {
        let date = today.getDate() < 10 ?  `0${today.getDate()}` : today.getDate();
        expect(wrapper.html()).toContain(date)
    });
    it('renders the correct year', () => {
            let year = today.getFullYear();
            expect(wrapper.html()).toContain(year)
        });
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',	'November', 'December'];
    //console.log(months[today.getMonth()].toUpperCase().type);
    it('renders the correct month', () => {
        let month = today.toLocaleString('default', { month: 'short' });
        expect(wrapper.html()).toContain(month.toUpperCase());
    })
    it('renders the correct weekday', () => {
        let weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let weekday = weekdays[today.getDay()];
        expect(wrapper.html()).toContain(weekday.toUpperCase());
    })
});