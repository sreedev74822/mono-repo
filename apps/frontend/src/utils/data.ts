import { Briefcase, Search, MapPin, User, Plus } from "lucide-react";
import { Mail, Building2 } from "lucide-react";
import {
  LayoutDashboard,
  Users,
  Settings
} from "lucide-react";

export const jobSeekersFeatures = [
  {
    icon: Briefcase,
    title: "Job Listings",
    description: "Browse thousands of job opportunities from top companies."
  },
  {
    icon: Search,
    title: "Smart Search",
    description: "Find jobs quickly using advanced filters and keywords."
  },
  {
    icon: MapPin,
    title: "Location Based",
    description: "Discover jobs near you or in your preferred location."
  },
  {
    icon: User,
    title: "Profile Management",
    description: "Create and manage your professional profile easily."
  }
];


export const employees = [
  {
    icon: User,
    title: "John Doe",
    description: "Frontend Developer"
  },
  {
    icon: Briefcase,
    title: "Jane Smith",
    description: "Backend Engineer"
  },
  {
    icon: Mail,
    title: "Michael Brown",
    description: "HR Manager"
  },
  {
    icon: Building2,
    title: "Emily Johnson",
    description: "Product Manager"
  }
];

export const navigationMenu = [
  {
    id: 'employee-dashboard',
    name: "Dashboard",
    icon: LayoutDashboard
  },
  {
    id: 'post-job',
    name: "Post job",
    icon: Plus
  },
  {
    id: 'manage-jobs',
    name: "Manange job",
    icon: Briefcase
  },
  {
    id: 'company-profile',
    name: "company profile",
    icon: Building2
  }
];

export const categories = [
  { value: "engineering", label: "Engineering" },
  { value: "design", label: "Design" },
  { value: "marketing", label: "Marketing" },
  { value: "sales", label: "Sales" },
  { value: "product", label: "Product" },
  { value: "operations", label: "Operations" },
  { value: "hr", label: "Human Resources" },
  { value: "finance", label: "Finance" },
  { value: "others", label: "Others" }
];

export const jobTypes = [
  { value: "full_time", label: "Full Time" },
  { value: "part_time", label: "Part Time" },
  { value: "contract", label: "Contract" },
  { value: "internship", label: "Internship" },
  { value: "freelance", label: "Freelance" },
  { value: "temporary", label: "Temporary" },
  { value: "remote", label: "Remote" }
];

export const salaryRanges = [
  "$0 - $30,000",
  "$30,001 - $50,000",
  "$50,001 - $70,000",
  "$70,001 - $100,000",
  "$100,001 - $150,000",
  "$150,001 - $200,000",
  "$200,001+"
];



