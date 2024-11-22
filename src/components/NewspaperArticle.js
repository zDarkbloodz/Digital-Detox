import React, { useState, useEffect } from 'react';
import { Clock, Sun, Moon, Book, Coffee } from 'lucide-react';

const DropCap = ({ children }) => (
  <span className="float-left text-7xl leading-none pr-2 pt-1 font-serif">{children}</span>
);

const NewspaperArticle = () => {
  const [currentDate, setCurrentDate] = useState('');
  
  useEffect(() => {
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    setCurrentDate(date.toLocaleDateString('en-US', options));
  }, []);

  return (
    <div className="max-w-6xl mx-auto bg-gray-100 min-h-screen p-8">
      <div className="bg-white p-8 shadow-lg">
        {/* Newspaper Header */}
        <header className="text-center border-b-4 border-black pb-4 mb-8">
          <p className="text-sm mb-2 font-serif">{currentDate}</p>
          <h1 className="text-7xl font-serif font-bold mb-2">The Daily Observer</h1>
          <div className="flex justify-between items-center text-sm font-serif">
            <p>Morning Edition</p>
            <p>Vol. CXXII No. 47</p>
            <p>Price: $2.00</p>
          </div>
        </header>

        {/* Main Article */}
        <main className="grid grid-cols-12 gap-8">
          {/* Lead Story */}
          <article className="col-span-8">
            <h2 className="text-4xl font-serif font-bold mb-2">Digital Detox: A Day of Discovery</h2>
            <h3 className="text-xl font-serif italic mb-6">Local Resident Finds Peace in 24-Hour Technology Fast</h3>
            <div className="grid grid-cols-2 gap-8">
              {/* Column 1 */}
              <div className="space-y-4">
                <p className="leading-relaxed">
                  <DropCap>I</DropCap>n a world increasingly tethered to screens, one local resident made a bold choice: to spend 24 hours completely disconnected from technology. The experiment, which began as a simple curiosity, evolved into a profound journey of self-discovery and reflection.
                </p>
                <p className="leading-relaxed">
                  "It's the first thing I check in the morning and the last thing I see at night," admits Eric, describing his previous relationship with his smartphone. "I wanted to see what life could be like without the constant digital noise."
                </p>
                <div className="bg-gray-100 p-4 my-6 border-l-4 border-gray-800">
                  <p className="text-lg italic">"The quietness was strange at first, but then it became the most natural thing in the world."</p>
                </div>
                <p className="leading-relaxed">
                  The experiment began on a Friday evening, with all devices powered down and stored away. The first challenge came immediately: setting up an actual alarm clock. "I hadn't used one in years," Eric laughs. "I had to read the instructions."
                </p>
              </div>

              {/* Column 2 */}
              <div className="space-y-4">
                <p className="leading-relaxed">
                  By morning, the absence of the usual digital routine was palpable. No notifications, no emails, no social media feeds to scroll through. Instead, the day began with something novel: silence.
                </p>
                <p className="leading-relaxed">
                  "Instead of my usual morning scroll through social media, I did a full workout session," Eric recalls. "The physical activity helped clear my mind in a way that scrolling never did. It set a completely different tone for the day."
                </p>
                <p className="leading-relaxed">
                  The midday hours brought their own challenges. Muscle memory had him reaching for his phone dozens of times, only to remember it wasn't there. But in those moments of technological absence, something unexpected emerged: clarity.
                </p>
                <div className="bg-gray-100 p-4 my-6">
                  <h4 className="font-bold mb-2">Key Findings:</h4>
                  <ul className="list-disc pl-4">
                    <li>Improved sleep quality</li>
                    <li>Enhanced focus and creativity</li>
                    <li>Reduced anxiety levels</li>
                    <li>Greater environmental awareness</li>
                  </ul>
                </div>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="col-span-4 space-y-6">
            <div className="border-2 border-gray-800 p-6">
              <h3 className="text-2xl font-serif font-bold mb-4 border-b-2 border-gray-800">A Day Without Screens</h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span className="font-bold">6:00 PM:</span> All devices powered down
                </div>
                <div className="flex items-center space-x-2">
                  <Moon className="w-4 h-4" />
                  <span className="font-bold">10:00 PM:</span> First phone-free bedtime
                </div>
                <div className="flex items-center space-x-2">
                  <Sun className="w-4 h-4" />
                  <span className="font-bold">7:00 AM:</span> Woke up naturally
                </div>
                <div className="flex items-center space-x-2">
                  <Coffee className="w-4 h-4" />
                  <span className="font-bold">8:00 AM:</span> Morning workout session
                </div>
                <div className="flex items-center space-x-2">
                  <Book className="w-4 h-4" />
                  <span className="font-bold">11:00 AM:</span> Started a new art project
                </div>
              </div>
            </div>
            
            <div className="bg-gray-100 p-6">
              <h3 className="text-xl font-serif font-bold mb-4">By The Numbers</h3>
              <div className="space-y-2">
                <p><span className="font-bold">47:</span> Times reached for phone</p>
                <p><span className="font-bold">8.5:</span> Hours of uninterrupted sleep</p>
                <p><span className="font-bold">1:</span> Workout completed</p>
                <p><span className="font-bold">2:</span> New art pieces created</p>
                <p><span className="font-bold">0:</span> Social media checks</p>
              </div>
            </div>

            <blockquote className="border-l-4 border-gray-800 pl-4 italic text-lg">
              "In a world that's always online, taking the time to disconnect is a radical act of self-care."
            </blockquote>
          </aside>
        </main>

        {/* Continued Story */}
        <section className="mt-8 border-t-2 border-gray-300 pt-8">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-4">The Aftermath</h3>
              <p className="leading-relaxed">
                Returning to the digital world brought new perspectives. "The notifications that used to seem urgent now felt less important," Eric reflects. "I realized most things can wait."
              </p>
              <p className="leading-relaxed mt-4">
                The experience has led to lasting changes. Eric now maintains regular "tech-free" periods and keeps his phone in his desk while sleeping.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold mb-4">Looking Forward</h3>
              <p className="leading-relaxed">
                While a complete digital detox might not be practical for everyone, Eric suggests starting small. "Even a few hours of intentional disconnection can make a difference," he advises.
              </p>
              <p className="leading-relaxed mt-4">
                As our society becomes increasingly connected, perhaps the most revolutionary act is choosing when to disconnect.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-8 pt-4 border-t border-gray-300 text-center">
          <p className="text-sm font-serif">
            Continued on Page A2 | Weather: Page B8 | Opinion: C1
          </p>
        </footer>
      </div>
    </div>
  );
};

export default NewspaperArticle;