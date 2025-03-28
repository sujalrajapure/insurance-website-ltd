import Link from "next/link"
import { ArrowRight, Check, HelpCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import LeadForm from "@/components/lead-form"

export default function InsurancePlansPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Insurance Plans</h1>
            <p className="text-xl max-w-3xl mx-auto text-blue-100">
              Explore LIC's comprehensive range of insurance plans designed to protect you and your loved ones at every
              stage of life.
            </p>
          </div>
        </div>
      </section>

      {/* Plan Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <Tabs defaultValue="life" className="w-full">
            <div className="text-center mb-8">
              <TabsList className="inline-flex h-10 items-center justify-center rounded-md bg-gray-100 p-1 text-gray-500 mb-2">
                <TabsTrigger
                  value="life"
                  className="rounded-sm px-3 py-1.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm"
                >
                  Life Insurance
                </TabsTrigger>
                <TabsTrigger
                  value="pension"
                  className="rounded-sm px-3 py-1.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm"
                >
                  Pension Plans
                </TabsTrigger>
                <TabsTrigger
                  value="child"
                  className="rounded-sm px-3 py-1.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm"
                >
                  Child Plans
                </TabsTrigger>
                <TabsTrigger
                  value="health"
                  className="rounded-sm px-3 py-1.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm"
                >
                  Health Insurance
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Life Insurance Plans */}
            <TabsContent value="life" className="mt-6">
              <div className="grid md:grid-cols-3 gap-8">
                <PlanCard
                  id="jeevan-anand"
                  title="LIC Jeevan Anand"
                  description="Whole Life Plan with Endowment"
                  features={[
                    "Life cover throughout lifetime",
                    "Maturity benefits at the end of policy term",
                    "Participation in bonuses",
                    "Tax benefits under Section 80C",
                  ]}
                  idealFor={["Family breadwinners", "Long-term financial security", "Legacy planning"]}
                  minAge={18}
                  maxAge={65}
                  minTerm={15}
                  maxTerm={35}
                  minSum={100000}
                />

                <PlanCard
                  id="tech-term"
                  title="LIC Tech Term"
                  description="Pure Term Insurance Plan"
                  features={[
                    "High coverage at affordable premiums",
                    "Multiple policy term options",
                    "Additional rider benefits available",
                    "Tax benefits under Section 80C",
                  ]}
                  idealFor={["Young professionals", "Family protection", "Loan coverage"]}
                  minAge={18}
                  maxAge={65}
                  minTerm={10}
                  maxTerm={40}
                  minSum={5000000}
                  highlighted={true}
                />

                <PlanCard
                  id="jeevan-labh"
                  title="LIC Jeevan Labh"
                  description="Endowment Assurance Plan"
                  features={[
                    "Guaranteed additions",
                    "Lump sum payment on maturity",
                    "Financial protection for family",
                    "Tax benefits under Section 80C",
                  ]}
                  idealFor={["Tax planning", "Medium-term goals", "Education planning"]}
                  minAge={8}
                  maxAge={59}
                  minTerm={15}
                  maxTerm={25}
                  minSum={200000}
                />
              </div>
            </TabsContent>

            {/* Pension Plans */}
            <TabsContent value="pension" className="mt-6">
              <div className="grid md:grid-cols-3 gap-8">
                <PlanCard
                  id="pmvvy"
                  title="LIC PMVVY"
                  description="Pension Plan for Senior Citizens"
                  features={[
                    "Guaranteed pension for senior citizens",
                    "Monthly, quarterly, half-yearly, yearly options",
                    "Return of purchase price to nominee",
                    "Loan facility available",
                  ]}
                  idealFor={["Senior citizens", "Retirement income", "Financial security"]}
                  minAge={60}
                  maxAge={80}
                  minTerm={10}
                  maxTerm={10}
                  minSum={100000}
                />

                <PlanCard
                  id="jeevan-shanti"
                  title="LIC Jeevan Shanti"
                  description="Immediate & Deferred Annuity Plan"
                  features={[
                    "Immediate or deferred annuity options",
                    "Multiple annuity options",
                    "Return of purchase price option",
                    "Joint life annuity available",
                  ]}
                  idealFor={["Retirement planning", "Regular income", "Wealth transfer"]}
                  minAge={30}
                  maxAge={85}
                  minTerm="Lifetime"
                  maxTerm="Lifetime"
                  minSum={150000}
                  highlighted={true}
                />

                <PlanCard
                  id="new-jeevan-nidhi"
                  title="LIC New Jeevan Nidhi"
                  description="Pension Plan with Life Cover"
                  features={[
                    "Pension with life insurance cover",
                    "Guaranteed additions",
                    "Vesting age flexibility",
                    "Tax benefits under Section 80C",
                  ]}
                  idealFor={["Early retirement planning", "Tax planning", "Long-term security"]}
                  minAge={20}
                  maxAge={60}
                  minTerm={10}
                  maxTerm={35}
                  minSum={100000}
                />
              </div>
            </TabsContent>

            {/* Child Plans */}
            <TabsContent value="child" className="mt-6">
              <div className="grid md:grid-cols-3 gap-8">
                <PlanCard
                  id="jeevan-tarun"
                  title="LIC Jeevan Tarun"
                  description="Child Education & Marriage Plan"
                  features={[
                    "Survival benefits at specific ages",
                    "Maturity benefit",
                    "Premium waiver on death of parent",
                    "Tax benefits under Section 80C",
                  ]}
                  idealFor={["Child education planning", "Marriage planning", "Long-term goals"]}
                  minAge={0}
                  maxAge={12}
                  minTerm={15}
                  maxTerm={25}
                  minSum={75000}
                  highlighted={true}
                />

                <PlanCard
                  id="child-money-back"
                  title="LIC Child Money Back"
                  description="Child Education Plan with Money Back"
                  features={[
                    "Regular money back benefits",
                    "Premium waiver benefit",
                    "Loyalty additions",
                    "Tax benefits under Section 80C",
                  ]}
                  idealFor={["Education expenses", "Regular financial needs", "Long-term security"]}
                  minAge={0}
                  maxAge={12}
                  minTerm={20}
                  maxTerm={25}
                  minSum={100000}
                />

                <PlanCard
                  id="child-future"
                  title="LIC Child Future Plan"
                  description="Child Education & Career Plan"
                  features={[
                    "Guaranteed education benefits",
                    "Career benefit at maturity",
                    "Premium waiver on death of parent",
                    "Tax benefits under Section 80C",
                  ]}
                  idealFor={["Higher education", "Career startup costs", "Financial security"]}
                  minAge={0}
                  maxAge={15}
                  minTerm={15}
                  maxTerm={25}
                  minSum={100000}
                />
              </div>
            </TabsContent>

            {/* Health Insurance */}
            <TabsContent value="health" className="mt-6">
              <div className="grid md:grid-cols-3 gap-8">
                <PlanCard
                  id="arogya-rakshak"
                  title="LIC Arogya Rakshak"
                  description="Individual Health Insurance Plan"
                  features={[
                    "Daily hospital cash benefit",
                    "Major surgical benefit",
                    "Day care procedure benefit",
                    "Tax benefits under Section 80D",
                  ]}
                  idealFor={["Individuals", "Hospital expense coverage", "Surgical procedures"]}
                  minAge={18}
                  maxAge={65}
                  minTerm={1}
                  maxTerm={1}
                  minSum={500000}
                  highlighted={true}
                />

                <PlanCard
                  id="cancer-cover"
                  title="LIC Cancer Cover"
                  description="Cancer-Specific Health Plan"
                  features={[
                    "Lump sum benefit on diagnosis",
                    "Income benefit during treatment",
                    "Premium waiver benefit",
                    "Tax benefits under Section 80D",
                  ]}
                  idealFor={["Cancer protection", "Treatment cost coverage", "Income replacement"]}
                  minAge={18}
                  maxAge={65}
                  minTerm={10}
                  maxTerm={30}
                  minSum={1000000}
                />

                <PlanCard
                  id="jeevan-arogya"
                  title="LIC Jeevan Arogya"
                  description="Comprehensive Health Insurance"
                  features={[
                    "Hospital cash benefit",
                    "Major surgical benefit",
                    "Day care procedure benefit",
                    "Tax benefits under Section 80D",
                  ]}
                  idealFor={["Family health coverage", "Hospitalization expenses", "Surgical procedures"]}
                  minAge={18}
                  maxAge={65}
                  minTerm={5}
                  maxTerm={20}
                  minSum={200000}
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Plan Comparison */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Compare Popular Plans</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Not sure which plan is right for you? Compare our most popular plans side by side.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="p-4 text-left">Features</th>
                  <th className="p-4 text-center">LIC Tech Term</th>
                  <th className="p-4 text-center">LIC Jeevan Anand</th>
                  <th className="p-4 text-center">LIC Jeevan Shanti</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-4 bg-gray-100 font-medium">Plan Type</td>
                  <td className="p-4 text-center">Pure Term Insurance</td>
                  <td className="p-4 text-center">Whole Life with Endowment</td>
                  <td className="p-4 text-center">Annuity Plan</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 bg-gray-100 font-medium">Premium</td>
                  <td className="p-4 text-center">Low</td>
                  <td className="p-4 text-center">Medium to High</td>
                  <td className="p-4 text-center">One-time or Regular</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 bg-gray-100 font-medium">Coverage Amount</td>
                  <td className="p-4 text-center">High (50 Lakhs+)</td>
                  <td className="p-4 text-center">Medium (5-50 Lakhs)</td>
                  <td className="p-4 text-center">Based on Purchase Price</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 bg-gray-100 font-medium">Maturity Benefit</td>
                  <td className="p-4 text-center">No</td>
                  <td className="p-4 text-center">Yes</td>
                  <td className="p-4 text-center">Regular Pension</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 bg-gray-100 font-medium">Death Benefit</td>
                  <td className="p-4 text-center">Sum Assured</td>
                  <td className="p-4 text-center">Sum Assured + Bonuses</td>
                  <td className="p-4 text-center">Return of Purchase Price (Optional)</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 bg-gray-100 font-medium">Tax Benefits</td>
                  <td className="p-4 text-center">Section 80C</td>
                  <td className="p-4 text-center">Section 80C</td>
                  <td className="p-4 text-center">Section 80C & 10(10D)</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 bg-gray-100 font-medium">Ideal For</td>
                  <td className="p-4 text-center">Pure Protection</td>
                  <td className="p-4 text-center">Protection + Savings</td>
                  <td className="p-4 text-center">Retirement Income</td>
                </tr>
                <tr>
                  <td className="p-4"></td>
                  <td className="p-4 text-center">
                    <Button asChild className="w-full">
                      <Link href="#tech-term">View Details</Link>
                    </Button>
                  </td>
                  <td className="p-4 text-center">
                    <Button asChild className="w-full">
                      <Link href="#jeevan-anand">View Details</Link>
                    </Button>
                  </td>
                  <td className="p-4 text-center">
                    <Button asChild className="w-full">
                      <Link href="#jeevan-shanti">View Details</Link>
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Insurance Planning Guide */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Insurance Planning Guide</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Not sure how much insurance you need or which plans are right for you? Follow this simple guide.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-blue-600">1</span>
                </div>
                <CardTitle>Assess Your Needs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Consider your age, income, dependents, existing coverage, debts, and future financial goals.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-blue-600 mr-2 mt-0.5" />
                    <span>Family protection needs</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-blue-600 mr-2 mt-0.5" />
                    <span>Outstanding loans and debts</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-blue-600 mr-2 mt-0.5" />
                    <span>Children's education costs</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-blue-600 mr-2 mt-0.5" />
                    <span>Retirement planning needs</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-blue-600">2</span>
                </div>
                <CardTitle>Calculate Coverage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Determine how much coverage you need based on your financial responsibilities and goals.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-blue-600 mr-2 mt-0.5" />
                    <span>10-15x annual income (basic rule)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-blue-600 mr-2 mt-0.5" />
                    <span>Add outstanding debts</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-blue-600 mr-2 mt-0.5" />
                    <span>Add future education expenses</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-blue-600 mr-2 mt-0.5" />
                    <span>Subtract existing coverage</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-blue-600">3</span>
                </div>
                <CardTitle>Choose Plan Types</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Select the right mix of insurance plans based on your protection and investment needs.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-blue-600 mr-2 mt-0.5" />
                    <span>Term insurance for pure protection</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-blue-600 mr-2 mt-0.5" />
                    <span>Endowment for savings + protection</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-blue-600 mr-2 mt-0.5" />
                    <span>Pension plans for retirement</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-blue-600 mr-2 mt-0.5" />
                    <span>Health plans for medical coverage</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-blue-600">4</span>
                </div>
                <CardTitle>Review & Optimize</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Regularly review your insurance portfolio to ensure it remains aligned with your changing needs.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-blue-600 mr-2 mt-0.5" />
                    <span>Annual policy review</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-blue-600 mr-2 mt-0.5" />
                    <span>Update after major life events</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-blue-600 mr-2 mt-0.5" />
                    <span>Adjust coverage as needed</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-blue-600 mr-2 mt-0.5" />
                    <span>Optimize for tax benefits</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Get Free Consultation */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">Not Sure Which Plan Is Right For You?</h2>
              <p className="text-xl text-blue-100">
                Get a free, personalized insurance consultation. I'll help you find the perfect coverage for your needs
                and budget.
              </p>
            </div>

            <LeadForm />
          </div>
        </div>
      </section>
    </main>
  )
}

