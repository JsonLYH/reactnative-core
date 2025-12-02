import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/config/http";
export const getTestDataAction = createAsyncThunk(
    'counter/getTestData',
  async (payload, extraInfo) => {
    axios.get("https://api-v2.xdclass.net/api/teacher/v1/list").then(res => { 
      console.log('axios',res)
    })
    let data = await fetch("https://api-v2.xdclass.net/api/teacher/v1/list").then(res => { 
      return res.json();
    })
    return data;
  }
)