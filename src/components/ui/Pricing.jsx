import { Check } from "lucide-react";
const plans = [
  {
    name: "Basic",
    price: "$0",
    frequency: "/month",
    description: "Great for trying out StartAI and for tiny teams.",
    features: ["Console", "PitchMaster Deck"],
    buttonText: "Start for Free",
    highlight: false,
    lightBg: "from-[#FFEFE5] to-[#FFE0C7]",
  },
  {
    name: "Pro Plan",
    price: "$15",
    frequency: "/month",
    description: "Best for small teams scaling fast.",
    features: [
      "Console",
      "PitchMaster Deck",
      "Enhanced PitchMasterAI feedback",
      "Evaluate",
    ],
    buttonText: "Sign up with Pro Plan",
    highlight: true,
    lightBg: "from-[#EDE7FE] to-[#D9CEFF]",
  },
  {
    name: "Enterprise",
    price: "$25",
    frequency: "/month",
    description: "Great for growing startups and enterprises.",
    features: [
      "Console",
      "PitchMaster Deck",
      "Enhanced PitchMasterAI feedback",
      "Evaluate",
      "Mentorship & Guidance",
      "Founders Copilot",
    ],
    buttonText: "Sign up with Enterprise",
    highlight: false,
    lightBg: "from-[#E4F1FA] to-[#C8E6F9]",
  },
];

const allFeatures = [
  "Console",
  "PitchMaster Deck",
  "Enhanced PitchMasterAI feedback",
  "Evaluate",
  "Mentorship & Guidance",
  "Founders Copilot",
];

export function Pricing() {
  return (
    <section className="relative w-full py-16 bg-white dark:bg-[#0C0C0D] text-black dark:text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 hidden dark:block">
        <div className="absolute top-1/2 left-1/2 w-[1200px] h-[1200px] -translate-x-1/2 -translate-y-1/2 bg-orange-500/10 rounded-full blur-[160px] opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1a1a1a] via-transparent to-[#0C0C0D]" />
      </div>

      {/* Header */}
      <div className="relative z-10 text-center mb-12 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-4">
          Simple and Affordable Pricing Plans
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground dark:text-zinc-400 max-w-2xl mx-auto">
          Start tracking and improving your finance management
        </p>
      </div>

      {/* Pricing Grid */}
      <div className="relative z-10 px-2 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 max-w-full overflow-hidden">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl p-4 md:p-6 backdrop-blur-lg border overflow-hidden shadow-md hover:shadow-xl transition duration-300
                bg-gradient-to-b ${plan.lightBg} dark:bg-black/30 dark:bg-none dark:backdrop-blur-lg
                border-zinc-200 dark:border-white/10 min-h-[520px]
              `}
            >
              {/* Title & Price */}
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-black dark:text-[#d0bfff]">
                {plan.name}
              </h3>
              <p className="text-2xl font-bold mb-1 text-black dark:text-[#d0bfff]">
                {plan.price}
                <span className="text-sm font-medium text-gray-600 dark:text-zinc-400 ml-1">
                  {plan.frequency}
                </span>
              </p>
              <p className="text-sm text-gray-600 dark:text-zinc-400 mb-5">
                {plan.description}
              </p>

              {/* Features */}
              <div className="mt-6 border-t border-gray-300 dark:border-zinc-700 pt-4">
                <p className="text-xs uppercase tracking-widest text-gray-500 dark:text-zinc-500 mb-3">
                  Features
                </p>
                <ul className="space-y-3">
                  {allFeatures.map((feature, idx) => (
                    <li
                      key={idx}
                      className={`flex items-center gap-2 text-sm ${
                        plan.features.includes(feature)
                          ? "text-black dark:text-[#d0bfff]"
                          : "text-gray-400 dark:text-zinc-500"
                      }`}
                    >
                      {plan.features.includes(feature) ? (
                        <span className="w-5 h-5 rounded-full bg-black dark:bg-[#d0bfff] flex items-center justify-center">
                          <Check className="w-3 h-3 text-white dark:text-black" />
                        </span>
                      ) : (
                        <span className="w-5 h-5 rounded-full border border-gray-300 dark:border-zinc-600" />
                      )}
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button at the Bottom */}
              <div className="mt-6">
                <button
                  className="w-full py-2 rounded-full text-sm font-medium border bg-white text-black dark:bg-zinc-800 dark:text-white hover:bg-black hover:text-white dark:hover:bg-zinc-700 dark:border-white border-black"
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