function PlanCard({
  id,
  title,
  description,
  features,
  idealFor,
  minAge,
  maxAge,
  minTerm,
  maxTerm,
  minSum,
  highlighted = false,
}) {
  return (
    <Card id={id} className={`overflow-hidden ${highlighted ? "border-blue-600 shadow-lg" : ""}`}>
      {highlighted && <div className="bg-blue-600 text-white text-center py-1 text-sm font-medium">Popular Choice</div>}
      <CardHeader className={`${highlighted ? "bg-blue-50" : ""}`}>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-500 mb-2">KEY FEATURES</h4>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <Check className="h-5 w-5 text-blue-600 mr-2 shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-500 mb-2">IDEAL FOR</h4>
          <ul className="space-y-2">
            {idealFor.map((item, index) => (
              <li key={index} className="flex items-start">
                <Check className="h-5 w-5 text-blue-600 mr-2 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
          <div>
            <h4 className="text-xs font-medium text-gray-500 mb-1">ENTRY AGE</h4>
            <p>
              {minAge} - {maxAge} years
            </p>
          </div>
          <div>
            <h4 className="text-xs font-medium text-gray-500 mb-1">POLICY TERM</h4>
            <p>
              {minTerm} - {maxTerm} {typeof minTerm === "string" ? "" : "years"}
            </p>
          </div>
          <div>
            <h4 className="text-xs font-medium text-gray-500 mb-1">MIN SUM ASSURED</h4>
            <p>₹{minSum.toLocaleString()}</p>
          </div>
          <div className="flex items-end">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-6 p-0">
                    <HelpCircle className="h-4 w-4 text-gray-400" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs">
                    Premium depends on age, sum assured, and policy term. Contact for a personalized quote.
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>

        <Button asChild className="w-full">
          <Link href="/contact">
            Get Free Quote <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}

