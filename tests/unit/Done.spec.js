import { mount } from '@vue/test-utils'
import List from "../../src/components/List.vue";
import Item from "../../src/models/Item";

describe('Done', () => {
    // Mounting a component with propsData made for this test
    const wrapper = mount(List, { propsData : {
            list:[new Item('task 1'),
                new Item('Task 2')]}
    });

    //console.log(wrapper.vm.$props.list);

    it('Item marked as done is updated correctly', () => {
        //Marks first task as done and checks
        expect(wrapper.vm.$props.list[0].done).toBe(false);
        wrapper.find('.list-item:nth-of-type(1) > div > span').trigger('click');
        expect(wrapper.vm.$props.list[0].done).toBe(true);

        //console.log(wrapper.vm.$props.list);

        // After changing first task, marks second task as done and checks
        expect(wrapper.vm.$props.list[1].done).toBe(false);
        wrapper.find('.list-item:nth-of-type(2) > div > span').trigger('click');
        expect(wrapper.vm.$props.list[1].done).toBe(true);

        //console.log(wrapper.vm.$props.list);

        // Marks first task as undone
        expect(wrapper.vm.$props.list[0].done).toBe(true);
        wrapper.find('.list-item:nth-of-type(1) > div > span').trigger('click');
        expect(wrapper.vm.$props.list[0].done).toBe(false);

        //console.log(wrapper.vm.$props.list);
    });
});