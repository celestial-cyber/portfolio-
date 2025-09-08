"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Trophy, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function Certifications() {
  const [activeTab, setActiveTab] = useState<"courses" | "competitions">("courses")
  const [showAll, setShowAll] = useState(false)

  const courses = [
    {
      id: 1,
      name: "Introduction to Cybersecurity",
      issuer: "CISCO Networking Academy",
      date: "May 2023",
      link: "https://www.credly.com/badges/b3d2ba14-aeb8-40c1-8630-70e387b209fc/public_url",
      tags: ["Cybersecurity", "Networking"]
    },
    {
      id: 2,
      name: "Python for Machine Learning Projects",
      issuer: "St. Peter’s Engineering College",
      date: "May 2025",
      link: "https://www.credly.com/badges/c976ccd7-2f18-4b80-8c34-322ab1c58ae3",
      tags: ["Python", "Machine Learning"]
    },
    {
      id: 3,
      name: "Networking Basics",
      issuer: "CISCO Network Academy",
      date: "May 2025",
      link: "https://www.credly.com/badges/c976ccd7-2f18-4b80-8c34-322ab1c58ae3",
      tags: ["Networking"]
    },
    {
      id: 4,
      name: "Python Essentials 1",
      issuer: "CISCO Networking Academy",
      date: "May 2025",
      link: "https://www.credly.com/badges/9eeb5614-2e35-4fbc-889a-b1e361cbd302",
      tags: ["Python"]
    },
    {
      id: 5,
      name: "Python Essentials 2",
      issuer: "CISCO Networking Academy",
      date: "May 2025",
      link: "https://www.credly.com/badges/03aba8c0-27ce-4a57-aa48-1276a0b22f4a/public_url",
      tags: ["Python"]
    },
    {
      id: 6,
      name: "Space Exploration Technology: An Overview",
      issuer: "ISRO, IIRS",
      date: "May 2025",
      link: "https://drive.google.com/file/d/1Xfaj1e6hwqwnZFn_ygw5YXPOoQebfsnP/view?usp=sharing",
      tags: ["Space", "ISRO"]
    },
    {
      id: 7,
      name: "Geo Data Processing Using Python and ML",
      issuer: "ISRO, IIRS",
      date: "Mar 2025",
      link: "https://drive.google.com/file/d/1MQLnxDwmt8K-fKFp94NLAjxp9vyiQAsJ/view?usp=sharing",
      tags: ["Python", "Geo Data", "Machine Learning"]
    },
    {
      id: 8,
      name: "Udyam 2025 – The SpecAnciens Workshop",
      issuer: "SpecAnciens",
      date: "Feb 2025",
      link: "https://drive.google.com/file/d/1YGPhczivei3DgRQUWshiDFDrSOTLxKOf/view?usp=sharing",
      tags: ["Workshop"]
    },
    {
      id: 9,
      name: "Data Visualization with Python and R",
      issuer: "Coursera, Northeastern University",
      date: "Feb 2025",
      link: "https://www.coursera.org/account/accomplishments/records/GIAYS7XO9CC8",
      tags: ["Python", "R", "Visualization"]
    },
    {
      id: 10,
      name: "Python Data Visualization",
      issuer: "Coursera, Rice University",
      date: "Feb 2025",
      link: "https://www.coursera.org/account/accomplishments/records/HM3WUFDFKVV1",
      tags: ["Python", "Visualization"]
    },
    {
      id: 11,
      name: "Quantum Computing Introduction",
      issuer: "Coursera, Fractal",
      date: "Feb 2025",
      link: "https://www.coursera.org/account/accomplishments/records/74P9CVZULTNX",
      tags: ["Quantum Computing"]
    },
    {
      id: 12,
      name: "Space Science and Technology Awareness Training (START-2025)",
      issuer: "ISRO",
      date: "Feb 2025",
      link: "https://drive.google.com/file/d/1ZwQbBq7qhXkHGaWEek8gWy2YmPa3Lfqo/view?usp=drive_link",
      tags: ["Space", "ISRO"]
    },
    {
      id: 13,
      name: "Awareness on NSIC Activities and Schemes",
      issuer: "NSIC Technical Service Center",
      date: "Jan 2025",
      link: "https://drive.google.com/file/d/1YVMWt5iTtyEhf6I_BMy2cBVOrQO6AtFW/view?usp=sharing",
      tags: ["Awareness"]
    },
    {
      id: 14,
      name: "Geo Data Sharing and Cybersecurity",
      issuer: "ISRO, IIRS",
      date: "Jan 2025",
      link: "https://drive.google.com/file/d/16BIUrhf8-Cf8Ezoh3g7VaJU6i7IWhC0v/view?usp=sharing",
      tags: ["Cybersecurity", "Geo Data"]
    },
    {
      id: 15,
      name: "Introduction to Sustainability",
      issuer: "Coursera, University of Illinois Urbana–Champaign",
      date: "Jan 2025",
      link: "https://www.coursera.org/account/accomplishments/records/4ZKAYLASMHM1",
      tags: ["Sustainability"]
    },
    {
      id: 16,
      name: "Overview of Data Visualization",
      issuer: "Coursera",
      date: "Jan 2025",
      link: "https://www.coursera.org/account/accomplishments/records/T6V0VXSF0PSD",
      tags: ["Data Visualization"]
    },
    {
      id: 17,
      name: "Workshop on the Application of Space Technology",
      issuer: "ISRO, IIRS",
      date: "Jan 2025",
      link: "https://drive.google.com/file/d/1cQ1-bRYYH8piSGLm823tUVLkcFw1IST3/view?usp=sharing",
      tags: ["Space", "Workshop"]
    },
    {
      id: 18,
      name: "Air Pollution: Implications Monitoring and Modelling",
      issuer: "ISRO, IIRS",
      date: "Dec 2024",
      link: "https://drive.google.com/file/d/1hnHkuPjHOkfS33nDYflSbF2qq2fDUdDg/view?usp=sharing",
      tags: ["Air Pollution", "ISRO"]
    },
    {
      id: 19,
      name: "Basics of Remote Sensing and GIS and GNSS",
      issuer: "ISRO, IIRS",
      date: "Dec 2024",
      link: "https://drive.google.com/file/d/1xSJq6GjnOMrv_zKscXz5EZzvmXwzDohQ/view?usp=sharing",
      tags: ["Remote Sensing", "GIS", "GNSS"]
    },
    {
      id: 20,
      name: "Overview of Geo Computation and Geo Web Application",
      issuer: "ISRO, IIRS",
      date: "Dec 2024",
      link: "https://drive.google.com/file/d/1rpL22EDj8HT10qNOQ1k7ptBipzkWMdVx/view?usp=sharing",
      tags: ["Geo Computation", "Web Application"]
    },
    {
      id: 21,
      name: "Overview of Geographical Information System",
      issuer: "ISRO, IIRS",
      date: "Dec 2024",
      link: "https://drive.google.com/file/d/19rOZ5zoTJjlYfK565iB3XFrTAdkDDdgy/view?usp=sharing",
      tags: ["GIS"]
    },
    {
      id: 22,
      name: "RS and GIS Application in Natural Resource Management",
      issuer: "ISRO, IIRS",
      date: "Dec 2024",
      link: "https://drive.google.com/file/d/1aHqkNMAA7b4Gwpwotbd4At6LybLpFqtZ/view?usp=sharing",
      tags: ["Remote Sensing", "GIS", "Natural Resources"]
    },
    {
      id: 23,
      name: "Workshop on Deep Learning in Ecological Studies",
      issuer: "ISRO, IIRS",
      date: "Dec 2024",
      link: "https://drive.google.com/file/d/1hPTR644vjrp5T-ugNlWROTMeCCfvYTHm/view?usp=sharing",
      tags: ["Deep Learning", "Ecology"]
    },
{
      id: 24,
      name: "Mastering Data Structures Using C and C++",
      issuer: "Udemy",
      date: "Nov 2024",
      link: "",
      tags: ["C++", "Data Structures"]
    },
    {
      id: 25,
      name: "Workshop on Space Based Inputs for Village Level Assessment",
      issuer: "ISRO, IIRS",
      date: "Nov 2024",
      link: "https://drive.google.com/file/d/1xh5hmyNJydisT7tPKMIe-yFl5rNxafAg/view?usp=drive_link",
      tags: ["Remote Sensing", "Village Assessment"]
    },
 {
      id: 26,
      name: "Introduction to Python",
      issuer: "Infosys Springboard",
      date: "Oct 2024",
      link: "https://drive.google.com/file/d/1Lkfq1ssEUpl6dOYmNXpzgdXGRO6iJVo_/view?usp=drive_link",
      tags: ["Python"]
    },
    {
      id: 27,
      name: "Mastering Python",
      issuer: "Infosys Springboard",
      date: "Oct 2024",
      link: "https://drive.google.com/file/d/1ytGbDBfWTiqNlYx4tVaFGW-AM5f1wYfZ/view?usp=sharing",
      tags: ["Python"]
    },
    {
      id: 28,
      name: "Overview of Global Navigation System",
      issuer: "ISRO, IIRS",
      date: "Oct 2024",
      link: "https://drive.google.com/file/d/1bw9Z7hGdMuQkgXBKGKPhUgR1vNT5Mk_U/view?usp=drive_link",
      tags: ["GNSS"]
    },
    {
      id: 29,
      name: "The Absolute Beginners Guide to Cybersecurity Part 2",
      issuer: "Udemy",
      date: "Oct 2024",
      link: "https://drive.google.com/file/d/1bnqvXjJxu3K_zVXpZf18WbqyIgZQbM_-/view?usp=sharing",
      tags: ["Cybersecurity"]
    },
    {
      id: 30,
      name: "Java Basic",
      issuer: "HackerRank",
      date: "Sep 2024",
      link: "https://drive.google.com/file/d/1F9wfrCBvPK-lMCLyVPbOFLCV-jxd2oxX/view?usp=sharing",
      tags: ["Java"]
    },
{
  id: 31,
  name: "AI For Everyone Specialization",
  issuer: "IBM, Coursera",
  date: "Aug 2024",
  link: "https://www.coursera.org/account/accomplishments/specialization/3ZFB9N4SGDX1",
  tags: ["AI", "IBM"]
},
{
  id: 32,
  name: "Data Analysis with Python",
  issuer: "IBM, Coursera",
  date: "Aug 2024",
  link: "https://www.coursera.org/account/accomplishments/records/P6LYTOID7NAF",
  tags: ["Python", "Data Analysis"]
},
{
  id: 33,
  name: "Gender Equality",
  issuer: "University of Western Australia, Coursera",
  date: "Aug 2024",
  link: "https://www.coursera.org/account/accomplishments/records/J3QW4BQZH4Z4",
  tags: ["Social", "Equality"]
},
{
  id: 34,
  name: "Gender and Sexuality: Diversity and Inclusion in the Workplace",
  issuer: "University of Pittsburgh, Coursera",
  date: "Aug 2024",
  link: "https://www.coursera.org/account/accomplishments/records/HNDRA9Z9SFY9",
  tags: ["Diversity", "Inclusion"]
},
{
  id: 35,
  name: "Generative AI: Prompt Engineering Basics",
  issuer: "IBM, Coursera",
  date: "Aug 2024",
  link: "https://www.coursera.org/account/accomplishments/records/Q3FEA93EFCKN",
  tags: ["AI", "Prompt Engineering"]
},
{
  id: 36,
  name: "Python for Data Analysis: Pandas and NumPy",
  issuer: "Coursera",
  date: "Aug 2024",
  link: "https://www.coursera.org/account/accomplishments/records/0NQWBJC9VVM8",
  tags: ["Python", "Pandas", "NumPy"]
},
{
  id: 37,
  name: "Career Essentials in Generative AI",
  issuer: "Microsoft, LinkedIn",
  date: "Jun 2024",
  link: "https://www.linkedin.com/learning/certificates/17b1bc60b3e424058eb04bec485f6c3a573e3cdd526e5274099134eef9a44bb6",
  tags: ["Generative AI"]
},
{
  id: 38,
  name: "Generative AI: The Evolution of Thoughtful Online Search",
  issuer: "LinkedIn",
  date: "Jun 2024",
  link: "https://www.linkedin.com/learning/certificates/1cbebfbf5a94f1764c2c2d6a98b119f5694f3ba408575e01fef5a30be680b9e3",
  tags: ["Generative AI"]
},
{
  id: 39,
  name: "Learning Microsoft 365 Copilot",
  issuer: "LinkedIn",
  date: "Jun 2024",
  link: "https://www.linkedin.com/learning/certificates/ae0d5704f763e4b8048a6fa78e7d7f9796d4f272c7fcb8700fbce6b8d5e9780a",
  tags: ["Microsoft", "Productivity"]
},
{
  id: 40,
  name: "Streamlining Your Work with Microsoft Copilot",
  issuer: "LinkedIn",
  date: "Jun 2024",
  link: "https://www.linkedin.com/learning/certificates/ccf7ee7a8d8591f8d69e6f3256eadce068bb59c9494f21c1bad28ffdbb3eb8c4",
  tags: ["Microsoft", "Productivity"]
},
{
  id: 41,
  name: "Google Introduction to Generative AI",
  issuer: "Coursera",
  date: "May 2024",
  link: "https://www.coursera.org/account/accomplishments/records/X5BENGQ2QWBR",
  tags: ["Generative AI", "Google"]
},
{
  id: 42,
  name: "Problem Solving Basics",
  issuer: "HackerRank",
  date: "May 2024",
  link: "https://www.hackerrank.com/certificates/iframe/5412a2a8ad7e",
  tags: ["Problem Solving"]
},
{
  id: 43,
  name: "Quantum Mechanics",
  issuer: "University of Colorado Boulder, Coursera",
  date: "May 2024",
  link: "https://www.coursera.org/account/accomplishments/records/ZC8HNJ2SUV32",
  tags: ["Quantum Mechanics"]
},
{
  id: 44,
  name: "The Absolute Beginners Guide to Cybersecurity Part 1",
  issuer: "Udemy",
  date: "May 2024",
  link: "https://drive.google.com/file/d/PLACEHOLDER", // please provide if you have it
  tags: ["Cybersecurity"]
},
{
  id: 45,
  name: "Computer Networking",
  issuer: "Illinois Institute of Technology, Coursera",
  date: "Apr 2024",
  link: "https://www.coursera.org/account/accomplishments/records/JYKG5MAD2REN",
  tags: ["Networking"]
},
{
  id: 46,
  name: "Game Development Workshop",
  issuer: "St. Peters Engineering College",
  date: "Apr 2024",
  link: "https://drive.google.com/file/d/1P86FbRJqlS9SdxRuXBm4NAaQhfZCf0eR/view?usp=sharing",
  tags: ["Game Development"]
},
{
  id: 47,
  name: "Google Crash Course on Python",
  issuer: "Google, Coursera",
  date: "Apr 2024",
  link: "https://www.coursera.org/account/accomplishments/records/8MWBY55LDBU4",
  tags: ["Python"]
},
{
  id: 48,
  name: "Cloud Computing Basics",
  issuer: "LearnQuest, Coursera",
  date: "Mar 2024",
  link: "https://www.coursera.org/account/accomplishments/records/4NP3YAJEKFAC",
  tags: ["Cloud Computing"]
},
{
  id: 49,
  name: "Introduction to Large Language Models",
  issuer: "Google, Coursera",
  date: "Mar 2024",
  link: "https://www.coursera.org/account/accomplishments/records/CFWVAQMJWXWD",
  tags: ["LLMs", "AI"]
},
{
  id: 50,
  name: "C Programming Language",
  issuer: "St. Peters Engineering College",
  date: "Feb 2024",
  link: "https://drive.google.com/file/d/1YsOYh3dwuQ9xCD5kKfw9A59lUyPbF9iU/view?usp=sharing",
  tags: ["C Programming"]
},
{
  id: 51,
  name: "Machine Learning for All",
  issuer: "University of London, Coursera",
  date: "Feb 2024",
  link: "https://www.coursera.org/account/accomplishments/records/VQZQEAPTMVD5",
  tags: ["Machine Learning"]
},
{
  id: 52,
  name: "Nanotechnology and Nanosensors",
  issuer: "United Latino Students Association, Coursera",
  date: "Jan 2024",
  link: "https://www.coursera.org/account/accomplishments/records/UQZX4NUPF43E",
  tags: ["Nanotechnology"]
},
{
  id: 53,
  name: "Meta Foundation of AR",
  issuer: "Meta, Coursera",
  date: "Jan 2024",
  link: "https://www.coursera.org/account/accomplishments/records/NPUDA7ULEJ5Q",
  tags: ["AR", "Meta"]
},
{
  id: 54,
  name: "Introduction to Java",
  issuer: "Coursera",
  date: "Jan 2024",
  link: "https://www.coursera.org/account/accomplishments/records/5LAFCX7BS9LY",
  tags: ["Java"]
},
{
  id: 55,
  name: "Introduction to Artificial Intelligence",
  issuer: "IBM, Coursera",
  date: "Jan 2024",
  link: "https://www.coursera.org/account/accomplishments/records/Q9BVW8JSGG3Q",
  tags: ["AI", "IBM"]
},
{
  id: 56,
  name: "Google Foundation of Cybersecurity",
  issuer: "Google, Coursera",
  date: "Jan 2024",
  link: "https://www.coursera.org/account/accomplishments/records/UY9S3QW63D5L",
  tags: ["Cybersecurity"]
},
{
  id: 57,
  name: "C++ for C Programmers",
  issuer: "University of California, Santa Cruz, Coursera",
  date: "Jan 2024",
  link: "https://www.coursera.org/account/accomplishments/records/DE4MPT7XS8MX",
  tags: ["C++"]
},
{
  id: 58,
  name: "C for Everyone: Structured Programming",
  issuer: "University of California, Santa Cruz, Coursera",
  date: "Jan 2024",
  link: "https://www.coursera.org/account/accomplishments/records/2ATQ36D9NS5H",
  tags: ["C Programming"]
}
  ]
  const competitions = [
  {
    id: 1,
    name: "Code for Change AI Hackathon",
    issuer: "DevPost",
    date: "Jun 2025",
    description: "Certificate of Participation – 2025 Code for Change AI Hackathon",
    link: "https://drive.google.com/file/d/1oaYpsDCHs81ULGf_MO6ikfNyv3QfiSSj",
    tags: ["Hackathon", "AI"]
  },
  {
    id: 2,
    name: "Essay Writing Competition",
    issuer: "SPEC-NSS",
    date: "Jun 2025",
    description: "Certificate of Participation – Essay Writing Competition",
    link: "https://drive.google.com/file/d/1ynLFajJqht3JWFu3WSfDhCSEluWtrB1F/view?usp=drive_link",
    tags: ["Essay", "Writing"]
  },
  {
    id: 3,
    name: "Hackatopia 2025",
    issuer: "DevPost, Certopus",
    date: "Apr 2025",
    description: "Hackatopia Hackathon Participation",
    link: "https://certopus.com/c/80550047e1c34a399ec73281a01b7749",
    tags: ["Hackathon"]
  },
  {
    id: 4,
    name: "Green Pioneers Hackathon",
    issuer: "DevPost",
    date: "Mar 2025",
    description: "Participation in Green Pioneer’s Hackathon",
    link: "https://drive.google.com/file/d/1zz4ieoFO7WlIjj7fBy8Ii60C-NaKQE_Z/view?usp=drive_link",
    tags: ["Hackathon"]
  },
  {
    id: 5,
    name: "The AI Hack Day",
    issuer: "St. Peter’s Engineering College",
    date: "Jan 2025",
    description: "Visionaries – The AI Hack Day Participation",
    link: "https://drive.google.com/file/d/1FxQhnQixENFgvDbGFkQdcuaefMI3WBZq/view?usp=drive_link",
    tags: ["Hackathon", "AI"]
  },
  {
    id: 6,
    name: "2nd Prize – Poster Presentation",
    issuer: "SpecFiesta 2024",
    date: "Feb 2024",
    description: "Awarded 2nd Prize in Poster Presentation",
    link: "https://drive.google.com/file/d/1Z5cV1RV3S8p3hGZOyqrpJtJVX0l7fbYL/view?usp=drive_link",
    tags: ["Poster", "Award"]
  },
  {
    id: 7,
    name: "Poster Presentation – First Prize",
    issuer: "SpecFiesta 2024",
    date: "Feb 2024",
    description: "Awarded First Prize in Poster Presentation",
    link: "https://drive.google.com/file/d/1YtXiZtL8HH9qBWSoxAryOnOgk6CepZz5/view?usp=sharing",
    tags: ["Poster", "Award"]
  },
  {
    id: 8,
    name: "Poster Presentation Participation",
    issuer: "SpecFiesta 2024",
    date: "Feb 2024",
    description: "Certificate of Participation – Poster Presentation",
    link: "https://drive.google.com/file/d/1YPRPC0oPIPcy8BGdWho552hMNivzLH-W/view?usp=sharing",
    tags: ["Poster"]
  },
  {
    id: 9,
    name: "Paper Presentation",
    issuer: "SpecFiesta 2024",
    date: "Feb 2024",
    description: "Paper Presentation Participation",
    link: "https://drive.google.com/file/d/1YpLgxyR1Kau6QvWS8X0DB4UOeaeCQioY/view?usp=sharing",
    tags: ["Presentation"]
  },
  {
    id: 10,
    name: "Brand Aid",
    issuer: "SpecFiesta 2024",
    date: "Feb 2024",
    description: "Participation in Brand Aid Competition",
    link: "https://drive.google.com/file/d/1YKJjZ1MW1NCzO9KHX-uLGV1gVZSZRZUU/view?usp=sharing",
    tags: ["Branding"]
  },
  {
    id: 11,
    name: "Code Debugging",
    issuer: "SpecFiesta 2024",
    date: "Feb 2024",
    description: "Participation in Code Debugging Event",
    link: "https://drive.google.com/file/d/1YEj-sXHH8Su0L1qcWX62eGOl4taE8ebp/view?usp=sharing",
    tags: ["Debugging"]
  },
  {
    id: 12,
    name: "Mindmaze",
    issuer: "SpecFiesta 2024",
    date: "Feb 2024",
    description: "Participation in Mindmaze Quiz",
    link: "https://drive.google.com/file/d/1YhdLVHtgMA4YL_WiC5iW_DiV-2-PZi0x/view?usp=sharing",
    tags: ["Quiz"]
  },
  {
    id: 13,
    name: "National Mathematics Day",
    issuer: "Adikavi Nannaya University (AKNU)",
    date: "Dec 2023",
    description: "Participation in National Mathematics Day",
    link: "https://drive.google.com/file/d/1YxQBU7bJoq5sVHy0xNXD2HbMBIIFJcG6/view?usp=drive_link",
    tags: ["Mathematics"]
  },
  {
    id: 14,
    name: "Idea Generation Competition",
    issuer: "St. Peter’s Engineering College",
    date: "Nov 2023",
    description: "Participation in Idea Generation Competition",
    link: "https://drive.google.com/file/d/1YQ1QOnC7Vqee93SpfOtc0inFGuuRJfKx/view?usp=sharing",
    tags: ["Innovation"]
  },
  {
    id: 15,
    name: "Project Expo",
    issuer: "St. Peter’s Engineering College",
    date: "Nov 2023",
    description: "Participation in Project Expo",
    link: "https://drive.google.com/file/d/1YlqoVSFZ5i4CrT-rrXGe6FYqPY2_Pukn/view?usp=sharing",
    tags: ["Project"]
  },
  {
    id: 16,
    name: "Aquilla Painting Competition",
    issuer: "Aquilla",
    date: "2023",
    description: "1st Prize in Aquilla Painting Competition",
    link: "https://drive.google.com/file/d/1Y9sP8_8wP6Yi9UmMFUbgzXHuIMnQG5fy/view?usp=sharing",
    tags: ["Painting", "Art"]
  },
  {
    id: 17,
    name: "Essay Writing Competition",
    issuer: "CISF",
    date: "2023",
    description: "Participation in CISF Essay Writing Competition",
    link: "https://drive.google.com/file/d/1YCM4rnGpUeAYKhiCkODjl2I_nuUX2xpr/view?usp=sharing",
    tags: ["Essay"]
  },
  {
    id: 18,
    name: "ISRO Cyberspace Quiz",
    issuer: "ISRO",
    date: "Feb 2021",
    description: "Participation in Cyberspace Quiz Competition",
    link: "", // No link provided
    tags: ["ISRO", "Quiz"]
  },
  {
  
    id: 19,
    name: "Neuro Debugging | AI Infinity'25",
    issuer: "Gradient - St. Peter's Engineerig College",
    date: "Jul 2025",
    description: "Participation in Code Debugging event",
    link: "https://drive.google.com/file/d/1REXgQDC3h2qZ8OjBTkWwWJ3bpQBJLuAR/view?usp=drive_link", // No link provided
    tags: ["Code Debugging"]
  }

];


  const renderCoursesList = (data: typeof courses) => {
    const visibleData = showAll ? data : data.slice(0, 3)

    return (
      <>
        <ul className="mt-10 max-w-3xl mx-auto space-y-6">
          {visibleData.map((cert) => (
            <motion.li
              key={cert.id}
              className="border border-purple-500 rounded-xl p-4 text-white bg-[#0e0e0e] hover:bg-purple-950/40 transition-all duration-300"
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-lg font-bold mb-1 text-purple-100">{cert.name}</h4>
                  <p className="text-sm text-purple-300">{cert.issuer}</p>
                  <p className="text-xs text-purple-400 mt-1">{cert.date}</p>
                </div>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm border border-purple-500 text-purple-300 rounded px-3 py-1 hover:bg-purple-800 flex items-center gap-1"
                >
                  <ExternalLink className="w-4 h-4" /> View Certificate
                </a>
              </div>
            </motion.li>
          ))}
        </ul>
        {data.length > 3 && (
          <div className="mt-8 text-center">
            <Button
              variant="outline"
              className="border-purple-500 text-purple-300"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Hide" : "Show More Certifications"}
            </Button>
          </div>
        )}
      </>
    )
  }

  const renderCompetitionCards = (data: typeof competitions) => {
    return (
      <motion.div
        className="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {data.map((cert) => (
          <motion.div
            key={cert.id}
            className="border border-purple-500 rounded-xl bg-[#0e0e0e] text-white shadow-md p-5 hover:bg-purple-950/40 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="flex items-center justify-between mb-2">
              <Badge className="bg-purple-700 text-white">📌</Badge>
              <div className="flex items-center gap-1 text-purple-300">
                <Trophy className="w-4 h-4" />
                <span className="text-sm font-medium">{cert.date}</span>
              </div>
            </div>
            <h4 className="text-lg font-bold leading-snug mb-1 text-purple-100">{cert.name}</h4>
            <p className="text-sm text-purple-200 mb-2">{cert.issuer}</p>
            <p className="text-sm mb-3 text-purple-100">{cert.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {cert.tags?.map((tag, i) => (
                <span key={i} className="bg-purple-700 text-white px-2 py-1 rounded-full text-xs">
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-4 py-2 text-sm font-medium border border-purple-500 text-purple-300 rounded hover:bg-purple-800"
            >
              🔗 View Certificate
            </a>
          </motion.div>
        ))}
      </motion.div>
    )
  }

  return (
    <section id="certifications" className="py-20 md:py-28 bg-black">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent relative inline-block">
              Certifications
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600"></div>
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              {courses.length + competitions.length} Total Certifications
            </p>
          </div>

          <div className="flex space-x-4 mt-6">
            <Button
              onClick={() => { setActiveTab("courses"); setShowAll(false); }}
              variant={activeTab === "courses" ? "default" : "outline"}
              className="flex items-center gap-2"
            >
              📘 Course Certifications
            </Button>
            <Button
              onClick={() => { setActiveTab("competitions"); setShowAll(false); }}
              variant={activeTab === "competitions" ? "default" : "outline"}
              className="flex items-center gap-2"
            >
              🏆 Competition Participation
            </Button>
            
          </div>
        </motion.div>

        {activeTab === "courses" ? renderCoursesList(courses) : renderCompetitionCards(competitions)}
      </div>
    </section>
  )
}