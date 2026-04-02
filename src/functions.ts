import { checkAgeProps } from "./types";

export function checkAge({ age }: checkAgeProps) {
  return age > 18;
}
