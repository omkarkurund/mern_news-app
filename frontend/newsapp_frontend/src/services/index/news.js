import axios from "axios";
import { BASE_URL } from "../../config";


// export const getAllNews =async(searchKeyword="", page=1,limit=10)=>{
//     try {
//         const {data, headers} = await axios.get(`${BASE_URL}/api/news?searchKeyword=${searchKeyword} &page=${page} &limit=${limit}`);
//         // return data
//         return {data, headers};
//     } catch (error) {
//         if (error.response && error.response.data.message)
//             throw new Error(error.response.data.message);
//         throw new Error(error.message);
//     }
// }

export const getAllNews = async (searchKeyword = "", page = 1, limit = 10) => {
    try {
      const { data, headers } = await axios.get(`${BASE_URL}/api/news`, {
        params: {
          searchKeyword,
          page,
          limit
        }
      });
      
      return { data, headers };
    } catch (error) {
      if (error.response && error.response.data.message)
        throw new Error(error.response.data.message);
      throw new Error(error.message);
    }
  };

export const getSingleNews =async({slug})=>{
    try {
        const {data} = await axios.get(`${BASE_URL}/api/news/${slug}`);
        return data;
    } catch (error) {
        if (error.response && error.response.data.message)
            throw new Error(error.response.data.message);
        throw new Error(error.message);
    }
}

export const deleteNews = async ({ slug, token }) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
  
      const { data } = await axios.delete(`${BASE_URL}/api/news/${slug}`, config);
      return data;
    } catch (error) {
      if (error.response && error.response.data.message)
        throw new Error(error.response.data.message);
      throw new Error(error.message);
    }
  };
  
//   added code
  export const updateNews = async ({ updatedData, slug, token }) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
  
      const { data } = await axios.put(`${BASE_URL}/api/news/${slug}`, updatedData, config);
      return data;
    } catch (error) {
      if (error.response && error.response.data.message)
        throw new Error(error.response.data.message);
      throw new Error(error.message);
    }
  };
  
  export const createNews = async ({ token }) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
  
      const { data } = await axios.post(`${BASE_URL}/api/news`, {}, config);
      return data;
    } catch (error) {
      if (error.response && error.response.data.message)
        throw new Error(error.response.data.message);
      throw new Error(error.message);
    }
  };
  