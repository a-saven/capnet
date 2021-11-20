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
          <Typography>3 $/month</Typography>
          <Typography>30 $/year</Typography>
          <Typography>
            Donate any sum to support project and get add-free period
          </Typography>
        </Box>
      </Box>
    </Layout>
  );
}
