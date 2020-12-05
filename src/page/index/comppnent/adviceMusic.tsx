import BoxTitle from "../../../component/boxTitle";
import { makeStyles } from "@material-ui/core/styles";
import PlayIcon from "@material-ui/icons/PlayArrowOutlined";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from "@material-ui/core";
import React from "react";
import Store from "../store";

const useStyles = makeStyles((theme) => ({
  root: {
    // paddingTop: theme.spacing(2),
  },
  cardContent: {
    padding: theme.spacing(0.5),
    "&:last-child": {
      paddingBottom: theme.spacing(0.5),
    },
  },
  gridItem: {
    position: "relative",
  },
  playCount: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(0.9),
    color: theme.palette.common.white,
    fontSize: 12,
  },
  newMusicList: {},
  musicListItem: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
}));

const cards = [1, 2, 3, 4, 5, 6];

const AdviceMusic = () => {
  const styles = useStyles();
  
  const { playList = [], hotMusicList= []} = Store.useContainer();
  return (
    <div className={styles.root}>
      <BoxTitle title="推荐歌单" />

      <Grid container spacing={1}>
        {playList.map((item) => (
          <Grid className={styles.gridItem} item xs={4}>
            <Card>
              <CardMedia
                component="img"
                image={item.coverImgUrl}
              />
              <CardContent className={styles.cardContent}>
                <Typography variant="subtitle2">
                  {item.name}
                </Typography>
              </CardContent>
              <span className={styles.playCount}>{item.playCount}</span>
            </Card>
          </Grid>
        ))}
      </Grid>

      <BoxTitle title="最新音乐" />

      <List>
        {hotMusicList.map((music) => (
          <ListItem dense className={styles.musicListItem}>
            <ListItemText primary={music.name} secondary={music.album_artist} />
            <ListItemSecondaryAction>
              <IconButton edge="end">
                <PlayIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default AdviceMusic;
