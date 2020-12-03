import { Paper, Tab, Tabs } from "@material-ui/core";
import React from "react";
import MyAppBar from "../../component/appBar";
import AdviceMusic from "./comppnent/adviceMusic";
import { injectStore } from "./store";

const Index = () => {

  return (
    <div>
      <MyAppBar />
      <Paper square>
        <Tabs
          value={0}
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="推荐音乐" />
          <Tab label="热歌榜" />
        </Tabs>
      </Paper>
      <AdviceMusic />
    </div>
  );
};

export default injectStore(Index);
