import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import React from "react";

interface BoxTitleProps {
  title: string;
}

const useStyles = makeStyles((theme)=>({

  title : {
    borderLeft : `2px solid ${theme.palette.secondary.main}`,
    paddingLeft : theme.spacing(1),
    lineHeight: 1.2,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  }

}));

const BoxTitle: React.FC<BoxTitleProps> = (props) => {
  const { title = "你忘记写标题了！" } = props;
  const styles = useStyles();
  return (
    <Typography className={styles.title} variant="subtitle1">
      {title}
    </Typography>
  );
};

export default BoxTitle;
