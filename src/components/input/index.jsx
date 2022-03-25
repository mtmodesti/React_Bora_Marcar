import TextField from "@mui/material/TextField";
import { InputContainer } from "./styles";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#24203b",
    },
  },
});

const Input = ({ label, helperText, error, register, name, ...rest }) => {
  return (
    <ThemeProvider theme={theme}>
      <InputContainer>
        <TextField
          color="primary"
          variant="outlined"
          label={label}
          helperText={helperText}
          error={error}
          {...rest}
          size="small"
          {...register(name)} 
          
        />
      </InputContainer>
    </ThemeProvider>
  );
};

export default Input;
