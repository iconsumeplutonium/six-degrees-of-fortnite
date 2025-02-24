import Navigation from "./components/Navigation";

export default function About() {
    return (
        <>
            <Navigation />
            <h2>
                todo: rewrite this and make this sound less stupid
            </h2>
            <p>
                Fortnite is one of the biggest video games in the world, and has become a pop culture melting pot featuring crossovers from the likes of 
                everything from Star Wars to Family Guy to Lethal Company. In fact, there are so many crossovers that it has become a popular internet meme, that 
                every franchise can be connected to Fortnite.
            </p>
            <img src="cant_unconnect.png" style={{ width: '30%', height: 'auto' }} alt="Can't unconnected meme" />
            <p>
                The above meme (originally made by <a href="https://twitter.com/Snowfoot_/status/1422779901325807617">@Snowfoot_ on Twitter</a>)
                was a big inspiration for this site, as well as <a href="https://www.sixdegreesofwikipedia.com/">Six Degrees of Wikipedia</a>. All data used
                on this website is pulled from the <a href="https://fictionalcrossover.fandom.com/">Fictional Crossover Wiki</a>. 
                
            </p>
        </>
    )
}