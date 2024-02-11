import { Button, Container, Stack } from "@mui/material";

export default function Trendyolönecikanlar() {
  return (
    <Container>
      <Stack direction="row" alignItems="center" spacing={2}>
        <Button
          variant="text"
          style={{
            width: "400px",
            color: "#24895a",
            background: "#effbf5",
            textTransform: "capitalize",
            fontWeight: "bold",
          }}
        >
          Sepete en çok eklenenler
        </Button>
        <Button
          variant="text"
          style={{
            width: "400px",
            color: "#ae4905",
            background: "#fef4ec",
            textTransform: "capitalize",
            fontWeight: "bold",
          }}
        >
          En çok öne çıkanlar
        </Button>
        <Button
          variant="text"
          style={{
            width: "400px",
            color: "#c90346",
            background: "#fef0f2",
            textTransform: "capitalize",
            fontWeight: "bold",
          }}
        >
          flaş ürünler
        </Button>
      </Stack>
    </Container>
  );
}
