import { Box, Typography } from "@mui/material";
import Layout from "src/components/layout";

export default function Index() {
  return (
    <Layout>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignContent="center"
        height={"100%"}
      >
        <Box m={3} p={3}>
          <Typography variant="h3">Mission:</Typography>
          <Typography variant="h5">
            Simple logging with tags for easy organizing
          </Typography>
          <Typography>
            Intuitive interface and simple but powerful features to easily log
            and navigate thought and ideas. Forever free, you don't need to
            worry about loosing access to data. Subscription is optional to
            remove adds. It also helps us to improve and support product.
          </Typography>
        </Box>
      </Box>
    </Layout>
  );
}
