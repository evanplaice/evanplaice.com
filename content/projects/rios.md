The RIOS is a modern bolt-on replacement Instructor Operating Station use to control a 6-DOF (Degrees of Freedom) FFS (Full Flight Simulator).

In regular English terms. Imagine one of those huge hydraulic driven, ultra realistic, aircraft simulation devices used to train commercial pilots. This system is the workstation in the back of the cockpit used to control the entire simulator.

The intent was to replace the existing IOS. Which consisted of 100+ push buttons (imagine mission control), and 2 very old ray tracing monitors (imagine a more basic version of 80's TRON).

Flight simulation time is booked at the rate of about $350/pilot/hour and flight simulators are operated by pilots (ie stick jocks) not simulator engineers/techs (ie nerds). As such, it was important to make the tools as quick/efficient/simple/easy to operate as possible and guarantee little/no downtime. 

Our update would rip out all of the existing hardware and replace it with 3 beautiful modern touchscreens running a UI designed to match their other flight simulators in look-an-feel as closely as possible.

**Motivations:**

Money (ie 250K revenue), a challenge, a great learning experience. We didn't have any other contracts lined up at the time. Developing a relevant software product would open up a lot of new potential business.

**Constraints:**

With this project came a significant number of challenges. The simulator itself was built in the early 80s (ie before I was born). The host computer is an Encore/SEL 32/77 Workstation (ie refrigerator-esque) running proprietary version of AIX (ie IBM flavored Unix), with no networking support, and a bolt-on FPU (Floating Point Unit) that uses a non-standard floating point format.

**Personal Challenges:**

In addition. I had never developed a desktop application. Worked with another developer. Worked remotely with another developer. Coded in a statically-typed language. Or an OOP language. Done any form of networking programming. Built a database. Used software configuration management tools. Integrated software into an existing system. Build a mission critical turnkey hardware solution. etc...

Up until that point, my development skills were limited to website development in HTML/CSS/JS/PHP.

**Why We Took the Project On Anyway:**

My late father and I were an epic team, my co-developer (based out of Montreal) is exceptionally skilled/talented, and the our integration specialist (ie responsible for writing all the host code) is a master of old host computers including authoring an emulator that mimics the old hardware.

We were simply following the same recipe that we had been following for 4 years leading up to that point. Build a small team of exceptionally talented/intelligent people. For me personally, any shortfall of skill/knowledge would have to be made up for with hard work and dedication.

<div class="ui four column doubling stackable grid container">
  <div class="column">
    <h3>Development</h3>
    <ul>
      <li>designed the IPC communication architecture</li>
      <li>implemented a LINQ-to-SQL ORM layer on the client</li>
      <li>translated the floating point converter from C to C#</li>
      <li>implemented the custom Layer 2 client/server</li>
      <li>built the application scaffold for a multi-display UI</li>
      <li>wrote an ARINC-424 (global station data) parser</li>
      <li>wrote parser to translate a binary dump of the host symbol table</li>
      <li>implemented an intermediate database cache table</li>
      <li>implemented a top-down + side-view dynamic 2D plots for runway approaches</li>
    </ul>
  </div>
  <div class="column">
    <h3>Administration</h3>
    <ul>
      <li>designed the database structures</li>
      <li>administered the database</li>
      <li>created TSQL sprocs for data insertion/retrieval</li>
      <li>SVN server for software development</li>
      <li>SVN server for documentation/specifications</li>
      <li>a private wiki for communication</li>
      <li>specified and purchased all hardware</li>
      <li>setup the host OS and custom configuration</li>
      <li>setup 2 hot spares</li>
      <li>setup auto-documentation generation</li>
    </ul>
  </div>
  <div class="column">
    <h3>Hardware</h3>
    <ul>
      <li>6 19" ELO commercial touchscreen displays (3 prod, 3 dev)</li>
      <li>a triple-monitor stand for the testing setup</li>
      <li>2 15" cheapo monitors for the console</li>
      <li>3 custom 3U bolt-on PC (1 prod, 1 hot spare, 1 dev)</li>
      <li>6 2-port video cards for the displays</li>
      <li>3 serial card for the touch screen inputs</li>
      <li>6 hot-swap hard drive bays</li>
      <li>4 additional hard drive bays for backup</li>
      <li>3 KVM-over-ethernet devices</li>
    </ul>
  </div>
  <div class="column">
    <h3>Stack</h3>
    <ul>
      <li>C#/.NET</li>
      <li>WinForms (really sucky UI)</li>
      <li>Visual Studio 2008 Pro</li>
      <li>Windows XP Pro</li>
      <li>MS SQL (database)</li>
      <li>NUnit (testing)</li>
      <li>SharpPcap/Packet.Net (low-level networking lib)</li>
      <li>Subversion (SCM)</li>
      <li>MediaWiki (wiki)</li>
    </ul>
  </div>
</div>

You may ask, what was my co-developer doing the whole time? A lot actually. He designed and developed: the dynamic 2D map plot that displays radio stations and runways; the main application's data middle-layer, consisting of hundreds of data symbols; as well as about 75-80 pages of UI.

I have some pretty massive brass ones but -- even by my standards -- the project was a massive risk. At one point, there was a 3 1/2 stretch where I slept on the floor of my office and worked 18-20 hours/day.

**Outcome:**

All in all, we delivered on-time. Integration testing was stressful, we only had a week of dedicated downtime to get everything running and fix any last minute bugs. Fortunately, we met our acceptance SLA of 99.9% uptime over a 3 month period. Not bad for a rookie.