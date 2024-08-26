import { Input } from "@/components/ui/input";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

interface Props {
  contentMode: "login" | "login_email" | "forgot_password";
  setContentMode: React.Dispatch<
    React.SetStateAction<"login" | "login_email" | "forgot_password">
  >;
}

const LoginForm: React.FC<Props> = ({ contentMode, setContentMode }) => {
  const [showPassword, setShowPassword] = React.useState<boolean>(true);

  let content;

  if (contentMode === "forgot_password") {
    content = (
      <div className="flex flex-col gap-4">
        <span className="font-bold text-xl">Forgot Password</span>
        <small>Masukkan email yang sudah terdaftar untuk reset password</small>
        <div className="relative flex items-center justify-center">
          <Input className={"bg-[#f2f1f3]"} placeholder="Email" type="text" />
        </div>

        <button className="p-2 rounded-2xl font-bold text-lg bg-pink-600 hover:bg-pink-500 text-white">
          Send reset
        </button>
      </div>
    );
  }

  if (contentMode === "login_email") {
    content = (
      <div className="flex flex-col gap-3">
        <Input className={"bg-[#f2f1f3]"} placeholder="Email" />
        <div className="relative flex items-center justify-center">
          {showPassword ? (
            <Icon
              icon={"mingcute:eye-close-line"}
              fontSize={25}
              className="absolute right-2 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            />
          ) : (
            <Icon
              icon={"mdi:eye-outline"}
              fontSize={25}
              className="absolute right-2 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            />
          )}

          <Input
            className={"bg-[#f2f1f3]"}
            placeholder="Password"
            type={showPassword ? "password" : "text"}
          />
        </div>
        <small
          className="w-full text-end text-xs text-pink-600 cursor-pointer hover:text-pink-400"
          onClick={() => setContentMode("forgot_password")}
        >
          Forgot your password?
        </small>
        <button className="p-2 rounded-2xl font-bold text-lg bg-pink-600 text-white">
          Log in with email
        </button>
      </div>
    );
  }

  if (contentMode === "login") {
    content;
  }
  return content;
};

export default LoginForm;
