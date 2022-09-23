const reducer = (state, action) => {
  switch (action.type) {
    case "QOSHISH":
      return {
        result: state.result + action.payload,
      };
    case "AYIRISH":
      return {
        result: state.result - action.payload,
      };
    case "BOLISH":
      return {
        result: state.result / action.payload,
      };
    case "KOPAY":
      return {
        result: state.result * action.payload,
      };

    default:
      return state;
  }
};

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "ADD_NUM":
//       return {
//         num: state.num + 1,
//       };
//     default:
//       return state;
//   }
// };

export default reducer;
