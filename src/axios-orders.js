import Axios from "axios";
import React from "react";

const instance = Axios.create({
   baseURL: 'https://burger-app-d2757.firebaseio.com/'
});

export default instance;