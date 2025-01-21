import { Box, Button, Link, Typography } from "@mui/material";
import theme from "../../theme";
import DownloadIcon from "@mui/icons-material/Download";
import DatasetLinkedIcon from "@mui/icons-material/DatasetLinked";
import priceHistory from "../../assets/imgaes/priceHistory.svg";
import { Smartphone } from "../../interfaces/Iproducts/types";

const styles = {
  downloadSection: {
    width: "100%",
    [theme.breakpoints.down("sm")]: { width: "100%" },
  },
  downloadTitle: {
    fontWeight: "bold",
    color: "#2e2d2d",
    padding: "17px",
  },
};

const ProductDetailsSidebar = ({ product }: { product: Smartphone }) => {
  return (
    <>
      <Box sx={{ width: "25%" }}>
        <Box>
          <Typography variant="h5" sx={styles.downloadTitle}>
            Исторя цены
          </Typography>
          <Box
            component="img"
            src={priceHistory}
            alt="priceHistory"
            sx={{ width: "100%" }}
          ></Box>
        </Box>

        <Box sx={styles.downloadSection}>
          <Typography variant="h5" sx={styles.downloadTitle}>
            Файлы для скачивания
          </Typography>
          <Box>
            {product.instructions_and_files.map((file, index) => (
              <Box key={index} sx={{ display: "flex", gap: "10px" }}>
                {file.name.includes("Инструкция") ? (
                  <DownloadIcon fontSize="medium" />
                ) : (
                  <DatasetLinkedIcon fontSize="medium" />
                )}
                <Link
                  key={index}
                  sx={{ marginBottom: "10px", width: "100%" }}
                  href={file.file}
                  target="_blank"
                >
                  {file.name}
                </Link>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default ProductDetailsSidebar;
