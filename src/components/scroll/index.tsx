import React, { useEffect, useImperativeHandle, useRef, useState } from "react";
import { forwardRef } from "react";
import BScroll from "better-scroll";
import { ScrollContainer } from "./style";

interface Position {
  x: number;
  y: number;
}


interface IScrollProps extends React.ComponentPropsWithoutRef<any> {
  direction?: "vertical" | "horizental";
  clickable?: boolean;
  refresh?: boolean;
  onScroll?: ((pos: Position) => void) | null;
  onPullUp?: ((pos: Position) => void) | null;
  onPullDown?: ((pos: Position) => void) | null;
  pullDownLoading?: boolean;
  pullUpLoading?: boolean;
  bounceTop?: boolean;
  bounceBottom?: boolean;
}

const defaultProps: IScrollProps = {
  direction: "vertical",
  clickable: true,
  refresh: true,
  onScroll: null,
  pullUpLoading: false,
  pullDownLoading: false,
  onPullUp: null,
  onPullDown: null,
  bounceTop: true,
  bounceBottom: true,
};

const Scroll = forwardRef<unknown, IScrollProps>((props, ref) => {
  const {
    direction,
    clickable,
    refresh,
    onScroll,
    onPullUp,
    onPullDown,
    bounceBottom,
    bounceTop,
  } = props;

  const [bScroll, setBScroll] = useState<BScroll | null>();

  const scrollContainerRef = useRef<HTMLElement | string>("");

  useEffect(() => {
    const scroll = new BScroll(scrollContainerRef.current, {
      scrollX: direction === "horizental",
      scrollY: direction === "vertical",
      probeType: 3,
      click: clickable,
      bounce: {
        top: bounceTop,
        bottom: bounceBottom,
      },
    });

    setBScroll(scroll);

    return () => setBScroll(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 每次渲染时重新刷新组件，防止无法滚动
  useEffect(() => {
    if (refresh && bScroll) {
      bScroll.refresh();
    }
  });

  useEffect(() => {
    if (!bScroll || !onPullUp) return;
    const cb = (pos: Position) => {
      if (bScroll.y <= bScroll.maxScrollY + 100) {
        onPullUp(pos);
      }
    };
    bScroll.on("scrollEnd", cb);
    return () => {
      bScroll.off("scrollEnd", cb);
    };
  }, [bScroll, onPullUp]);

  useEffect(() => {
    if (!bScroll || !onPullDown) return;

    const cb = (pos: Position) => {
      if (pos.y > 50) {
        onPullDown(pos);
      }
    };
    bScroll.on("touchEnd", cb);
    return () => {
      bScroll.off("touchEnd", cb);
    };
  }, [bScroll, onPullDown]);

  useEffect(() => {
    if (!bScroll || !onScroll) return;
    bScroll.on("scroll", onScroll);
    return () => {
      bScroll.off("scroll", onScroll);
    };
  }, [bScroll, onScroll]);

  useImperativeHandle(ref, () => ({
    refresh() {
      if (bScroll) {
        bScroll.refresh();
        bScroll.scrollTo(0, 0);
      }
    },

    getBScroll() {
      if (bScroll) {
        return bScroll;
      }
    },
  }));

  return (
    <ScrollContainer
      ref={scrollContainerRef as React.RefObject<HTMLDivElement>}
    >
      {props.children}
    </ScrollContainer>
  );
});

Scroll.defaultProps = defaultProps;

export default React.memo(Scroll);
