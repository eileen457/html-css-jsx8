const { useState, useEffect, useRef } = React;

export const OTPGenerator = () => {

   const [count, setCount] = useState(0);
   const [otp, setOtp] = useState('');

   function generateNum(min, max){
  return Math.floor(Math.random()*(max-min+1))+min;
}

function handleGenerate() {
  const newOtp = generateNum(0, 999999).toString().padStart(6, '0');
  setOtp(newOtp);
  setCount(5);
}

   useEffect(()=>{
     if (count <= 0) return;

   const timer=setInterval(()=>{
    setCount((prevseg)=>prevseg-1);
   },1000);
     return () => clearInterval(timer);
   },[count])

  return(
    <div className="container">
    <h1 id="otp-title">OTP Generator</h1> 

    <h2 id="otp-display">{otp==="" ? "Click 'Generate OTP' to get a code":otp}</h2>

      <p id="otp-timer" aria-live="polite">
        {count > 0 ? `Expires in: ${count} seconds` : otp === "" ? "" : "OTP expired. Click the button to generate a new OTP."}
      </p>

    <button id="generate-otp-button" onClick={handleGenerate} disabled={count>0}>Generate OTP</button> 
    </div>
  );
};

