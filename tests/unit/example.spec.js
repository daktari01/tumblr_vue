import { shallowMount } from "@vue/test-utils";
import UserRegistration from "../../src/components/UserRegistration";

describe("UserRegistration.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(UserRegistration, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
