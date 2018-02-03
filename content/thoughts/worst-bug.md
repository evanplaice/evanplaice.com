I have written a *lot* of mediocre quality code, spent a *lot* of time fumbling with different language, frameworks, platforms, etc. Created bugs of all different shapes and varieties from UI weirdness to milti-threaded deadlocks. *By far*, the worst bug I've ever encountered was a [Heisenbug](https://blog.codinghorror.com/new-programming-jargon/) while trying to implement network communication.

## Why Networking?

I was a co-developer on a project where we were tasked to build a touchscreen interface for a flight simulator. The network communication bit was essential because the host machine we were talking to was an early 80's workstation (ie a SEL 32/77), running AIX (IBM's proprietary version of Unix), running a real-time simulation.

To give you an idea of how archaic this machine is. Booting the damn thing took about 15 minutes and involved following a 'bootstrap loader' procedure whereby you'd have to fat-finger the boot instructions into a keypad in hexadecimal. Remember Golden Eye 007 where the computer rooms had rows of huge computers, with tape backups, and waist-high dotmatrix printers.

![007](content/thoughts/images/007.jpg)

Talking to the host with our WinXP bold-on required having a custom ethernet card built for the host, and a very talented dev from the UK write a basic driver + stack. In this type of environment, luxuries like TCP/IP don't exist, so my responsibility was to build a custom layer-2 networking server/client to talk to one built by the Host dev.

## Why am I doing this?

Our AIX guy had done this before on other similar machines. This was **first** ever foray into network programming of any kind, up until this point I hadn't so much as opened a network socket. To make matters worse, the constraints were extreme. I wouldn't have physical access to the host until integration, which was scheduled for 1 week to perform both the hardware and software upgrade.

All I had to work with was a mini client/server simulator app our AIX guy wrote in C that I could train my client/server implementation against.

## Windows Sucks, Open Source Software FTW

My end was entirely written in C#, and we needed to communicate at the lowest level in the networkin stack. For the uninitiated, Windows blocks all access to the networking stack below TCP/IP. It's baked directly into the Windows networking driver, so any standard .NET approaches wouldn't work.

Either way, I managed to find a PCAP wrapper (ie SharpPcap) to hack together a networking protocol, translated a floating point format converter (Ie the host didn't use IEEE 754) from C, reverse engineered a raw dump of the symbol table and loaded it into a DB, etc...

## Sink or Swim Time

Integration finally came and I was a nervous wreck. We had 7 full days of downtime to make the changes, including ripping out the old hardware (ie ray-tracing displays + 100+ buttons) and replacing it with the new (3 touch screens). Flight simulators are the backbone of an airline, pilots who can't keep up with the FAA requirements for required training are grounded until they can. Therefore, flight simulators typically operate 20 hours/day, 7 days/week. Downtime beyond our scheduled window was not an option.

Months of preparation and death-march sprinting was finally yielding results. Everything was working brilliantly to the point where we could even start identifying opportunities to make adjustments and performance improvements.

That was, until somebody noticed something strange happening on the interface. Instead of updating to show the current state of the host as expected, a small select number of labels were constantly toggling between the correct value and something else. The symptom only occurred on a few pages, and only when the pages were loaded in a specific order.

## Communication Matters

I racked my brain for hours chugging coffee and pouring over every detail of my networking code until at about 4AM. That's when I finally managed to catch the AIX specialist taking a break from his VT220 terminal. I picked his brain, going back over the the specifics of the networking protocol spec. When that failed yield results, I started picking his brain about how he implemented the protocol on the host. That's when I had a sudden 'lightbulb' moment.

It turns out that, on 80's era hardware running under real-time constraints, re-initializing the state array on his end for every update (ie roughly every couple 100ms) is a very expensive operation. To avoid the performance penalty, he initially allocated the array to a fixed maximum size, and wrote over the existing values with the new values on each update.

On my end, running C# on modern Windows hardware, array initialization is the cheap and 'safe' approach so that's exactly what I did. Since, I wasn't sending fixed-length set large enough to blank out values outside of the new set, it was possible for stale values to persist in the overflow of the array.

If the old label existed in the overflow (ie which wasn't set to update), and the same label was present in the new set of values (ie which was set to update), the UI the value would read either the old or new at random.

This would only occur in under very specific conditions. The set of current labels had to be shorter than the previous set of labels. The same label had to be present in the current set and in the overflow. The overflow would persist as long as the size of a new set of labels was shorter than the set of labels the old label was contained in.

Through sheer luck and help from one of my favorite colleagues, I managed to get the code patched and working before I left for the hotel. Up until that point, I had worked mostly on the hardware side. I even planned and installed all the hardware for the update before switching back to code.

This was not my first 'aha' troubleshooting moment but it was the first time I had my first full Boris-esque 'I am Invincible!' moment.


![I AM INVINCIBLE!](content/thoughts/images/invincible.jpg)


TBH, I've been hooked ever since...