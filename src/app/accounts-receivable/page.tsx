import { AccountsReceivableSection } from "@/components/sections/AccountsReceivableSection";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata = {
  title: 'Accounts Receivable | Payraydoo',
  description: 'Streamline accounts receivable with intelligent automation from Payraydoo.',
};

export default function AccountsReceivablePage() {
  return (
    <main className="min-h-screen pt-32">
      <AccountsReceivableSection />
      <FinalCTA />
    </main>
  );
}
