import { createAsyncThunk } from "@reduxjs/toolkit";
export const getTestDataAction = createAsyncThunk(
    'counter/getTestData',
    async (payload,extraInfo) => {
      let data = await fetch("https://api-v2.xdclass.net/api/teacher/v1/list").then(res => { 
        return res.json();
      })
      return data;
    }
)