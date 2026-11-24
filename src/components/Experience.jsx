import React from "react";
import { motion } from "framer-motion";

const AnimatedArticle = motion.article;

const experiences = [
  {
    role: "Application Engineer I",
    organization: "Hyperface, Jaipur",
    duration: "Oct 2025 – Oct 2026",
    context:
      "Worked on-site at AU Small Finance Bank. Hyperface builds credit card systems for banks and fintechs.",
    responsibilities: [
      "Built a discount engine for AU LIT credit card benefits with account-level overrides, price snapshots, bulk upload, admin controls, daily discount reports, onboarding offers, and card packs.",
      "Built cycle-based renewals for milestone offers, including schema migrations, data backfill, distributed locking, and a daily renewal job.",
      "Fixed production issues affecting onboarding card activation, outbound bank emails, transaction and fee requests, and rewards file processing.",
      "Built Kafka-based executors for penalty, auto-renewal, benefit-selection, and partner notifications, released behind feature flags for staged rollout.",
      "Added correlation-ID tracing across asynchronous notification flows and moved benefit audit logs to structured, versioned JSON.",
      "Wrote Spock unit tests that caught release-blocking bugs, including a renewal failure, before merge.",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen px-6 py-20 bg-gradient-to-br from-cyan-50 to-indigo-50 scroll-mt-20"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-600 mb-14">
        Experience
      </h2>

      <div className="max-w-4xl mx-auto grid gap-10">
        {experiences.map((experience) => (
          <AnimatedArticle
            key={`${experience.role}-${experience.organization}`}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-indigo-700">
                    {experience.role}
                  </h3>
                  <p className="text-lg font-medium text-gray-700">
                    {experience.organization}
                  </p>
                </div>
                <p className="text-gray-600 font-medium md:text-right">
                  {experience.duration}
                </p>
              </div>

              <p className="text-gray-700 mb-5">{experience.context}</p>

              <ul className="space-y-3 text-gray-700 list-disc list-inside">
                {experience.responsibilities.map((responsibility) => (
                  <li key={responsibility}>{responsibility}</li>
                ))}
              </ul>
            </div>
          </AnimatedArticle>
        ))}
      </div>
    </section>
  );
};

export default Experience;
