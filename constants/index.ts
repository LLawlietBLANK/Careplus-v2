export const GenderOptions = ["male", "female", "other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "Military ID Card",
  "National Identity Card",
  "Passport",
  "Resident Alien Card (Green Card)",
  "Social Security Card",
  "State ID Card",
  "Student ID Card",
  "Voter ID Card",
];

export const MedicalFields = [
  { name: "Psychiatry" },
  { name: "Cardiology" },
  { name: "Orthopedics" },
  { name: "Dermatology" },
  { name: "Ophthalmology" },
  { name: "Pediatrics" },
  { name: "Neurology" },
  { name: "Gastroenterology" },
  { name: "Endocrinology" },
  { name: "Gynecology and Obstetrics" },
  { name: "Pulmonology" },
  { name: "Oncology" },
  { name: "Rheumatology" },
  { name: "Urology" },
  { name: "Hematology" },
  { name: "General Surgery" },
  { name: "Anesthesiology" },
  { name: "Nephrology" },
  { name: "Radiology" },
  { name: "Emergency Medicine" },
];















export const Doctors = [
  // { image: "/assets/images/none.png",
  //   name: "None"},
  {  
    image: "/assets/images/dr-remirez.png",
    name: "Abhishek Sah",
  },
  {
    image: "/assets/images/dr-cruz.png",
    name: "Mukund Goel",
  },
  {
    image: "/assets/images/dr-lee.png",
    name: "Rohit Mittal",
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "Saksham Sharma",
  },
  {
    image: "/assets/images/dr-green.png",
    name: "Shaili Vaishnavi",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "Tanishka Singh",
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "Tanu Sharma",
  },
  {
    image: "/assets/images/dr-powell.png",
    name: "Vatsal Gupta",
  },
];

//doctors without none
export const Doctors1 = [
  {  
    image: "/assets/images/dr-remirez.png",
    name: "Abhishek Sah",
  },
  {
    image: "/assets/images/dr-cruz.png",
    name: "Mukund Goel",
  },
  {
    image: "/assets/images/dr-lee.png",
    name: "Rohit Mittal",
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "Saksham Sharma",
  },
  {
    image: "/assets/images/dr-green.png",
    name: "Shaili Vaishnavi",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "Tanishka Singh",
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "Tanu Sharma",
  },
  {
    image: "/assets/images/dr-powell.png",
    name: "Vatsal Gupta",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};
