insert into Roles (role)
	values('Actor');

INSERT INTO Guests (name, RoleId)
	VALUES('Mary St. Pope', 1),
	('Earnest Frank', 1),
    ('Vinnie vici', 1),
    ('Samantha Peterson', 1),
	('Evilynn Shadows', 1),
	('Roland D. Dice', 1),
	('Andy N. Foot', 1),
	('Bruce "Crush" Dice', 1);
    
insert into Clues (clues, GuestId)
	values('Oh, I know Bruce, or “Crush” as he likes to be called. When I first got off the bus in this big old town, he seemed so sweet and handsome. It wasn’t until I heard that he used those same lines on all the women at the studio that I realized what an amoral Cad he really was. He constantly flaunted that someday, the studio would become his when his uncle died and that then people would have to listen to him.', 1),
		('We all know Evilynn around here, but I knew Evilynn best. We had an extended tryst over many years. I’ll always remember the way she looked, how she smelled. She always wore this perfume made from White Oleander – she said she made it herself.', 2),
        ('I got to know Andy pretty well during the shooting. He always seemed like a good guy, but to come from the lap of luxury… He always said he had it made as a butler in a house that didn’t have much for him to do. He just said he had bigger dreams.',3),
        ('Well, I had a very close working relationship with Roland, as you know. I helped him work on his personal affairs, studio affairs, drawing up everything from contracts to wills. He was always sure to make provisions for his nephew, Crush, but always with caveats.', 4),
        ('Crush had been begging me to go to dinner with him. I was on my way to meet him at this new restaurant, La Mer de la Terre, but I cancelled last minute. He had been going on and on about how annoyed he was with his supervisor, someone working under his Uncle. They kept telling him he was bad at his job, and he kept telling them that it didn’t matter. Apparently, they had a fight and he stormed out and right up to me. Not the best mood to ask someone on a date, if you ask me.', 1),
        ('I actually was joining Andy for a drink that night. I had initially had a meeting scheduled with Roland for 6:00, but he cancelled everything that afternoon. With the time on my hands, I thought I’d take Andy out for a drink. He seemed very on edge that day for filming, so I thought he might need it.', 2),
        (' Evilynn was with me for dinner that night – we had planned to meet at 7. I must say that we’ve started up a tryst of our own, and though I know she’s trysted all over the studio (including with Roland AND Crush, from what I hear) I can’t imagine her doing a thing like this. Someone who orders the lobster at a fine restaurant like we went to wouldn’t do something like this. It was a lovely meal at a new place - La Mer de la Terre - we didn’t have any appetizers as I was unfortunately quite late , so I can’t judge the quality of the food there.', 3),
        ('This is a new page to the will – I haven’t seen this yet. It doesn’t seem to change much, the studio was left to Crush before, and it still is, but of course he’s added a new caveat.', 4),
        ('Well I wonder if it was one of mine! I’ve been getting flowers and arrangements sent to me almost daily, and I know someone in the studio is jealous because they keep going missing.', 1),
        ('Well, I know that I was a bit stumbly and slow-moving that morning after drinks with Andy stretched from the evening until quite early in the morning. I do know that, after ending the evening (or morning, rather) at La Mer de la Terre, I went home. I think Andy stumbled back towards the studio, however, quite clumsily I might add.', 2),
        ('I’m afraid I can’t help much for anything that happened in the morning at the studio. Evilynn and I… were late to arrive. We started dinner late because I was over an hour late myself as I had to go all the way from the studio to my house, then back again. La Mer de la Terre is right next to the studio, you see.', 3),
        ('That’s funny – I don’t recall seeing a vase in that office. I’ve been in that office every day of my tenure here. The man not only hated flowers, but hated anything that reminded him of flowers. So vases, impressionist paintings, gardening tools – all were not allowed in his office.', 4);
    
insert into Stories(Stories, GuestId)
	values('Golden Age Hollywood: In Silent Films, No One Can Hear You Scream!', 5),
    ('British Countryside, 19th Century: The Lieutenant’s Secret (Coming soon!)', 7),
    ('Slightly More Wealthy British Countryside, 1940s: The Major’s Major Blunder (Coming soon!)', 6),
    ('1980’s Prom Night: Totally Killer Awesome Prom (Coming soon!)', 1),
    ('1999, New Year’s Eve: Y2Kaper (Coming soon!)', 2),
    ('1900, Archaeological Dig in Cairo: Mummy’s the Word (Coming soon!)', 5),
    ('London, Today: Murder at the British Museum (Coming soon!)', 3),
    ('Early 2000’s Tech Startup Christmas Party: Murder in the (Profit) Margins (Coming soon!)', 4);

insert into Narratives (narrative, StoryId)
	values('Oh, look! Here comes the appetizers, with endless salad and breadsticks!
Can any of you tell me anything about these folks?', 1),
('Thank you, I’m sure all of that will be very helpful. One thing that seemed odd as we searched his office were the contents of his trash can (which you see above). Since the custodial staff made sure to empty the trash at the end of the day, and he was found at his desk in the morning, the trash can should have been empty. However, there were a few things found inside: an empty bottle of ink, a note written in poor handwriting that reads: “Sir – let’s meet tonight. The usual spot for meetings will do. Tell no one. -C.”, a small amount of tobacco ash, and a piece of a page of a new copy of his will, as yet to be notarized. Please examine these closely.
 
Now – One development upon my assistant’s interviewing of Roland’s secretary is this: At around 3:00, he had asked to clear his schedule for the rest of the day and evening. His secretary made sure to remove all appointments. However, on his personal calendar, He had a block of time from 7-10 blocked out with just the letters, CP written hastily.', 1),
('Thank you for all of that information everyone. I have one final thing to share. The Janitor that found the body the other morning was the one who came to me. When he came in, the lights were off and he said the room smelled of flowers and happy little trees, so knew he had to work quickly. You see, Roland hated flowers and was allergic, and the old secretary knew to keep flowers out of the office. The new one may not, so he worked quickly to find them. He flipped on the lights and started cleaning in his haste. He noticed a vase had fallen on the floor and been broken, so he started cleaning it up. He went to put the debris in the trash can, but turned around to find the body. Then came straight to the authorities.', 1);


    