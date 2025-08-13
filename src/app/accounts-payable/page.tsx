import { AccountsPayableSection } from "@/components/sections/AccountsPayableSection";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata = {
  title: 'Accounts Payable | Payraydoo',
  description: 'Streamline accounts payable with intelligent automation from Payraydoo.',
};

export default function AccountsPayablePage() {
  return (
    <main className="min-h-screen pt-32">
      <AccountsPayableSection />
      <FinalCTA />
    </main>
  );
}
