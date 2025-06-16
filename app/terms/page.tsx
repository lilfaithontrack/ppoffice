"use client"

import { motion } from "framer-motion"
import PageBanner from "@/components/page-banner"

export default function TermsOfServicePage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const hoverScale = {
    hover: {
      scale: 1.02,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  }

  return (
    <div className="flex flex-col min-h-screen">
      <PageBanner
        title="Terms of Service"
        description="The terms and conditions governing the use of our services"
        backgroundImage="/Congress.jpg?height=400&width=1920"
      />

      <main className="flex-grow py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto bg-card p-8 rounded-lg shadow-lg border border-muted/10"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <div className="prose prose-lg max-w-none">
              {/* Last Updated */}
              <p className="text-sm text-muted-foreground mb-8">Last Updated: March 1, 2023</p>

              {/* Agreement to Terms */}
              <motion.section variants={staggerChildren}>
                <motion.h2
                  className="text-2xl font-bold mb-4 text-primary"
                  variants={fadeIn}
                >
                  Agreement to Terms
                </motion.h2>
                <motion.p className="text-muted-foreground mb-6" variants={fadeIn}>
                  These Terms of Service constitute a legally binding agreement made between you and Power Platform Office
                  ("we," "us," or "our"), concerning your access to and use of our website and services.
                </motion.p>
                <motion.p className="text-muted-foreground mb-8" variants={fadeIn}>
                  You agree that by accessing our website and/or services, you have read, understood, and agree to be
                  bound by all of these Terms of Service. If you do not agree with all of these terms, you are prohibited
                  from using the website and services and must discontinue use immediately.
                </motion.p>
              </motion.section>

              {/* Services */}
              <motion.section variants={staggerChildren}>
                <motion.h2
                  className="text-2xl font-bold mb-4 text-primary"
                  variants={fadeIn}
                >
                  Services
                </motion.h2>
                <motion.p className="text-muted-foreground mb-6" variants={fadeIn}>
                  Power Platform Office provides various business services including IT Solutions, Base Operations,
                  Grounds Maintenance, and Professional Services. The specific services we provide to you will be those
                  outlined in our service agreement or other written communication.
                </motion.p>
                <motion.p className="text-muted-foreground mb-8" variants={fadeIn}>
                  We reserve the right to withdraw or amend our services, and any service or material we provide, in our
                  sole discretion without notice. We will not be liable if for any reason all or any part of the website
                  or service is unavailable at any time or for any period.
                </motion.p>
              </motion.section>

              {/* User Representations */}
              <motion.section variants={staggerChildren}>
                <motion.h2
                  className="text-2xl font-bold mb-4 text-primary"
                  variants={fadeIn}
                >
                  User Representations
                </motion.h2>
                <motion.p className="text-muted-foreground mb-4" variants={fadeIn}>
                  By using our services, you represent and warrant that:
                </motion.p>
                <motion.ul className="list-disc list-inside mb-8" variants={staggerChildren}>
                  {[
                    "You have the legal capacity and agree to comply with these Terms of Service.",
                    "You are not a minor in the jurisdiction in which you reside.",
                    "You will not access the website or services through automated or non-human means.",
                    "You will not use the website or services for any illegal or unauthorized purpose.",
                    "Your use of the services will not violate any applicable law or regulation.",
                  ].map((item, index) => (
                    <motion.li key={index} className="text-muted-foreground mb-2" variants={fadeIn}>
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.section>

              {/* Intellectual Property Rights */}
              <motion.section variants={staggerChildren}>
                <motion.h2
                  className="text-2xl font-bold mb-4 text-primary"
                  variants={fadeIn}
                >
                  Intellectual Property Rights
                </motion.h2>
                <motion.p className="text-muted-foreground mb-6" variants={fadeIn}>
                  Unless otherwise indicated, the website and services, and all source code, databases, functionality,
                  software, website designs, audio, video, text, photographs, and graphics (collectively, the "Content"),
                  and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by
                  us or licensed to us, and are protected by copyright and trademark laws and various other intellectual
                  property rights.
                </motion.p>
                <motion.p className="text-muted-foreground mb-8" variants={fadeIn}>
                  The Content and Marks are provided "AS IS" for your information and personal use only. Except as
                  expressly provided in these Terms of Service, no part of the website or services and no Content or Marks
                  may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded,
                  translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose
                  whatsoever, without our express prior written permission.
                </motion.p>
              </motion.section>

              {/* User Data */}
              <motion.section variants={staggerChildren}>
                <motion.h2
                  className="text-2xl font-bold mb-4 text-primary"
                  variants={fadeIn}
                >
                  User Data
                </motion.h2>
                <motion.p className="text-muted-foreground mb-6" variants={fadeIn}>
                  We will maintain certain data that you transmit to the website or services for the purpose of managing
                  the performance of the services, as well as data relating to your use of the services. You are solely
                  responsible for all data that you transmit or that relates to any activity you have undertaken using the
                  services.
                </motion.p>
                <motion.p className="text-muted-foreground mb-8" variants={fadeIn}>
                  You agree that we shall have no liability to you for any loss or corruption of any such data, and you
                  hereby waive any right of action against us arising from any such loss or corruption of such data.
                </motion.p>
              </motion.section>

              {/* Service Fees and Payment */}
              <motion.section variants={staggerChildren}>
                <motion.h2
                  className="text-2xl font-bold mb-4 text-primary"
                  variants={fadeIn}
                >
                  Service Fees and Payment
                </motion.h2>
                <motion.p className="text-muted-foreground mb-6" variants={fadeIn}>
                  You agree to pay all fees or charges to your account in accordance with the fees, charges, and billing
                  terms in effect at the time a fee or charge is due and payable. If auto-renewal is enabled for the
                  services you have subscribed for, you will be charged automatically in accordance with the term you
                  selected.
                </motion.p>
                <motion.p className="text-muted-foreground mb-8" variants={fadeIn}>
                  Payments are non-refundable except as specifically provided in these Terms of Service or as required by
                  applicable law. We reserve the right to modify our fees at any time upon notice to you.
                </motion.p>
              </motion.section>

              {/* Termination */}
              <motion.section variants={staggerChildren}>
                <motion.h2
                  className="text-2xl font-bold mb-4 text-primary"
                  variants={fadeIn}
                >
                  Termination
                </motion.h2>
                <motion.p className="text-muted-foreground mb-6" variants={fadeIn}>
                  We may terminate or suspend your access to our services immediately, without prior notice or liability,
                  for any reason whatsoever, including without limitation if you breach these Terms of Service.
                </motion.p>
                <motion.p className="text-muted-foreground mb-8" variants={fadeIn}>
                  All provisions of the Terms of Service which by their nature should survive termination shall survive
                  termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and
                  limitations of liability.
                </motion.p>
              </motion.section>

              {/* Limitation of Liability */}
              <motion.section variants={staggerChildren}>
                <motion.h2
                  className="text-2xl font-bold mb-4 text-primary"
                  variants={fadeIn}
                >
                  Limitation of Liability
                </motion.h2>
                <motion.p className="text-muted-foreground mb-4" variants={fadeIn}>
                  In no event shall we, our directors, employees, partners, agents, suppliers, or affiliates, be liable
                  for any indirect, incidental, special, consequential, or punitive damages, including without limitation,
                  loss of profits, data, use, goodwill, or other intangible losses, resulting from:
                </motion.p>
                <motion.ul className="list-disc list-inside mb-8" variants={staggerChildren}>
                  {[
                    "Your access to or use of or inability to access or use the services;",
                    "Any conduct or content of any third party on the services;",
                    "Any content obtained from the services; and",
                    "Unauthorized access, use, or alteration of your transmissions or content.",
                  ].map((item, index) => (
                    <motion.li key={index} className="text-muted-foreground mb-2" variants={fadeIn}>
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.section>

              {/* Disclaimer */}
              <motion.section variants={staggerChildren}>
                <motion.h2
                  className="text-2xl font-bold mb-4 text-primary"
                  variants={fadeIn}
                >
                  Disclaimer
                </motion.h2>
                <motion.p className="text-muted-foreground mb-6" variants={fadeIn}>
                  The services are provided on an "AS IS" and "AS AVAILABLE" basis. We expressly disclaim all warranties
                  of any kind, whether express or implied, including but not limited to the implied warranties of
                  merchantability, fitness for a particular purpose, and non-infringement.
                </motion.p>
                <motion.p className="text-muted-foreground mb-8" variants={fadeIn}>
                  We make no warranty that the services will meet your requirements, be available on an uninterrupted,
                  timely, secure, or error-free basis, or be accurate, reliable, free of viruses or other harmful code,
                  complete, legal, or safe.
                </motion.p>
              </motion.section>

              {/* Indemnification */}
              <motion.section variants={staggerChildren}>
                <motion.h2
                  className="text-2xl font-bold mb-4 text-primary"
                  variants={fadeIn}
                >
                  Indemnification
                </motion.h2>
                <motion.p className="text-muted-foreground mb-4" variants={fadeIn}>
                  You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of
                  our respective officers, agents, partners, and employees, from and against any loss, damage, liability,
                  claim, or demand, including reasonable attorneys' fees and expenses, made by any third party due to or
                  arising out of:
                </motion.p>
                <motion.ul className="list-disc list-inside mb-8" variants={staggerChildren}>
                  {[
                    "Your use of the services;",
                    "Your breach of these Terms of Service;",
                    "Any breach of your representations and warranties set forth in these Terms of Service;",
                    "Your violation of the rights of a third party, including but not limited to intellectual property rights; or",
                    "Any harmful act toward any other user of the services with whom you connected via the services.",
                  ].map((item, index) => (
                    <motion.li key={index} className="text-muted-foreground mb-2" variants={fadeIn}>
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.section>

              {/* Governing Law */}
              <motion.section variants={staggerChildren}>
                <motion.h2
                  className="text-2xl font-bold mb-4 text-primary"
                  variants={fadeIn}
                >
                  Governing Law
                </motion.h2>
                <motion.p className="text-muted-foreground mb-8" variants={fadeIn}>
                  These Terms of Service and your use of the website and services are governed by and construed in
                  accordance with the laws of the state where our principal place of business is located, without regard
                  to its conflict of law principles.
                </motion.p>
              </motion.section>

              {/* Changes to Terms */}
              <motion.section variants={staggerChildren}>
                <motion.h2
                  className="text-2xl font-bold mb-4 text-primary"
                  variants={fadeIn}
                >
                  Changes to Terms
                </motion.h2>
                <motion.p className="text-muted-foreground mb-8" variants={fadeIn}>
                  We reserve the right, in our sole discretion, to make changes or modifications to these Terms of Service
                  at any time and for any reason. We will alert you about any changes by updating the "Last Updated" date
                  of these Terms of Service, and you waive any right to receive specific notice of each such change.
                </motion.p>
              </motion.section>

              {/* Contact Us */}
              <motion.section variants={staggerChildren}>
                <motion.h2
                  className="text-2xl font-bold mb-4 text-primary"
                  variants={fadeIn}
                >
                  Contact Us
                </motion.h2>
                <motion.p className="text-muted-foreground mb-8" variants={fadeIn}>
                  If you have questions or concerns about these Terms of Service, please contact us at:
                </motion.p>
                <motion.p className="text-muted-foreground mb-8" variants={fadeIn}>
                  Power Platform Office
                  <br />
                  Email: legal@powerplatformoffice.com
                  <br />
                  Phone: +240-938-4970
                </motion.p>
              </motion.section>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  )
}