import { createSlice } from "@reduxjs/toolkit";
/* eslint-disable no-unused-vars */
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/download.png";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";
import img9 from "../assets/img9.jpg";

const initialState = {
  email: null,
  rows: [
    {
      Id: 1,
      image: img1,
      title: "Mountain Retreat",
      Creator: "Child NGO",
      price: "0.35 Eth",
      profile:
        "https://templates.hibootstrap.com/nedo/default/assets/img/author/author-4.jpg",
    },
    {
      Id: 2,
      image: img2,
      title: "Sunset Bliss",
      Creator: "Child NGO",
      price: "0.45 Eth",
      profile:
        "https://templates.hibootstrap.com/nedo/default/assets/img/author/author-1.jpg",
    },
    {
      Id: 3,
      image: img3,
      title: "Cozy Cabin",
      Creator: "Child NGO",
      price: "0.55 Eth",
      profile:
        "https://templates.hibootstrap.com/nedo/default/assets/img/author/author-3.jpg",
    },
    {
      Id: 4,
      image: img4,
      title: "Island Paradise",
      Creator: "Child NGO",
      price: "0.61 Eth",
      profile:
        "https://templates.hibootstrap.com/nedo/default/assets/img/author/author-6.jpg",
    },
    {
      Id: 5,
      image: img5,
      title: "Rustic Retreat",
      Creator: "Child NGO",
      price: "0.34 Eth",
      profile:
        "https://templates.hibootstrap.com/nedo/default/assets/img/author/author-9.jpg",
    },
    {
      Id: 6,
      image: img6,
      title: "Seaside Serenity",
      Creator: "Child NGO",
      price: "0.48 Eth",
      profile:
        "https://templates.hibootstrap.com/nedo/default/assets/img/author/author-10.jpg",
    },
    {
      Id: 7,
      image: img7,
      title: "Tranquil Forest",
      Creator: "Child NGO",
      price: "0.29 Eth",
      profile:
        "https://templates.hibootstrap.com/nedo/default/assets/img/author/author-7.jpg",
    },
  ],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.email = action.payload.user;
    },
    setData: (state, action) => {
      state.rows.push(action.payload);
    },
    setLogout: (state) => {
      (state.user = null), (state.token = null);
    },
    remNFT: (state) => {
      state.rows.pop();
    },
  },
});

export const { setLogin, setLogout, setData, remNFT } = authSlice.actions;

export default authSlice.reducer;
