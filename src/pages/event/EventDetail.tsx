import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import herobg from '../../assets/dashboard/hero-bg.png';

const EventDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    return (
        <div
            className="min-h-screen w-full flex flex-col items-center justify-center relative bg-no-repeat bg-center bg-cover"
            style={{ backgroundImage: `url(${herobg})` }}
        >
            {/* Noise grain */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
                    backgroundRepeat: 'repeat',
                    zIndex: 1,
                    opacity: 0.35,
                }}
            />

            {/* Ambient glow */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, rgba(16,160,204,0.15) 0%, transparent 70%)',
                    filter: 'blur(80px)',
                    zIndex: 0,
                }}
            />

            <div className="relative z-10 flex flex-col items-center text-center px-6">
                <p className="text-[#10a0cc] text-[12px] font-bold uppercase tracking-[0.4em] mb-4 animate-pulse">
                    Event ID: {id}
                </p>

                <h1
                    className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 text-[#10a0cc]"
                    style={{ fontFamily: 'Unbounded, sans-serif' }}
                >
                    COMING <span style={{ WebkitTextStroke: '1.5px #10a0cc', color: 'transparent' }}>SOON</span>
                </h1>

                <p className="text-[#10a0cc] text-sm md:text-base max-w-md leading-relaxed mb-10 ">
                    We're fine-tuning the details for this event. Check back soon for the full schedule, speakers, and registration info!
                </p>

                <button
                    onClick={() => navigate('/home')}
                    className="group relative px-8 py-3 overflow-hidden rounded-full bg-[#10a0cc] border border-[#10a0cc]/50 transition-all hover:border-[#10a0cc]/50"
                >
                    <span className="relative z-10 text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                        <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                        </svg>
                        Back to Home
                    </span>
                    <div className="absolute inset-0 bg-linear-to-r from-[#10a0cc]/0 via-[#10a0cc]/10 to-[#10a0cc]/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </button>
            </div>

            {/* Aesthetic bottom decoration */}
            <div
                className="absolute bottom-10 left-10 right-10 h-px opacity-20"
                style={{ background: 'linear-gradient(90deg, transparent, #10a0cc, transparent)' }}
            />
        </div>
    );
};

export default EventDetail;
