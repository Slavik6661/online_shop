import { FC } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import { Smartphone } from "../../interfaces/Iproducts/IsmartPhone/smartPhone";
import {
  translations,
  translationsSpecificationsItems,
} from "../../translate/translationSpecifications";

interface SpecificationsProductProps {
  product: Smartphone;
}

const SpecificationsProduct: FC<SpecificationsProductProps> = ({ product }) => {
  const translateItem = (subKey: string, category: string, subValue: any) => {
    if (typeof subValue !== "object" || subValue === null) {
      // Если значение не объект, возвращаем перевод ключа и значение
      const translationGroup =
        translationsSpecificationsItems[
          category as keyof typeof translationsSpecificationsItems
        ];
      const translatedKey =
        translationGroup?.[subKey as keyof typeof translationGroup];
      return (
        <>
          <Box component="span" sx={{ fontSize: "medium", color: "#507474" }}>
            {translatedKey}
          </Box>
          ............
          <Box component={"span"} sx={{ fontSize: "medium" }}>
            {subValue}
          </Box>
        </>
      );
    } else {
      // Если значение — объект, обрабатываем его рекурсивно
      const mainCategory = category;
      category = subKey;
      const translationGroup =
        translationsSpecificationsItems[
          category as keyof typeof translationsSpecificationsItems
        ];
      const translateCategiryGroup =
        translationsSpecificationsItems[
          mainCategory as keyof typeof translationsSpecificationsItems
        ];
      const translatedCategory =
        translateCategiryGroup?.[subKey as keyof typeof translationGroup];

      return (
        <>
          <Box component="div" sx={{ fontWeight: "bold" }}>
            {translatedCategory}
          </Box>

          {Object.entries(subValue).map(([key, value]: [string, any]) => {
            const translatedKey =
              translationGroup?.[key as keyof typeof translationGroup];
            return (
              <Box key={key}>
                <Box
                  component="span"
                  sx={{ fontSize: "medium", color: "#507474" }}
                >
                  {translatedKey}............
                </Box>
                <Box component={"span"} sx={{ fontSize: "medium" }}>
                  {value}
                </Box>
              </Box>
            );
          })}
        </>
      );
    }
  };
  return (
    <>
      <Box
        sx={{ width: "95%", marginTop: 2, marginBottom: 2, marginLeft: "20px" }}
      >
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", paddingBottom: "10px" }}
        >
          Характеристики:
        </Typography>
        {Object.entries(product.specifications).map(([category, value]) => (
          <Accordion key={category}>
            <AccordionSummary>
              <Typography variant="h6" sx={{ fontWeight: "600", margin: 0 }}>
                {translations[category as keyof typeof translations]}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={2}>
                {Object.entries(value).map(
                  ([subKey, subValue]: [string, any]) => (
                    <Grid item xs={12} sm={6} key={subKey}>
                      <Typography
                        variant="h6"
                        component="div"
                        sx={{
                          fontSize: "larger",
                          gap: "10px",
                        }}
                      >
                        {translateItem(subKey, category, subValue)}
                      </Typography>
                    </Grid>
                  )
                )}
              </Grid>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </>
  );
};

export default SpecificationsProduct;
