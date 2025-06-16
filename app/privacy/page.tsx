"use client"

import { motion } from "framer-motion"
import PageBanner from "@/components/page-banner"

export default function PrivacyPolicyPage() {
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
        title="Privacy Policy"
        description="How we collect, use, and protect your information"
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
              <p className="text-sm text-muted-foreground mb-8">Last Updated: March 1, 2025</p>

              {/* Introduction */}
              <motion.section variants={staggerChildren}>
                <motion.h2
                  className="text-2xl font-bold mb-4 text-primary"
                  variants={fadeIn}
                >
                  Introduction
                </motion.h2>
                <motion.p className="text-muted-foreground mb-6" variants={fadeIn}>
                  Power Platform Office ("we," "our," or "us") is committed to protecting your privacy. This Privacy
                  Policy explains how we collect, use, disclose, and safeguard your information when you visit our
                  website or use our services.
                </motion.p>
                <motion.p className="text-muted-foreground mb-8" variants={fadeIn}>
                  Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy,
                  please do not access the site or use our services.
                </motion.p>
              </motion.section>

              {/* Information We Collect */}
              <motion.section variants={staggerChildren}>
                <motion.h2
                  className="text-2xl font-bold mb-4 text-primary"
                  variants={fadeIn}
                >
                  Information We Collect
                </motion.h2>

                {/* Personal Information */}
                <motion.h3 className="text-xl font-semibold mb-3" variants={fadeIn}>
                  Personal Information
                </motion.h3>
                <motion.p className="text-muted-foreground mb-4" variants={fadeIn}>
                  We may collect personal information that you voluntarily provide to us when you:
                </motion.p>
                <motion.ul className="list-disc list-inside mb-6" variants={staggerChildren}>
                  {[
                    "Register for an account",
                    "Express interest in obtaining information about our services",
                    "Participate in activities on our website",
                    "Contact us",
                  ].map((item, index) => (
                    <motion.li key={index} className="text-muted-foreground mb-2" variants={fadeIn}>
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
                <motion.p className="text-muted-foreground mb-6" variants={fadeIn}>
                  Personal information may include:
                </motion.p>
                <motion.ul className="list-disc list-inside mb-8" variants={staggerChildren}>
                  {[
                    "Name",
                    "Email address",
                    "Phone number",
                    "Mailing address",
                    "Company information",
                    "Job title",
                    "Other information you choose to provide",
                  ].map((item, index) => (
                    <motion.li key={index} className="text-muted-foreground mb-2" variants={fadeIn}>
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>

                {/* Automatically Collected Information */}
                <motion.h3 className="text-xl font-semibold mb-3" variants={fadeIn}>
                  Automatically Collected Information
                </motion.h3>
                <motion.p className="text-muted-foreground mb-4" variants={fadeIn}>
                  When you visit our website, we may automatically collect certain information about your device,
                  including:
                </motion.p>
                <motion.ul className="list-disc list-inside mb-8" variants={staggerChildren}>
                  {[
                    "IP address",
                    "Browser type",
                    "Operating system",
                    "Referring URLs",
                    "Access times",
                    "Pages viewed",
                    "Other information about your use of our website",
                  ].map((item, index) => (
                    <motion.li key={index} className="text-muted-foreground mb-2" variants={fadeIn}>
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>

                {/* Cookies and Similar Technologies */}
                <motion.h3 className="text-xl font-semibold mb-3" variants={fadeIn}>
                  Cookies and Similar Technologies
                </motion.h3>
                <motion.p className="text-muted-foreground mb-8" variants={fadeIn}>
                  We may use cookies, web beacons, tracking pixels, and other tracking technologies to help customize our
                  website and improve your experience. For more information about how we use cookies, please refer to our
                  Cookie Policy.
                </motion.p>
              </motion.section>

              {/* How We Use Your Information */}
              <motion.section variants={staggerChildren}>
                <motion.h2
                  className="text-2xl font-bold mb-4 text-primary"
                  variants={fadeIn}
                >
                  How We Use Your Information
                </motion.h2>
                <motion.p className="text-muted-foreground mb-6" variants={fadeIn}>
                  We may use the information we collect for various purposes, including to:
                </motion.p>
                <motion.ul className="list-disc list-inside mb-8" variants={staggerChildren}>
                  {[
                    "Provide, operate, and maintain our website and services",
                    "Improve, personalize, and expand our website and services",
                    "Understand and analyze how you use our website",
                    "Develop new products, services, features, and functionality",
                    "Communicate with you, including for customer service, updates, and marketing purposes",
                    "Process transactions",
                    "Send you emails",
                    "Find and prevent fraud",
                    "For compliance with legal obligations",
                  ].map((item, index) => (
                    <motion.li key={index} className="text-muted-foreground mb-2" variants={fadeIn}>
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.section>

              {/* Disclosure of Your Information */}
              <motion.section variants={staggerChildren}>
                <motion.h2
                  className="text-2xl font-bold mb-4 text-primary"
                  variants={fadeIn}
                >
                  Disclosure of Your Information
                </motion.h2>
                <motion.p className="text-muted-foreground mb-6" variants={fadeIn}>
                  We may share information we have collected about you in certain situations. Your information may be
                  disclosed as follows:
                </motion.p>

                {/* By Law or to Protect Rights */}
                <motion.h3 className="text-xl font-semibold mb-3" variants={fadeIn}>
                  By Law or to Protect Rights
                </motion.h3>
                <motion.p className="text-muted-foreground mb-6" variants={fadeIn}>
                  If we believe the release of information about you is necessary to respond to legal process, to
                  investigate or remedy potential violations of our policies, or to protect the rights, property, and
                  safety of others, we may share your information as permitted or required by any applicable law, rule,
                  or regulation.
                </motion.p>

                {/* Third-Party Service Providers */}
                <motion.h3 className="text-xl font-semibold mb-3" variants={fadeIn}>
                  Third-Party Service Providers
                </motion.h3>
                <motion.p className="text-muted-foreground mb-6" variants={fadeIn}>
                  We may share your information with third parties that perform services for us or on our behalf,
                  including payment processing, data analysis, email delivery, hosting services, customer service, and
                  marketing assistance.
                </motion.p>

                {/* Marketing Communications */}
                <motion.h3 className="text-xl font-semibold mb-3" variants={fadeIn}>
                  Marketing Communications
                </motion.h3>
                <motion.p className="text-muted-foreground mb-6" variants={fadeIn}>
                  With your consent, or with an opportunity for you to withdraw consent, we may share your information
                  with third parties for marketing purposes.
                </motion.p>

                {/* Business Transfers */}
                <motion.h3 className="text-xl font-semibold mb-3" variants={fadeIn}>
                  Business Transfers
                </motion.h3>
                <motion.p className="text-muted-foreground mb-8" variants={fadeIn}>
                  We may share or transfer your information in connection with, or during negotiations of, any merger,
                  sale of company assets, financing, or acquisition of all or a portion of our business to another
                  company.
                </motion.p>
              </motion.section>

              {/* Security of Your Information */}
              <motion.section variants={staggerChildren}>
                <motion.h2
                  className="text-2xl font-bold mb-4 text-primary"
                  variants={fadeIn}
                >
                  Security of Your Information
                </motion.h2>
                <motion.p className="text-muted-foreground mb-8" variants={fadeIn}>
                  We use administrative, technical, and physical security measures to help protect your personal
                  information. While we have taken reasonable steps to secure the personal information you provide to us,
                  please be aware that despite our efforts, no security measures are perfect or impenetrable, and no
                  method of data transmission can be guaranteed against any interception or other type of misuse.
                </motion.p>
              </motion.section>

              {/* Your Rights Regarding Your Information */}
              <motion.section variants={staggerChildren}>
                <motion.h2
                  className="text-2xl font-bold mb-4 text-primary"
                  variants={fadeIn}
                >
                  Your Rights Regarding Your Information
                </motion.h2>

                {/* Access and Update */}
                <motion.h3 className="text-xl font-semibold mb-3" variants={fadeIn}>
                  Access and Update
                </motion.h3>
                <motion.p className="text-muted-foreground mb-6" variants={fadeIn}>
                  You have the right to access and update the personal information we hold about you. You can review and
                  change your personal information by logging into your account and visiting your account profile page.
                </motion.p>

                {/* Opt-Out */}
                <motion.h3 className="text-xl font-semibold mb-3" variants={fadeIn}>
                  Opt-Out
                </motion.h3>
                <motion.p className="text-muted-foreground mb-6" variants={fadeIn}>
                  You can opt-out of receiving marketing communications from us by following the unsubscribe instructions
                  provided in the email you receive or by contacting us directly.
                </motion.p>

                {/* Data Subject Rights */}
                <motion.h3 className="text-xl font-semibold mb-3" variants={fadeIn}>
                  Data Subject Rights
                </motion.h3>
                <motion.p className="text-muted-foreground mb-8" variants={fadeIn}>
                  Depending on your location, you may have certain rights regarding your personal information, such as the
                  right to request access, correction, deletion, restriction, or to object to our processing of your
                  information.
                </motion.p>
              </motion.section>

              {/* Children's Privacy */}
              <motion.section variants={staggerChildren}>
                <motion.h2
                  className="text-2xl font-bold mb-4 text-primary"
                  variants={fadeIn}
                >
                  Children's Privacy
                </motion.h2>
                <motion.p className="text-muted-foreground mb-8" variants={fadeIn}>
                  Our website and services are not directed to children under 13 years of age. We do not knowingly collect
                  personal information from children under 13. If you are under 13, please do not provide any information
                  on this website.
                </motion.p>
              </motion.section>

              {/* Changes to This Privacy Policy */}
              <motion.section variants={staggerChildren}>
                <motion.h2
                  className="text-2xl font-bold mb-4 text-primary"
                  variants={fadeIn}
                >
                  Changes to This Privacy Policy
                </motion.h2>
                <motion.p className="text-muted-foreground mb-8" variants={fadeIn}>
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                  Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy
                  Policy periodically for any changes.
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
                  If you have questions or concerns about this Privacy Policy, please contact us at:
                </motion.p>
                <motion.p className="text-muted-foreground mb-8" variants={fadeIn}>
                  Power Platform Office
                  <br />
                  Email: privacy@powerplatformoffice.com
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