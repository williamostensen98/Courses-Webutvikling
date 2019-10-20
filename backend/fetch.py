import numpy as np
import pandas as pd
import requests
import json


def fetch_courses(course_code_prefix, lower, upper):
    # content = json.dumps(JSONContent, indent = 4, sort_keys=True)
    # List of channels we want to access
    channels = []
    for num in range(lower, upper):
        channels.append(course_code_prefix + str(num))

    channels_list = []
    # For each channel, we access its information through its API
    for channel in channels:
        JSONContent = requests.get("https://grades.no/api/courses/" + channel).json()
        print("Channel: ", channel)
        try:
            channels_list.append([JSONContent['norwegian_name'], JSONContent['code'],
                                  JSONContent['credit'],
                                  JSONContent['taught_in_spring'], JSONContent['taught_in_autumn'],
                                  JSONContent['content'], JSONContent['learning_goal']])
        except KeyError:
            continue

    print("Finished fetching data.")
    dataset = pd.DataFrame(channels_list, columns=['norwegian_name', 'code', 'credit', 'taught_in_spring', 'taught_in_autumn', 'content', 'learning_goal'])
    dataset.sample(5, replace=True)
    path = "./" + course_code_prefix + "data.json"
    export_json = dataset.to_json(path, orient='records')
    print("Successfully saved data to file as",course_code_prefix.lower()+"data.json")


fetch_grades = lambda course_code: requests.get("https://grades.no/api/courses/" + course_code + "/grades").json()


def fetch_all_grades():
    grades = {}
    with open('./alldata.json', 'r') as json_file:
        data = json.load(json_file)
        for code in data:
            grades[code['code']] = (fetch_grades(code['code']))
            print(code['code'])
    with open('grades.json', 'w') as fp:
        json.dump(grades, fp)
    return grades




