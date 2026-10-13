import { SignUp } from "@clerk/nextjs";
import AuthPageShell, {
  bayarjomAuthAppearance,
} from "@/components/AuthPageShell";

export default function SignUpPage() {
  return (
    <AuthPageShell
      mode="sign-up"
      eyebrow="Create your account"
      title="Start collecting cleanly."
      description="Create your BayarJom account and move straight into your dashboard."
    >
      <SignUp
        appearance={bayarjomAuthAppearance}
        fallbackRedirectUrl="/dashboard"
        signInUrl="/sign-in"
      />
    </AuthPageShell>
  );
}
