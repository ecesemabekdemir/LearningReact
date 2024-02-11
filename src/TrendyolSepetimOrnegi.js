import { Icon } from "@iconify/react";
import {
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

export default function TrendyolSepetimOrnegi() {
  return (
    <Container sx={{ p: 5 }}>
      <Stack direction="row" spacing={3}>
        <Card
          sx={{
            backgroundColor: "transparent",
            border: "thin solid #e6e6e6",
            borderRadius: 3,
          }}
          elevation={0}
        >
          <CardContent>
            <Stack direction="row" spacing={3}>
              <img
                src="https://cdn.dsmcdn.com/ty1144/product/media/images/prod/SPM/PIM/20240119/23/cefbef84-32fd-3128-a33a-1f5e6965194b/1_org.jpg"
                alt="product"
                style={{
                  border: "thin solid #e6e6e6",
                  borderRadius: 3,
                  width: "80px",
                  height: "120px",
                }}
              />
              <Stack width="100%" justifyContent="space-between">
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Typography fontWeight="bold" variant="h6">
                      monalisatoka
                    </Typography>
                    <Typography variant="inherit">
                      Kadın Zirkon Taşlı Gümüş Küpe
                    </Typography>
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <IconButton
                      sx={{
                        border: "thin solid #e6e6e6",
                      }}
                    >
                      <Icon icon="mdi:heart" />
                    </IconButton>
                    <IconButton
                      sx={{
                        border: "thin solid #e6e6e6",
                      }}
                    >
                      <Icon icon="uiw:delete" />
                    </IconButton>
                  </Stack>
                </Stack>
                <Stack spacing={3}>
                  <Chip
                    avatar={
                      <Icon
                        icon="clarity:tag-solid"
                        style={{ color: "#f27a1a" }}
                      />
                    }
                    label="4 al 3 öde"
                    sx={{ width: 120, backgroundColor: "#fef4eb" }}
                  />
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography color="#f27a1a" fontWeight="600">
                      79,99 TL
                    </Typography>
                    <Button
                      variant="outlined"
                      sx={{
                        borderColor: "#f27a1a",
                        color: "#f27a1a",
                        fontWeight: "bold",
                        textTransform: "capitalize",
                      }}
                    >
                      Sepete Ekle
                    </Button>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
        <Card
          sx={{
            backgroundColor: "transparent",
            border: "thin solid #e6e6e6",
            borderRadius: 3,
          }}
          elevation={0}
        >
          <CardContent>
            <Stack direction="row" spacing={3}>
              <img
                src="https://cdn.dsmcdn.com/ty1144/product/media/images/prod/SPM/PIM/20240119/23/cefbef84-32fd-3128-a33a-1f5e6965194b/1_org.jpg"
                alt="product"
                style={{
                  border: "thin solid #e6e6e6",
                  borderRadius: 3,
                  width: "80px",
                  height: "120px",
                }}
              />
              <Stack width="100%" justifyContent="space-between">
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Typography fontWeight="bold" variant="h6">
                      monalisatoka
                    </Typography>
                    <Typography variant="inherit">
                      Kadın Zirkon Taşlı Gümüş Küpe
                    </Typography>
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <IconButton
                      sx={{
                        border: "thin solid #e6e6e6",
                      }}
                    >
                      <Icon icon="mdi:heart" />
                    </IconButton>
                    <IconButton
                      sx={{
                        border: "thin solid #e6e6e6",
                      }}
                    >
                      <Icon icon="uiw:delete" />
                    </IconButton>
                  </Stack>
                </Stack>
                <Stack spacing={3}>
                  <Chip
                    avatar={
                      <Icon
                        icon="clarity:tag-solid"
                        style={{ color: "#f27a1a" }}
                      />
                    }
                    label="4 al 3 öde"
                    sx={{ width: 120, backgroundColor: "#fef4eb" }}
                  />
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography color="#f27a1a" fontWeight="600">
                      79,99 TL
                    </Typography>
                    <Button
                      variant="outlined"
                      sx={{
                        borderColor: "#f27a1a",
                        color: "#f27a1a",
                        fontWeight: "bold",
                        textTransform: "capitalize",
                      }}
                    >
                      Sepete Ekle
                    </Button>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Stack>
    </Container>
  );
}
