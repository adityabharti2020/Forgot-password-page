"use client";
import React, { useRef, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import coverPage from "../../assets/reset_pass.png";
import icon from "../../assets/images-removebg-preview (1).png";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LockResetIcon from "@mui/icons-material/LockReset";
import { ThemeContext } from "@/components/ThemeContext";

type Show = {
  isPassword: boolean;
  isConfirm: boolean;
};

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState<Show>({
    isPassword: false,
    isConfirm: false,
  });
  const boundingRef = useRef<DOMRect | null>(null);
  const handleClickPassword = () =>
    setShowPassword((prevShow) => ({
      ...prevShow,
      isPassword: !prevShow.isPassword,
    }));
  const handleClickConfirmPassword = () =>
    setShowPassword((prevShow) => ({
      ...prevShow,
      isConfirm: !prevShow.isConfirm,
    }));

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
            alignItems: "center",
            justifyContent: "center",
            display: {
              xs: "none",
              md: "flex",
            },
            position: "relative",
          }}
        >
          <Image
            src={coverPage}
            alt="coverpage"
            style={{ objectFit: "contain", width: "450px", height: "auto" }}
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
            p: 5,
          }}
        >
          <Stack
            sx={{
              display: "flex",
              flexDirection: "column",
              bgcolor: "lightblue",
              perspective: "900px",
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
              transition: "transform 0.3s ease-out",
              "&:hover": {
                transform:
                  "rotateX(var(--x-rotation)) rotateY(var(--y-rotation)) scale(1.1)",
                boxShadow: "0px 8px 15px black",
              },
            }}
            rowGap={4}
            onMouseLeave={(e) => {
              boundingRef.current = null;
            }}
            onMouseEnter={(e) => {
              boundingRef.current = e.currentTarget.getBoundingClientRect();
            }}
            onMouseMove={(e) => {
              if (!boundingRef.current) return;
              const x = e.clientX - boundingRef.current.left;
              const y = e.clientY - boundingRef.current.top;
              const xPercentage = x / boundingRef.current.width;
              const yPercentage = y / boundingRef.current.height;
              const xRotation = (xPercentage - 0.5) * 50;
              const yRotation = (0.5 - yPercentage) * 50;
            //   console.table({ xRotation, yRotation });
              e.currentTarget.style.setProperty(
                "--x-rotation",
                `${yRotation}deg`
              );
              e.currentTarget.style.setProperty(
                "--y-rotation",
                `${xRotation}deg`
              );
            }}
          >
            <Stack>
              <Image src={icon} alt="icon" width={80} />
            </Stack>
            <Stack sx={{ display: "flex", flexDirection: "column" }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography variant="h4">Reset Password</Typography>
                <LockResetIcon
                  sx={{ ml: 2, fontSize: "45px", color: "goldenrod" }}
                />
              </Box>
              <Typography variant="body2">fetch current email here</Typography>
            </Stack>
            <Stack>
              <Box component={"form"}>
                <Stack>
                  <FormControl variant="outlined" fullWidth>
                    <InputLabel htmlFor="outlined-adornment-password">
                      Password
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type={showPassword.isPassword ? "text" : "password"}
                      name="password"
                      //   value=''
                      //   onChange={inputChangeHandler}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickPassword}
                            edge="end"
                          >
                            {showPassword.isPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                    />
                  </FormControl>
                </Stack>
                <Stack sx={{ mt: 2 }}>
                  <FormControl variant="outlined" fullWidth>
                    <InputLabel htmlFor="outlined-adornment-passwordConfirm">
                      Confirm Password
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-passwordConfirm"
                      type={showPassword.isConfirm ? "text" : "password"}
                      name="passwordConfirm"
                      //   value=''
                      //   onChange={inputChangeHandler}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickConfirmPassword}
                            edge="end"
                          >
                            {showPassword.isConfirm ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Confirm Password"
                    />
                  </FormControl>
                </Stack>
                <Button
                  fullWidth
                  sx={{
                    mt: "20px",
                  }}
                >
                  Set New Password
                </Button>
                <Stack
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "end",
                    alignItems: "center",
                    mt: 1,
                  }}
                >
                  {<ArrowBackIosIcon sx={{ width: "15px" }} />}Back to Login
                </Stack>
              </Box>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default ResetPassword;
