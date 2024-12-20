sqlite3 crossovers.db "delete from game; delete from links;"
rm "text/filtered_franchises.txt"
python3 gameextractor.py -fi