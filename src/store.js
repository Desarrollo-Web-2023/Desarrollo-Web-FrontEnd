import { createStore } from "vuex";
import createMutationsSharer from "vuex-shared-mutations";

/*
admin: 12312312312
----------------------
kevin: 6491fbf4a382abcf41e7a35e
daniela: 646ba3956d9fabfed3eee931
admin-bd: 12312312
admin-bd: 12312312
------------------------
user: 123123
user: 123123

*/

export default createStore({
  state() {
    return {
      id: "6491fbf4a382abcf41e7a35e",
    };
  },
  mutations: {
    send_id(state, id) {
        console.log('pasx')
      state.id = id;
    },
  },
});
