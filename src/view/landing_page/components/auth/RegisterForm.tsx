import { Input } from "@/components/ui/input";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Icon } from "@iconify/react/dist/iconify.js";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import React from "react";

interface Props {
  contentMode: "register" | "register_email" | "verification";
  setContentMode: React.Dispatch<
    React.SetStateAction<"register" | "register_email" | "verification">
  >;
}

const RegisterForm: React.FC<Props> = ({ contentMode, setContentMode }) => {
  const [showPassword, setShowPassword] = React.useState<boolean>(true);

  let content;

  if (contentMode === "register_email") {
    content = (
      <div className="flex flex-col gap-3">
        <span className="font-bold text-xl">Create an account</span>
        <Input className={"bg-[#f2f1f3]"} placeholder="Email" type="email" />

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
        <Input
          className={"bg-[#f2f1f3]"}
          placeholder="Confirm Password"
          type={showPassword ? "password" : "text"}
        />

        <button
          className="p-2 rounded-2xl font-bold text-lg bg-pink-600 text-white"
          onClick={() => setContentMode("verification")}
        >
          Sign up with email
        </button>
      </div>
    );
  }

  if (contentMode === "verification") {
    content = (
      <div className="w-full flex flex-col gap-4">
        <div className="w-full flex items-center justify-center">
          <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
            <InputOTPGroup>
              <InputOTPSlot
                index={0}
                className="size-10 sm:size-11 md:size-12"
              />
              <InputOTPSlot
                index={1}
                className="size-10 sm:size-11 md:size-12"
              />
              <InputOTPSlot
                index={2}
                className="size-10 sm:size-11 md:size-12"
              />
              <InputOTPSlot
                index={3}
                className="size-10 sm:size-11 md:size-12"
              />
              <InputOTPSlot
                index={4}
                className="size-10 sm:size-11 md:size-12"
              />
              <InputOTPSlot
                index={5}
                className="size-10 sm:size-11 md:size-12"
              />
            </InputOTPGroup>
          </InputOTP>
        </div>
        <button
          className="p-2 w-full rounded-2xl font-bold text-lg bg-pink-600 hover:bg-pink-500 text-white"
          onClick={() => setContentMode("register")}
        >
          Send Verify
        </button>
      </div>
    );
  }

  return content;
};

export default RegisterForm;
