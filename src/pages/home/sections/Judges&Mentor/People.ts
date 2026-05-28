export type PersonType = "Judge" | "Mentor";

export interface Person {
    id: string;
    name: string;
    role: string;
    company: string;
    type: PersonType;
    photoId: string;
}


export const people: Person[] = [
    {
        id: "souradip-pal",
        name: "Souradip Pal",
        role: "AI Engineer",
        company: "CannerAI",
        type: "Mentor",
        photoId: "Souradip Pal.webp",
    },
    {
        id: "jayita-bhattacharyya",
        name: "Jayita Bhattacharyya",
        role: "AI Engineer",
        company: "Domyn",
        type: "Judge",
        photoId: "Jayita Bhattacharyya.webp",
    },
    {
        id: "krishnendu-dasgupta",
        name: "Krishnendu Dasgupta",
        role: "Ex-R&D Intern",
        company: "Samsung",
        type: "Mentor",
        photoId: "Krishnendu Dasgupta.webp",
    },
    {
        id: "sulagna-ghosh",
        name: "Sulagna Ghosh",
        role: "Solution Engineer",
        company: "Creowis",
        type: "Judge",
        photoId: "Sulagna Ghosh.webp",
    },
    {
        id: "ankan-dalui",
        name: "Ankan Dalui",
        role: "SWE",
        company: "Orblinn",
        type: "Mentor",
        photoId: "ANKAN DALUI.webp",
    },
    {
        id: "indrajit-ari",
        name: "Indrajit Ari",
        role: "Building",
        company: "Mantitup",
        type: "Mentor",
        photoId: "Indrajit Ari.webp",
    },
    {
        id: "debanjan-mondal",
        name: "Debanjan Mondal",
        role: "Developer Relations Engineer",
        company: "RiseIn",
        type: "Mentor",
        photoId: "Debanjan Mondal.webp",
    },
    {
        id: "subham-bhattacharya",
        name: "Subham Bhattacharya",
        role: "SWE",
        company: "ABP",
        type: "Judge",
        photoId: "Subham Bhattacharya.webp",
    },
    {
        id: "aditya-ghosh",
        name: "Aditya Ghosh",
        role: "Kolkata Lead",
        company: "OSEN",
        type: "Mentor",
        photoId: "Aditya Ghosh.webp",
    },
    {
        id: "narendra-nath-chatterjee",
        name: "Narendra Nath Chatterjee",
        role: "Senior Android Engineer",
        company: "Ajaib Indonesia",
        type: "Judge",
        photoId: "Narendra nath Chatterjee.webp",
    },
    {
        id: "sumanta-mukhopadhyay",
        name: "Sumanta Mukhopadhyay",
        role: "AVP of Technology",
        company: "Finarb",
        type: "Judge",
        photoId: "Sumanta Mukhopadhyay.webp",
    },
    {
        id: "soham-banerjee",
        name: "Soham Banerjee",
        role: "SDE",
        company: "Redhold",
        type: "Judge",
        photoId: "Soham Banerjee.webp",
    },
    {
        id: "raihan-khan",
        name: "Raihan Khan",
        role: "Founding AI Eng.",
        company: "WYZR, UK",
        type: "Judge",
        photoId: "Raihan Khan.webp",
    }, 
    {
        id: "arindam-majumder",
        name: "Arindam Majumder",
        role: "CO-Founder",
        company: "Studio1",
        type: "Judge",
        photoId: "Arindam Majumder.webp",
    },   
    {
        id: "sagnik-pramanik",
        name: "Sagnik Pramanik",
        role: "FDE",
        company: "sync. labs(YCW24)",
        type: "Mentor",
        photoId: "Sagnik Pramanik.webp",
    },
    {
        id: "tarak-nath-paul",
        name: "Tarak Nath Paul",
        role: "Designer",
        company: "Studio Cacti",
        type: "Mentor",
        photoId: "Tarak Nath Paul.webp",
    },
    {
        id: "jhinuk-roy",
        name: "Jhinuk Roy",
        role: "SDE Intern",
        company: "ABP",
        type: "Mentor",
        photoId: "Jhinuk Roy.webp",
    },
    {
        id: "aniket-chakraborty",
        name: "Aniket Chakraborty",
        role: "Founder",
        company: "PujoPlanner",
        type: "Mentor",
        photoId: "Aniket Chakraborty.webp",
    },
    {
        id: "sukrit-deb",
        name: "Sukrit Deb",
        role: "Intern",
        company: "Core P",
        type: "Mentor",
        photoId: "Sukrit Deb.webp",
    },
];

export const judges = people.filter((p) => p.type === "Judge");
export const mentors = people.filter((p) => p.type === "Mentor");