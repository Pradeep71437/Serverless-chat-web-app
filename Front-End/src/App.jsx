import React, { useState, useEffect } from "react";
import { auth, provider } from "./Firebase/firebase-config";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import './index.css';
import profile from './assets/pradeep.jpeg';
import profile2 from './assets/manthraa.jpg';

const App = () => {
   const [user, setUser] = useState(null);

   // Listen for authentication state changes
   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         if (currentUser) {
            setUser(currentUser);
         } else {
            setUser(null);
         }
      });

      // Cleanup the listener on component unmount
      return () => unsubscribe();
   }, []);

   // Sign in with Google
   const handleGoogleSignIn = async () => {
      try {
         const result = await signInWithPopup(auth, provider);
         setUser(result.user);
         console.log("User Info:", result.user);
      } catch (error) {
         if (error.code === "auth/popup-closed-by-user") {
            console.log("Sign-in canceled by user.");
         } else {
            console.error("Error during sign-in:", error.message);
         }
      }
   };

   // Sign out
   const handleSignOut = async () => {
      try {
         await signOut(auth);
         setUser(null);
      } catch (error) {
         console.error("Error during sign-out:", error);
      }
   };

   return (
      <>
         {!user ? (
            <button onClick={handleGoogleSignIn}>Sign in with Google</button>
         ) : (
            <div className='flex'>
               <div className='lg:w-3/12'>
                  <div className='mb-10 flex justify-between items-center'>
                     <h1 className='text-[35px] hidden lg:flex text-black font-bold p-7'>Chats</h1>
                     <div>
                        <button onClick={handleSignOut} className="mr-10 px-4 py-2 rounded-lg bg-red-600 text-white">
                           Sign Out
                        </button>
                     </div>
                  </div>
                  <div className='px-3'>
                     <div className='bg-gray-300 shadow-sm mb-3 p-2 lg:p-4 relative rounded-xl cursor-pointer flex'>
                        <div className="rounded-full border-1 border-black relative w-10 h-10 lg:w-14 lg:h-14 overflow-hidden">
                           <img src={profile} alt="" className="w-full h-full object-cover" />
                        </div>
                        <p className='font-medium text-[20px] absolute top-7 left-[80px] hidden lg:flex'>
                           {user.displayName}
                        </p>
                     </div>
                     {/* Add more user UI here */}
                  </div>
               </div>
               <div className="flex-1 p:2 lg:w-9/12 border-l-2 sm:p-6 justify-between flex flex-col h-screen">
   <div className="flex sm:items-center justify-between py-3 border-b-2 border-gray-200">
      <div className="relative flex items-center space-x-4">
         <div className="relative">
            <span className="absolute text-green-500 z-10 right-0 bottom-0">
               <svg width="20" height="20">
                  <circle cx="8" cy="8" r="8" fill="currentColor"></circle>
               </svg>
            </span>
            <div className="rounded-full border-2 border-black relative w-14 h-14 mx-4 lg:w-16 lg:h-16 overflow-hidden">
    <img src={profile} alt="" className="w-full h-full object-cover" />
</div>

         {/* <img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="" className="w-10 sm:w-16 h-10 sm:h-16 rounded-full"/> */}
        
         </div>
         <div className="flex flex-col  leading-tight">
            <div className="text-2xl mt-1 flex items-center">
               <span className="text-gray-700 mr-3">Pradeep</span>
            </div>
            <span className="text-lg text-gray-600">Junior Developer</span>
         </div>
         <nav>
         {/* <a href="#" onClick={() => setActiveCall('audio')}>Audio Call</a>
         <a href="#" onClick={() => setActiveCall('video')}>Video Call</a> */}
         {/* <a href="">Audio Call</a>
         <a href="">Video Call</a> */}
         </nav>
         {/* <CallController /> */}
      </div>
   </div>
   <div id="messages" className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
      <div className="chat-message">
         <div className="flex items-end">
            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
               <div><span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">Good Morning!</span></div>
            </div>
            <div className="rounded-full border-1 border-black  relative w-6 h-6 overflow-hidden">
           <img src={profile} alt="" className="w-full h-full object-cover" />
        </div> 
         </div>
      </div>
      <div className="chat-message">
         <div className="flex items-end justify-end">
            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
               <div><span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">Hi, good morning!</span></div>
            </div>
            <div className="rounded-full border-1 border-black  relative w-6 h-6 overflow-hidden">
           <img src={profile2} alt="" className="w-full h-full object-cover" />
        </div>   
         </div>
      </div>
      <div className="chat-message">
         <div className="flex items-end">
            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
               <div><span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">Are you ready to start working on the project</span></div>
               <div><span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">We'll discuss about key features again</span></div>
               <div><span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">Lets have a gmeet in 10 mins</span></div>
               {/* <div>
                  <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                     Check the line above (it ends with a # so, I'm running it as root )
                     <pre># npm install -g @vue/devtools</pre>
                  </span>
               </div> */}
            </div>
            <div className="rounded-full border-1 border-black  relative w-6 h-6 overflow-hidden">
           <img src={profile} alt="" className="w-full h-full object-cover" />
        </div> 
         </div>
      </div>
      <div className="chat-message">
         <div className="flex items-end justify-end">
            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
               <div><span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">Yea sure</span></div>
            </div>
            <div className="rounded-full border-1 border-black  relative w-6 h-6 overflow-hidden">
           <img src={profile2} alt="" className="w-full h-full object-cover" />
        </div> 
         </div>
      </div>
      <div className="chat-message">
         <div className="flex items-end">
            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
               <div><span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">Did you start your side of the work?</span></div>
            </div>
            <div className="rounded-full border-1 border-black  relative w-6 h-6 overflow-hidden">
           <img src={profile} alt="" className="w-full h-full object-cover" />
        </div> 
         </div>
      </div>
      <div className="chat-message">
         <div className="flex items-end justify-end">
            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
               <div><span className="px-4 py-2 rounded-lg inline-block bg-blue-600 text-white ">Yea..Im almost done with the paper works</span></div>
               <div><span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">I still have your opinion on a few things tho</span></div>
            </div>
            <div className="rounded-full border-1 border-black  relative w-6 h-6 overflow-hidden">
           <img src={profile2} alt="" className="w-full h-full object-cover" />
        </div> 
         </div>
      </div>
      <div className="chat-message">
         <div className="flex items-end">
            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
               <div><span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">Good work!</span></div>
               <div><span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">Lets discuss it over the meet</span></div>
            </div>
            <div className="rounded-full border-1 border-black  relative w-6 h-6 overflow-hidden">
           <img src={profile} alt="" className="w-full h-full object-cover" />
        </div> 
         </div>
      </div>
      <div className="chat-message">
         <div className="flex items-end justify-end">
            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
               <div><span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">Alright, i'll be online in 10 mins</span></div>
            </div>
            <div className="rounded-full border-1 border-black  relative w-6 h-6 overflow-hidden">
           <img src={profile2} alt="" className="w-full h-full object-cover" />
        </div> 
         </div>
      </div>
      <div className="chat-message">
         <div className="flex items-end">
            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
               <div><span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">Okay!</span></div>
               <div><span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">Ill send you meeting link</span></div>
               {/* <div><span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">even i am facing</span></div> */}
            </div>
            <img src={profile} className='w-6 rounded-full'/>
         </div>
      </div>
      <div className="chat-message">
         <div className="flex items-end justify-end">
            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
               <div><span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">Alright!</span></div>
            </div>
            <div className="rounded-full border-1 border-black  relative w-6 h-6 overflow-hidden">
           <img src={profile2} alt="" className="w-full h-full object-cover" />
        </div> 
         </div>
      </div>
   </div>
   <div className="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
      <div className="relative flex">
         <span className="absolute inset-y-0 flex items-center">
            <button type="button" className="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-gray-600">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
               </svg>
            </button>
         </span>
         <input type="text" placeholder="Write your message!" className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-md py-3"/>
         <div className="absolute right-0 items-center inset-y-0 hidden sm:flex">
            <button type="button" className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-gray-600">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path>
               </svg>
            </button>
            <button type="button" className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-gray-600">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
               </svg>
            </button>
            <button type="button" className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-gray-600">
                  <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
               </svg>
            </button>
            <button type="button" className="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none">
               <span className="font-bold">Send</span>
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6 ml-2 transform rotate-90">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
               </svg>
            </button>
         </div>
      </div>
   </div>
</div>

            </div>
         )}
      </>
   );
};

export default App;
