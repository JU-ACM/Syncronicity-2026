"use client";

import SectionHeader from "./SectionHeader";
import PeopleGrid from "./PeopleGrid";
import { judges, mentors } from "./People";

export default function JudgesMentorsSection() {
    return (
        <section className="bg-[#131313] px-6 py-16 md:px-12 lg:px-20 min-h-screen">
            {/* Google Font import — add to your _document.tsx or layout.tsx instead */}
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@400;500;600&display=swap');
        body { font-family: 'DM Sans', sans-serif; }
      `}</style>

            <div className="max-w-7xl mx-auto">
                <SectionHeader />

                <PeopleGrid
                    people={judges}
                    label="Judges"
                    accentColor="purple"
                />

                {/* Divider */}
                <div className="border-t border-white/[0.07] mb-14" />

                <PeopleGrid
                    people={mentors}
                    label="Mentors"
                    accentColor="emerald"
                />
            </div>
        </section>
    );
}