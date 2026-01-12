import "./WhySection.css";
import robotWhy from "../../../../assets/robot-why.png"

const WhySection = () => {
    return (
        <div className="page">
            <div className="whySection">
                <h1 className="whyTitle">
                Why you should <br/>
                join ACM?
                </h1>
                <div className="robPic">
                    <img
                        src={robotWhy}
                        alt="Robot"
                        className="robot"
                    />
                        <div className="chatBox chat-1">
                            Is this just another student club?
                        </div>
                        <div className="chatBox chat-2">
                            What do I actually gain from joining?
                        </div>
                        <div className="chatBox chat-3">
                            Will this help me beyond exams?
                        </div>
                        <div className="chatBox chat-4">
                            Is this worth my time?
                        </div>
                </div>
            </div>
        </div>
        
    );
  };
  
  export default WhySection;
  