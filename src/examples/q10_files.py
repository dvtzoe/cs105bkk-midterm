import csv, json

with open("scores.csv", "w", newline="") as f:  # write CSV
    csv.writer(f).writerows([["name", "data"], ["Yuuka", 100]])
with open("scores.csv", newline="") as f:  # read CSV
    rows = list(csv.DictReader(f))
with open("scores.json", "w") as f:  # write JSON
    json.dump(rows, f, indent=2)
with open("scores.json") as f:  # read JSON
    print(json.load(f))
