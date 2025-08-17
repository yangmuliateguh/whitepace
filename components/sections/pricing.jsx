export default function pricing() {
  return (
    <div className="bg-primary w-full px-[220px] py-[140px] text-black border-2">
        {/* heading */}
        <div className="border-2">
            <h1 className="text-h border-2">Choose Your Plan</h1>
            <p className="text-p border-2">Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you.</p>
        </div>
        {/* pricelist */}
        <div className="border-2">
            {/* price board */}
            <div className="border-2">
                {/* text-block */}
                <div className="border-2">
                    <h5 className="text-h border-2">Free</h5>
                    <h1 className="text-price border-2">$0</h1>
                    <p className="text-p border-2">Capture ideas and find them quickly</p>
                </div>
                {/* bulletpoint */}
                <div className="border-2">
                    <ul className="text-p border-2">
                        <li><img src="#" alt="" />Sync unlimited devices</li>
                        <li><img src="#" alt="" />10 GB monthly uploads</li>
                        <li><img src="#" alt="" />200 MB max. note size</li>
                        <li><img src="#" alt="" />Customize Home dashboard and access extra widgets</li>
                        <li><img src="#" alt="" />Connect primary Google Calendar account</li>
                        <li><img src="#" alt="" />Add due dates, reminders, and notifications to your tasks</li>
                    </ul>
                </div>
                {/* button */}
                <button className="text-button border-2">Get Started</button>
            </div>
            {/* price board */}
            <div className="border-2">
                {/* text-block */}
                <div className="border-2">
                    <h5 className="text-h border-2">Personal</h5>
                    <h1 className="text-price border-2">$11.99</h1>
                    <p className="text-p border-2">Keep home and family on track</p>
                </div>
                {/* bulletpoint */}
                <div className="border-2">
                    <ul className="text-p border-2">
                        <li><img src="#" alt="" />Sync unlimited devices</li>
                        <li><img src="#" alt="" />10 GB monthly uploads</li>
                        <li><img src="#" alt="" />200 MB max. note size</li>
                        <li><img src="#" alt="" />Customize Home dashboard and access extra widgets</li>
                        <li><img src="#" alt="" />Connect primary Google Calendar account</li>
                        <li><img src="#" alt="" />Add due dates, reminders, and notifications to your tasks</li>
                    </ul>
                </div>
                {/* button */}
                <button className="text-button border-2">Get Started</button>
            </div>
            {/* price board */}
            <div className="border-2">
                {/* text-block */}
                <div className="border-2">
                    <h5 className="text-h border-2">Organization</h5>
                    <h1 className="text-price border-2">$49.99</h1>
                    <p className="text-p border-2">Capture ideas and find them quickly</p>
                </div>
                {/* bulletpoint */}
                <div className="border-2">
                    <ul className="text-p border-2">
                        <li><img src="#" alt="" />Sync unlimited devices</li>
                        <li><img src="#" alt="" />10 GB monthly uploads</li>
                        <li><img src="#" alt="" />200 MB max. note size</li>
                        <li><img src="#" alt="" />Customize Home dashboard and access extra widgets</li>
                        <li><img src="#" alt="" />Connect primary Google Calendar account</li>
                        <li><img src="#" alt="" />Add due dates, reminders, and notifications to your tasks</li>
                    </ul>
                </div>
                {/* button */}
                <button className="text-button border-2">Get Started</button>
            </div>
        </div>
    </div>
  );
}
