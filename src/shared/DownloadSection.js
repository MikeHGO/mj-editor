import { CropOriginal, Download, Image } from "@mui/icons-material";
import { ToggleButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import {
  exportComponentAsJPEG,
  exportComponentAsPNG,
} from "react-component-export-image";

const DownloadSection = ({ canvasRef, color: { r, g, b } }) => {
  const rgbColor = `rgb(${r}, ${g}, ${b})`;
  const saveJpeg = () => {
    exportComponentAsJPEG(canvasRef, {
      fileName: "mahjong",
      html2CanvasOptions: {
        backgroundColor: rgbColor,
        allowTaint: true,
        useCORS: true,
      },
    });
  };

  const savePng = () => {
    exportComponentAsPNG(canvasRef, {
      fileName: "mahjong",
      html2CanvasOptions: {
        backgroundColor: null,
        allowTaint: true,
        useCORS: true,
      },
    });
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "2rem",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "aliceblue",
          }}
        >
          DOWNLOAD
        </Typography>
        <Download fontSize="large" sx={{ color: "aliceblue" }} />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginY: "1rem",
          alignItems: "center",
        }}
      >
        <ToggleButton
          onClick={() => savePng()}
          sx={{
            marginRight: 2,
          }}
        >
          <CropOriginal />
          .PNG
        </ToggleButton>
        <ToggleButton onClick={() => saveJpeg()}>
          <Image />
          .JPEG
        </ToggleButton>
      </Box>
    </>
  );
};

export default DownloadSection;
