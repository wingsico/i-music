import { formatCount } from "@/common/utils/format";
import React from "react";
import { List, ListItem, ListWrapper } from "./style";

export interface IRecommendItem {
  id: string | number;
  picUrl: string;
  playCount: number;
  name: string;
}

interface IProps {
  data: IRecommendItem[];
}

function RecommendList(props: IProps) {
  const { data } = props;

  return (
    <ListWrapper>
      <h1 className="title">推荐歌单</h1>
      <List>
        {data.map((item) => (
          <ListItem key={item.id}>
            <div className="img_wrapper">
              <div className="decorate"></div>
              <img
                src={item.picUrl + "?param=300x300"}
                width="100%"
                height="100%"
                alt="music"
              />
              <div className="play_count">
                <i className="iconfont play">&#xe885;</i>
                <span className="count">{formatCount(item.playCount)}</span>
              </div>
            </div>
            <div className="desc">{item.name}</div>
          </ListItem>
        ))}
      </List>
    </ListWrapper>
  );
}

export default React.memo(RecommendList);
