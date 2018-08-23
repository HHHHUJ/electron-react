const home = {
  state: {
    count: 0
  },
  reducers: {
    increment: (state,payload) => {
      return {
        ...state,
        count: state.count + payload
      };
    },
    decrement: ({count},payload) => {
      return {
        count: count - payload
      };
    }
  },
  effects: (dispatch) => ({
    async incrementAsync(payload,rootState) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      // dispatch.home.increment()
      this.increment(payload)
    }
  })
};
export default home;
