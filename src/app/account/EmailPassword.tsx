"use client";

import { User } from "@supabase/supabase-js";

type EmailPasswordProps = {
  user: User | null;
};

export default function EmailPassword({ user }: EmailPasswordProps) {
  return (
    <div>
      <h2 className="text-xl font-semibold">Login</h2>
      {/* Form */}
    </div>
  );
}
