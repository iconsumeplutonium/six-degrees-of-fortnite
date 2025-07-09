import Meme from '../assets/cant_unconnect.png';
import '../styles/About.css';

export default function About() {
	return (
		<div className="aboutParent">
			<figure style={{ textAlign: 'center' }}>
				<img src={Meme} style={{ width: '65%' }} alt="Can't unconnect meme" />
				<figcaption className="caption">
					Original Image: <a href="https://twitter.com/Snowfoot_/status/1422779901325807617">@Snowfoot_</a> on Twitter
					<br />
					Captioned meme: <a href="https://www.reddit.com/r/teenagers/comments/piyihu/cry_all_you_want_you_cant_disconnect_your/">This post</a> on Reddit
				</figcaption>
			</figure>
			<p className="aboutText">
				Inspired by <a href="https://www.sixdegreesofwikipedia.com/">Six Degrees of Wikipedia</a> and the above meme,
				Six Degrees of Fortnite attempts to find a way to connect any franchise back to Fortnite solely through crossovers.
				<br />
				<br />
				All the crossover data on this website is sourced from the <a href="https://fictionalcrossover.fandom.com/wiki/Crossover_Wiki">Fictional Crossover Wiki</a>.

				All the franchises mentioned on this site are registered trademarks of their respective owners. Fortnite is a registered trademark of
				Epic Games. This site was made by someone with no affiliation to any those brands/companies.
			</p>
		</div>
	)
}