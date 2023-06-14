
import { createStore } from 'vuex'

// Create a new store instance.
export default createStore({
  state : {
    apiUrl:"http://localhost:8000/api",
    fileUrl:"http://localhost:8000",
    data:[],
    loding:true,
    isEmpty:false
  },
  mutations: {

  },
  actions:{
    
  }
})



