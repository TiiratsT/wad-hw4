import { mount } from '@vue/test-utils'
import List from "../../src/components/List.vue";

describe('List', () => {
    // Now mount the component and you have the wrapper
    const wrapper = mount(List);
    
    let text = "Add your first Todo task";
        it('Has correct text when list is empty', () => {
        const items = wrapper.findAll('.list-item');
        if(items.length == 0) {
            expect(wrapper.html()).toContain(text);
        }
    });
});