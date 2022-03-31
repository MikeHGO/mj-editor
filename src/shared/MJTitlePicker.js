import { Button, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const MJTitlePicker = () => {
  const mjtitles = [
    "🀇",
    "🀈",
    "🀉",
    "🀊",
    "🀋",
    "🀌",
    "🀍",
    "🀎",
    "🀏",
    "🀬",
    "🀙",
    "🀚",
    "🀛",
    "🀜",
    "🀝",
    "🀞",
    "🀟",
    "🀠",
    "🀡",
    "🀮",
    "🀐",
    "🀑",
    "🀒",
    "🀓",
    "🀔",
    "🀕",
    "🀖",
    "🀗",
    "🀘",
    "🀭",
    "🀀",
    "🀁",
    "🀂",
    "🀃",
    "🀄",
    "🀅",
    "🀆",
    "🀫",
    "🀯",
  ];

  const handleClick = (e, char) => {
    // Para nao perder o foco
    e.preventDefault();
    e.stopPropagation();
    // line separator, charactere vazio
    // \u2028 \u00A0

    if (titlePosition === "default")
      return document.execCommand("insertText", false, char);
    let title = char;
    if (titlePosition === "kan") title = `${char}${char}`;

    let myFragment = `<span class="${titlePosition}">${title}</span>${"\u00A0"}`;
    setTitlePosition("default");

    document.execCommand("insertHTML", false, myFragment);
  };

  const [titlePosition, setTitlePosition] = useState("default");
  const handlePostion = (e, position) => {
    // Impedindo estado vazio para sempre manter pelo menos um selecionado
    if (!!position) setTitlePosition(position);
  };

  return (
    <div>
      <ToggleButtonGroup
        value={titlePosition}
        exclusive
        onChange={handlePostion}
        sx={{ p: "0.3rem 0.5rem" }}
      >
        <ToggleButton
          value="default"
          sx={{
            p: "0 8px",
            fontFamily: "Mahjong colored",
            fontSize: "1.5rem",
            display: "block",
            height: "50px",
            width: "63px",
          }}
        >
          🀄
        </ToggleButton>
        <ToggleButton
          value="pon"
          sx={{
            pl: "6px",
            fontFamily: "Mahjong colored",
            fontSize: "1.5rem",
            display: "block",
            height: "50px",
            width: "63px",
          }}
        >
          <span className="pon" style={{ padding: "0 0 0.5rem 2rem" }}>
            🀅
          </span>
        </ToggleButton>
        <ToggleButton
          value="kan"
          sx={{
            p: "0 0px",
            pr: "10px",
            fontFamily: "Mahjong colored",
            fontSize: "1.5rem",
            display: "block",
            height: "50px",
            width: "63px",
          }}
        >
          <span className="kan" style={{ marginTop: "9px" }}>
            🀆🀆
          </span>
        </ToggleButton>
      </ToggleButtonGroup>
      <Box sx={{ width: "455px" }}>
        {mjtitles.map((item) => (
          <Button
            variant="text"
            key={item}
            size="large"
            onMouseDown={(e) => handleClick(e, item)}
            sx={{
              padding: "0",
              minWidth: "45px",
              height: "45px",
              fontSize: "2.2rem",
              fontFamily: "Mahjong colored",
            }}
          >
            {item}
          </Button>
        ))}
      </Box>
    </div>
  );
};

export default MJTitlePicker;
