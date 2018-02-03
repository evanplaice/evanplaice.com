*Note: I wrote this post years ago on [Programmers.StackExchange](https://softwareengineering.stackexchange.com/a/3012/1256). I plan to update it as my writing skills improve.*

## Humble Beginnings

My first open source contribution was for a library that I had previously used (and would have suffered greatly without) on a paid project. During my initial use I had spotted a bug in the code so I created a patch, joined the project, and submitted it for review.

About 8 months later when I had some free time I decided that I would give back (and work on my development skills) by contributing more to the project. So I cloned the repository and started getting familiar with the codebase. After a few weeks of submitting minor patch fixes to the codebase and monitoring the feature requests, I picked up a feature request to add a pretty substantial module to the project.

Since generating many individual patch fixes is pretty tedious for any significant development I cloned the repository to a branch on git hub and started punching away code. A few weeks and several thousand lines of code later the project leader and me worked through integrating and testing my fixes into the library in a way that worked consistently with the rest of the codebase.

## It Was an Invaluable Learning Experience

When I started I didn't know how to use Git, by the end I could proficiently create remote tracking branches and merge or rebase them into the master branch without breaking a sweat.

I started in VS 2008 and ended up migrating to Linux and Monodevelop to work on writing code. It turns out that theres not much you can't do in *nix that you can do in Windows.

I had never really done any unit testing before, Nunit is a piece of cake to use and writing unit tests is pretty elementary stuff.

I had to learn to swallow my tongue and listen as well as practice patience. There's no point in standing a firm ground on your position on an open source project because everybody involved is knowledgeable (probably more so than yourself) and capable of accepting and/or rejecting your ideas based on substance not delivery. It's extremely humbling and rewarding at the same time.

Just having one other skilled developer's intently reviewing my code pointed out flaws in my style that I had never considered before. For example, I learned that it's better to define constants than to pollute the code magical numbers and comments explaining their usage.

That particular project was based around generating and decoding networking packets on all levels of networking protocols. I have a personal interest in lower level networking so it was great to have discussions with another developer with shared interest and knowledge in the domain.

## Get Your Feet Wet 

If you're looking for a place to get started, find a project that you already use; clone the repository; and start seeing if you can fix some bugs and/or add some unit tests. It seems intimidating to look at someone else's codebase with fresh eyes but it's an extremely valuable skill to learn. Submit some patches. You can expect your code to be closely scrutinized at first. Don't worry about it, it's a normal part of the process to gain the trust of the project admin(s).

After establishing a base of merit with the projects admin(s) start seeking more responsibilities such as, proposing new features, or asking to be assigned to implementing feature requests.

If you can't find an already existing project on one of the main open source repository networks (github, sourceforge, google code) think of an app that you'd really like to use that doesn't exist yet and start your own.

Be prepared to be humbled and expect work to be rejected in favor of further revisions. The myth that anybody can add code to an open source project is completely false. There's always a gatekeeper between you and push access. The better your code, the less it will be scrutinized in the long run as you gain trust of the project admin(s). If it's your project, you'll be that gatekeeper.

## Update

I just thought about it and realized that I didn't bother to mention which project that a lot of my answer is referencing. For those who want to know, it's SharpPcap. The lead developer Chris Morgan is very professional and on point. He does a hell of a job managing the project and taught me a lot about what it takes to mature a OSS project.

Due to personal time constraints I haven't been able to contribute code in over a year but I still try to give back by lurking on Stack Overflow and answering questions about SharpPcap occasionally.