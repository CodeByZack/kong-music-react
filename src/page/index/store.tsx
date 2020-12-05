import { useEffect, useState } from "react";
import { getHotMusicList, getPlayList } from "../../http";
import { MusicItemModel, PlayListItemModel } from "../../utils/types";
import { createContainer } from "../../utils/unstate-next";


const useStore = ()=>{

  const [ playList, setPlayList ] = useState<PlayListItemModel[]>([]);
  const [ hotMusicList, setHotMusicList ] = useState<MusicItemModel[]>([]);
  useEffect(()=>{
    getPlayList().then(res=>{
      console.log(res); 
      setPlayList(res.data.playlists);
    },err=>{
      console.log(err);
    });

    getHotMusicList().then(res=>{
      console.log(res);
      setHotMusicList(res);
    },err=>{
      console.log(err);
    });


  },[]);

  return {playList,hotMusicList};
};

const Store = createContainer(useStore);

export const injectStore = (Com : any) => (props : any) => (
  <Store.Provider>
    <Com {...props} />
  </Store.Provider>
);

export default Store;