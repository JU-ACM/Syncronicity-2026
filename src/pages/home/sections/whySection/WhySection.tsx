import "./WhySection.css";
import heroBg from "../../../../assets/whySection/hero-bg.png"

const WhySection = () => {
    return (
        <div className="
        w-full
     min-h-screen
     bg-no-repeat
     bg-center
     bg-cover
     overflow-x-hidden
     flex
       "
       style={{
         backgroundImage: `url(${heroBg})`,
       }}>
            <section className="w-full min-h-screen
  flex flex-col items-center justify-center
  pt-[6vh]
  max-h-[850px]:pt-[8vh]
  max-md:min-h-fit max-md:justify-start">
                <h1 className="max-w-[1100px]
  font-montserrat font-black
  text-[clamp(36px,6vw,78px)]
  leading-[1.2]
  text-center text-[rgba(16,160,204,1)]
  mt-[clamp(-120px,-12vh,-60px)]
  max-h-[850px]:mt-[3vh]
  max-md:mt-0 max-md:px-4 max-md:leading-[1.1]">
                Why you should <br/>
                join ACM?
                </h1>
                <div className="relative aspect-[3/5]
      w-[min(320px,70vw)]
      bg-[url('/src/assets/robot.png')]
      bg-cover bg-center bg-no-repeat
      mb-[10vh]
      max-md:w-[220px] max-md:mb-[1vh]
      max-h-[700px]:mb-[2vh]">
                    {/* <div
            className="
              absolute
              bottom-[-18%]
              left-1/2
              -translate-x-1/2
              w-[220%] h-[45%]
              max-md:w-[140%] max-md:h-[15%]
              rounded-full
              bg-[radial-gradient(124.34%_64.56%_at_50%_17.66%,rgba(237,252,252,0)_0%,#C4FEFF_100%)]
              blur-[24px] max-md:blur-[18px]
              opacity-80
              bg-yellow
              pointer-events-none
              mb-[1vh]
            "
          /> */}
                        <div className="absolute
        top-[calc(18%+0.5vw)] left-[calc(-50%-1vw)]
        bg-[rgba(16,160,204,1)] text-white font-euclid font-semibold
        text-[clamp(12px,1.2vw,16px)]
        max-w-[220px] px-6 py-4 leading-[1.4]
        rounded-tl-[100px] rounded-tr-[84px] rounded-bl-[100px]
        max-md:text-[11px] max-md:max-w-[110px]
        max-md:top-[15%] max-md:left-[-35%]">
                            Is this just another student club?
                        </div>
                        <div className="absolute
        top-[calc(22%+0.5vw)] right-[calc(-58%-1vw)]
        bg-[rgba(16,160,204,1)] text-white font-euclid font-semibold
        text-[clamp(12px,1.2vw,16px)]
        max-w-[220px] px-6 py-4 leading-[1.4]
        rounded-tl-[84px] rounded-tr-[100px] rounded-br-[100px]
        max-md:text-[11px] max-md:max-w-[110px]
        max-md:top-[22%] max-md:right-[-38%]">
                            What do I actually gain from joining?
                        </div>
                        <div className="absolute
        top-[calc(55%+0.3vw)] left-[calc(-50%-0.8vw)]
        bg-[rgba(16,160,204,1)] text-white font-euclid font-semibold
        text-[clamp(12px,1.2vw,16px)]
        max-w-[220px] px-6 py-4 leading-[1.4]
        rounded-tl-[100px] rounded-bl-[100px] rounded-br-[84px]
        max-md:text-[11px] max-md:max-w-[110px]
        max-md:top-[55%] max-md:left-[-35%]">
                            Will this help me beyond exams?
                        </div>
                        <div className="absolute
        top-[calc(60%+0.3vw)] right-[calc(-45%-0.8vw)]
        bg-[rgba(16,160,204,1)] text-white font-euclid font-semibold
        text-[clamp(12px,1.2vw,16px)]
        max-w-[220px] px-6 py-4 leading-[1.4]
        rounded-tr-[100px] rounded-bl-[84px] rounded-br-[100px]
        max-md:text-[11px] max-md:max-w-[110px]
        max-md:top-[62%] max-md:right-[-36%]">
                            Is this worth my time?
                        </div>
                </div>
                <p className="max-w-[800px]
      font-euclid text-black text-[20px] leading-[1.2]
      flex items-center justify-center
      mt-[clamp(-110px,-12vh,-50px)]
      max-md:max-w-[80vw] max-md:text-[16px]
      max-md:mt-2 max-md:text-center">
                There are many reasons to join ACM. Enhance your professional career or academic life with ACM member benefits that include a free subscription to ACM’s flagship publication Communications of the ACM; online books, courses, videos, and webinars through the ACM Learning Center; opportunities to participate in Special Interest Groups, and conferences all over the world; optional discounted subscription to the ACM Digital Library; savings on peer-driven specialty magazines and research journals, plus other exclusive member discounts.
                </p>

            </section>
        </div>
        
    );
  };
  
  export default WhySection;
  