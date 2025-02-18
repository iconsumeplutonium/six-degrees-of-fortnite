## Documentation 

#### `gameextractor.py`
Extracts a list of all franchises on the Fictional Crossover wiki.

Arguments:

* `--extract, -e`: queries the internal Fandom API to get a list of all articles on the wiki, and stores it in `text/franchises_unfiltered.txt`
* `--cache-redirects, -r`: Goes through every single article in `text/franchises_unfiltered.txt` and determines which articles are redirects by sending an HTTP request and checking if the response is 301 or 302. Stores redirects in `text/redirects.json`, where the key is the original article name and the value is the article it redirects to. 
* `--filter, -f`: Goes through all articles in `text/franchises_unfiltered.txt` and removes all commercials, cameos, trailers, redirects, etc. and stores the result in `text/filtered_franchises.txt`
* `--insert, -i`: Loads the contents of `text/filtered_franchises.txt` into the `game` table in `crossovers.db`


#### `refilter.ps1`

Simple Powershell script used during the testing of `gameextractor.py`. Wipes `crossovers.db`, deletes `text/filtered_franchises.txt`, and reruns `gameextractor.py` with the `-f` and `-i` flags (see above).

#### `linkscraper.py`

Scrapes the crossovers off every article in `text/filtered_franchises.txt`. Stores the crossover data in `text/crossovers.json` and `crossovers.db`. 

#### `search.py`

Searches for a path from a given franchise to Fortnite via breadth-first search. Used by `CrossoverAPI.py` to get a path to a specified franchise, but can also be run as a command line tool. 

Arguments:

* `--start, -s <name>`: Required argument. The name of franchise to start from, as it appears in `text/crossovers.json` and `crossovers.db`. 
* `--min-link, -l`: The minimum link type to be used as a valid path, ranges from 1 to 3. Defaults to 3 if not specified. See [here](https://fictionalcrossover.fandom.com/wiki/Link#Types_of_links) for what each link type entails. 
* `--dfs, -d`: Experimental. Will use depth-first search instead of breadth-first search to find a path. Does not work properly, may or may not be removed in the future. 

#### `CrossoverAPI.py`

A simple FastAPI webserver that returns the path to a specified franchise.

* `/path/{franchise}`
  * Accepts only POST requests
  * Parameters:
    * `franchise`: (required) the name of the franchise to search for, as it appears in `text/franchises_filtered.txt` and `crossover.db`
    * `minLinkType`: (optional) The minimum link type that can be used as a valid path (see `-l` flag in `search.py`). Defaults to 3 if not specified. 
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
                }
            ]
        }
        ```
