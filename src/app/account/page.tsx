import React from "react";
import EmailPassword from "./EmailPassword";
import { createClient } from "@/lib/supabase/server";

const AccountPage = async () => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log(user);
  return (
    <div>
      <EmailPassword user={null} />
    </div>
  );
};

export default AccountPage;
