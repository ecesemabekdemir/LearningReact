import { Container, Stack } from "@mui/material";

export default function Header() {
  return (
    <Container maxWidth="lg" style={{marginBottom:20}}>
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          data-toggle="dropdown"
          aria-expanded="false"
        >
          Dropdown button
        </button>
        <div class="dropdown-menu w-100">
          <Stack direction="row">
            <Stack>
              <a class="dropdown-item" href="/#">
                Action
              </a>
              <a class="dropdown-item" href="/#">
                Another action
              </a>
              <a class="dropdown-item" href="/#">
                Something else here
              </a>
            </Stack>
            <Stack>
              <a class="giysiler" href="/#">
                Action
              </a>
              <a class="ayakkabılar" href="/#">
                Another action
              </a>
              <a class="dropdown-item" href="/#">
                Something else here
              </a>
              <a class="dropdown-item" href="/#">
                Something else here
              </a>
              <a class="dropdown-item" href="/#">
                Something else here
              </a>
              <a class="dropdown-item" href="/#">
                Something else here
              </a>
              <a class="dropdown-item" href="/#">
                Something else here
              </a>
              <a class="dropdown-item" href="/#">
                Something else here
              </a>
            </Stack>
          </Stack>
        </div>
      </div>
    </Container>
  );
}
