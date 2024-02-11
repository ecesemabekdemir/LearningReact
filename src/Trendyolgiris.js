import { Icon } from "@iconify/react";
import {
  Container,
  Stack,
  TextField,
  Button,
} from "@mui/material";

export default function Trendyolgiris() {
  return (
    <Container sx={{ p: 5 }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        {/* trendyol görseli */}
        <Stack direction="row" spacing={3}>
          <img
            src="./görseller/ty-web.svg"
            alt=""
            style={{ width: "200px", height: "120px" }}
          />
        </Stack>
        <Stack>
          {/* ürün arama  */}
          <TextField
            style={{ width: 500 }}
            label="aradığınız ürün kategori veya markayı yazınız "
            id="fullWidth"
          />
        </Stack>
        <Stack direction="row">
          {" "}
          {/* giriş yap butonu */}
          <Button
            variant="text"
            startIcon={<Icon icon="ph:user-light" />}
            style={{ color: "black" }}
          >
            Giriş Yap
          </Button>
          {/* favorilerim butonu */}
          <Button
            variant="text"
            startIcon={<Icon icon="ph:heart" />}
            style={{ color: "black" }}
          >
            Favorilerim
          </Button>
          {/* sepetim butonu */}
          <Button
            variant="text"
            startIcon={<Icon icon="simple-line-icons:basket" />}
            style={{ color: "black" }}
          >
            sepetim
          </Button>{" "}
        </Stack>
      </Stack>
    </Container>
  );
}
