import { useEffect, useState } from "react";
import { getPlayList } from "../../http";
import { PlayListItemModel } from "../../utils/types";
import { createContainer } from "../../utils/unstate-next";


const useStore = ()=>{

  const [ playList, setPlayList ] = useState<PlayListItemModel[]>([]);

  useEffect(()=>{
    getPlayList().then(res=>{
      console.log(res); 
      setPlayList(res.data.playlists);
    },err=>{
      console.log(err);
    });
  },[]);

  return {playList};
};

const Store = createContainer(useStore);

export const injectStore = (Com : any) => (props : any) => (
  <Store.Provider>
    <Com {...props} />
  </Store.Provider>
);

export default Store;