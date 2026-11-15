import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode } from "react-icons/fa";

const experiences = [
  {
    company: "A&L Tech Careers",
    role: "Tech Career Guidance & Content",
    duration: "Channel Profile",
    icon: <FaLaptopCode />,
    color: "from-red-500 to-orange-500",
    description:
      "Sharing approachable technology career guidance and learning resources for aspiring professionals.",

    topics: [
      "Career exploration and job-readiness resources",
      "Learning paths for web development and software engineering",
      "Resume and interview preparation tips",
      "Project-based learning ideas for aspiring developers",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="my work"
      className="bg-gradient-to-br from-[#121729] via-[#240221] to-[#25072e] text-white py-24 px-6 relative overflow-hidden"
    >
      {/* Background Blur */}

      <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/20 blur-[120px] rounded-full" />

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/20 blur-[120px] rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="border border-white/20 px-5 py-2 rounded-full text-sm">
            Channel Profile
          </span>

          <h2 className="text-5xl md:text-6xl font-black mt-8">
            What We Share
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Practical career guidance and learning resources for people exploring technology.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative">

          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 via-blue-500 to-cyan-500" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`relative flex ${
                index % 2 === 0
                  ? "md:justify-start"
                  : "md:justify-end"
              } mb-20`}
            >
              {/* Icon */}

              <div
                className={`absolute left-0 md:left-1/2 md:-translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r ${exp.color} flex items-center justify-center text-white text-xl shadow-lg`}
              >
                {exp.icon}
              </div>

              {/* Card */}

              <div className="ml-20 md:ml-0 md:w-[45%] bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-red-500 transition duration-500">
                <span className="text-red-400 font-semibold">
                  {exp.duration}
                </span>

                <h3 className="text-3xl font-bold mt-2">
                  {exp.role}
                </h3>

                <h4 className="text-xl text-gray-400 mt-1">
                  {exp.company}
                </h4>

                <p className="text-gray-300 mt-5">
                  {exp.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {exp.topics.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex gap-3 text-gray-300"
                    >
                      <span className="text-green-400">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;