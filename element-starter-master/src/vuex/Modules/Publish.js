/*
 * 学生基本信息
 */
const state = {
  //查询学生基本信息的表单
  publishForm: {
    id: "",
    movie: "",
    cinema: "",
    date: "",
    time: "",
    type: "",
    price: "",
    hall: ""
  },

  //是否进行查询
  publishQueryFlag: false
};

const actions = {
  //存入搜索船舶基本资料form值
  changePublishFormAction({ commit }, payload) {
    commit("changePublishFormMutation", payload);
  },

  //更改是否搜索标识
  changePublishQueryFlagAction({ commit }, payload) {
    commit("changePublishQueryFlagMutation", payload);
  }
};

//mutations，真正用来修改state的方法集
const mutations = {
  changePublishFormMutation(state, payload) {
    state.PublishForm = payload;
  },

  changePublishQueryFlagMutation(state, payload) {
    state.PublishQueryFlag = payload;
  }
};

const getter = {};

const modulePublish = {
  state: state,
  mutations: mutations,
  actions: actions,
  getter: getter
};

export default modulePublish;
