# Speech 2 Text with summarization
1. OpenAI’s Whisper to transform speech to text
2. use IBM Watson AI technology to summarize and find key points.
3. Make an app with HuggingFace Gradio as the user interface, and you learn how to put this app online using IBM Code Engine.


## Preparing the environment
### Start setting up the environment by creating a Python virtual environment and installing the required libraries. Use the following commands in the terminal:
pip3 install virtualenv
virtualenv my_env # create a virtual environment my_env
source my_env/bin/activate # activate my_env

### Install the required liberies in the environment (this will take time).
### installing required libraries in my_env
pip install transformers==4.35.2 torch==2.1.1 gradio==4.17.0 langchain==0.0.343 ibm_watson_machine_learning==1.0.335 huggingface-hub==0.19.4

### Install ffmpeg so that you can work with audio files in Python.
sudo apt update
sudo apt install ffmpeg -y


1. Run download_audio.py
   python3 download_audio.py
   
2. Run simple_speech2text.py
   python3 simple_speech2text.py

3. Use Gradio to create interface for app

   

Ref: https://labs.cognitiveclass.ai
