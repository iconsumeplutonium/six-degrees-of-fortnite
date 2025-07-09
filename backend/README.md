# Documentation 

## Files

* `franchises_unfiltered.txt`
  * The full list of every single article on the Fictional Crossover Wiki
* `filtered_franchises.txt`
  * Filtered list of all franchises on the wiki after filtering out commercials, redirects, trailers, etc.
* `misc_removals.txt`
  * A combination of articles that were filtered out of `filtered_franchises.txt`, as well as many non-franchise wiki articles whose names do not follow any particular pattern
* `redirects.json`
  * Many articles on the wiki have multiple titles that all redirect back to the original (for instance `Neon Genesis Evangelion` redirects to `Evangelion`, `Disney's Cinderella` redirects to `Cinderella (Disney)`, etc.) This JSON keeps track of them all so different links to the same article are treated as the same link. 
* `crossovers.db`
  * an SQLite database containing every single franchise and its crossovers
* `crossovers.json`
  * A JSON representation of `crossovers.db`
* `AllPaths.json`
  * Stores the precalculated API response for every single path from every franchise back to Fortnite
* `graph.gz`
  * Stores precalculated positions for every single node, as well as edge and path data for the 3D visualizer, with gzip compression

## Scripts

#### `gameextractor.py`
Extracts a list of all franchises on the Fictional Crossover wiki.

Arguments:

* `--extract, -e`: queries the internal Fandom API to get a list of all articles on the wiki, and stores it in `text/franchises_unfiltered.txt`
* `--cache-redirects, -r`: Goes through every single article in `text/franchises_unfiltered.txt` and determines which articles are redirects by sending an HTTP request and checking if the response is 301 or 302. Stores redirects in `text/redirects.json`, where the key is the redirect's name and the value is the article it redirects to. (As far as I am able to tell, there is no MediaWiki API that directly provides a list of every single redirect and its destination. There exists [this endpoint](https://fictionalcrossover.fandom.com/api.php?action=query&titles=Cinderella%20(Disney)&format=json&prop=redirects), but that only provides all redirects to one single specified article. There is also [this Special page ](https://fictionalcrossover.fandom.com/wiki/Special:ListRedirects) that lists both redirect and destination, but it only provides the first 1000 redirects, not all of them.)
* `--filter, -f`: Goes through all articles in `text/franchises_unfiltered.txt` and removes all commercials, cameos, trailers, redirects, etc. and stores the result in `text/filtered_franchises.txt`
* `--insert, -i`: Loads the contents of `text/filtered_franchises.txt` into the `game` table in `crossovers.db`

#### `linkscraper.py`

Scrapes the crossovers from every article in `text/filtered_franchises.txt`. Stores the crossover data in `text/crossovers.json` and `crossovers.db`. 

#### `search.py`

Searches for a path from a given franchise to Fortnite via breadth-first search. Used by `CrossoverAPI.py` to get a path to a specified franchise, but can also be run as a command line tool. 

Arguments:

* `--start, -s <name>`: Required argument. The name of franchise to start from, as it appears in `text/crossovers.json` and `crossovers.db`. 
* `--min-link, -l`: The minimum link type to be used as a valid path, ranges from 1 to 3. Defaults to 3 if not specified. See [here](https://fictionalcrossover.fandom.com/wiki/Link#Types_of_links) for what each link type entails. 
* `--all, -a`: Will search for a path from every single franchise to Fortnite and store the results in `text/AllPaths.json`

#### `dataviz.py`

Precomputes the positions of all nodes in the graph in 3D space for use in the 3D visualizer. It creates an adjacency list based on `text/AllPaths.json`, runs a NetworkX layout algorithm to compute the node positions, then stores the graph with gzip encoding as `text/graph.gz`.

In the JSON structure, a node is defined as having an integer *id*, a string *name*, an integer *value* (the total degree of the vertex in the graph), and a 3-component float list for the position. 

An edge has an integer source (the ID of the source node) and an integer target (the ID of the target node).

The JSON also includes a dictionary *path* which contains the list of node IDs that represent the path from each node to Fortnite (used in the shift + hover feature of the graph).

#### `CrossoverAPI.py`

A simple FastAPI webserver that returns the path to a specified franchise.

* `/path/{franchise}`
  * Accepts only GET requests
  * Parameters:
	* `franchise`: (required) the name of the franchise to search for, as it appears in `text/franchises_filtered.txt` and `crossover.db`
  * Responses:
	* 404: invalid franchise or no franchise specified
	* 200: franchise is valid
	  * If path does not exist:
		```json
		{
			"found": false
		}
		```
	  * If path exists:
		```json
		{
			"found": true,
			"path": [
				{
					"name": "string",
					"date": "string",
					"description": "string",
					"linkType": 1
				},
				...
			]
		}
		```
* `/graph`
  * Accepts only GET requests
  * Parameters: None
  * Responses:
	* The layout of the graph (gzipped)
	```json
	{
	  "nodes": [
		{
			"id": 0,
			"name": "string", 
			"value": 5,                 // the degree of this vertex
			"position": [0.5, 0.5, 0.5] // position in 3D space
		},
		...
	  ],

	  "links": [
		{
			"source": 1, // ID of source vertex
			"target": 2  // ID of target vertex
		},
		...
	  ],

	  "paths": {
		0: [1, 2, ...], // The IDs of the vertices on the path from vertex 0 to Fortnite
		1: [7, 9, ...], // The IDs of the vertices on the path from vertex 1 to Fortnite
		2: [...],
		...
	  }
	}
	```