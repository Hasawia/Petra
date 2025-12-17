import React, { createContext, useContext, useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: "ltr" | "rtl";
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
const translations = {
  en: {
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.about": "About",
    "nav.faq": "FAQ",
    "nav.contact": "Contact Us",
    "nav.language": "العربية",
    "hero.slide1.title":
      "Delivering Excellence in Oil Services & Energy Solutions.",
    "hero.slide1.subtitle":
      "Integrated storage, logistics, and consulting for the oil & gas sector.",
    "hero.slide1.cta": "Get Started",
    "hero.slide2.title": "Why Petra?",
    "hero.slide2.subtitle":
      "Because we combine deep expertise with operational integrity and precision.",
    "hero.slide2.cta": "Discover Why",
    "hero.slide3.title": "Quality & Safety in Every Operation",
    "hero.slide3.subtitle":
      "We follow strict international standards to ensure reliability and risk-free performance.",
    "hero.slide3.cta": "See Our Standards",
    "hero.slide4.title": "Our Reach, Your Advantage",
    "hero.slide4.subtitle":
      "Comprehensive logistics and sustainable initiatives across the energy sector.",
    "hero.slide4.cta": "Explore Services",
    "quicklinks.faq.title": "FAQs",
    "quicklinks.faq.desc":
      "Learn more about our services, procedures, and safety standards through the most frequently asked questions.",
    "quicklinks.faq.cta": "View FAQs",
    "quicklinks.contact.title": "Contact Us",
    "quicklinks.contact.desc":
      "Our team is ready to assist you. Reach out for inquiries, partnerships, or service requests.",
    "quicklinks.contact.cta": "Get in Touch",
    "quicklinks.safety.title": "Safety & Compliance",
    "quicklinks.safety.desc":
      "We apply rigorous safety measures to ensure the protection of people, assets, and the environment.",
    "quicklinks.safety.cta": "Safety Commitment",
    "services.title": "Innovative Services That Power the Future of Energy",
    "services.subtitle": "Comprehensive solutions for the modern energy sector",
    "services.cta.title": "Ready to enhance your energy operations?",
    "services.cta.button": "Contact Our Team",
    "detailed.storage.title": "Petroleum Derivatives Storage",
    "detailed.storage.desc":
      "We provide highly secure and efficient storage solutions for gasoline, diesel, oil, and other petroleum derivatives. Our operations include management and maintenance of storage tanks in accordance with international safety and quality standards. Inventory monitoring systems reduce product loss and improve operational control.",
    "detailed.storage.cta": "Professional storage infrastructure built for safety and sustainability",
    "detailed.logistics.title": "Supply Chain Management",
    "detailed.logistics.desc":
      "We plan and execute integrated logistics solutions for transporting and distributing petroleum derivatives. Designed to optimize distribution networks, reduce operational costs, and ensure timely delivery. We maintain strong relationships with suppliers and clients to secure supply continuity.",
    "detailed.logistics.cta": "Smart logistics management that enhances distribution flow",
    "detailed.station.title": "Fuel Station Investment & Operations",
    "detailed.station.desc":
      "Feasibility studies for establishing and upgrading fuel stations in strategic locations. Full operation and management services focused on long-term profitability. Support for sustainable initiatives including solar-powered energy solutions.",
    "detailed.station.cta": "Integrated fuel station management for sustainable growth",
    "detailed.consulting.title": "Technical & Engineering Consultancy",
    "detailed.consulting.desc":
      "Expert consulting solutions for oil & gas infrastructure development. Market analysis and identification of new investment opportunities in the petroleum sector. Training programs that develop qualified teams capable of managing critical petroleum facilities.",
    "detailed.consulting.cta": "Engineering expertise supporting informed investment decisions",
    "service.dropdown.storage": "Petroleum Products Storage",
    "service.dropdown.logistics": "Supply Chain Management",
    "service.dropdown.station": "Fuel Station Investment",
    "service.dropdown.consulting": "Technical & Engineering Consulting",
    "about.title": "Who We Are",
    "about.description":
      "Petra is a specialized company in the management, storage, and logistics of petroleum derivatives. We work with industry-leading standards to ensure safe, reliable, and efficient energy solutions that support national growth and business continuity.",
    "about.vision.title": "Our Vision",
    "about.vision.text":
      "To be a trusted leader in petroleum logistics and storage services.",
    "about.mission.title": "Our Mission",
    "about.mission.text":
      "To deliver energy with excellence through innovation, safety, and operational efficiency.",
    "about.values.title": "Our Core Values",
    "about.values.safety": "Safety",
    "about.values.reliability": "Reliability",
    "about.values.integrity": "Integrity",
    "about.values.sustainability": "Sustainability",
    "about.values.excellence": "Excellence",
    "safety.title": "Safety First. Quality Always.",
    "safety.description":
      "We apply strict HSE (Health, Safety, and Environment) standards across every stage of our operations. Our safety protocols protect employees, assets, and the environment — while maintaining compliance with global regulations and industry certifications.",
    "safety.hse": "Health, Safety & Environment",
    "safety.highlight1": "Preventive maintenance and risk control",
    "safety.highlight2": "Emergency response readiness",
    "safety.highlight3": "Environmental protection practices",
    "projects.title": "Our Track Record",
    "projects.description":
      "We take pride in delivering successful logistics and storage solutions for various strategic clients in the oil & gas sector. Petra continues to grow with new development and investment projects across the region.",
    "projects.stats.years": "Years of Experience",
    "projects.stats.clients": "Satisfied Clients",
    "projects.stats.locations": "Service Locations",
    "projects.stats.certifications": "Certifications",
    "projects.project1.tag": "Storage",
    "projects.project1.title": "Regional Storage Facility",
    "projects.project1.desc":
      "State-of-the-art petroleum storage facility with 50,000+ barrel capacity.",
    "projects.project2.tag": "Logistics",
    "projects.project2.title": "Fleet Optimization Project",
    "projects.project2.desc":
      "Comprehensive logistics overhaul reducing delivery times by 40%.",
    "projects.project3.tag": "Investment",
    "projects.project3.title": "Green Fuel Stations",
    "projects.project3.desc":
      "Solar-powered fuel station network across strategic locations.",
    "contact.title": "Get In Touch",
    "contact.description":
      "Our team is ready to support your needs. Connect with us for business inquiries, service proposals, or partnership opportunities.",
    "contact.form.name": "Full Name",
    "contact.form.email": "Email Address",
    "contact.form.phone": "Phone Number",
    "contact.form.message": "Your Message",
    "contact.form.submit": "Send Message",
    "contact.form.success": "Message Sent!",
    "contact.form.successDesc": "We will get back to you shortly.",

    "contact.info.hours": "Working Hours",
    "contact.map.placeholder": "Location Map",
    "cta.title": "Partner with Us to Power the Future",
    "cta.description":
      "Ready to take your energy operations to the next level? Let us help you achieve excellence in petroleum storage, logistics, and consulting.",
    "cta.button1": "Request a Quote",
    "cta.button2": "Learn More",
    "faq.title": "Frequently Asked Questions",
    "faq.subtitle":
      "Find answers to common questions about our services and operations.",
    "faq.q1": "What services does Petra offer?",
    "faq.a1":
      "Petra offers comprehensive petroleum services including storage solutions, supply chain management, fuel station investment & operations, and technical & engineering consultancy.",
    "faq.q2": "What safety standards do you follow?",
    "faq.a2":
      "We adhere to strict international HSE standards, ensuring all operations comply with global regulations and industry best practices.",
    "faq.q3": "Where are your services available?",
    "faq.a3":
      "Our services are available across Jordan and the broader Middle East region.",
    "faq.q4": "How can I request a quote?",
    "faq.a4":
      "You can request a quote by filling out our contact form, calling our office directly, or sending us an email.",
    "faq.q5": "Do you offer partnership opportunities?",
    "faq.a5":
      "Yes, we actively seek strategic partnerships with companies in the oil & gas sector.",
    "faq.q6": "What makes Petra different from competitors?",
    "faq.a6":
      "Petra combines deep industry expertise with operational integrity, innovative solutions, and a commitment to safety and sustainability.",
    "footer.description":
      "Specialized in petroleum derivatives management, storage, and logistics.",
    "footer.quickLinks": "Quick Links",
    "footer.services": "Our Services",
    "footer.contact": "Contact Info",
    "footer.links.home": "Home",
    "footer.links.services": "Services",
    "footer.links.about": "About Us",
    "footer.links.contact": "Contact",
    "footer.rights": "All rights reserved.",
    // About Page
    "about.hero.title":
      "Petra — Strength… Resilience… Stability in the Energy World",
    "about.hero.subtitle":
      "A leading company in petroleum derivatives storage, transportation, and consulting services.",
    "about.hero.cta1": "Contact Us",
    "about.hero.cta2": "Our Services",
    "about.section.label": "About Us",
    "about.section.title": "Who We Are",
    "about.section.paragraph1":
      'The word Petra means "rock" in ancient Greek, symbolizing strength, resilience, patience, and stability. Petra Oil Services is a leading company in the oil and energy sector, offering extensive expertise in providing integrated solutions for storage, transportation, and consulting.',
    "about.section.paragraph2":
      "The company's scope includes oil & gas consulting, petroleum product storage and transport (land & sea), fuel station investment and rehabilitation, supply and installation of fuel systems, and various services related to the oil and gas industry.",
    "timeline.label": "Our Journey",
    "timeline.title": "Company Timeline",
    "timeline.2019":
      "Company established in the local market. Strategic planning and infrastructure development. Obtaining required licenses and forming a specialized team.",
    "timeline.2020":
      "Strategic expansion and doubling storage capacity. Operational efficiency improvements and workforce training.",
    "timeline.2022":
      "Implementation of advanced monitoring technologies. Adoption of FMS (Fuel Management System). Achieving high safety records and operational excellence.",
    "timeline.2024":
      "Strengthening the company's position as a fuel-solutions leader. Expansion into oil consulting services. Building strong market reputation as a trusted partner.",
    "timeline.2025":
      "Received international quality certifications: ISO 9001 and ISO 29001.",
    "vision.title": "Our Vision",
    "vision.text":
      "To become the leading provider of petroleum derivative services by delivering high-quality solutions that support energy sustainability and exceed client expectations.",
    "mission.title": "Our Mission",
    "mission.text":
      "To provide safe and efficient storage and service solutions for petroleum products while maintaining the highest standards of quality, safety, and environmental sustainability.",
    "scope.label": "What We Do",
    "scope.title": "Scope of Work",
    "scope.storage.title": "Petroleum Storage",
    "scope.storage.desc":
      "Safe and efficient storage solutions for gasoline, diesel, oil, and other products. Operation and management of storage tanks according to global standards. Inventory monitoring and loss-reduction technologies.",
    "scope.logistics.title": "Supply Chain Management",
    "scope.logistics.desc":
      "Planning and executing integrated logistics for petroleum product distribution. Optimizing distribution networks to reduce costs and improve efficiency. Managing supplier and customer relationships for uninterrupted supply.",
    "scope.station.title": "Fuel Station Investment",
    "scope.station.desc":
      "Feasibility studies for new or existing fuel stations. Operation and management with high profitability standards. Development of alternative energy solutions such as solar power systems.",
    "scope.consulting.title": "Technical & Consulting Services",
    "scope.consulting.desc":
      "Engineering and technical consulting for oil and gas projects. Market analysis and investment opportunity studies. Training teams on industry best practices and operational excellence.",
    "values.label": "What We Believe",
    "values.title": "Our Values",
    "values.comprehensive":
      "Commitment to delivering comprehensive, integrated petroleum storage and distribution solutions.",
    "values.technology":
      "Use of advanced technologies and global best practices for maximum quality and efficiency.",
    "values.safety": "Adherence to the highest safety and quality standards.",
    "values.improvement":
      "Continuous improvement through expert teams and evolving market understanding.",
    "values.innovation":
      "Providing innovative solutions that meet and exceed client expectations.",
    "about.cta.title": "Ready to Partner with Us?",
    "about.cta.description":
      "Let us help you achieve excellence in petroleum storage, logistics, and consulting.",
    "about.cta.button": "Get Started Today",
    // About Panel
    "panel.title": "Discover Petra",
    "panel.about": "About Us",
    "panel.activities": "Activities",
    "panel.safety": "Safety",
    "panel.services": "Services",
    "panel.whyPetra": "Why Petra",
    "panel.governance": "Corporate Governance",
    "panel.ethics": "Ethics and Governance",
    "panel.values": "Our Values",
    "panel.sustainability": "Sustainability",
    "panel.back": "Back",
    // Why Petra Page
    "whyPetra.hero.title": "Why Choose Petra?",
    "whyPetra.hero.subtitle":
      "Your strategic partner in fuel solutions… where trust begins.",
    "whyPetra.strengths.label": "Our Strengths",
    "whyPetra.strengths.title": "Key Advantages",
    "whyPetra.strengths.professionalTeam.title": "Professional Team",
    "whyPetra.strengths.professionalTeam.desc":
      "Highly trained and certified professionals with extensive industry experience.",
    "whyPetra.strengths.customizedServices.title": "Customized Services",
    "whyPetra.strengths.customizedServices.desc":
      "Tailored solutions based on each client's unique needs and requirements.",
    "whyPetra.strengths.environmentalStandards.title":
      "Environmental Standards",
    "whyPetra.strengths.environmentalStandards.desc":
      "Full commitment to environmental regulations and sustainable practices.",
    "whyPetra.strengths.extensiveExperience.title": "Extensive Experience",
    "whyPetra.strengths.extensiveExperience.desc":
      "Years of proven expertise in storage and distribution operations.",
    "whyPetra.strengths.safetyInfrastructure.title": "Safety Infrastructure",
    "whyPetra.strengths.safetyInfrastructure.desc":
      "High-safety standard storage facilities with advanced protection systems.",
    "whyPetra.strengths.fmsSystem.title": "FMS System",
    "whyPetra.strengths.fmsSystem.desc":
      "Strategic Fuel Management System for optimal operational control.",
    "fms.label": "Smart Technology",
    "fms.title": "FMS Interactive Features",
    "fms.subtitle":
      "Advanced fuel management system providing complete operational control and visibility.",
    "fms.lossPrevention.title": "Loss Prevention",
    "fms.lossPrevention.leakDetection": "Instant Leak Detection",
    "fms.lossPrevention.accessAlerts": "Unauthorized Access Alerts",
    "fms.lossPrevention.userTracking": "User-Tracked Withdrawals",
    "fms.dataAccuracy.title": "Data Accuracy",
    "fms.dataAccuracy.sensorAccuracy": "99.9% Sensor Accuracy",
    "fms.dataAccuracy.detailedReports": "Detailed Reporting",
    "fms.dataAccuracy.dataExports": "Multi-Format Exports",
    "fms.realTimeMonitoring.title": "Real-Time Monitoring",
    "fms.realTimeMonitoring.liveFuelLevels": "Live Fuel Levels",
    "fms.realTimeMonitoring.remoteMonitoring": "Remote Monitoring",
    "fms.realTimeMonitoring.autoAlerts": "Auto Low-Level Alerts",
    "safetySystems.label": "Protection Systems",
    "safetySystems.title": "Safety Systems",
    "safetySystems.firefighting.title": "Firefighting Systems",
    "safetySystems.firefighting.desc":
      "Advanced fire suppression systems installed throughout all facilities.",
    "safetySystems.surveillance.title": "HD Surveillance",
    "safetySystems.surveillance.desc":
      "High-resolution cameras providing 24/7 monitoring coverage.",
    "safetySystems.extinguishers.title": "Fire Extinguishers",
    "safetySystems.extinguishers.desc":
      "Strategically placed extinguishers for rapid emergency response.",
    "vehicleControl.label": "Facility Management",
    "vehicleControl.title": "Vehicle & Facility Control",
    "vehicleControl.secureAccess.title": "Secure Access",
    "vehicleControl.secureAccess.desc":
      "Controlled vehicle entry with verification protocols.",
    "vehicleControl.monitoredEntry.title": "Monitored Entry",
    "vehicleControl.monitoredEntry.desc":
      "Real-time tracking of all entry and exit points.",
    "vehicleControl.waitingZones.title": "Safe Waiting Zones",
    "vehicleControl.waitingZones.desc":
      "Designated areas for safe vehicle staging.",
    "vehicleControl.trafficFlow.title": "Intelligent Flow",
    "vehicleControl.trafficFlow.desc":
      "Optimized traffic patterns for maximum efficiency.",
    "whyPetra.closing.text":
      "We provide fully integrated logistics solutions where safety and efficiency come first…",
    "whyPetra.closing.signature": "Petra — Your Trusted Partner",
    "pillars.label": "Core Pillars",
    "pillars.title": "What Drives Us",
    "pillars.technology.title": "Advanced Technology",
    "pillars.technology.desc": "Cutting-edge systems for optimal operations.",
    "pillars.safety.title": "Safety Commitment",
    "pillars.safety.desc": "Zero-compromise approach to safety standards.",
    "pillars.customer.title": "Customer Focus",
    "pillars.customer.desc": "Client satisfaction is our top priority.",
    "pillars.expertise.title": "Fuel Expertise",
    "pillars.expertise.desc": "Deep knowledge of the petroleum industry.",
    // Safety Page
    "safety.page.hero.title": "Safety",
    "safety.page.hero.subtitle":
      "Setting the highest safety standards in petroleum storage and transportation",

    "safety.page.intro.label": "Safety",
    "safety.page.intro.title": "Safety at Petra",
    "safety.page.intro.text1":
      "Petra is a leading company providing integrated solutions for the storage and transportation of petroleum derivatives, in addition to specialized consultancy services within Syria’s energy sector.",
    "safety.page.intro.text2":
      "Safety is at the core of all our operations. We implement rigorous systems and procedures to protect people, assets, and the environment, while adhering to the highest local and international safety standards.",

    "safety.page.procedures.label": "Technical Safety Protocols",
    "safety.page.procedures.title": "Daily Safety Procedures",

    "safety.page.procedures.vehicleInspection.title": "Vehicle Inspection",
    "safety.page.procedures.vehicleInspection.desc":
      "Comprehensive pre-trip inspections to ensure full safety compliance",

    "safety.page.procedures.driverAssessment.title": "Driver Readiness",
    "safety.page.procedures.driverAssessment.desc":
      "Regular assessment of driver fitness and safety compliance",

    "safety.page.procedures.emergencyPlans.title": "Emergency Response Plans",
    "safety.page.procedures.emergencyPlans.desc":
      "Predefined procedures for handling various emergency scenarios",

    "safety.page.procedures.monitoringSystems.title": "Monitoring Systems",
    "safety.page.procedures.monitoringSystems.desc":
      "Continuous monitoring to ensure safe and compliant operations",

    "safety.page.training.label": "Training Programs",
    "safety.page.training.title": "Safety Training",

    "safety.page.training.emergencyResponse.title":
      "Emergency Response Training",
    "safety.page.training.emergencyResponse.desc":
      "Preparing teams for fast and effective emergency response",

    "safety.page.training.hazardousMaterials.title":
      "Hazardous Materials Handling",
    "safety.page.training.hazardousMaterials.desc":
      "Safe handling procedures for flammable and hazardous materials",

    "safety.page.training.accidentPrevention.title": "Accident Prevention",
    "safety.page.training.accidentPrevention.desc":
      "Risk awareness and proactive accident prevention strategies",

    "safety.page.training.safetyEquipment.title": "Safety Equipment",
    "safety.page.training.safetyEquipment.desc":
      "Proper use of personal protective and safety equipment",

    "safety.page.standards.label": "Standards",
    "safety.page.standards.title": "Compliance & Standards",
    "safety.page.standards.subtitle":
      "We strictly adhere to recognized safety regulations and standards",

    "safety.page.standards.syrianRegulations.title": "Local Regulations",
    "safety.page.standards.syrianRegulations.desc":
      "Full compliance with Syrian regulatory safety requirements",

    "safety.page.standards.regionalStandards.title": "Regional Standards",
    "safety.page.standards.regionalStandards.desc":
      "Adoption of regionally recognized safety best practices",

    "safety.page.standards.adrGuidelines.title": "ADR Guidelines",
    "safety.page.standards.adrGuidelines.desc":
      "Compliance with European ADR hazardous transport standards",

    "safety.page.standards.internalAudits.title": "Internal Audits",
    "safety.page.standards.internalAudits.desc":
      "Regular audits to ensure continuous safety improvement",

    "safety.page.monitoring.label": "Monitoring Systems",
    "safety.page.monitoring.title": "Monitoring & Control",

    "safety.page.monitoring.gpsTracking.title": "GPS Tracking",
    "safety.page.monitoring.gpsTracking.desc":
      "Real-time vehicle tracking to ensure safe routes",

    "safety.page.monitoring.realTimeAlerts.title": "Real-Time Alerts",
    "safety.page.monitoring.realTimeAlerts.desc":
      "Instant alerts for any unsafe behavior or incidents",

    "safety.page.monitoring.fuelMonitoring.title": "Fuel Monitoring",
    "safety.page.monitoring.fuelMonitoring.desc":
      "Fuel usage analysis to detect irregularities",

    "safety.page.monitoring.accessControl.title": "Access Control",
    "safety.page.monitoring.accessControl.desc":
      "Ensuring authorized access to vehicles and systems only",

    "safety.page.cta.title": "Safety Is Our Foundation",
    "safety.page.cta.text":
      "Contact us to learn more about our safety systems and procedures",
    "safety.page.cta.button": "Contact Us",
    "safety.page.cta.signature": " Petra – Commitment to Safety",
    // Services Page

    "services.page.label": "Services",

    "services.page.hero.title": "Our Services",
    "services.page.hero.subtitle": "What We Do",

    "services.page.main.label": "Our Expertise",
    "services.page.main.title": "Integrated Petroleum Solutions",
    "services.page.main.subtitle":
      "We deliver a comprehensive range of services designed to support petroleum operations from storage to distribution and investment.",

    "services.page.storage.label": "Petroleum Storage",
    "services.page.storage.title": "Safe & Efficient Storage Solutions",
    "services.page.storage.desc":
      "We provide advanced petroleum storage solutions that ensure maximum safety and efficiency while complying with international operational standards.",

    "services.page.storage.point1":
      "Storage of gasoline, diesel, lubricants, and various petroleum products",
    "services.page.storage.point2":
      "Operation and management of storage tanks in accordance with global safety standards",
    "services.page.storage.point3":
      "Advanced inventory monitoring systems to minimize losses and improve accuracy",

    "services.page.learnMore": "Learn More",

    "services.page.supplyChain.label": "Supply Chain Management",
    "services.page.supplyChain.title": "Integrated Logistics Management",
    "services.page.supplyChain.desc":
      "Comprehensive supply chain services ensuring efficient petroleum distribution through planning, execution, and continuous optimization.",

    "services.page.supplyChain.point1":
      "Planning and execution of petroleum logistics operations",
    "services.page.supplyChain.point2":
      "Optimization of distribution networks to reduce costs and increase efficiency",
    "services.page.supplyChain.point3":
      "Supplier and customer relationship management to ensure supply continuity",

    "services.page.fuelStation.label": "Fuel Stations Investment",
    "services.page.fuelStation.title": "Fuel Station Development & Management",
    "services.page.fuelStation.desc":
      "We support investors and operators in developing and managing fuel stations with a strong focus on profitability and sustainability.",

    "services.page.fuelStation.point1":
      "Comprehensive feasibility studies for new and existing fuel stations",
    "services.page.fuelStation.point2":
      "Operational management based on high efficiency and profitability standards",
    "services.page.fuelStation.point3":
      "Development of alternative energy solutions such as solar power systems",

    "services.page.consulting.label": "Technical & Consulting Services",
    "services.page.consulting.title": "Professional Engineering & Consulting",
    "services.page.consulting.desc":
      "We provide specialized technical and consulting services to support oil & gas projects and enable informed investment decisions.",

    "services.page.consulting.point1":
      "Engineering and technical consulting for oil & gas projects",
    "services.page.consulting.point2":
      "Market analysis and investment opportunity assessments",
    "services.page.consulting.point3":
      "Training programs focused on best practices and operational excellence",

    "services.page.additional.label": "Additional Services",
    "services.page.additional.title": "Value-Added Supporting Services",

    "services.page.additional.fleetManagement.title":
      "Fleet Management Solutions",
    "services.page.additional.fleetManagement.desc":
      "Advanced fleet management systems to monitor, control, and optimize transportation operations safely and efficiently.",

    "services.page.additional.roadSupport.title": "On-Road Support Services",
    "services.page.additional.roadSupport.desc":
      "24/7 technical and operational road support ensuring uninterrupted transportation.",

    "services.page.additional.longDistance.title":
      "Long-Distance Transportation",
    "services.page.additional.longDistance.desc":
      "Reliable long-distance petroleum transportation using modern fleets and real-time tracking technologies.",

    "services.page.whyUs.label": "Why Choose Us",
    "services.page.whyUs.title": "Your Trusted Petroleum Partner",

    "services.page.whyUs.expertise.title": "Industry Expertise",
    "services.page.whyUs.expertise.desc":
      "Extensive experience in petroleum storage, logistics, and energy investments.",

    "services.page.whyUs.reliability.title": "Operational Reliability",
    "services.page.whyUs.reliability.desc":
      "Consistent, safe, and fully compliant operational standards.",

    "services.page.whyUs.support.title": "Dedicated Support",
    "services.page.whyUs.support.desc":
      "Professional support teams assisting you at every stage.",

    "services.page.whyUs.speed.title": "Fast Execution",
    "services.page.whyUs.speed.desc":
      "Efficient processes designed to deliver results on time.",

    "services.page.whyUs.team.title": "Qualified Team",
    "services.page.whyUs.team.desc":
      "Highly skilled engineers and industry professionals.",

    "services.page.whyUs.innovation.title": "Innovation Driven",
    "services.page.whyUs.innovation.desc":
      "Adoption of modern technologies and sustainable energy solutions.",

    "services.page.cta.title": "Ready to Power Your Operations?",
    "services.page.cta.text":
      "Contact us today to discover how our services can support your business growth and operational excellence.",
    "services.page.cta.button": "Contact Us",
    // Activities Page
    "activities.label": "Activities",

    "activities.hero.title": "Our Activities",
    "activities.hero.subtitle": "Specialization is the Key to Success",

    "activities.stats.operations": "Completed Operations",
    "activities.stats.kilometers": "Kilometers Covered",
    "activities.stats.team": "Team Members",
    "activities.stats.experience": "Years of Experience",

    "activities.intro.title":
      "Comprehensive Petroleum Storage and Transport Solutions",
    "activities.intro.text":
      "Petra Company is a leading provider of petroleum storage and transport solutions, alongside specialized consulting services, within local and regional markets. Our strict commitment to quality and operational efficiency has made us a recognized leader in the petroleum solutions sector.",

    "activities.section.expertise.title": "Advanced Operational Expertise",
    "activities.section.expertise.text":
      "Over the years, we have executed thousands of successful operations for the storage and transport of various petroleum products in highly sensitive operational environments, requiring precision and professionalism in handling hazardous materials. We also provide specialized engineering and technical consulting services.",

    "activities.section.expertise.point1":
      "Storage and transport of crude oil and various petroleum derivatives",
    "activities.section.expertise.point2":
      "Professional handling of hazardous materials following the highest safety standards",
    "activities.section.expertise.point3":
      "Providing specialized engineering and technical consulting to ensure optimal performance",

    "activities.section.fleet.title": "Modern Fleet & Advanced Technology",
    "activities.section.fleet.text":
      "Our modern fleet includes advanced tankers and smart tracking systems that ensure maximum safety during transport and secure storage. Real-time monitoring allows precise tracking of shipments throughout the journey.",

    "activities.section.fleet.point1":
      "Specialized, modern tankers for storage and transport",
    "activities.section.fleet.point2":
      "Advanced real-time tracking and monitoring systems",
    "activities.section.fleet.point3":
      "Millions of kilometers traveled safely across diverse terrains",

    "activities.section.team.title": "Professional Human Capital",
    "activities.section.team.text":
      "Petra's team is the backbone of our success, consisting of hundreds of drivers, technicians, and consultants working under certified safety systems and continuous training programs to ensure reliable services.",

    "activities.section.team.point1":
      "Experienced drivers, technicians, and consultants",
    "activities.section.team.point2":
      "Continuous training programs focused on safety, efficiency, and quality",
    "activities.section.team.point3":
      "Strict adherence to operational standards and safety procedures",

    "activities.capabilities.label": "Our Capabilities",
    "activities.capabilities.title": "Specialized Services",

    "activities.capabilities.crudeOil.title": "Crude Oil",
    "activities.capabilities.crudeOil.desc":
      "Safe storage and transport of crude oil with precise operational standards.",

    "activities.capabilities.diesel.title": "Diesel",
    "activities.capabilities.diesel.desc":
      "Reliable diesel storage and transport services while maintaining product quality.",

    "activities.capabilities.gasoline.title": "Gasoline",
    "activities.capabilities.gasoline.desc":
      "Storage and transport of gasoline according to global safety standards and smart monitoring systems.",

    "activities.capabilities.lubricants.title": "Industrial Lubricants",
    "activities.capabilities.lubricants.desc":
      "Professional handling and transport of industrial oils and lubricants, with consulting services available when needed.",

    "activities.capabilities.monitoring.title": "Smart Monitoring",
    "activities.capabilities.monitoring.desc":
      "Continuous shipment monitoring and storage oversight using smart systems and real-time reporting.",

    "activities.capabilities.safety.title": "Safety Commitment",
    "activities.capabilities.safety.desc":
      "Full compliance with safety protocols to protect personnel, assets, and the environment during storage and transport.",

    "activities.cta.title":
      "Leadership in Storage, Transport, and Consulting Services",
    "activities.cta.text":
      "At Petra, we believe that safe storage and transport of petroleum products is a major responsibility. We continuously invest in fleet upgrades, workforce development, and technology to ensure top performance and long-term reliability.",

    "activities.cta.button": "Contact Us",
    "activities.cta.signature":
      "Petra – Your Trusted Partner in Storage, Transport, and Consulting Services",
    // Contact Us Page
    "contact.hero.label": "Petra",
    "contact.hero.title": "Contact Us",
    "contact.hero.subtitle": "Get in Touch with Petra",
    "contact.hero.description":
      "At Petra Company, we believe in building lasting relationships with our clients. Our dedicated team is here to assist you with any inquiries, partnerships, or business opportunities. We look forward to connecting with you.",
    "common.scrollDown": "Scroll Down",
    "contact.info.phone": "Phone",
    "contact.info.phoneValue1": "+963 11 691 55 44",
    "contact.info.phoneValue2": "+963 11 692 63 62",
    "contact.info.email": "Email",
    "contact.info.emailValue1": "info@petra-co.com.sy",
    "contact.info.emailValue2": "petra-co@outlook.com",
    "contact.info.mobile": "Mobile",
    "contact.info.mobileValue": "+963 934 039 444",
    "contact.info.fax": "Fax",
    "contact.info.faxValue": "+963 11 692 63 62",
    "contact.info.address": "Address",
    "contact.info.addressValue": "Damascus, Syria",
    "contact.hours.title": "Business Hours",
    "contact.hours.label": "Working Days",
    "contact.hours.weekdays": "Sunday - Thursday",
    "contact.hours.timeLabel": "Hours",
    "contact.hours.time": "8:00 AM - 5:00 PM",
    "contact.hours.closed": "Closed on Friday and Saturday",
    "contact.location.title": "location",
    "contact.map.viewLarger": "View larger map",
  },
  ar: {
    "nav.home": "الرئيسية",
    "nav.services": "الخدمات",
    "nav.about": "من نحن",
    "nav.faq": "الأسئلة الشائعة",
    "nav.contact": "تواصل معنا",
    "nav.language": "English",
    "hero.slide1.title": "نقدم التميز في خدمات النفط وحلول الطاقة",
    "hero.slide1.subtitle":
      "تخزين متكامل، لوجستيات، واستشارات لقطاع النفط والغاز",
    "hero.slide1.cta": "ابدأ الآن",
    "hero.slide2.title": "لماذا بترا؟",
    "hero.slide2.subtitle":
      "لأننا نجمع بين الخبرة العميقة والنزاهة التشغيلية والدقة",
    "hero.slide2.cta": "اكتشف السبب",
    "hero.slide3.title": "الجودة والسلامة في كل عملية",
    "hero.slide3.subtitle":
      "نتبع معايير دولية صارمة لضمان الموثوقية والأداء الخالي من المخاطر",
    "hero.slide3.cta": "شاهد معاييرنا",
    "hero.slide4.title": "انتشارنا، ميزتك",
    "hero.slide4.subtitle": "لوجستيات شاملة ومبادرات مستدامة عبر قطاع الطاقة",
    "hero.slide4.cta": "استكشف الخدمات",
    "quicklinks.faq.title": "الأسئلة الشائعة",
    "quicklinks.faq.desc":
      "تعرف على المزيد حول خدماتنا وإجراءاتنا ومعايير السلامة.",
    "quicklinks.faq.cta": "عرض الأسئلة",
    "quicklinks.contact.title": "تواصل معنا",
    "quicklinks.contact.desc":
      "فريقنا جاهز لمساعدتك. تواصل معنا للاستفسارات أو الشراكات.",
    "quicklinks.contact.cta": "تواصل الآن",
    "quicklinks.safety.title": "السلامة والامتثال",
    "quicklinks.safety.desc":
      "نطبق إجراءات سلامة صارمة لضمان حماية الأشخاص والأصول والبيئة.",
    "quicklinks.safety.cta": "التزامنا بالسلامة",
    "services.title": "خدمات مبتكرة تدعم مستقبل الطاقة",
    "services.subtitle": "حلول شاملة لقطاع الطاقة الحديث",
    "services.cta.title": "هل أنت مستعد لتحسين عمليات الطاقة؟",
    "services.cta.button": "اتصل بفريقنا",
    "detailed.storage.title": "تخزين المشتقات البترولية",
    "detailed.storage.desc":
      "نوفر حلول تخزين آمنة وفعالة للبنزين والديزل والزيوت والمشتقات البترولية الأخرى. تشمل عملياتنا إدارة وصيانة خزانات التخزين وفقاً للمعايير الدولية.",
    "detailed.storage.cta":" بنية تخزين احترافية تضمن السلامة والاستدامة",
    "detailed.logistics.title": "إدارة سلسلة التوريد",
    "detailed.logistics.desc":
      "نخطط وننفذ حلول لوجستية متكاملة لنقل وتوزيع المشتقات البترولية. مصممة لتحسين شبكات التوزيع وتقليل التكاليف التشغيلية.",
    "detailed.logistics.cta":" إدارة لوجستية ذكية تعزز انسيابية التوزيع",
    "detailed.station.title": "الاستثمار وتشغيل محطات الوقود",
    "detailed.station.desc":
      "دراسات جدوى لإنشاء وتطوير محطات الوقود في مواقع استراتيجية. خدمات تشغيل وإدارة كاملة تركز على الربحية طويلة المدى.",
    "detailed.station.cta":" إدارة متكاملة لمحطات الوقود بنمو مستدام",
    "detailed.consulting.title": "الاستشارات الفنية والهندسية",
    "detailed.consulting.desc":
      "حلول استشارية متخصصة لتطوير البنية التحتية للنفط والغاز. تحليل السوق وتحديد فرص الاستثمار الجديدة.",
    "detailed.consulting.cta":" خبرات هندسية تدعم قرارات استثمارية دقيقة",
    "service.dropdown.storage": "تخزين المنتجات البترولية",
    "service.dropdown.logistics": "إدارة سلسلة التوريد",
    "service.dropdown.station": "الاستثمار في محطات الوقود",
    "service.dropdown.consulting": "الاستشارات الفنية والهندسية",
    "about.title": "من نحن",
    "about.description":
      "بترا شركة متخصصة في إدارة وتخزين ولوجستيات المشتقات البترولية. نعمل وفق معايير رائدة في الصناعة لضمان حلول طاقة آمنة وموثوقة.",
    "about.vision.title": "رؤيتنا",
    "about.vision.text":
      "أن نكون الشريك الموثوق والرائد في خدمات لوجستيات وتخزين البترول.",
    "about.mission.title": "مهمتنا",
    "about.mission.text":
      "تقديم الطاقة بامتياز من خلال الابتكار والسلامة والكفاءة التشغيلية.",
    "about.values.title": "قيمنا الأساسية",
    "about.values.safety": "السلامة",
    "about.values.reliability": "الموثوقية",
    "about.values.integrity": "النزاهة",
    "about.values.sustainability": "الاستدامة",
    "about.values.excellence": "التميز",
    "safety.title": "السلامة أولاً. الجودة دائماً.",
    "safety.description":
      "نطبق معايير صارمة للصحة والسلامة والبيئة في كل مرحلة من عملياتنا.",
    "safety.hse": "الصحة والسلامة والبيئة",
    "safety.highlight1": "الصيانة الوقائية والتحكم في المخاطر",
    "safety.highlight2": "الاستعداد للاستجابة للطوارئ",
    "safety.highlight3": "ممارسات حماية البيئة",
    "projects.title": "سجلنا الحافل",
    "projects.description":
      "نفخر بتقديم حلول لوجستية وتخزين ناجحة لمختلف العملاء الاستراتيجيين في قطاع النفط والغاز.",
    "projects.stats.years": "سنوات من الخبرة",
    "projects.stats.clients": "عملاء راضون",
    "projects.stats.locations": "مواقع الخدمة",
    "projects.stats.certifications": "الشهادات",
    "projects.project1.tag": "تخزين",
    "projects.project1.title": "منشأة تخزين إقليمية",
    "projects.project1.desc":
      "منشأة تخزين بترول حديثة بسعة تزيد عن 50,000 برميل.",
    "projects.project2.tag": "لوجستيات",
    "projects.project2.title": "مشروع تحسين الأسطول",
    "projects.project2.desc": "إصلاح لوجستي شامل قلل أوقات التسليم بنسبة 40%.",
    "projects.project3.tag": "استثمار",
    "projects.project3.title": "محطات وقود خضراء",
    "projects.project3.desc": "شبكة محطات وقود تعمل بالطاقة الشمسية.",
    
    "cta.title": "شاركنا لتشكيل مستقبل الطاقة",
    "cta.description": "هل أنت مستعد للارتقاء بعملياتك في مجال الطاقة؟",
    "cta.button1": "اطلب عرض سعر",
    "cta.button2": "اعرف المزيد",
    "faq.title": "الأسئلة الشائعة",
    "faq.subtitle": "اعثر على إجابات للأسئلة الشائعة حول خدماتنا.",
    "faq.q1": "ما هي الخدمات التي تقدمها بترا؟",
    "faq.a1":
      "تقدم بترا خدمات بترولية شاملة تشمل حلول التخزين وإدارة سلسلة التوريد والاستثمار وتشغيل محطات الوقود.",
    "faq.q2": "ما هي معايير السلامة التي تتبعونها؟",
    "faq.a2": "نلتزم بمعايير صارمة للصحة والسلامة والبيئة الدولية.",
    "faq.q3": "أين تتوفر خدماتكم؟",
    "faq.a3": "خدماتنا متاحة في جميع أنحاء الأردن ومنطقة الشرق الأوسط.",
    "faq.q4": "كيف يمكنني طلب عرض سعر؟",
    "faq.a4":
      "يمكنك طلب عرض سعر من خلال ملء نموذج الاتصال أو الاتصال بمكتبنا مباشرة.",
    "faq.q5": "هل تقدمون فرص شراكة؟",
    "faq.a5":
      "نعم، نسعى بنشاط للشراكات الاستراتيجية مع الشركات في قطاع النفط والغاز.",
    "faq.q6": "ما الذي يميز بترا عن المنافسين؟",
    "faq.a6":
      "تجمع بترا بين الخبرة العميقة في الصناعة والنزاهة التشغيلية والحلول المبتكرة.",
    "footer.description":
      "متخصصون في إدارة وتخزين ولوجستيات المشتقات البترولية.",
    "footer.quickLinks": "روابط سريعة",
    "footer.services": "خدماتنا",
    "footer.contact": "معلومات الاتصال",
    "footer.links.home": "الرئيسية",
    "footer.links.services": "الخدمات",
    "footer.links.about": "من نحن",
    "footer.links.contact": "اتصل بنا",
    "footer.rights": "جميع الحقوق محفوظة.",
    // About Page
    "about.hero.title": "بيترا — القوة… الصلابة… الثبات في عالم الطاقة",
    "about.hero.subtitle":
      "شركة رائدة في حلول تخزين ونقل المشتقات النفطية والخدمات الاستشارية.",
    "about.hero.cta1": "تواصل معنا",
    "about.hero.cta2": "خدماتنا",
    "about.section.label": "من نحن",
    "about.section.title": "تعرف علينا",
    "about.section.paragraph1":
      'كلمة بيترا تعني "الصخرة" في اليونانية القديمة، ترمز إلى القوة والصلابة والصبر والثبات. شركة بيترا لخدمات النفط هي شركة رائدة في قطاع النفط والطاقة، تقدم خبرة واسعة في توفير حلول متكاملة للتخزين والنقل والاستشارات.',
    "about.section.paragraph2":
      "يشمل نطاق عمل الشركة استشارات النفط والغاز، تخزين ونقل المنتجات البترولية (براً وبحراً)، الاستثمار وإعادة تأهيل محطات الوقود، توريد وتركيب أنظمة الوقود، والخدمات المتنوعة المتعلقة بصناعة النفط والغاز.",
    "timeline.label": "مسيرتنا",
    "timeline.title": "الجدول الزمني للشركة",
    "timeline.2019":
      "تأسيس الشركة في السوق المحلي. التخطيط الاستراتيجي وتطوير البنية التحتية. الحصول على التراخيص المطلوبة وتشكيل فريق متخصص.",
    "timeline.2020":
      "التوسع الاستراتيجي ومضاعفة سعة التخزين. تحسينات الكفاءة التشغيلية وتدريب القوى العاملة.",
    "timeline.2022":
      "تطبيق تقنيات المراقبة المتقدمة. اعتماد نظام إدارة الوقود (FMS). تحقيق سجلات سلامة عالية والتميز التشغيلي.",
    "timeline.2024":
      "تعزيز مكانة الشركة كرائدة في حلول الوقود. التوسع في خدمات الاستشارات النفطية. بناء سمعة سوقية قوية كشريك موثوق.",
    "timeline.2025": "الحصول على شهادات الجودة الدولية: ISO 9001 و ISO 29001.",
    "vision.title": "رؤيتنا",
    "vision.text":
      "أن نصبح المزود الرائد لخدمات المشتقات البترولية من خلال تقديم حلول عالية الجودة تدعم استدامة الطاقة وتتجاوز توقعات العملاء.",
    "mission.title": "مهمتنا",
    "mission.text":
      "توفير حلول تخزين وخدمات آمنة وفعالة للمنتجات البترولية مع الحفاظ على أعلى معايير الجودة والسلامة والاستدامة البيئية.",
    "scope.label": "ماذا نفعل",
    "scope.title": "نطاق العمل",
    "scope.storage.title": "تخزين البترول",
    "scope.storage.desc":
      "حلول تخزين آمنة وفعالة للبنزين والديزل والزيوت والمنتجات الأخرى. تشغيل وإدارة خزانات التخزين وفقاً للمعايير العالمية. تقنيات مراقبة المخزون وتقليل الفاقد.",
    "scope.logistics.title": "إدارة سلسلة التوريد",
    "scope.logistics.desc":
      "تخطيط وتنفيذ اللوجستيات المتكاملة لتوزيع المنتجات البترولية. تحسين شبكات التوزيع لتقليل التكاليف وتحسين الكفاءة. إدارة علاقات الموردين والعملاء لضمان استمرارية التوريد.",
    "scope.station.title": "الاستثمار في محطات الوقود",
    "scope.station.desc":
      "دراسات جدوى لمحطات الوقود الجديدة أو القائمة. التشغيل والإدارة بمعايير ربحية عالية. تطوير حلول الطاقة البديلة مثل أنظمة الطاقة الشمسية.",
    "scope.consulting.title": "الخدمات الفنية والاستشارية",
    "scope.consulting.desc":
      "الاستشارات الهندسية والفنية لمشاريع النفط والغاز. تحليل السوق ودراسات فرص الاستثمار. تدريب الفرق على أفضل ممارسات الصناعة والتميز التشغيلي.",
    "values.label": "ما نؤمن به",
    "values.title": "قيمنا",
    "values.comprehensive":
      "الالتزام بتقديم حلول تخزين وتوزيع بترولية شاملة ومتكاملة.",
    "values.technology":
      "استخدام التقنيات المتقدمة وأفضل الممارسات العالمية لتحقيق أقصى جودة وكفاءة.",
    "values.safety": "الالتزام بأعلى معايير السلامة والجودة.",
    "values.improvement":
      "التحسين المستمر من خلال فرق الخبراء وفهم السوق المتطور.",
    "values.innovation": "تقديم حلول مبتكرة تلبي وتتجاوز توقعات العملاء.",
    "about.cta.title": "هل أنت مستعد للشراكة معنا؟",
    "about.cta.description":
      "دعنا نساعدك على تحقيق التميز في تخزين ولوجستيات واستشارات البترول.",
    "about.cta.button": "ابدأ اليوم",
    // About Panel
    "panel.title": "اكتشف بترا",
    "panel.about": "من نحن",
    "panel.activities": "الأنشطة",
    "panel.safety": "السلامة",
    "panel.services": "الخدمات",
    "panel.whyPetra": "لماذا بترا",
    "panel.governance": "الحوكمة المؤسسية",
    "panel.ethics": "الأخلاق والحوكمة",
    "panel.values": "قيمنا",
    "panel.sustainability": "الاستدامة",
    "panel.back": "رجوع",
    // Why Petra Page
    "whyPetra.hero.title": "لماذا تختار بترا؟",
    "whyPetra.hero.subtitle":
      "شريكك الاستراتيجي في حلول الوقود… حيث تبدأ الثقة.",
    "whyPetra.strengths.label": "نقاط قوتنا",
    "whyPetra.strengths.title": "المزايا الرئيسية",
    "whyPetra.strengths.professionalTeam.title": "فريق محترف",
    "whyPetra.strengths.professionalTeam.desc":
      "متخصصون مدربون ومعتمدون بخبرة واسعة في الصناعة.",
    "whyPetra.strengths.customizedServices.title": "خدمات مخصصة",
    "whyPetra.strengths.customizedServices.desc":
      "حلول مصممة بناءً على احتياجات ومتطلبات كل عميل.",
    "whyPetra.strengths.environmentalStandards.title": "المعايير البيئية",
    "whyPetra.strengths.environmentalStandards.desc":
      "التزام كامل باللوائح البيئية والممارسات المستدامة.",
    "whyPetra.strengths.extensiveExperience.title": "خبرة واسعة",
    "whyPetra.strengths.extensiveExperience.desc":
      "سنوات من الخبرة المثبتة في عمليات التخزين والتوزيع.",
    "whyPetra.strengths.safetyInfrastructure.title": "بنية السلامة",
    "whyPetra.strengths.safetyInfrastructure.desc":
      "مرافق تخزين عالية الأمان مع أنظمة حماية متقدمة.",
    "whyPetra.strengths.fmsSystem.title": "نظام FMS",
    "whyPetra.strengths.fmsSystem.desc":
      "نظام إدارة الوقود الاستراتيجي للتحكم التشغيلي الأمثل.",
    "fms.label": "التكنولوجيا الذكية",
    "fms.title": "مميزات نظام FMS التفاعلية",
    "fms.subtitle": "نظام إدارة وقود متقدم يوفر تحكمًا ورؤية تشغيلية كاملة.",
    "fms.lossPrevention.title": "منع الفقد",
    "fms.lossPrevention.leakDetection": "كشف التسرب الفوري",
    "fms.lossPrevention.accessAlerts": "تنبيهات الوصول غير المصرح",
    "fms.lossPrevention.userTracking": "تتبع عمليات السحب",
    "fms.dataAccuracy.title": "دقة البيانات",
    "fms.dataAccuracy.sensorAccuracy": "دقة المستشعرات 99.9%",
    "fms.dataAccuracy.detailedReports": "تقارير مفصلة",
    "fms.dataAccuracy.dataExports": "تصدير متعدد الصيغ",
    "fms.realTimeMonitoring.title": "المراقبة الحية",
    "fms.realTimeMonitoring.liveFuelLevels": "مستويات الوقود الحية",
    "fms.realTimeMonitoring.remoteMonitoring": "المراقبة عن بعد",
    "fms.realTimeMonitoring.autoAlerts": "تنبيهات انخفاض المستوى",
    "safetySystems.label": "أنظمة الحماية",
    "safetySystems.title": "أنظمة السلامة",
    "safetySystems.firefighting.title": "أنظمة مكافحة الحرائق",
    "safetySystems.firefighting.desc":
      "أنظمة إطفاء متقدمة مثبتة في جميع المرافق.",
    "safetySystems.surveillance.title": "مراقبة عالية الدقة",
    "safetySystems.surveillance.desc":
      "كاميرات عالية الدقة توفر تغطية مراقبة على مدار الساعة.",
    "safetySystems.extinguishers.title": "طفايات الحريق",
    "safetySystems.extinguishers.desc":
      "طفايات موزعة استراتيجياً للاستجابة السريعة للطوارئ.",
    "vehicleControl.label": "إدارة المرافق",
    "vehicleControl.title": "التحكم في المركبات والمرافق",
    "vehicleControl.secureAccess.title": "دخول آمن",
    "vehicleControl.secureAccess.desc":
      "دخول مركبات متحكم به مع بروتوكولات التحقق.",
    "vehicleControl.monitoredEntry.title": "دخول مراقب",
    "vehicleControl.monitoredEntry.desc": "تتبع حي لجميع نقاط الدخول والخروج.",
    "vehicleControl.waitingZones.title": "مناطق انتظار آمنة",
    "vehicleControl.waitingZones.desc": "مناطق مخصصة لوقوف المركبات الآمن.",
    "vehicleControl.trafficFlow.title": "تدفق ذكي",
    "vehicleControl.trafficFlow.desc": "أنماط حركة مرور محسنة لأقصى كفاءة.",
    "whyPetra.closing.text":
      "نقدم حلول لوجستية متكاملة حيث تأتي السلامة والكفاءة أولاً…",
    "whyPetra.closing.signature": "بترا — شريكك الموثوق",
    "pillars.label": "الركائز الأساسية",
    "pillars.title": "ما يحركنا",
    "pillars.technology.title": "تكنولوجيا متقدمة",
    "pillars.technology.desc": "أنظمة متطورة لعمليات مثالية.",
    "pillars.safety.title": "التزام بالسلامة",
    "pillars.safety.desc": "نهج بدون تنازل لمعايير السلامة.",
    "pillars.customer.title": "التركيز على العميل",
    "pillars.customer.desc": "رضا العميل هو أولويتنا القصوى.",
    "pillars.expertise.title": "خبرة الوقود",
    "pillars.expertise.desc": "معرفة عميقة بصناعة البترول.",
    // Safety Page

    "safety.page.hero.title": "السلامة",
    "safety.page.hero.subtitle":
      "نحو أعلى معايير السلامة في تخزين ونقل المشتقات النفطية",

    "safety.page.intro.label": "السلامة",
    "safety.page.intro.title": "السلامة في بيترا",
    "safety.page.intro.text1":
      "تُعد شركة بيترا من الشركات الرائدة في تقديم حلول متكاملة لتخزين ونقل المشتقات النفطية، إلى جانب الخدمات الاستشارية المتخصصة في قطاع الطاقة داخل سوريا.",
    "safety.page.intro.text2":
      "نضع السلامة في صميم جميع عملياتنا، ونعتمد أنظمة وإجراءات دقيقة تضمن حماية الأفراد والممتلكات والبيئة، مع الالتزام بأعلى المعايير المحلية والدولية في هذا القطاع الحيوي.",

    "safety.page.procedures.label": "البروتوكولات الفنية للسلامة",
    "safety.page.procedures.title": "إجراءات السلامة اليومية",

    "safety.page.procedures.vehicleInspection.title": "الفحص الفني للمركبات",
    "safety.page.procedures.vehicleInspection.desc":
      "إجراء فحوصات شاملة قبل كل رحلة لضمان الالتزام الكامل بمعايير السلامة",

    "safety.page.procedures.driverAssessment.title": "جاهزية السائقين",
    "safety.page.procedures.driverAssessment.desc":
      "تقييم دوري للياقة السائقين والتزامهم ببروتوكولات السلامة المعتمدة",

    "safety.page.procedures.emergencyPlans.title": "خطط الاستجابة للطوارئ",
    "safety.page.procedures.emergencyPlans.desc":
      "إجراءات محددة مسبقًا للتعامل مع مختلف سيناريوهات الطوارئ والحوادث",

    "safety.page.procedures.monitoringSystems.title": "أنظمة المراقبة",
    "safety.page.procedures.monitoringSystems.desc":
      "مراقبة مستمرة للعمليات لضمان التشغيل الآمن والالتزام بالمعايير",

    "safety.page.training.label": "برامج التدريب",
    "safety.page.training.title": "التدريب على السلامة",

    "safety.page.training.emergencyResponse.title": "تدريب الاستجابة للطوارئ",
    "safety.page.training.emergencyResponse.desc":
      "تأهيل الفرق للاستجابة السريعة والفعّالة في حالات الطوارئ",

    "safety.page.training.hazardousMaterials.title": "التعامل مع المواد الخطرة",
    "safety.page.training.hazardousMaterials.desc":
      "إجراءات آمنة للتعامل مع المواد القابلة للاشتعال والمواد الخطرة",

    "safety.page.training.accidentPrevention.title": "منع الحوادث",
    "safety.page.training.accidentPrevention.desc":
      "تعزيز الوعي بالمخاطر وتطبيق استراتيجيات استباقية للحد من الحوادث",

    "safety.page.training.safetyEquipment.title": "معدات السلامة",
    "safety.page.training.safetyEquipment.desc":
      "الاستخدام الصحيح لمعدات الوقاية الشخصية ومعدات السلامة",

    "safety.page.standards.label": "المعايير",
    "safety.page.standards.title": "الامتثال والمعايير",
    "safety.page.standards.subtitle":
      "نلتزم التزامًا صارمًا باللوائح والمعايير المعتمدة للسلامة",

    "safety.page.standards.syrianRegulations.title": "الأنظمة المحلية",
    "safety.page.standards.syrianRegulations.desc":
      "الامتثال الكامل لتعليمات السلامة الصادرة عن الجهات التنظيمية في سوريا",

    "safety.page.standards.regionalStandards.title": "المعايير الإقليمية",
    "safety.page.standards.regionalStandards.desc":
      "تطبيق أفضل ممارسات السلامة المعتمدة إقليميًا",

    "safety.page.standards.adrGuidelines.title": "إرشادات ADR",
    "safety.page.standards.adrGuidelines.desc":
      "الالتزام بالمعايير الأوروبية لنقل المواد الخطرة",

    "safety.page.standards.internalAudits.title": "التدقيق الداخلي",
    "safety.page.standards.internalAudits.desc":
      "مراجعات دورية لضمان التحسين المستمر لمعايير السلامة",

    "safety.page.monitoring.label": "أنظمة المراقبة",
    "safety.page.monitoring.title": "المراقبة والتحكم",

    "safety.page.monitoring.gpsTracking.title": "تتبع GPS",
    "safety.page.monitoring.gpsTracking.desc":
      "تتبع المركبات لحظيًا لضمان الالتزام بالمسارات الآمنة",

    "safety.page.monitoring.realTimeAlerts.title": "تنبيهات فورية",
    "safety.page.monitoring.realTimeAlerts.desc":
      "إشعارات مباشرة عند حدوث أي سلوك غير آمن",

    "safety.page.monitoring.fuelMonitoring.title": "مراقبة الوقود",
    "safety.page.monitoring.fuelMonitoring.desc":
      "تحليل استهلاك الوقود للكشف المبكر عن أي خلل",

    "safety.page.monitoring.accessControl.title": "التحكم بالوصول",
    "safety.page.monitoring.accessControl.desc":
      "ضمان وصول المصرّح لهم فقط إلى المركبات والأنظمة",

    "safety.page.cta.title": "السلامة أساس عملنا",
    "safety.page.cta.text":
      "تواصل معنا لمعرفة المزيد عن أنظمة وإجراءات السلامة المعتمدة لدينا",
    "safety.page.cta.button": "تواصل معنا",
    "safety.page.cta.signature": " بيترا – التزام دائم بالسلامة",
    // Services Page
    "services.page.label": "الخدمات",

    "services.page.hero.title": "خدماتنا",
    "services.page.hero.subtitle": "ماذا نقدم",

    "services.page.main.label": "مجالات خبرتنا",
    "services.page.main.title": "حلول متكاملة لقطاع المحروقات",
    "services.page.main.subtitle":
      "نقدم مجموعة شاملة من الخدمات المصممة لدعم عمليات قطاع النفط من التخزين وحتى التوزيع والاستثمار.",

    "services.page.storage.label": "تخزين المحروقات",
    "services.page.storage.title": "حلول تخزين آمنة وفعّالة",
    "services.page.storage.desc":
      "نوفّر حلول تخزين متقدمة للمحروقات تضمن أعلى مستويات السلامة والكفاءة، مع الالتزام بالمعايير الدولية في تشغيل وإدارة مرافق التخزين.",

    "services.page.storage.point1":
      "تخزين البنزين، الديزل، الزيوت، ومنتجات بترولية متنوعة",
    "services.page.storage.point2":
      "تشغيل وإدارة خزانات التخزين وفق المعايير العالمية للسلامة",
    "services.page.storage.point3":
      "أنظمة مراقبة المخزون المتقدمة لتقليل الفاقد وزيادة الدقة",

    "services.page.learnMore": "اعرف المزيد",

    "services.page.supplyChain.label": "إدارة سلاسل التوريد",
    "services.page.supplyChain.title": "إدارة لوجستية متكاملة",
    "services.page.supplyChain.desc":
      "خدمات متكاملة لإدارة سلاسل التوريد تضمن توزيع المحروقات بكفاءة عالية من خلال التخطيط والتنفيذ والتحسين المستمر.",

    "services.page.supplyChain.point1":
      "تخطيط وتنفيذ العمليات اللوجستية لتوزيع المحروقات",
    "services.page.supplyChain.point2":
      "تحسين شبكات التوزيع لتقليل التكاليف وزيادة الكفاءة",
    "services.page.supplyChain.point3":
      "إدارة علاقات الموردين والعملاء لضمان استمرارية الإمداد",

    "services.page.fuelStation.label": "الاستثمار في محطات الوقود",
    "services.page.fuelStation.title": "تطوير وإدارة محطات الوقود",
    "services.page.fuelStation.desc":
      "نساعد المستثمرين والمشغلين على تطوير وإدارة محطات الوقود وفق أعلى معايير الربحية والاستدامة.",

    "services.page.fuelStation.point1":
      "إعداد دراسات جدوى شاملة لمحطات الوقود الجديدة والقائمة",
    "services.page.fuelStation.point2":
      "تشغيل وإدارة المحطات وفق معايير عالية للكفاءة والربحية",
    "services.page.fuelStation.point3":
      "تطوير حلول الطاقة البديلة مثل أنظمة الطاقة الشمسية",

    "services.page.consulting.label": "الخدمات الفنية والاستشارية",
    "services.page.consulting.title": "استشارات هندسية متخصصة",
    "services.page.consulting.desc":
      "نقدم خدمات فنية واستشارية متقدمة لدعم مشاريع النفط والغاز وتمكين العملاء من اتخاذ قرارات استثمارية مدروسة.",

    "services.page.consulting.point1":
      "استشارات هندسية وفنية لمشاريع النفط والغاز",
    "services.page.consulting.point2": "تحليل الأسواق ودراسة فرص الاستثمار",
    "services.page.consulting.point3":
      "تدريب الكوادر على أفضل الممارسات التشغيلية",

    "services.page.additional.label": "خدمات إضافية",
    "services.page.additional.title": "خدمات داعمة تعزز الأداء",

    "services.page.additional.fleetManagement.title": "حلول إدارة الأسطول",
    "services.page.additional.fleetManagement.desc":
      "أنظمة متطورة لإدارة ومراقبة أساطيل النقل، تضمن السلامة التشغيلية وتحسين الأداء وخفض التكاليف.",

    "services.page.additional.roadSupport.title": "خدمات الدعم على الطريق",
    "services.page.additional.roadSupport.desc":
      "خدمات دعم فني وتشغيلي على مدار الساعة لضمان استمرارية النقل.",

    "services.page.additional.longDistance.title": "النقل لمسافات طويلة",
    "services.page.additional.longDistance.desc":
      "خدمات نقل موثوقة للمحروقات لمسافات طويلة باستخدام أساطيل حديثة وتقنيات تتبع آنية.",

    "services.page.whyUs.label": "لماذا نحن",
    "services.page.whyUs.title": "شريك موثوق في خدمات المحروقات",

    "services.page.whyUs.expertise.title": "خبرة متخصصة",
    "services.page.whyUs.expertise.desc":
      "خبرات متراكمة في تخزين المحروقات والخدمات اللوجستية.",

    "services.page.whyUs.reliability.title": "موثوقية التشغيل",
    "services.page.whyUs.reliability.desc":
      "عمليات مستقرة وآمنة ومتوافقة مع المعايير المعتمدة.",

    "services.page.whyUs.support.title": "دعم متواصل",
    "services.page.whyUs.support.desc":
      "فرق دعم متخصصة لمساندتكم في جميع مراحل العمل.",

    "services.page.whyUs.speed.title": "سرعة التنفيذ",
    "services.page.whyUs.speed.desc":
      "إجراءات فعالة تضمن إنجاز الأعمال في الوقت المحدد.",

    "services.page.whyUs.team.title": "فريق محترف",
    "services.page.whyUs.team.desc":
      "مهندسون وخبراء مؤهلون يتمتعون بكفاءة عالية.",

    "services.page.whyUs.innovation.title": "الابتكار والتطوير",
    "services.page.whyUs.innovation.desc":
      "اعتماد أحدث التقنيات وحلول الطاقة المستدامة.",

    "services.page.cta.title": "جاهزون لدعم أعمالكم؟",
    "services.page.cta.text":
      "تواصل معنا اليوم لاكتشاف كيف يمكن لخدماتنا دعم نمو أعمالكم وتحقيق التميز التشغيلي.",
    "services.page.cta.button": "تواصل معنا",

    // Activities Page
    "activities.label": "الأنشطة",

    "activities.hero.title": "أنشطتنا",
    "activities.hero.subtitle": "التخصص هو مفتاح النجاح",

    "activities.stats.operations": "عمليات منجزة",
    "activities.stats.kilometers": "كيلومترات مقطوعة",
    "activities.stats.team": "أعضاء الفريق",
    "activities.stats.experience": "سنوات الخبرة",

    "activities.intro.title": "حلول متكاملة للتخزين والنقل البترولي",
    "activities.intro.text":
      "شركة بيترا رائدة في تقديم حلول التخزين والنقل للمشتقات النفطية، بالإضافة إلى الخدمات الاستشارية المتخصصة، داخل الأسواق المحلية والإقليمية. وبفضل التزامنا الصارم بالجودة والكفاءة التشغيلية، أصبحنا أحد الشركات الرائدة في قطاع حلول الطاقة البترولية.",

    "activities.section.expertise.title": "خبرة تشغيلية متقدمة",
    "activities.section.expertise.text":
      "على مدار السنوات الماضية، نفذنا آلاف العمليات الناجحة لتخزين ونقل مشتقات نفطية متعددة ضمن بيئات تشغيلية عالية الحساسية تتطلب دقة واحترافية في التعامل مع المواد الخطرة، بالإضافة لتقديم استشارات هندسية وتقنية متخصصة.",

    "activities.section.expertise.point1":
      "تخزين ونقل النفط الخام ومشتقاته البترولية المختلفة",
    "activities.section.expertise.point2":
      "التعامل الاحترافي مع المواد الخطرة وفق أعلى معايير السلامة",
    "activities.section.expertise.point3":
      "تقديم استشارات هندسية وتقنية متخصصة لضمان أفضل أداء",

    "activities.section.fleet.title": "أسطول حديث وتقنيات متطورة",
    "activities.section.fleet.text":
      "يمتلك أسطولنا الحديث صهاريج نقل متطورة وأنظمة تتبع ذكية تضمن أعلى مستويات الأمان أثناء النقل، وتدعم عمليات التخزين الآمن، كما تتيح مراقبة مستمرة لمسارات الشحنات.",

    "activities.section.fleet.point1":
      "صهاريج وقود حديثة ومتخصصة للتخزين والنقل",
    "activities.section.fleet.point2":
      "أنظمة تتبع ومراقبة لحظية باستخدام تقنيات متقدمة",
    "activities.section.fleet.point3":
      "قطع ملايين الكيلومترات عبر طرق وتضاريس متنوعة بأمان",

    "activities.section.team.title": "كوادر بشرية محترفة",
    "activities.section.team.text":
      "يشكّل فريق بيترا حجر الأساس في نجاح أعمالنا، حيث يضم مئات السائقين والفنيين والمستشارين الإداريين المؤهلين للعمل وفق أنظمة سلامة معتمدة وبرامج تدريب مستمرة لضمان موثوقية الخدمات.",

    "activities.section.team.point1":
      "مئات السائقين والفنيين والاستشاريين ذوي الخبرة",
    "activities.section.team.point2":
      "برامج تدريب مستمرة تركز على السلامة والكفاءة والجودة",
    "activities.section.team.point3":
      "الالتزام الصارم بالمعايير التشغيلية وأنظمة السلامة",

    "activities.capabilities.label": "قدراتنا",
    "activities.capabilities.title": "خدماتنا المتخصصة",

    "activities.capabilities.crudeOil.title": "النفط الخام",
    "activities.capabilities.crudeOil.desc":
      "تخزين ونقل النفط الخام بأعلى مستويات الأمان ودقة التشغيل.",

    "activities.capabilities.diesel.title": "الديزل",
    "activities.capabilities.diesel.desc":
      "خدمات نقل وتخزين موثوقة لمادة الديزل مع الحفاظ على الجودة.",

    "activities.capabilities.gasoline.title": "البنزين",
    "activities.capabilities.gasoline.desc":
      "تخزين ونقل البنزين وفق معايير السلامة العالمية وأنظمة المراقبة الذكية.",

    "activities.capabilities.lubricants.title": "الزيوت الصناعية",
    "activities.capabilities.lubricants.desc":
      "التعامل والنقل الاحترافي للزيوت والشحوم الصناعية لمختلف الاستخدامات، مع خدمات استشارية عند الحاجة.",

    "activities.capabilities.monitoring.title": "المراقبة الذكية",
    "activities.capabilities.monitoring.desc":
      "متابعة مستمرة للشحنات ومراقبة عمليات التخزين عبر أنظمة ذكية وتقارير لحظية.",

    "activities.capabilities.safety.title": "الالتزام بالسلامة",
    "activities.capabilities.safety.desc":
      "التقيد الكامل بتعليمات السلامة لحماية الأفراد والممتلكات والبيئة خلال التخزين والنقل.",

    "activities.cta.title": "الريادة في التخزين والنقل والخدمات الاستشارية",
    "activities.cta.text":
      "في بيترا، نؤمن بأن تقديم حلول تخزين ونقل آمنة للمشتقات النفطية هو مسؤولية كبيرة، لذلك نواصل الاستثمار في تطوير الأسطول، تأهيل الكوادر، واعتماد أحدث التقنيات لضمان أفضل أداء وموثوقية على المدى الطويل.",

    "activities.cta.button": "تواصل معنا",
    "activities.cta.signature":
      "بيترا – شريككم الموثوق في حلول التخزين والنقل والخدمات الاستشارية",
          // Contact Us Page
 "contact.hero.label": "بيترا",
  "contact.hero.title": "تواصل معنا",
  "contact.hero.subtitle": "تواصل مع شركة بيترا",
  "contact.hero.description": "في شركة بيترا، نؤمن ببناء علاقات طويلة الأمد مع عملائنا. فريقنا المتخصص جاهز لمساعدتك في أي استفسارات أو شراكات أو فرص عمل. نتطلع دائمًا للتواصل معك.",
  
  "common.scrollDown": "تصفح لأسفل",

  "contact.info.phone": "الهاتف",
  "contact.info.phoneValue1": "+963 11 691 55 44",
  "contact.info.phoneValue2": "+963 11 692 63 62",

  "contact.info.email": "البريد الإلكتروني",
  "contact.info.emailValue1": "info@petra-co.com.sy",
  "contact.info.emailValue2": "petra-co@outlook.com",

  "contact.info.mobile": "الجوال",
  "contact.info.mobileValue": "+963 934 039 444",

  "contact.info.fax": "الفاكس",
  "contact.info.faxValue": "+963 11 692 63 62",

  "contact.info.address": "العنوان",
  "contact.info.addressValue": "دمشق، سوريا",

  "contact.hours.title": "ساعات العمل",
  "contact.hours.label": "أيام الدوام",
  "contact.hours.weekdays": "من الأحد إلى الخميس",
  "contact.hours.timeLabel": "ساعات الدوام",
  "contact.hours.time": "8:00 صباحًا - 5:00 مساءً",
  "contact.hours.closed": "مغلق يومي الجمعة والسبت",

  "contact.location.title": "الموقع",
  "contact.map.viewLarger": "عرض الخريطة بحجم أكبر"
  },
};
export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const langParam = params.lang as Language | undefined;
  const language: Language = langParam === "ar" || langParam === "en" ? langParam : "ar";

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);

  const setLanguage = (newLang: Language) => {
    if (newLang === language) return;
    navigate(location.pathname.replace(`/${language}`, `/${newLang}`), {
      replace: true,
    });
  };

  const t = (key: string): string =>
    translations[language][key as keyof typeof translations["en"]] || key;

  const dir = language === "ar" ? "rtl" : "ltr";

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
