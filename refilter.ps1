sqlite3 backend/crossovers.db "delete from game; delete from links;"
rm "text/filtered_franchises.txt"
python3 backend/gameextractor.py -fi