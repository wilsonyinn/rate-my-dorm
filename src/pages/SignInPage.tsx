import * as React from "react";
import { AppProvider, SignInPage, AuthProvider } from "@toolpad/core";
import { useTheme } from "@mui/material/styles";

const providers: AuthProvider[] = [
  { id: "google", name: "Google" },
  { id: "facebook", name: "Facebook" },
  { id: "linkedin", name: "LinkedIn" },
  { id: "credentials", name: "Email and Password" },
];

export default function SlotPropsSignIn() {
  const theme = useTheme();
  return (
    <AppProvider theme={theme}>
      <SignInPage
        signIn={(provider, formData) =>
          alert(
            `Signing in with "${provider.name}" and credentials: ${formData.get("email")}, ${formData.get("password")}`
          )
        }
        slotProps={{
          emailField: { variant: "standard" },
          passwordField: { variant: "standard" },
          submitButton: { variant: "contained" },
        }}
        providers={providers}
      />
    </AppProvider>
  );
}
