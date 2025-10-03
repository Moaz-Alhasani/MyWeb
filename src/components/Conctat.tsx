import React from 'react'

function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event:any) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "fa3ae908-f6da-4090-b186-67177fd17c4a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='relative min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 overflow-hidden' id='Contact'>
      {/* خلفية متحركة */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className='relative container mx-auto px-6 md:px-12 lg:px-24 py-20'>
        {/* العنوان الرئيسي */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              CONTACT
            </span>
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to make a move? <span className="font-semibold text-blue-600 dark:text-blue-400">Let's Build Your Future Together</span>
          </p>
        </div>

        {/* نموذج الاتصال */}
        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-3xl p-8 border border-white/30 dark:border-gray-700/30 shadow-2xl">
              <form className='space-y-6' onSubmit={onSubmit}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div className='space-y-2'>
                    <label className='block text-sm font-semibold text-gray-700 dark:text-gray-300'>
                      Your Name
                    </label>
                    <input 
                      className='w-full border border-gray-300 dark:border-gray-600 rounded-2xl py-4 px-6 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300' 
                      type="text" 
                      name='name' 
                      placeholder='Your Name' 
                      required 
                    />
                  </div>
                  <div className='space-y-2'>
                    <label className='block text-sm font-semibold text-gray-700 dark:text-gray-300'>
                      Your Email
                    </label>
                    <input 
                      className='w-full border border-gray-300 dark:border-gray-600 rounded-2xl py-4 px-6 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300' 
                      type="email" 
                      name='email' 
                      placeholder='Your Email' 
                      required 
                    />
                  </div>
                </div>
                
                <div className='space-y-2'>
                  <label className='block text-sm font-semibold text-gray-700 dark:text-gray-300'>
                    Message
                  </label>
                  <textarea 
                    className='w-full border border-gray-300 dark:border-gray-600 rounded-2xl py-4 px-6 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none' 
                    name="message" 
                    rows={6}
                    placeholder='Message' 
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className='w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white py-4 px-8 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden group'
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <span>📨</span>
                    Send Message
                    <span>✨</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                
                {result && (
                  <div className={`p-4 rounded-2xl text-center font-semibold transition-all duration-300 ${
                    result.includes("Error") || result.includes("Failed") 
                      ? 'bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-800/30' 
                      : 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800/30'
                  }`}>
                    {result}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* الأنيميشن المخصصة */}
      <style>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}

export default Contact;