import { PayraydooHero } from '@/components/sections/PayraydooHero'
import { PayraydooStats } from '@/components/sections/PayraydooStats'
import { AccountsPayable } from '@/components/sections/AccountsPayable'
import { AccountsReceivable } from '@/components/sections/AccountsReceivable'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { ProductCapabilities } from '@/components/sections/ProductCapabilities'
import { PayraydooTestimonials } from '@/components/sections/PayraydooTestimonials'

export default function Home() {
  return (
    <main>
      <PayraydooHero />
      <PayraydooStats />
      <AccountsPayable />
      <AccountsReceivable />
      <HowItWorks />
      <ProductCapabilities />
      <PayraydooTestimonials />
    </main>
  )
}
