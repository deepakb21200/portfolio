import Lottie from "lottie-react";

const AnimationLottie = ({ animationPath, width }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
      style: {
 
        // height:"100%",
        
        
        
   
        
        
       
       
        

      },
      className:"deepak"
    
  };

  return (
    <Lottie {...defaultOptions} />
  );
};

export default AnimationLottie;







 
