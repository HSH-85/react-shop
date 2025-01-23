import {configureStore, createSlice} from '@reduxjs/toolkit';
import { act } from 'react';

// createSlice == useState 역할...

let imsiData=createSlice({
  name : 'imsiData',
  initialState : {
    name: '장원영',
    groupName : '아이브',
    age : 20
  },
  reducers:{
    changeGroup(state){
      state.groupName = '아이브그룹'
    },
    // state :  원래의 값 action : 저쪽에서 전달받은값
    // payload : 화물, 택배...
    addAge(state, action){
      state.age = state.age + action.payload;
    }
  }
})

let userName = createSlice({
  name : 'userName',
  initialState : ['kim', 'lee', 'park']
})

let productStock = createSlice({
  name : 'productStock',
  initialState : [11, 8, 2]
})

let cartData = createSlice({
  name : 'cartData',
  initialState : [
    { id:0, title: 'White and Black', count : 2},
    { id:2, title: 'Grey Yordan', count : 1},
  ],
  reducers:{
    // action에 현재 선택한 상품의 ID가 들어온다고 가정
    minusCount(state, action){
      let index = action.payload;
      const findID = state.findIndex((x)=>x.id==index);
      if (state[findID].count>0) {
        state[findID].count--;
      }
    },
    plusCount(state, action){
      let index = action.payload;
      const findID = state.findIndex((x)=>x.id==index);  
      state[findID].count++;
      
    },
  },
});

let loggindUser = createSlice({
  name : 'loggindUser',
  initialState : 'hsh85',
  // 수정
  reducers : {
    // state는 원래의 데이터를 의미 (hsh85)
    changeUserName(state){
      return state + '님'
    }
  }
})

export default configureStore({
  reducer : {
    userName : userName.reducer,
    productStock : productStock.reducer,
    cartData : cartData.reducer,
    loggindUser : loggindUser.reducer,
    imsiData : imsiData.reducer
  }
})

export let {changeUserName} = loggindUser.actions;
export let {changeGroup} = imsiData.actions
export let {addAge}=imsiData.actions
export let {plusCount, minusCount}=cartData.actions