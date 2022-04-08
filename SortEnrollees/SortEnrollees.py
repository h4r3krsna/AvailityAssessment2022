from operator import itemgetter

_TEST_PATH = 'small_sample.csv'
if __name__ == "__main__":
    records = {}
    with open(_TEST_PATH, 'r') as csv_file:
        contents = [line.strip() for line in csv_file.readlines()]
        for line in contents[1:]:
            id, last_name, first_name, version, company = line.strip().split(',')

            if not company in records.keys():
                records[company] = {}

            if not id in records[company].keys():
                records[company][id] = (version, last_name, first_name)
            elif int(version) > int(records[company][id][0]):
                records[company][id] = (version, last_name, first_name)

    for company in records:
        company_records = records[company]
        sorted_records = sorted(
            [(id, company_records[id][0], company_records[id][1], company_records[id][2]) for id in
             company_records], key=itemgetter(2, 3))
        with open(f'{company}.csv', 'w') as output_file:
            output_file.write(f'ID, Version, LastName, FristName\n')
            for record in sorted_records:
                output_file.write(f"{','.join(record)}\n")
