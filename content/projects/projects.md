
## jquery-csv (Open Source - Author)

jquery-csv is the first fully [RFC 4180][rfc-4180] compliant CSV parser for Javascript. It can parse RAW CSV to Javascript data structures and vice-versa. The JS representation of CSV data can be either a 2D array or an array of Objects. Parsing is accomplished using a DFM (Deterministic Finite-State Machine) covering every edge case outlined in the spec, plus a few that *should* be included.

<div class="ui two column stackable grid container">
  <div class="column">
    <h3>Development</h3>
    <ul>
      <li>parse CSV to a 2D array</li>
      <li>parse CSV to an array of objects</li>
      <li>format a 2D array as CSV</li>
      <li>format an array of objects as CSV</li>
      <li>support customizable delimiter/separator/newline chars</li>
      <li>allow the injection of additional code at every step</li>
      <li>end-to-end unit testing coverage</li>
      <li>useful interactive demos/examples for others</li>
      <li>optimize for performance</li>
    </ul>
  </div>
  <div class="column">
    <h3>Stack</h3>
    <ul>
      <li>Javascript/HTML + Node.js</li>
      <li>JSUnit + Mocha/Chai</li>
      <li>GoogleCode -> GitHub</li>
      <li>Git</li>
      <li>Grunt: htmlhint + jshint + uglify</li>
    </ul>
  </div>
</div>

**Usage:**
```language-javascript
// sample csv (could be loaded via file/ajax, etc)
var csv = `
"All work","and no play","makes Jack","a dull boy..."
"All work","and no play","makes Jack","a dull boy..."
`;

// parse the csv
var data = $.csv.toArrays(csv);

// the 'data' variable will contain
// [
//     ['All work', 'and no play', 'makes Jack', 'a dull boy...'],
//     ['All work', 'and no play', 'makes Jack', 'a dull boy...']
// ]
```

**Motivations:**

Work was slow, feast or famine cycles are common in the military. I attempted to pitch a MVP to the president of my company to replace our existing (terrible) logistics tracking system. The concept would provide a web-based UI with a PostgreSQL back-end.

To enable the quick/efficient import/export of tabular data would require a robust CSV parser. I probably searched and read over 100+ different blogs/websites in search of a good example. The results, everybody sucks at parsing CSV and the JS dev community is riddled with amateurs who love ridiculous titles such as 'guru' or 'ninja'.

