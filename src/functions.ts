import { checkAgeProps } from "./types";

export function checkAge({ age }: checkAgeProps) {
  if (age < 0) {
    throw new Error("Age not Valid");
  } else if (age > 18) {
    return true;
  } else {
    return false;
  }
}
