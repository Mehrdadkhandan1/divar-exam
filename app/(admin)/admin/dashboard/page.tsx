import { getValidAccessToken } from "@/shared/auth/get-valid-access-token";
import React from "react";

const DashboardPage = async () => {
  const valid = await getValidAccessToken();

  return <div>DashboardPage</div>;
};

export default DashboardPage;
