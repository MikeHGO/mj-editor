import {
  FormatAlignCenter,
  FormatAlignJustify,
  FormatAlignLeft,
  FormatAlignRight,
  FormatColorFill,
  FormatColorText,
  TextDecrease,
  TextIncrease,
} from "@mui/icons-material";
import {
  Divider,
  Popover,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useRef, useState } from "react";
import ContentEditable from "./shared/ContentEditable";
import DownloadSection from "./shared/DownloadSection";
import MJTitlePicker from "./shared/MJTitlePicker";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";

function App() {
  const [alignment, setAlignment] = useState("left");
  const [contentValue, setContentValue] = useState("");
  const [fontSize, setFontSize] = useState(2.5);
  const canvasRef = useRef();

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const [textColor, setTextColor] = useColor("hex", "#000000");
  const [textColorAnchor, setTextColorAnchor] = useState(null);
  const [bgColor, setBgColor] = useColor("hex", "#b0c4de00");
  console.log("🚀 ~ file: App.js ~ line 45 ~ App ~ bgColor", bgColor);
  const [bgColorAnchor, setBgColorAnchor] = useState(null);

  return (
    <>
      <Typography
        variant="h3"
        align="center"
        sx={{
          marginY: "1.5rem",
          paddingY: "1rem",
          fontWeight: "bold",
          color: "aliceblue",
        }}
      >
        MJ EDITOR
      </Typography>

      {/* Text Color */}
      <Popover
        open={!!textColorAnchor}
        anchorEl={textColorAnchor}
        onClose={() => setTextColorAnchor(null)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        PaperProps={{
          sx: { borderRadius: "10px" },
        }}
      >
        <ColorPicker
          width={300}
          height={128}
          color={textColor}
          onChange={setTextColor}
          hideHSV
          hideHEX
          dark
        />
      </Popover>
      {/* BG Color */}
      <Popover
        open={!!bgColorAnchor}
        anchorEl={bgColorAnchor}
        onClose={() => setBgColorAnchor(null)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        PaperProps={{
          sx: { borderRadius: "10px" },
        }}
      >
        <ColorPicker
          width={300}
          height={128}
          color={bgColor}
          onChange={setBgColor}
          hideHSV
          // hideHEX
          // alpha={true}
          dark
        />
      </Popover>
      {/* Content Editable TOOLS */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginBottom: 0.5,
        }}
      >
        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleAlignment}
        >
          <ToggleButton value="left">
            <FormatAlignLeft />
          </ToggleButton>
          <ToggleButton value="center">
            <FormatAlignCenter />
          </ToggleButton>
          <ToggleButton value="right">
            <FormatAlignRight />
          </ToggleButton>
          <ToggleButton value="justify">
            <FormatAlignJustify />
          </ToggleButton>
        </ToggleButtonGroup>
        <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 0 }} />
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 0.5,
          }}
        >
          <ToggleButton onClick={(e) => setTextColorAnchor(e.currentTarget)}>
            <FormatColorText />
          </ToggleButton>
          <ToggleButton onClick={(e) => setBgColorAnchor(e.currentTarget)}>
            <FormatColorFill />
          </ToggleButton>
          <ToggleButton
            onClick={() =>
              setFontSize(parseFloat(fontSize) - parseFloat("0.25"))
            }
          >
            <TextDecrease />
          </ToggleButton>
          <ToggleButton
            onClick={() =>
              setFontSize(parseFloat(fontSize) + parseFloat("0.25"))
            }
          >
            <TextIncrease />
          </ToggleButton>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          textAlign: alignment,
        }}
      >
        {/* MAIN CANVAS */}
        <div className="borderFocus">
          <div ref={canvasRef}>
            <ContentEditable
              html={contentValue}
              onChange={(e) => setContentValue(e.target.value)}
              className={`editable mahjong-font `}
              inputMode={"none"}
              style={{
                fontSize: `${fontSize}rem`,
                color: `${textColor.hex}`,
                backgroundColor: `${bgColor.hex}`,
              }}
            />
          </div>
        </div>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginY: "1rem",
        }}
      >
        <MJTitlePicker />
      </Box>
      <DownloadSection canvasRef={canvasRef} color={bgColor.rgb} />
    </>
  );
}

export default App;
