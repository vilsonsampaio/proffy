import { HTMLAttributes } from "react";
import { UserProps } from "../../services/endpoints.d";

export interface ProfileHeaderProps extends HTMLAttributes<HTMLDivElement> {
  data: UserProps | null;
  handleSignOut(): Promise<void>;
}