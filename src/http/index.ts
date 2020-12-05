import axios from "axios";
import { MusicItemModel, PlayListItemModel } from "../utils/types";

axios.defaults.baseURL = 'http://music.zackdk.top';
axios.defaults.timeout = 20000;

axios.interceptors.request.use(
  function(config) {
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function(response) {
    // console.log(response);
    return response;
  },
  function(error) {
    console.log(error);
    return Promise.reject(error);
  }
);


export const getPlayList = ()=>{
  const url = `/top/playlist/highquality`;
  return axios.get(url,{params:{cat:'华语 ',limit:6}});
};

export const getHotMusicList = async ()=>{
  const url = `/personalized/newsong`;
  const res = await axios.get(url);
  console.log(res);
  const { result = [] } = res.data;
  const processRes : MusicItemModel[] = result.map((item:any)=>{
    return {
      name : item.name,
      picUrl : item.picUrl,
      id : item?.song?.lMusic.id,
      album_artist : `${item?.song?.album.name} - ${item?.song?.artists[0].name}`
    };
  })
  return processRes;
};

export const getMusicDetail = (id : number)=>{
  const url = `/song/detail`;
  return axios.get(url,{params:{ids:id}})
};