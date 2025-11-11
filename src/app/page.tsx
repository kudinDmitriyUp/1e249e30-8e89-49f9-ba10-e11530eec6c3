"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Building, Star } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="medium"
      background="animatedGrid"
      cardStyle="gradient-bordered"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="outline"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="https://pixabay.com/get/g7df41429df56b066e902d66a015d5ac317001d85ddcd82898aa6b48cc8d28be9798ff5c64d0d1307c69f038c47deb302acb949893bd4899a5afb8d8d52900891_1280.jpg"
          logoAlt="Heritage Properties"
          brandName="Heritage Properties"
          button={{
            text: "Contact Us",
            href: "contact",
            props: {
              className: "",
              textClassName: "text-background"
            }
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogo
          logoText="Heritage Properties"
          description="Building the future of luxury living with exceptional developments that redefine modern architecture"
          buttons={[
            {
              text: "View Properties",
              href: "properties"
            },
            {
              text: "Learn More",
              href: "about"
            }
          ]}
          imageSrc="https://pixabay.com/get/g2baeccc86bf7f1fc9735a322a06ebf7538daeefb1aa897dce2a3bc49fee0ea5263ad2d8416d646cb87acf87118683d2d_1280.jpg"
          imageAlt="Luxury property development showcase"
          showDimOverlay={true}
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="Why Heritage Properties"
          description="At Heritage Properties, we embody excellence in real estate development — innovative, sustainable, and committed to creating exceptional living spaces. We don't just build properties; we craft communities that enhance lifestyles and deliver lasting value for generations."
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardOne
          title="Our Development Services"
          description="Comprehensive real estate development solutions from concept to completion"
          features={[
            {
              title: "Construction Management",
              description: "Full-service construction oversight ensuring quality, timeline, and budget compliance",
              imageSrc: "https://pixabay.com/get/g296ec4f3db3605b027350e6f25797f40e9902f44d4e48856dfa59439347596ca0f47113e16e65e249f6e54d9413ab060e3135447fb27ad459cfbd99abaf99d1a_1280.jpg",
              imageAlt: "Construction management"
            },
            {
              title: "Project Planning",
              description: "Strategic planning and design services to maximize property value and market appeal",
              imageSrc: "https://pixabay.com/get/gd48011adf80029b47508270d2814458c2284590ba1f85d870e05a518aa8a4478ef2cfd48fe011f002a52bdcb8421cc6298a4369f7eab8df66c5c94b93cb11844_1280.jpg",
              imageAlt: "Project planning"
            },
            {
              title: "Investment Financing",
              description: "Flexible financing solutions and investment opportunities for all development stages",
              imageSrc: "https://pixabay.com/get/g4ebaacf6e649c599b065377e6b3c077d03e67d36c6cc1bd7228153a776e5603811e4e756ff6464c7bf0391a80faa419083d329e31c7562dac4ecfc31e1c3aec3_1280.jpg",
              imageAlt: "Investment financing"
            },
            {
              title: "Property Management",
              description: "Comprehensive property management services to optimize returns and maintain value",
              imageSrc: "https://pixabay.com/get/g68329814dbaef453101388c4a66d28e7b03ffe844ac9640b0da70978c1784bbebeb13c2ba577024c46a323353b67277644022b9ba534557200e4cf84974bdbca_1280.jpg",
              imageAlt: "Property management"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          textboxLayout="default"
        />
      </div>

      <div id="properties" data-section="properties">
        <ProductCardOne
          title="Featured Properties"
          description="Discover our premium residential and commercial developments"
          products={[
            {
              id: "1",
              name: "Heritage Residences",
              price: "From $850,000",
              imageSrc: "https://pixabay.com/get/g06e4f67c971acb9f0fbb1fd766cb0af3851abf015d0db0c9c94523cadca8062548314b91dcbb1fb644eaadb46509a25e14d4878bb03de88f75912ec3eb864da0_1280.jpg",
              imageAlt: "Heritage Residences luxury apartments",
              onProductClick: () => console.log('View Heritage Residences')
            },
            {
              id: "2",
              name: "Commerce Tower",
              price: "From $1,200,000",
              imageSrc: "https://pixabay.com/get/g34d0604469f419eb10fad490427b993e41d48122bc95d1fc2a9f6d79437cdc6e7e8ad8fde7c67dcee41c95d7103715595e33bde9af4f610ce152a279efb0345a_1280.jpg",
              imageAlt: "Commerce Tower office building",
              onProductClick: () => console.log('View Commerce Tower')
            },
            {
              id: "3",
              name: "Garden Townhomes",
              price: "From $675,000",
              imageSrc: "https://pixabay.com/get/g4b089af2e19c95a2b66be3f186788988c122f540bd604cdeff8c782fcbcbf4187d466c0ef122091e53022fe55ba694f5ffac2c4fa2c7872383465f9681da2c1f_1280.jpg",
              imageAlt: "Garden Townhomes development",
              onProductClick: () => console.log('View Garden Townhomes')
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          textboxLayout="default"
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardThree
          title="Investment Opportunities"
          description="Choose the investment package that aligns with your goals"
          plans={[
            {
              id: "residential",
              price: "$500,000 - $2M",
              name: "Residential Development",
              buttons: [
                {
                  text: "Get Started",
                  href: "contact"
                },
                {
                  text: "Learn More",
                  href: "about"
                }
              ],
              features: [
                "Prime location selection",
                "Full construction management",
                "Marketing and sales support",
                "5-year value guarantee"
              ]
            },
            {
              id: "commercial",
              badge: "Most Popular",
              badgeIcon: Star,
              price: "$2M - $10M",
              name: "Commercial Development",
              buttons: [
                {
                  text: "Get Started",
                  href: "contact"
                },
                {
                  text: "Chat to Sales",
                  onClick: () => console.log('Contact sales')
                }
              ],
              features: [
                "Strategic location analysis",
                "Complete project development",
                "Tenant acquisition support",
                "10-year ROI guarantee",
                "Premium finishing options"
              ]
            },
            {
              id: "mixed",
              price: "$10M+",
              name: "Mixed-Use Development",
              buttons: [
                {
                  text: "Get Started",
                  href: "contact"
                },
                {
                  text: "Schedule Call",
                  onClick: () => console.log('Schedule consultation')
                }
              ],
              features: [
                "Comprehensive feasibility study",
                "Integrated development approach",
                "Multi-phase construction",
                "Long-term asset management",
                "Custom financing solutions"
              ]
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTwo
          title="Our Track Record"
          description="Numbers that speak to our success and commitment to excellence"
          metrics={[
            {
              id: "1",
              value: "250+",
              description: "Properties Developed"
            },
            {
              id: "2",
              value: "$2.5B",
              description: "Total Project Value"
            },
            {
              id: "3",
              value: "98%",
              description: "Client Satisfaction Rate"
            },
            {
              id: "4",
              value: "15+",
              description: "Years of Excellence"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          textboxLayout="default"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Clients Say"
          description="Real feedback from satisfied investors and property owners"
          testimonials={[
            {
              id: "1",
              name: "Michael Richardson",
              role: "CEO",
              company: "Richardson Investments",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g8f791ce0a2ef49f7582d172782b58a403522187c830eaa8052c23e24052c9da16d936052ea5606e06341ccfd6d64b8b494ae295b8a3d7f27b2f79b3c576745fb_1280.jpg",
              imageAlt: "Michael Richardson"
            },
            {
              id: "2",
              name: "Sarah Thompson",
              role: "Portfolio Manager",
              company: "Capital Group",
              rating: 5,
              imageSrc: "https://pixabay.com/get/gd7c30643738b495f35873759d6caa9039c1c97e6ce2d6478116687cafd75b97c3c8ad382fec70953289cccc2ae2b63049ccaa602fcb6dc33e897de0caf53d9f6_1280.jpg",
              imageAlt: "Sarah Thompson"
            },
            {
              id: "3",
              name: "David Chen",
              role: "Real Estate Investor",
              company: "Chen Properties",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g6a5deb75c1b02d32ad867d155f6d2465df110dfaba32254486afe765bd63ad51d0e1b634f9d02586d9c2356df53912718a7a9cd923e9dd00dd6371ca6afbb5c7_1280.jpg",
              imageAlt: "David Chen"
            },
            {
              id: "4",
              name: "Jennifer Williams",
              role: "Development Partner",
              company: "Williams & Associates",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g52eca8b00a48e58183a973fbff3f5643101edf07bb2eecc5250734b7d3fb18170915db85ce7281d1a9cfc6665bb70dc7718c7ac2c24a17816aa303c60fae3199_1280.jpg",
              imageAlt: "Jennifer Williams"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          textboxLayout="default"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          faqs={[
            {
              id: "1",
              title: "What types of properties do you develop?",
              content: "We specialize in luxury residential, commercial office buildings, and mixed-use developments. Our portfolio includes high-end apartments, townhomes, retail spaces, and integrated community projects."
            },
            {
              id: "2",
              title: "How long does a typical development project take?",
              content: "Development timelines vary based on project scope. Residential projects typically take 18-24 months, while commercial and mixed-use developments may take 24-36 months from planning to completion."
            },
            {
              id: "3",
              title: "What investment options are available?",
              content: "We offer various investment opportunities including direct property investment, development partnerships, and equity participation. Minimum investments start at $500,000 for residential projects."
            },
            {
              id: "4",
              title: "Do you provide financing assistance?",
              content: "Yes, we work with a network of financial institutions and can help arrange construction loans, permanent financing, and investor financing options tailored to your needs."
            },
            {
              id: "5",
              title: "What markets do you operate in?",
              content: "We currently develop properties in major metropolitan areas across the region, focusing on high-growth markets with strong economic fundamentals and development potential."
            }
          ]}
          sideTitle="Frequently Asked Questions"
          sideDescription="Everything you need to know about investing in real estate development with Heritage Properties"
          textPosition="left"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get Started"
          title="Ready to Invest in Your Future?"
          description="Contact us today to discuss your real estate development investment opportunities and discover how Heritage Properties can help you build wealth through premium property development."
          inputPlaceholder="Enter your email"
          buttonText="Get Started"
          termsText="By submitting, you agree to receive information about investment opportunities and our development projects."
          tagIcon={Building}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Services",
              items: [
                {
                  label: "Residential Development",
                  href: "properties"
                },
                {
                  label: "Commercial Projects",
                  href: "properties"
                },
                {
                  label: "Investment Opportunities",
                  href: "pricing"
                }
              ]
            },
            {
              title: "Company",
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Our Team",
                  href: "about"
                },
                {
                  label: "Contact",
                  href: "contact"
                }
              ]
            },
            {
              title: "Resources",
              items: [
                {
                  label: "Investment Guide",
                  href: "about"
                },
                {
                  label: "FAQ",
                  href: "faq"
                },
                {
                  label: "Market Reports",
                  href: "about"
                }
              ]
            }
          ]}
          logoSrc="https://pixabay.com/get/g7df41429df56b066e902d66a015d5ac317001d85ddcd82898aa6b48cc8d28be9798ff5c64d0d1307c69f038c47deb302acb949893bd4899a5afb8d8d52900891_1280.jpg"
          logoText="Heritage Properties"
          copyrightText="© 2025 | Heritage Properties"
          onPrivacyClick={() => console.log('Privacy policy clicked')}
        />
      </div>
    </ThemeProvider>
  );
}