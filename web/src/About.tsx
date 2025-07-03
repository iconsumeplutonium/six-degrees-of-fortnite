import Navigation from "./components/Navigation";
import './styles/About.css';

export default function About() {
	return (
		<>
			<Navigation />
			<div className="aboutParent">
				<p>
					Fortnite has cemented itself as one of the biggest video games in the world, evolving into a pop culture melting pot 
					featuring crossovers ranging from Star Wars to Family Guy to Tron. In fact, there are so many crossovers 
					that the idea of connecting any franchise back to Fortnite has become a popular meme.
				</p>

				<figure style={{ textAlign: 'center' }}>
					<img src="cant_unconnect.png" className="meme" alt="Can't unconnect meme" />
					<figcaption className="caption">
						Original Image: <a href="https://twitter.com/Snowfoot_/status/1422779901325807617">@Snowfoot_</a> on Twitter
						<br />
						Captioned meme: <a href="https://www.reddit.com/r/teenagers/comments/piyihu/cry_all_you_want_you_cant_disconnect_your/">This post</a> on Reddit
					</figcaption>
				</figure>

				<p>
					Inspired by <a href="https://www.sixdegreesofwikipedia.com/">Six Degrees of Wikipedia</a> and the above meme,
					Six Degrees of Fortnite attempts to find a way to connect any franchise back to Fortnite solely these crossovers. 
					<br />

					All the crossover data on this website is sourced from the <a href="https://fictionalcrossover.fandom.com/wiki/Crossover_Wiki">Crossover Wiki</a>. 
					
					All the franchises mentioned on this site are registered trademarks of their respective owners. Fortnite is a registered trademark of
					Epic Games. This site was made by someone with no affiliation to any those brands/companies.

				</p>
			</div>
		</>
	)
}