# Convert your favourite blog into audio in 13 lines of Python

Over the years, I have become more of a listener and less of a reader in the conventional sense. While services like Audible and Scribd provide quality audiobooks, ardent reader of longform journalism like myself have no such source. This prompted me to put together a script to generate audio versions for some of my favourite blogs. The code provided has not been perfected and could definitely be improved upon but it does illustrate the idea - scrape the relevant text and use text to speech to generate fairly good quality listening material.

Here I provide the code to extract links from an aggregator. For educational purpose, aldaily.com is used. Please do not misuse the code.

```python
# import libraries
from bs4 import BeautifulSoup
import requests, pyttsx3

# initialize text to speech engine and a counter variable
# pyttsx3 is used as it offers an offline conversion
engine = pyttsx3.init()
count = 0

# fetch content from url and parse html using BeautifulSoup
html = BeautifulSoup(requests.get('https://www.aldaily.com/').content, 
'html.parser')

# extract the first 10 aggregated links
# change the selection query for your site of choice
links = [a['href'] for a in html.select('div p a')][:10]

# loop through each link
for link in links:
    # fetch the article and parse the html content
    article = BeautifulSoup(requests.get(link).content, 'html.parser')

    # uses a quick and easy way to extract the content using 'p' tags
    # modify it appropriately or use a library to get clean text
    text = " ".join([p.getText() for p in article.select('p')])

    # filters out smaller or truncated articles using a character count of 5000 as threshold
    if len(text) > 5*1000:
        # save the extracted text as an audio file
        engine.save_to_file(text,f'article_{count}.mp3')
        engine.runAndWait()

        # increment the counter used as suffix
        count += 1


``` 
