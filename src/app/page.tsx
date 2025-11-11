"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import MetricCardTwo from '@/components/sections/metric/MetricCardTwo';
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
          logoSrc="https://pixabay.com/get/g40d4882056584822c1d27ea280128f6b3dce2c1163052c4e6104a4dbb27a3ca0d6500bc13ecf64978e9a827f3c3711bdbdd1dc37bc731521157eabd3a5be35b0_1280.jpg"
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
              href: "property"
            },
            {
              text: "Learn More",
              href: "about"
            }
          ]}
          imageSrc="https://pixabay.com/get/gd22d22077a557ca542ed8fff451a276280e67add17c0c50b2a78248214699caab6b066f44b27d980b0df30627ccf1ddf_1280.jpg"
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
              imageSrc: "https://pixabay.com/get/g3ea17a6bb7015cbba10e4d0f7b007ec2439083496f24f397e5ea68a14f7223c591af86634661cfb230d208c3d5c6a3189e3dd4b71ed2643cf311e2e5afadc3b2_1280.jpg",
              imageAlt: "Construction management"
            },
            {
              title: "Project Planning",
              description: "Strategic planning and design services to maximize property value and market appeal",
              imageSrc: "https://pixabay.com/get/g80082359a73acfd072a65edb84f0d3f64158e54d86e96358fc225f15717df290d7deaff78b3b06f1cadef5ef1de923fd3d6eda04261013ef2a2e48d129872907_1280.jpg",
              imageAlt: "Project planning"
            },
            {
              title: "Investment Financing",
              description: "Flexible financing solutions and investment opportunities for all development stages",
              imageSrc: "https://pixabay.com/get/gc15fd141c9f3e7897aa34de949996de7aabadae27c03f91227fb466b6dfc2e6a3d52e91e6c02a812427932001cf962d4c9adc7d69fa1a452755df9dd85c13cf1_1280.jpg",
              imageAlt: "Investment financing"
            },
            {
              title: "Property Management",
              description: "Comprehensive property management services to optimize returns and maintain value",
              imageSrc: "https://pixabay.com/get/g4e3ff7546a88487e4a8137644930b41ec3ec24edef27a360f0720deb7f35ea4a0f6f6d7d7e1038a59df2dbf4f489f2eb741dd885f5bb23629e7f96c01e4f7b66_1280.jpg",
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
              imageSrc: "https://pixabay.com/get/g2d8f59626e44e5445e9d641994dd5d9d1663c25d4cb08f1662b679f6393b787736b80b7231d890c539c6f3a0c75f52d62d2a93c816ed653e62c8a578b26d5c59_1280.jpg",
              imageAlt: "Heritage Residences luxury apartments",
              onProductClick: () => console.log('View Heritage Residences')
            },
            {
              id: "2",
              name: "Commerce Tower",
              price: "From $1,200,000",
              imageSrc: "https://pixabay.com/get/g7fe5f8b12708e94b5356f8c57a8dd1f70de0ae0d315588ef5fd7ab84d03b1656bee0c7b96223afdcb7aea57a5d9598eb6a27427bec8eedeaef8d02f45b60713a_1280.jpg",
              imageAlt: "Commerce Tower office building",
              onProductClick: () => console.log('View Commerce Tower')
            },
            {
              id: "3",
              name: "Garden Townhomes",
              price: "From $675,000",
              imageSrc: "https://pixabay.com/get/g22d46192a040714042b1108ca98588166fc0b7b4e8022ba06bb4467955423165a96231c557fb16c127397572e09669c868d3846cb698c81dfac2f36d75c97a6f_1280.jpg",
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
              imageSrc: "https://pixabay.com/get/g87d3dd1ef9f5bcd56f262d3cda2686ca6a1cb89caadaabf080b6db918b37aaa64b07fb71d470ea96acbf4c50e2b1a49c4fc39e2ff119ed5b0b15090480e3104c_1280.jpg",
              imageAlt: "Michael Richardson"
            },
            {
              id: "2",
              name: "Sarah Thompson",
              role: "Portfolio Manager",
              company: "Capital Group",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g24c908944370e924ea46ea1b345bb09b1a5b7332445450317ff83a17a98dc5f2c7e5af3d15cdfa6170a98cf54d8730be5c926e5ae788c26af4a1183d9628af14_1280.jpg",
              imageAlt: "Sarah Thompson"
            },
            {
              id: "3",
              name: "David Chen",
              role: "Real Estate Investor",
              company: "Chen Properties",
              rating: 5,
              imageSrc: "https://pixabay.com/get/gd06fafa81c1b5616dd99a04dc6b6f6d9e5ec405e55aecaa6e64e61a1abb8350789da8102da84c8fd14db48ef0f8b338437088c38c2bcf144b667be872e1f2d53_1280.jpg",
              imageAlt: "David Chen"
            },
            {
              id: "4",
              name: "Jennifer Williams",
              role: "Development Partner",
              company: "Williams & Associates",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g85e647e20da9ce70eb4462464629ca52977b1e90664f80e75ee6ae5d047e32d6f2767c4be5d353b386ddf3a0df56cd0ae2da223b26cb28e89cfd599334a97d03_1280.jpg",
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
          logoSrc="https://pixabay.com/get/g40d4882056584822c1d27ea280128f6b3dce2c1163052c4e6104a4dbb27a3ca0d6500bc13ecf64978e9a827f3c3711bdbdd1dc37bc731521157eabd3a5be35b0_1280.jpg"
          logoText="Heritage Properties"
          copyrightText="© 2025 | Heritage Properties"
          onPrivacyClick={() => console.log('Privacy policy clicked')}
        />
      </div>
    </ThemeProvider>
  );
}