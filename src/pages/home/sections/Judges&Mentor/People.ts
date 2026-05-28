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
        photoId: "1dqcUPFCxE441yzW-KtIbRqTU2G6IsOl5",
    },
    {
        id: "jayita-bhattacharyya",
        name: "Jayita Bhattacharyya",
        role: "AI Engineer",
        company: "Domyn",
        type: "Judge",
        photoId: "1pkp692c0VneQskZwYl0LN-mF-p80MRtS",
    },
    {
        id: "krishnendu-dasgupta",
        name: "Krishnendu Dasgupta",
        role: "Ex-R&D Intern",
        company: "Samsung",
        type: "Mentor",
        photoId: "1j7qQc7aTLULoPOB1gBCbr4kP115NxAwr",
    },
    {
        id: "sulagna-ghosh",
        name: "Sulagna Ghosh",
        role: "Solution Engineer",
        company: "Creowis",
        type: "Judge",
        photoId: "1hVl0YpdFP4eH_WTDtTcPesN8VEhfoP11",
    },
    {
        id: "ankan-dalui",
        name: "Ankan Dalui",
        role: "SWE",
        company: "Orblinn",
        type: "Mentor",
        photoId: "1_Dl6RzOOH3-0sTMrELELHFyUpAhPvOzl",
    },
    {
        id: "indrajit-ari",
        name: "Indrajit Ari",
        role: "Building",
        company: "Mantitup",
        type: "Mentor",
        photoId: "1GkLEKQV1zFlYmDeGHjreQIiLn47MHQcu",
    },
    {
        id: "debanjan-mondal",
        name: "Debanjan Mondal",
        role: "Developer Relations Engineer",
        company: "RiseIn",
        type: "Mentor",
        photoId: "1twVrHkf3zcHaQjbFOO3iAvTccm9M4-hj",
    },
    {
        id: "subham-bhattacharya",
        name: "Subham Bhattacharya",
        role: "SWE",
        company: "ABP",
        type: "Judge",
        photoId: "1HkDH5q5j5sE_lkkxDiHZcasmXdCfH6ML",
    },
    {
        id: "aditya-ghosh",
        name: "Aditya Ghosh",
        role: "Kolkata Lead",
        company: "OSEN",
        type: "Mentor",
        photoId: "1X24Bxh2J76R8BrsVRYSXHlpXXxko2GeU",
    },
];

export const judges = people.filter((p) => p.type === "Judge");
export const mentors = people.filter((p) => p.type === "Mentor");