I received pushback on my proposal in the form of, and I quote "we don't want to get involved with technology." I had time to burn (ie I can't stand being idle) so I dropped the product MVP and redirected my focus on creating something useful for others. My goal, to write the first fully RFC compliant CSV parser for client-side CSV. 

It began with the poor assumption, 'RegEx *should* be capable of parsing CSV'. I found a 20 line monster on Stack Overflow and tweaked it for extensibility. Only to discover that -- by design -- the RegEx parser will always break on values that contain escaped newline characters.

Back to the drawing board. I read everything I could find about parsers, Chomsky types, EBNF, parser generators, finite state machines, etc. Then, and only then, I sat down and mapped out every single state and transition as a DFA (Deterministic Finite-State Automata). The foundation that would become the new feature-complete CSV parser.

**Outcome:**

The popularity of the library exploded with a little marketing help. Piggybacking on jquery didn't hurt either. Ironically, the library doesn't actually depend on jQuery.

Tons of people started using it so it took very little time for users to root out most of the bugs. It was really an intrinsically rewarding experience to have something I created be adopted by so many.

Anyway, the feast-or-famine pace at work switched directions and I left the project on autopilot. The project is mostly dead now. GoogleCode shutdown and the migration to GitHub left years of valuable history behind. In retrospect, I wish I had tried GitHub sooner. The collaborative nature of forks/pull-requests is simply... better.

I love writing code in Javascript. It pained me to see so many self-proclaimed 'JS Ninjas' churning out bullshit, misinformation, and low quality code. It took some effort to 'do things right' but I like to think that my work helped to raise the bar just a little.

To date, the project has had almost 500K downloads. Competing CSV parser libraries have cropped up since and I'm happy to say they all target [RFC 4180][rfc-4180] compliance as the baseline.

[rfc-4180]: https://tools.ietf.org/html/rfc4180

-----

## pypreprocessor (Open Source - Author)

PyPreprocessor is a small library that adds c-style preprocessor macro support to Python. The library can either load and preprocess and external file, or work execute in a self-consuming manner.

<div class="ui two column stackable grid container">
  <div class="column">
    <h3>Development</h3>
    <ul>
      <li>preprocess external files</li>
      <li>preprocess by self-consuming the source</li>
      <li>basic functional tests</li>
      <li>useful examples for others</li>
    </ul>
  </div>
  <div class="column">
    <h3>Stack</h3>
    <ul>
      <li>Python 2/3</li>
      <li>GoogleCode -> GitHub</li>
      <li>Mercurial -> Git</li>
      <li>PyPi Package Release</li>
    </ul>
  </div>
</div>

**Usage:**

```language-python
from pypreprocessor import pypreprocessor

pypreprocessor.parse()

#define debug

#ifdef debug
print('The source is in debug mode')
#else
print('The source is not in debug mode')
#endif
```

**Motivations:**

I was experimenting with an idea that required a web scraper. I really wanted to stick to Python 3 but the scraping lib (ie Beautiful Soup) I was using hadn't been converted yet.

I thought about the maintenance issues inherent to supporting two separate code branches of a popular library and landed on the conclusion that a preprocessor with conditional includes would be the best option. Unfortunately, GvR hates preprocessors due to the way they're abused in C.

**Outcome:**

PyPreprocessor is limited to only conditional includes so it can't be used for abusing the syntax semantics of Python. The self-consuming bit was particularly difficult to solve do to the unique approach and lousy import module documentation. It cost me 400 rep on Stack Overflow to find somebody knowledgeable enough to locate the missing piece.

Unfortunately, it was all for naught. Pyton has distinct lexer and parser phases. If a file contains both Python 2 and 3 code the lexer will throw an exception before my preprocessor can intercept the parser.

Oh well, it's hosted on PyPi. I provided documentation with a few other viable use cases and other developers have found it useful so it wasn't a complete waste.

-----

## SharpPcap/Packet.Net (Open Source - Contributor)

SharpPcap is a C# winpcap/libpcap wrapper that provides an API for capturing and sending network packets at all layers of the stack.

Packet.Net is a parser lib used by SharpPcap to parse RAW network frames into structured protocol data, as well as build/modify custom network packets from scratch. Speed is a primary factor when it comes to inline parsing (ex Deep Packet Inspection) so the data structures use lazy-loading with minimal protocol detection strategies as much as possible.

<div class="ui two column stackable grid container">
  <div class="column">
    <h3>Development</h3>
    <ul>
      <li>implemented/improved various protocols</li>
      <li>added/improved unit testing for validity</li>
      <li>added unit tests to check performance</li>
      <li>added/improved usability examples</li>
      <li>performed a project-wide style cleanup for consistency</li>
      <li>updated the public documentation</li>
      <li>improved/added inline documentation</li>
      <li>assisted new and existing users with their issues</li>
    </ul>
  </div>
  <div class="column">
    <h3>Stack</h3>
    <ul>
      <li>C#/.NET</li>
      <li>Visual Studio 2008 Pro (Windows)</li>
      <li>MonoDevelop (linux)</li>
      <li>NUnit (testing)</li>
      <li>Subversion (SCM)</li>
      <li>Ethereal/Wireshark</li>
    </ul>
  </div>
</div>

**Motivations:**

Anybody attempting to work with low-level network protocols in Windows will quickly discover that it's not possible. For 'security reasons' the default network drivers packaged with Windows won't let you peek at anything below the Transport Layer (ex TCP/UDP).

The winpcap/libpcap, workaround the limitation by providing a custom network driver with other enhancements such as promiscuous mode for network sniffing.

On the RIOS project, I was responsible for creating a custom Network Layer (ex Ethernet) protocol and client/server application to communicate over it. SharpPcap/Packet.net saved the day. So when the project concluded I immediately joined the project and started contributing.

-----

## RIOS (Replacement Instructor Operating System) (Proprietary - Co-Developer)

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