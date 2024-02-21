"use client";
import { useState } from "react";
import { Box, Button, Grid, Stack, TextField } from "@mui/material";
import Image from "next/image";
import React from "react";
import coverPage from "../../assets/coverphoto.png";
import icon from "../../assets/images-removebg-preview (1).png";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import LockResetIcon from "@mui/icons-material/LockReset";
import Link from "next/link";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const inputChangeHandler = (e: any) => {};
  return (
    <>
      <Grid
        container
        sx={{
          display: "flex",
          height: "100vh",
          justifyContent: "center",
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: {
              xs: "none",
              md: "flex",
            },
            bgcolor: "#25293C",
            position: "relative",
          }}
        >
          <Image
            src={coverPage}
            alt="coverpage"
            fill
            style={{objectFit: "contain"}}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "#2F3349",
            p: 5,
          }}
        >
          <Stack
            sx={{
              display: "flex",
              flexDirection: "column",
              border: {
                xs: "1px solid white",
                md: "none",
              },
              borderRadius: {
                xs: "10px",
                md: "none",
              },
              p: {
                xs: "40px",
                md: "none",
              },
            }}
            rowGap={4}
          >
            <Stack>
              <Image src={icon} alt="icon" width={80} />
            </Stack>
            <Stack sx={{ display: "flex", flexDirection: "column" }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <h1 style={{ color: "#ACAEC6", fontFamily: "sans-serif" }}>
                  Forgot Password?
                </h1>
                {
                  <LockResetIcon
                    sx={{ ml: 2, fontSize: "45px", color: "goldenrod" }}
                  />
                }
              </Box>
              <p
                style={{
                  color: "#ACAEC6",
                  marginTop: "10px",
                  fontFamily: "sans-serif",
                }}
              >
                Enter your email and we'll send you instructions to reset your
                password
              </p>
            </Stack>
            <Stack>
              <form>
                <Stack>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="on"
                    // value={email}
                    InputLabelProps={{
                      style: { color: "#ACAEC6" }, // Replace with your desired color
                    }}
                    InputProps={{
                      inputProps: {
                        style: {
                          WebkitBoxShadow: "0 0 0 1000px #2F3349 inset",
                          WebkitTextFillColor: "#ACAEC6",
                        },
                      },
                    }}
                    onChange={(e) => inputChangeHandler(e)}
                  />
                </Stack>
                <Stack>
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "#8554D1",
                      "&:hover": {
                        bgcolor: "#8554D1",
                      },
                      mt: "20px",
                      textTransform: "none",
                    }}
                  >
                    Send Reset Link
                  </Button>
                </Stack>
                <Link href="/login">
                  <Stack
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "end",
                      alignItems: "center",
                      mt: 1,
                      fontFamily: "sans-serif",
                    }}
                  >
                    {<ArrowBackIosIcon sx={{ width: "15px" }} />}Back to Login
                  </Stack>
                </Link>
              </form>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default ForgotPassword;
