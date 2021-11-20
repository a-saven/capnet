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
        <Box>
          <Typography>If you have some questions please contact me</Typography>
        </Box>
      </Box>
    </Layout>
  );
}
