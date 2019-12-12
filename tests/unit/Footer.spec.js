import { mount } from '@vue/test-utils'
import Footer from "../../src/components/Footer.vue";

describe('Footer', () => {
    // Now mount the component and you have the wrapper
    const wrapper = mount(Footer);
    
    it('Open property changes to true', () => {
        wrapper.find('span').trigger('click');

        expect(wrapper.open).toBe(true);
    });
});