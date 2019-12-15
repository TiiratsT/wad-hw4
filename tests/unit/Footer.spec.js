import { mount } from '@vue/test-utils'
import Footer from "../../src/components/Footer.vue";

describe('Footer', () => {
    // Now mount the component and you have the wrapper
    const wrapper = mount(Footer);
    
    it('Open property changes to true', () => {
        expect(wrapper.vm.open).toBe(false);

        wrapper.find('span').trigger('click');

        expect(wrapper.vm.open).toBe(true);
    });
});