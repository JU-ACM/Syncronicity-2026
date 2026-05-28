export interface TeamMember {
    id: number;
    name: string;
    team: string;
    photoId: string; // Google Drive file ID
}



export const teamMembers: TeamMember[] = [
    { id: 1, name: "Achhat Kumar Gupta", team: "Design", photoId: "Achhat gupta.webp" },
    { id: 2, name: "Ameera Naushin", team: "Core", photoId: "Ameera Nausin.webp" },
    { id: 3, name: "Anik Mukherjee", team: "Media", photoId: "Anik Mukherjee.webp" },
    { id: 4, name: "Ankush Sanyal", team: "Media", photoId: "Ankush Sanyal.webp" },
    { id: 5, name: "Aritra Sarkar", team: "Web Dev", photoId: "Aritra Sarkar.webp" },
    { id: 6, name: "Arnob", team: "Web Dev", photoId: "Arnob Bhakta.webp" },
    { id: 7, name: "Belal Khursheed Ahmad", team: "AI/ML", photoId: "Belal Khursheed Ahmad.webp" },
    { id: 8, name: "Binit Oraon", team: "Content & Logistics", photoId: "Binit Oraon.webp" },
    { id: 9, name: "Bitan Saha", team: "PR", photoId: "Bitan Saha.webp" },
    { id: 10, name: "Deepsayan Das", team: "Web Dev", photoId: "Deepsayan Das.webp" },
    { id: 11, name: "Dipram Biswas", team: "Web Dev", photoId: "Dipram Biswas.webp" },
    { id: 12, name: "Himadri Mandal", team: "Organizer", photoId: "Himadri Mandal.webp" },
    { id: 13, name: "Joyjeet Sen", team: "Content & PR", photoId: "Joyjeet Sen.webp" },
    { id: 14, name: "Keya Ghosh", team: "Content", photoId: "Keya Ghosh.webp" },
    { id: 15, name: "Mainakee Paul", team: "Web Dev", photoId: "Mainakee Paul.webp" },
    { id: 16, name: "Mayukh Sinha", team: "Organizer", photoId: "Mayukh Sinha.webp" },
    { id: 17, name: "Monalisa Barua", team: "Content", photoId: "Monalisa Barua.webp" },
    { id: 18, name: "Naireet Sadhukhan", team: "Web Dev", photoId: "Naireet Sadhukhan.webp" },
    { id: 19, name: "Nandini Mahto Kahar", team: "Social Media", photoId: "NANDINI.webp" },
    { id: 20, name: "Nivedita Naskar", team: "Sponsorship", photoId: "Nivedita Naskar.webp" },
    { id: 21, name: "Prathama Biswas", team: "Social Media & Marketing", photoId: "Prathama Biswas.webp" },
    { id: 22, name: "Ramsha Hayatt", team: "Host & Script", photoId: "Ramsha Hayatt.webp" },
    { id: 23, name: "Reetabrata Mandal", team: "Logistics", photoId: "Reetabrata Mandal.webp" },
    { id: 24, name: "Rishav Chowdhury", team: "Core", photoId: "Rishav Chowdhury.webp" },
    { id: 25, name: "Sanchali Saha", team: "Graphics", photoId: "Sanchali Saha.webp" },
    { id: 26, name: "Sanjib Murmu", team: "Content", photoId: "Sanjib Murmu.webp" },
    { id: 27, name: "Saptarshi Upadhyay", team: "Web Dev", photoId: "Saptarshi upadhyay.webp" },
    { id: 28, name: "Simrun Khatun", team: "Content", photoId: "Simrun Khatun.webp" },
    { id: 29, name: "Sneha Maity", team: "Content", photoId: "Sneha Maity.webp" },
    { id: 30, name: "Soumyadeep Roy Chowdhury", team: "PR & Web3", photoId: "Soumyadeep Roy Chowdhury.webp" },
    { id: 31, name: "Soumyajit Kundu", team: "Social Media & Marketing", photoId: "Soumyajit _P.webp" },
    { id: 32, name: "Soumyajit Samanta", team: "Graphics", photoId: "Soumyajit Samanta.webp" },
    { id: 33, name: "Sourav Dutta", team: "Social Media & Marketing", photoId: "Sourav Dutta.webp" },
    { id: 34, name: "Sree", team: "Design", photoId: "Sree.webp" },
    { id: 35, name: "Subha De", team: "Content & PR", photoId: "Subha De.webp" },
    { id: 36, name: "Swapnaneel Ray", team: "Core", photoId: "Swapnaneel Ray.webp" },
    { id: 37, name: "Tanish Majumdar", team: "Core", photoId: "Tanish.webp" },
    { id: 38, name: "Yasir Ahmad", team: "Sponsorship", photoId: "Yasir Ahmad.webp" },
];

export function getPhotoUrl(photoId: string): string {
    return `/coremembers/${photoId}`;
}